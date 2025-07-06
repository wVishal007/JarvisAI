import express from 'express';
import {
  saveChat,
  getChatHistory,
  clearChatHistory
} from '../controllers/chat.controller.js';
import protect from '../middlewares/isauthenticated.js';

const router = express.Router();

// Public can save messages (optional userId)
router.post('/save', protect, saveChat);
router.get('/history', protect, getChatHistory);
router.delete('/clear', protect, clearChatHistory);

export default router;
