import React from 'react';
import { motion } from 'framer-motion';
import { User, Brain, Activity } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: string; // ✅ Changed from Date to string
}

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  // ✅ Handles ISO string timestamps correctly
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) return 'Invalid time';
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl flex items-start space-x-3 ${
          message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
        }`}
      >
        <motion.div 
          className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 relative ${
            message.type === 'user'
              ? 'bg-gradient-to-r from-blue-600 to-cyan-600'
              : 'bg-gradient-to-r from-purple-600 to-blue-600 animate-hologram'
          }`}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {message.type === 'user' ? (
            <User className="w-5 h-5 text-white" />
          ) : (
            <>
              <Brain className="w-5 h-5 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </>
          )}
        </motion.div>
        
        <motion.div 
          className={`rounded-2xl px-6 py-4 relative overflow-hidden ${
            message.type === 'user'
              ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/30 cyber-glow-blue'
              : 'glass-dark border border-purple-400/30 cyber-glow-purple'
          }`}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {message.type === 'assistant' && (
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-scan-line"></div>
          )}
          
          <p className="text-sm md:text-base text-white leading-relaxed">{message.content}</p>
          <div className="flex items-center justify-between mt-3">
            <p className={`text-xs opacity-70 ${
              message.type === 'user' ? 'text-blue-200' : 'text-gray-400'
            }`}>
              {formatTime(message.timestamp)}
            </p>
            {message.type === 'assistant' && (
              <div className="flex items-center space-x-1">
                <Activity className="w-2 h-2 text-green-400 animate-pulse" />
                <span className="text-xs text-green-400 terminal-text">VERIFIED</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MessageBubble;
