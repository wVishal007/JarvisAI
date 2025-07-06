import React, { useState } from 'react';
import { Cpu, Zap, Brain, Network, Atom, Layers, Code2, Sparkles } from 'lucide-react';

const AITechnology: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      id: 'neural-networks',
      title: 'Neural Networks',
      icon: Network,
      description: 'Deep learning architectures that mimic the human brain',
      details: [
        'Convolutional Neural Networks (CNNs)',
        'Recurrent Neural Networks (RNNs)',
        'Transformer Architecture',
        'Generative Adversarial Networks (GANs)'
      ],
      applications: ['Image Recognition', 'Natural Language Processing', 'Speech Synthesis', 'Autonomous Vehicles'],
      complexity: 95
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      icon: Brain,
      description: 'Algorithms that learn and improve from experience',
      details: [
        'Supervised Learning',
        'Unsupervised Learning',
        'Reinforcement Learning',
        'Transfer Learning'
      ],
      applications: ['Predictive Analytics', 'Recommendation Systems', 'Fraud Detection', 'Medical Diagnosis'],
      complexity: 88
    },
    {
      id: 'nlp',
      title: 'Natural Language Processing',
      icon: Code2,
      description: 'Understanding and generating human language',
      details: [
        'Tokenization & Parsing',
        'Sentiment Analysis',
        'Named Entity Recognition',
        'Language Generation'
      ],
      applications: ['Chatbots', 'Translation', 'Content Analysis', 'Voice Assistants'],
      complexity: 92
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision',
      icon: Layers,
      description: 'Teaching machines to see and interpret visual data',
      details: [
        'Object Detection',
        'Image Segmentation',
        'Facial Recognition',
        'Motion Tracking'
      ],
      applications: ['Medical Imaging', 'Security Systems', 'Quality Control', 'Augmented Reality'],
      complexity: 89
    }
  ];

  const futureTech = [
    {
      title: 'Quantum AI',
      description: 'Leveraging quantum computing for exponential AI acceleration',
      timeline: '2025-2030',
      impact: 98,
      icon: Atom
    },
    {
      title: 'Neuromorphic Computing',
      description: 'Brain-inspired computing architectures for efficient AI',
      timeline: '2024-2028',
      impact: 85,
      icon: Cpu
    },
    {
      title: 'Artificial General Intelligence',
      description: 'AI systems with human-level cognitive abilities',
      timeline: '2030-2040',
      impact: 100,
      icon: Sparkles
    },
    {
      title: 'Brain-Computer Interfaces',
      description: 'Direct neural connections between humans and AI',
      timeline: '2026-2035',
      impact: 92,
      icon: Zap
    }
  ];

  const architectures = [
    { name: 'GPT Architecture', layers: 96, parameters: '175B', efficiency: 94 },
    { name: 'BERT Model', layers: 24, parameters: '340M', efficiency: 89 },
    { name: 'ResNet', layers: 152, parameters: '60M', efficiency: 91 },
    { name: 'Transformer', layers: 6, parameters: '65M', efficiency: 96 }
  ];

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
              <Cpu className="w-10 h-10 text-purple-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            AI Technology
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the cutting-edge technologies and architectures that power modern artificial intelligence
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center mb-8 bg-black/30 backdrop-blur-lg rounded-xl p-2 border border-white/10">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tech.title}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {technologies[activeTab].title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {technologies[activeTab].description}
                </p>
                
                <h4 className="text-lg font-semibold text-white mb-3">Core Components</h4>
                <div className="space-y-2 mb-6">
                  {technologies[activeTab].details.map((detail, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      {detail}
                    </div>
                  ))}
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">Complexity Level</span>
                    <span className="text-purple-400 font-bold">{technologies[activeTab].complexity}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-cyan-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${technologies[activeTab].complexity}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Real-World Applications</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {technologies[activeTab].applications.map((app, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                      <div className="text-white font-medium">{app}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Architectures */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Layers className="w-8 h-8 text-cyan-400 mr-3" />
            Popular AI Architectures
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {architectures.map((arch, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">{arch.name}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Layers</span>
                    <span className="text-cyan-400 font-bold">{arch.layers}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Parameters</span>
                    <span className="text-green-400 font-bold">{arch.parameters}</span>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400">Efficiency</span>
                      <span className="text-purple-400 font-bold">{arch.efficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${arch.efficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Technologies */}
        <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Sparkles className="w-8 h-8 text-yellow-400 mr-3" />
            Future of AI Technology
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureTech.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div key={index} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{tech.title}</h3>
                      <p className="text-gray-400 mb-3">{tech.description}</p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Timeline: {tech.timeline}</span>
                        <span className="text-yellow-400 font-semibold">Impact: {tech.impact}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                        <div 
                          className="bg-gradient-to-r from-yellow-500 to-orange-500 h-1 rounded-full transition-all duration-1000"
                          style={{ width: `${tech.impact}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITechnology;