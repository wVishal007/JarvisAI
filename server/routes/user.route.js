import express from 'express';
import { registerUser, loginUser, getUserProfile, logoutUser } from '../controllers/user.controller.js';
import protect from '../middlewares/isauthenticated.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
router.get('/logout',  logoutUser);

export default router;
