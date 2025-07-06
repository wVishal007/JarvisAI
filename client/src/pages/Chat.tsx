// src/pages/Chat.tsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send, Loader2, Mic, MicOff, Volume2, VolumeX, Zap
} from 'lucide-react';
import MessageBubble from '../components/MessageBubble';
import TypingIndicator from '../components/TypingIndicator';
import { useSpeech } from '../contexts/SpeechContext';
import useFetchChatHistory from '../../hooks/useFetchChatHistory';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { addMessage } from '../redux/chatSlice';

const Chat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state: RootState) => state.chat.messages) || [];

  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);
  const [showSavePrompt, setShowSavePrompt] = useState(!localStorage.getItem("token"));
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useFetchChatHistory(); // ✅ Fetch chat history on mount

  const {
    startListening,
    stopListening,
    isListening,
    transcript,
    setTranscript,
    setOnSpeechEnd
  } = useSpeech();

  const API_BASE = import.meta.env.VITE_MAIN_API ;

  useEffect(() => {
    checkConnection();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (transcript) {
      setInputMessage((prev) => prev.trim() + ' ' + transcript);
    }
  }, [transcript]);

  useEffect(() => {
  setOnSpeechEnd(() => () => {
    if (transcript.trim()) {
      sendMessage(new Event("submit") as any);
    }
  });
}, [transcript]);


  const speakText = (text: string) => {
    if (!isVoiceEnabled || !('speechSynthesis' in window)) return;

    try {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.8;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find((v) =>
        v.name.includes('Google') || v.name.includes('Samantha')
      );
      if (preferredVoice) utterance.voice = preferredVoice;

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.error('System TTS failed:', err);
      setIsSpeaking(false);
    }
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const checkConnection = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/health`);
      setIsConnected(res.ok);
    } catch {
      setIsConnected(false);
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      type: 'user' as const,
      content: inputMessage.trim(),
      timestamp: new Date().toISOString()
    };

    dispatch(addMessage(userMessage));
    setInputMessage('');
    setTranscript('');
    setIsLoading(true);

    const token = localStorage.getItem('token');
    const conversationHistory = [...messages, userMessage].map((m) => ({
      role: m.type === 'user' ? 'user' : 'assistant',
      content: m.content
    }));

    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        body: JSON.stringify({
          message: userMessage.content,
          conversationHistory
        })
      });

      const data = await res.json();
      if (!res.ok || !data.response) throw new Error(data.error || 'API Error');

      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant' as const,
        content: data.response,
        timestamp: new Date().toISOString()
      };

      dispatch(addMessage(assistantMessage));
      speakText(data.response);
    } catch (err: any) {
      console.error(err);
      dispatch(addMessage({
        id: (Date.now() + 2).toString(),
        type: 'assistant',
        content: '⚠️ Something went wrong. Please try again.',
        timestamp: new Date().toISOString()
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const toggleVoiceInput = () => {
    if (isListening) {
      stopListening();
    } else {
      setTranscript('');
      startListening();
    }
  };

  const toggleVoice = () => {
    setIsVoiceEnabled((prev) => !prev);
    if (isSpeaking) stopSpeaking();
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white relative overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 bg-slate-800/50 backdrop-blur border-b border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-2 text-blue-400">
          <Zap className="animate-pulse" />
          <span className="font-bold text-lg tracking-wide">JARVIS AI</span>
        </div>
        <div className="text-xs text-green-400 font-mono">{isConnected ? 'ONLINE' : 'OFFLINE'}</div>
      </div>

      {/* Prompt to Login/Signup */}
      {showSavePrompt && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mt-3 p-4 bg-slate-800/80 border border-blue-500 rounded-xl text-sm text-blue-300 flex justify-between items-center"
        >
          <div>
            <strong className="text-white">Save your chats?</strong> Login or Sign up to never lose your history.
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => (window.location.href = "/login")}
              className="text-blue-400 hover:text-white underline text-xs"
            >
              Login
            </button>
            <button
              onClick={() => (window.location.href = "/signup")}
              className="text-blue-400 hover:text-white underline text-xs"
            >
              Sign up
            </button>
            <button
              onClick={() => setShowSavePrompt(false)}
              className="text-slate-400 hover:text-red-400 text-xs"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        <AnimatePresence>
          {messages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-slate-500 mt-20 animate-pulse"
            >
              <p className="text-xl">💬 Start the conversation with JARVIS</p>
              <p className="text-sm mt-1">Type or speak to begin</p>
            </motion.div>
          )}

          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <MessageBubble message={msg} />
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <TypingIndicator />
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form
        onSubmit={sendMessage}
        className="sticky bottom-0 left-0 w-full px-4 py-4 bg-slate-900/80 backdrop-blur-md border-t border-slate-700 flex items-center gap-3"
      >
        <input
          type="text"
          className="flex-1 p-3 rounded-xl bg-slate-800 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
          placeholder="Ask me anything..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button
          type="submit"
          disabled={isLoading || !isConnected}
          className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-xl"
        >
          {isLoading ? <Loader2 className="animate-spin" /> : <Send />}
        </button>
        <button type="button" onClick={toggleVoiceInput} className="text-white hover:text-red-400">
          {isListening ? <Mic className="animate-pulse" /> : <MicOff />}
        </button>
        <button type="button" onClick={toggleVoice} className="text-white hover:text-yellow-300">
          {isVoiceEnabled ? <Volume2 /> : <VolumeX />}
        </button>
      </form>
    </div>
  );
};

export default Chat;
