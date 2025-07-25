import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import jwt from 'jsonwebtoken';
import { Mistral } from '@mistralai/mistralai';
import session from 'express-session';
import passport from 'passport';
import './utils/passport.js'

import connectDB from './utils/connectDB.js';
import userRoutes from './routes/user.route.js';
import chatRoutes from './routes/chat.route.js';
import Chat from './models/chat.model.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// ✅ Connect MongoDB
connectDB();

// ✅ Mistral client
const client = new Mistral({ apiKey: process.env.MIST_API_KEY });

// ✅ CORS whitelist
const allowedOrigins = [
  'http://localhost:5173',
  'https://jarvisai-oktt.onrender.com',
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // Allow Postman/cURL
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('CORS policy violation: Origin not allowed'));
  },
  credentials: true,
}));

app.use(express.json());

// ✅ Serve frontend from client/dist
app.use(express.static(path.join(__dirname, '../client/dist')));

// ✅ Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Jarvis backend is running' });
});

// ✅ Chat API
app.post('/api/chat', async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;
    let userId = null;

    const authHeader = req.headers.authorization;
    if (authHeader?.startsWith('Bearer ')) {
      try {
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.id;
      } catch (err) {
        console.warn('⚠️ Invalid token. Proceeding as guest.');
      }
    }

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ success: false, error: 'Message is required' });
    }

    const messages = [
      { role: 'system', content: "You are JARVIS, an advanced AI assistant inspired by Tony Stark." },
      ...conversationHistory,
      { role: 'user', content: message },
    ];

    const chatResponse = await client.chat.complete({
      model: 'mistral-small',
      messages,
      temperature: 0.7,
      max_tokens: 1000,
    });

    const reply = chatResponse.choices[0]?.message?.content;
    if (!reply) throw new Error('Empty response from model');

    if (userId) {
      await Chat.create({ userId, role: 'user', content: message });
      await Chat.create({ userId, role: 'assistant', content: reply });
    }

    res.json({
      success: true,
      response: reply,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error('Chat API Error:', error.message);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'your_secret',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// ✅ API Routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/chat', chatRoutes);

// ✅ Frontend Fallback Route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Jarvis backend running on port ${PORT}`);
});
