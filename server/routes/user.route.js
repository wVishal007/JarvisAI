import express from 'express';
import { registerUser, loginUser, getUserProfile, logoutUser } from '../controllers/user.controller.js';
import protect from '../middlewares/isauthenticated.js';
import passport from 'passport';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
router.get('/logout',  logoutUser);
router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    session: true,
  }),
  (req, res) => {
    // 🔐 Redirect or send token
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.redirect(`http://localhost:5173/login-success?token=${token}`);
  }
);

export default router;
