import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Mic, Volume2, Sparkles, Zap, Brain, Cpu, Activity, Shield, Globe } from 'lucide-react';

const Home: React.FC = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);

  const stats = [
    { label: 'Uptime', value: 99.9, suffix: '%', color: 'blue' },
    { label: 'Response Time', value: 87, suffix: 'ms', color: 'purple' },
    { label: 'Availability', value: 24, suffix: '/7', color: 'cyan' },
    { label: 'AI Models', value: 15, suffix: '+', color: 'green' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % stats.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    stats.forEach((stat, index) => {
      let current = 0;
      const target = stat.value;
      const increment = target / 50;
      
      const animation = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(animation);
        }
        setAnimatedValues(prev => {
          const newValues = [...prev];
          newValues[index] = Math.floor(current);
          return newValues;
        });
      }, 30);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Hexagon pattern */}
        <div className="absolute inset-0 hexagon-pattern opacity-30"></div>
        
        {/* Neural network visualization */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`neural-${i}`}
            className="neural-node"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}

        {/* Quantum effect overlay */}
        <div className="absolute inset-0 quantum-effect opacity-20"></div>

        {/* Floating data streams */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`stream-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-data-stream"
            style={{
              top: `${Math.random() * 100}%`,
              width: '200px',
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12 relative">
            {/* Main JARVIS Logo */}
            <div className="w-40 h-40 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                <div className="relative">
                  <Zap className="w-20 h-20 text-blue-400 animate-hologram" />
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-ping"></div>
                </div>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full"></div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full"></div>
                <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-8 animate-fade-in">
              JARVIS
            </h1>
            <div className="relative mb-6">
              <p className="text-2xl md:text-3xl text-gray-300 mb-4 animate-fade-in-up">
                Your Advanced AI Assistant
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            </div>
            <p className="text-gray-400 max-w-3xl mx-auto mb-12 text-lg leading-relaxed animate-fade-in-up">
              Experience the future of AI interaction with voice recognition, natural language processing, 
              and intelligent responses. Just like Tony Stark's AI, but accessible to everyone.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              to="/chat"
              className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center space-x-3">
                <MessageSquare className="w-6 h-6" />
                <span className="text-lg">Start Chatting</span>
              </div>
            </Link>
            <Link
              to="/features"
              className="group px-10 py-5 bg-transparent border-2 border-blue-400 text-blue-400 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center space-x-3">
                <Sparkles className="w-6 h-6" />
                <span className="text-lg">Explore Features</span>
              </div>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="futuristic-card p-8 group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Mic className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Voice Input</h3>
              <p className="text-gray-400 leading-relaxed">Speak naturally and JARVIS will understand your commands and questions with advanced speech recognition.</p>
              <div className="mt-4 flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-blue-400 terminal-text">ACTIVE</span>
              </div>
            </div>

            <div className="futuristic-card p-8 group">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Volume2 className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Voice Output</h3>
              <p className="text-gray-400 leading-relaxed">Hear JARVIS respond with natural speech synthesis and human-like intonation.</p>
              <div className="mt-4 flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-purple-400 terminal-text">ENABLED</span>
              </div>
            </div>

            <div className="futuristic-card p-8 group">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">AI Intelligence</h3>
              <p className="text-gray-400 leading-relaxed">Powered by advanced language models for intelligent conversations and problem-solving.</p>
              <div className="mt-4 flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-cyan-400 terminal-text">ONLINE</span>
              </div>
            </div>
          </div>

          {/* Additional Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-black/20 rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300">
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">Secure</h4>
              <p className="text-gray-400 text-sm">End-to-end encryption</p>
            </div>
            
            <div className="text-center p-6 bg-black/20 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300">
              <Cpu className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">Fast</h4>
              <p className="text-gray-400 text-sm">Lightning responses</p>
            </div>
            
            <div className="text-center p-6 bg-black/20 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <Globe className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">Global</h4>
              <p className="text-gray-400 text-sm">Worldwide access</p>
            </div>
            
            <div className="text-center p-6 bg-black/20 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
              <Activity className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">Live</h4>
              <p className="text-gray-400 text-sm">Real-time updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stats Section */}
      <section className="py-16 glass-dark border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">System Performance</h2>
            <p className="text-gray-400">Real-time metrics from our AI infrastructure</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`relative mb-4 ${currentStat === index ? 'animate-pulse-glow' : ''}`}>
                  <div className={`text-4xl md:text-5xl font-bold mb-2 ${
                    stat.color === 'blue' ? 'text-blue-400' :
                    stat.color === 'purple' ? 'text-purple-400' :
                    stat.color === 'cyan' ? 'text-cyan-400' :
                    'text-green-400'
                  }`}>
                    {currentStat === index ? animatedValues[index] : stat.value}
                    <span className="text-2xl">{stat.suffix}</span>
                  </div>
                  {currentStat === index && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan-line"></div>
                  )}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
                <div className="mt-2 flex items-center justify-center space-x-1">
                  <div className={`w-1 h-1 rounded-full animate-pulse ${
                    stat.color === 'blue' ? 'bg-blue-400' :
                    stat.color === 'purple' ? 'bg-purple-400' :
                    stat.color === 'cyan' ? 'bg-cyan-400' :
                    'bg-green-400'
                  }`}></div>
                  <span className="text-xs text-gray-500 terminal-text">LIVE</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;