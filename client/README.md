# 🤖 JARVIS - Advanced AI Assistant

A futuristic AI chatbot inspired by Tony Stark's JARVIS, featuring voice recognition, text-to-speech, and a stunning cyberpunk UI.

## ✨ Features

- 🎤 **Voice Recognition** - Speak naturally to JARVIS
- 🔊 **Text-to-Speech** - Hear JARVIS respond with natural voice
- 🧠 **AI Intelligence** - Powered by Mistral AI for intelligent conversations
- 🎨 **Futuristic UI** - Cyberpunk-inspired design with animations
- 📱 **Responsive Design** - Works on all devices
- 🔒 **Secure** - End-to-end encryption and privacy protection

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Mistral AI API key

### Frontend Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   ```
   http://localhost:5173
   ```

### Backend Setup

1. **Navigate to server directory**
   ```bash
   cd server
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```

4. **Add your Mistral AI API key to `.env`**
   ```env
   MIST_API_KEY=your_mistral_api_key_here
   ```

5. **Start the backend server**
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
jarvis-ai/
├── src/                    # Frontend React application
│   ├── components/         # Reusable UI components
│   │   ├── Navigation.tsx  # Main navigation
│   │   ├── MessageBubble.tsx # Chat message component
│   │   └── TypingIndicator.tsx # Loading animation
│   ├── contexts/          # React contexts
│   │   └── SpeechContext.tsx # Speech recognition & synthesis
│   ├── pages/             # Application pages
│   │   ├── Home.tsx       # Landing page
│   │   ├── Chat.tsx       # Main chat interface
│   │   ├── About.tsx      # About page
│   │   ├── Features.tsx   # Features showcase
│   │   ├── AIInsights.tsx # AI analytics
│   │   └── AITechnology.tsx # Technology overview
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # React entry point
│   └── index.css          # Global styles & animations
├── server/                # Backend Express server
│   ├── server.js          # Main server file
│   ├── package.json       # Backend dependencies
│   └── .env.example       # Environment variables template
├── public/                # Static assets
├── package.json           # Frontend dependencies
└── README.md             # This file
```

## 🎨 UI Features

### Futuristic Design Elements
- **Matrix Rain Effect** - Animated background characters
- **Neural Network Visualization** - Pulsing nodes and connections
- **Holographic Effects** - Shimmering avatars and logos
- **Scanning Lines** - Moving light effects across components
- **Quantum Particles** - Floating animated elements
- **Cyberpunk Glow** - Neon lighting effects

### Interactive Components
- **Glass Morphism** - Translucent panels with blur effects
- **Hover Animations** - Scale and glow effects on interaction
- **Typing Indicators** - Bouncing dots while AI processes
- **Voice Activity** - Visual feedback for speech recognition
- **Status Indicators** - Real-time system status displays

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the server directory:

```env
# Required: Mistral AI API Key
MIST_API_KEY=your_mistral_api_key_here

# Optional: Server Configuration
PORT=3001
NODE_ENV=development
```

### API Endpoints

- `GET /api/health` - Health check endpoint
- `POST /api/chat` - Chat with JARVIS

### Frontend Environment

Create a `.env` file in the root directory (optional):

```env
VITE_MAIN_API=http://localhost:3001
```

## 🎯 Usage

### Basic Chat
1. Open the application
2. Navigate to the Chat page
3. Type your message or use voice input
4. JARVIS will respond with text and speech

### Voice Features
- **Voice Input**: Click the microphone icon to speak
- **Voice Output**: Toggle the speaker icon to enable/disable speech
- **Voice Commands**: Speak naturally - JARVIS understands context

### Navigation
- **Home**: Landing page with overview
- **Chat**: Main conversation interface
- **About**: Information about JARVIS
- **Features**: Detailed feature showcase
- **AI Insights**: Analytics and metrics
- **AI Technology**: Technical deep dive

## 🛠️ Development

### Available Scripts

**Frontend:**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

**Backend:**
```bash
npm start            # Start production server
npm run dev          # Start development server with auto-reload
```

### Tech Stack

**Frontend:**
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons
- React Router for navigation

**Backend:**
- Node.js with Express
- Mistral AI for language processing
- CORS for cross-origin requests
- dotenv for environment management

## 🔒 Security Features

- **CORS Protection** - Whitelist allowed origins
- **Input Validation** - Sanitize user inputs
- **Rate Limiting** - Prevent API abuse
- **Environment Variables** - Secure API key storage
- **Error Handling** - Graceful error responses

## 📱 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

**Speech Features Require:**
- Web Speech API support
- Microphone permissions
- HTTPS in production

## 🚀 Deployment

### Frontend (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Set environment variables in hosting platform

### Backend (Railway/Render/Heroku)
1. Push the `server` directory
2. Set `MIST_API_KEY` environment variable
3. Ensure `PORT` is configured correctly

### Full Stack (Single Server)
1. Build frontend: `npm run build`
2. Copy `dist` to `server/dist`
3. Deploy server with static file serving

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by Marvel's JARVIS AI assistant
- Powered by Mistral AI
- UI inspired by cyberpunk and sci-fi aesthetics
- Built with modern web technologies

## 📞 Support

For support, please open an issue on GitHub or contact the development team.

---

**Made with ❤️ by the JARVIS Team**