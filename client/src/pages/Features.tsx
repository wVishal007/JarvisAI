import React from 'react';
import { Mic, Volume2, MessageSquare, Zap, Brain, Shield, Sparkles, Globe, Code, Target } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Natural Conversations',
      description: 'Engage in fluid, contextual conversations that feel natural and intuitive.',
      color: 'blue',
      details: ['Context awareness', 'Multi-turn dialogue', 'Conversation memory', 'Intelligent responses']
    },
    {
      icon: Mic,
      title: 'Voice Recognition',
      description: 'Speak naturally and JARVIS will understand your voice commands perfectly.',
      color: 'purple',
      details: ['Real-time speech recognition', 'Multiple language support', 'Noise cancellation', 'Voice commands']
    },
    {
      icon: Volume2,
      title: 'Text-to-Speech',
      description: 'Listen to JARVIS respond with natural, human-like speech synthesis.',
      color: 'cyan',
      details: ['Natural voice synthesis', 'Multiple voice options', 'Adjustable speed', 'Emotional tone']
    },
    {
      icon: Brain,
      title: 'Advanced AI',
      description: 'Powered by cutting-edge language models for intelligent and helpful responses.',
      color: 'green',
      details: ['Deep learning', 'Contextual understanding', 'Knowledge base', 'Continuous learning']
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Experience near-instantaneous responses with optimized performance.',
      color: 'yellow',
      details: ['Sub-second responses', 'Optimized infrastructure', 'Efficient processing', 'Real-time updates']
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Your conversations are secure and private with enterprise-grade protection.',
      color: 'red',
      details: ['End-to-end encryption', 'No data storage', 'Privacy compliance', 'Secure transmission']
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'text-blue-400 bg-blue-500/20 border-blue-400/30',
      purple: 'text-purple-400 bg-purple-500/20 border-purple-400/30',
      cyan: 'text-cyan-400 bg-cyan-500/20 border-cyan-400/30',
      green: 'text-green-400 bg-green-500/20 border-green-400/30',
      yellow: 'text-yellow-400 bg-yellow-500/20 border-yellow-400/30',
      red: 'text-red-400 bg-red-500/20 border-red-400/30'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the advanced capabilities that make JARVIS your ultimate AI assistant
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = getColorClasses(feature.color);
            
            return (
              <div
                key={index}
                className={`group bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-${feature.color}-400/30 transition-all duration-300 transform hover:scale-105 cursor-pointer`}
              >
                <div className={`w-12 h-12 ${colorClasses.split(' ')[1]} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${colorClasses.split(' ')[0]}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center text-sm text-gray-500">
                      <div className={`w-1.5 h-1.5 ${colorClasses.split(' ')[1]} rounded-full mr-2`}></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Advanced Features Section */}
        <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Target className="w-8 h-8 text-blue-400 mr-3" />
            Advanced Capabilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">AI Intelligence</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                  <span className="text-gray-300">Natural Language Processing</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                  <span className="text-gray-300">Context Understanding</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-400 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                  <span className="text-gray-300">Response Accuracy</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-cyan-400 h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Performance Metrics</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                  <span className="text-gray-300">Response Time</span>
                  <span className="text-green-400 font-semibold">&lt; 100ms</span>
                </div>
                <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                  <span className="text-gray-300">Uptime</span>
                  <span className="text-blue-400 font-semibold">99.9%</span>
                </div>
                <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                  <span className="text-gray-300">Concurrent Users</span>
                  <span className="text-purple-400 font-semibold">1M+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Section */}
        <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Globe className="w-8 h-8 text-purple-400 mr-3" />
            Platform Integration
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Web Platform</h3>
              <p className="text-gray-400 text-sm">Access JARVIS from any web browser with full functionality</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">API Access</h3>
              <p className="text-gray-400 text-sm">Integrate JARVIS into your applications with our RESTful API</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Real-time</h3>
              <p className="text-gray-400 text-sm">Experience instant responses with WebSocket connections</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;