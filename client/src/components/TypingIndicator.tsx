import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const TypingIndicator: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex justify-start"
    >
      <div className="flex items-start space-x-3">
        <motion.div 
          className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center animate-hologram"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Brain className="w-5 h-5 text-white" />
        </motion.div>
        <div className="glass-dark border border-purple-400/30 rounded-2xl px-6 py-4 cyber-glow-purple">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              <motion.div 
                className="w-2 h-2 bg-purple-400 rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
              />
              <motion.div 
                className="w-2 h-2 bg-blue-400 rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }}
              />
              <motion.div 
                className="w-2 h-2 bg-cyan-400 rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
              />
            </div>
            <span className="text-gray-400 terminal-text">JARVIS is processing...</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TypingIndicator;