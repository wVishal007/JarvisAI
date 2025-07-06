import React, { useState, useEffect } from 'react';
import { Brain, TrendingUp, Zap, Activity, Cpu, Database, Globe, Users, BarChart3, PieChart } from 'lucide-react';

const AIInsights: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const [animatedValue, setAnimatedValue] = useState(0);

  const metrics = [
    { label: 'AI Models Trained', value: 15420, color: 'blue', icon: Brain },
    { label: 'Conversations Processed', value: 2847392, color: 'purple', icon: Activity },
    { label: 'Response Accuracy', value: 98.7, color: 'green', icon: TrendingUp, suffix: '%' },
    { label: 'Languages Supported', value: 127, color: 'cyan', icon: Globe },
    { label: 'Active Users', value: 89432, color: 'yellow', icon: Users },
    { label: 'Processing Speed', value: 0.087, color: 'red', icon: Zap, suffix: 's' }
  ];

  const industryData = [
    { name: 'Healthcare', usage: 85, growth: 23, color: 'bg-blue-500' },
    { name: 'Finance', usage: 92, growth: 31, color: 'bg-purple-500' },
    { name: 'Education', usage: 78, growth: 45, color: 'bg-green-500' },
    { name: 'Technology', usage: 96, growth: 18, color: 'bg-cyan-500' },
    { name: 'Retail', usage: 71, growth: 38, color: 'bg-yellow-500' },
    { name: 'Manufacturing', usage: 64, growth: 52, color: 'bg-red-500' }
  ];

  const trendData = [
    { year: '2020', aiAdoption: 32, investment: 45 },
    { year: '2021', aiAdoption: 48, investment: 67 },
    { year: '2022', aiAdoption: 65, investment: 89 },
    { year: '2023', aiAdoption: 78, investment: 112 },
    { year: '2024', aiAdoption: 89, investment: 145 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % metrics.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const targetValue = metrics[activeMetric].value;
    let current = 0;
    const increment = targetValue / 50;
    
    const animation = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        current = targetValue;
        clearInterval(animation);
      }
      setAnimatedValue(Math.floor(current));
    }, 30);

    return () => clearInterval(animation);
  }, [activeMetric]);

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'text-blue-400 bg-blue-500/20 border-blue-400/30',
      purple: 'text-purple-400 bg-purple-500/20 border-purple-400/30',
      green: 'text-green-400 bg-green-500/20 border-green-400/30',
      cyan: 'text-cyan-400 bg-cyan-500/20 border-cyan-400/30',
      yellow: 'text-yellow-400 bg-yellow-500/20 border-yellow-400/30',
      red: 'text-red-400 bg-red-500/20 border-red-400/30'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
              <BarChart3 className="w-10 h-10 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            AI Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dive deep into the world of artificial intelligence with real-time analytics and industry trends
          </p>
        </div>

        {/* Live Metrics Dashboard */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Activity className="w-8 h-8 text-blue-400 mr-3" />
            Live Metrics Dashboard
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              const colorClasses = getColorClasses(metric.color);
              const isActive = index === activeMetric;
              
              return (
                <div
                  key={index}
                  className={`bg-black/30 backdrop-blur-lg rounded-xl p-6 border transition-all duration-500 transform ${
                    isActive 
                      ? `border-${metric.color}-400/50 scale-105` 
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className={`w-12 h-12 ${colorClasses.split(' ')[1]} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${colorClasses.split(' ')[0]}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{metric.label}</h3>
                  <div className="text-3xl font-bold text-white">
                    {isActive ? animatedValue.toLocaleString() : metric.value.toLocaleString()}
                    <span className={`text-lg ${colorClasses.split(' ')[0]}`}>
                      {metric.suffix || ''}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Industry Adoption */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <PieChart className="w-8 h-8 text-purple-400 mr-3" />
            Industry AI Adoption
          </h2>
          
          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryData.map((industry, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{industry.name}</h3>
                    <span className="text-2xl font-bold text-white">{industry.usage}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                    <div 
                      className={`h-3 rounded-full ${industry.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${industry.usage}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Growth Rate</span>
                    <span className="text-green-400 font-semibold">+{industry.growth}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Trends */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
            AI Market Trends
          </h2>
          
          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Adoption Trend */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">AI Adoption Rate</h3>
                <div className="space-y-4">
                  {trendData.map((data, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <span className="text-gray-400 w-12">{data.year}</span>
                      <div className="flex-1 bg-gray-700 rounded-full h-4">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-4 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${data.aiAdoption}%` }}
                        ></div>
                      </div>
                      <span className="text-white font-semibold w-12">{data.aiAdoption}%</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Investment Trend */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Investment Growth (Billions)</h3>
                <div className="space-y-4">
                  {trendData.map((data, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <span className="text-gray-400 w-12">{data.year}</span>
                      <div className="flex-1 bg-gray-700 rounded-full h-4">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${(data.investment / 150) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-white font-semibold w-12">${data.investment}B</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Capabilities Matrix */}
        <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Cpu className="w-8 h-8 text-cyan-400 mr-3" />
            AI Capabilities Matrix
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Natural Language Processing', level: 94, color: 'blue' },
              { name: 'Computer Vision', level: 89, color: 'purple' },
              { name: 'Machine Learning', level: 97, color: 'green' },
              { name: 'Deep Learning', level: 92, color: 'cyan' },
              { name: 'Robotics', level: 76, color: 'yellow' },
              { name: 'Predictive Analytics', level: 88, color: 'red' },
              { name: 'Speech Recognition', level: 91, color: 'pink' },
              { name: 'Decision Making', level: 85, color: 'orange' }
            ].map((capability, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-gray-700"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      className={`text-${capability.color}-500`}
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={`${capability.level}, 100`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">{capability.level}%</span>
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-white">{capability.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;