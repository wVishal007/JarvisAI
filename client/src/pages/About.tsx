import React from 'react';
import { Brain, Zap, Target, Shield, Sparkles, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
              <Brain className="w-10 h-10 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            About JARVIS
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet your advanced AI assistant, inspired by the future of human-computer interaction
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Sparkles className="w-8 h-8 text-purple-400 mr-3" />
              The Vision
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              JARVIS represents the pinnacle of AI assistance, designed to bridge the gap between human intention 
              and digital execution. Named after Tony Stark's legendary AI companion, our JARVIS embodies the 
              same principles of intelligence, efficiency, and seamless interaction.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We believe that AI should be intuitive, responsive, and genuinely helpful. That's why JARVIS 
              combines cutting-edge natural language processing with voice recognition and synthesis to create 
              a truly conversational experience.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Advanced AI</h3>
            <p className="text-gray-400">
              Powered by state-of-the-art language models, JARVIS understands context and nuance in conversations.
            </p>
          </div>

          <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
            <p className="text-gray-400">
              Experience near-instantaneous responses with our optimized infrastructure and efficient processing.
            </p>
          </div>

          <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Precision</h3>
            <p className="text-gray-400">
              Every response is carefully crafted to be accurate, relevant, and helpful for your specific needs.
            </p>
          </div>

          <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Privacy First</h3>
            <p className="text-gray-400">
              Your conversations are secure and private. We prioritize your data protection above all else.
            </p>
          </div>

          <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Innovative</h3>
            <p className="text-gray-400">
              Constantly evolving with the latest AI advancements to provide you with cutting-edge capabilities.
            </p>
          </div>

          <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-red-400/30 transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Open Source</h3>
            <p className="text-gray-400">
              Built with transparency in mind, allowing developers to understand and contribute to the technology.
            </p>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Code className="w-8 h-8 text-blue-400 mr-3" />
            Technical Specifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Core Technologies</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Mistral AI Language Model
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Web Speech API Integration
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Real-time Processing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Responsive Design
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Performance Metrics</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex justify-between">
                  <span>Response Time</span>
                  <span className="text-blue-400">&lt; 100ms</span>
                </li>
                <li className="flex justify-between">
                  <span>Accuracy Rate</span>
                  <span className="text-purple-400">98.5%</span>
                </li>
                <li className="flex justify-between">
                  <span>Uptime</span>
                  <span className="text-cyan-400">99.9%</span>
                </li>
                <li className="flex justify-between">
                  <span>Supported Languages</span>
                  <span className="text-green-400">50+</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;