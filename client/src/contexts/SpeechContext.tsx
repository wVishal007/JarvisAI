// ✅ Updated SpeechContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback
} from 'react';

interface SpeechContextType {
  isListening: boolean;
  transcript: string;
  isSupported: boolean;
  startListening: () => void;
  stopListening: () => void;
  speak: (text: string) => void;
  isSpeaking: boolean;
  stopSpeaking: () => void;
  isVoiceEnabled: boolean;
  toggleVoice: () => void;
  setTranscript: React.Dispatch<React.SetStateAction<string>>;
  setOnSpeechEnd?: React.Dispatch<React.SetStateAction<(() => void) | null>>;
}

const SpeechContext = createContext<SpeechContextType | undefined>(undefined);

export const useSpeech = () => {
  const context = useContext(SpeechContext);
  if (!context) {
    throw new Error('useSpeech must be used within a SpeechProvider');
  }
  return context;
};

interface SpeechProviderProps {
  children: React.ReactNode;
}

export const SpeechProvider: React.FC<SpeechProviderProps> = ({ children }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
  const [onSpeechEnd, setOnSpeechEnd] = useState<(() => void) | null>(null);

  const isSupported = typeof window !== 'undefined' &&
    ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window);

  useEffect(() => {
    if (!isSupported) return;

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.continuous = false;
    recognitionInstance.interimResults = false;
    recognitionInstance.lang = 'en-US';

    recognitionInstance.onstart = () => setIsListening(true);
    recognitionInstance.onend = () => {
      setIsListening(false);
      if (onSpeechEnd) onSpeechEnd(); // ✅ callback triggered
    };

    recognitionInstance.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };

    recognitionInstance.onresult = (event: SpeechRecognitionEvent) => {
      const result = event.results[0][0].transcript;
      // console.log('[🎤 Result]:', result);
      setTranscript(result);
    };

    setRecognition(recognitionInstance);

    return () => {
      recognitionInstance.stop();
    };
  }, [isSupported, onSpeechEnd]);

  const startListening = useCallback(() => {
    if (recognition && !isListening) {
      setTranscript('');
      recognition.start();
    }
  }, [recognition, isListening]);

  const stopListening = useCallback(() => {
    if (recognition && isListening) {
      recognition.stop();
    }
  }, [recognition, isListening]);

  const speak = useCallback((text: string) => {
    if (!isVoiceEnabled || !text || !('speechSynthesis' in window)) return;

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
  }, [isVoiceEnabled]);

  const stopSpeaking = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);

  const toggleVoice = useCallback(() => {
    setIsVoiceEnabled((prev) => !prev);
    if (isSpeaking) stopSpeaking();
  }, [isSpeaking, stopSpeaking]);

  const value: SpeechContextType = {
    isListening,
    transcript,
    isSupported,
    startListening,
    stopListening,
    speak,
    isSpeaking,
    stopSpeaking,
    isVoiceEnabled,
    toggleVoice,
    setTranscript,
    setOnSpeechEnd
  };

  return (
    <SpeechContext.Provider value={value}>
      {children}
    </SpeechContext.Provider>
  );
};
