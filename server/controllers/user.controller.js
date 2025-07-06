import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs"

// Token generator
const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });
};

// ✅ Register User
export const registerUser = async (req, res) => {
  try {
    const { username, email, preferences,password } = req.body;

    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ success: false, message: 'Username already taken' });
    }
    const hashedpassword =await bcrypt.hash(password,7)
    const user = await User.create({ username, email, preferences,password:hashedpassword });

    return res.status(201).json({
      success: true,
      _id: user._id,
      username: user.username,
      email: user.email,
      preferences: user.preferences,
      token: generateToken(user)
    });
  } catch (error) {
    console.error('❌ Registration error:', error.message);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// ✅ Login User
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'User not registered' });
    }

    // ✅ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const userDetails = {
       _id: user._id,
      username: user.username,
      email: user.email,
      preferences: user.preferences,
    }

    // ✅ Send user info and JWT token
    return res.json({
      success: true,
     userDetails,
    token: generateToken(user),
      chatlog:user.conversations // token function must return JWT
    });

  } catch (error) {
    console.error('❌ Login error:', error.message);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
// ✅ Get current user profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    return res.json({ success: true, user });
  } catch (error) {
    console.error('❌ Profile error:', error.message);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// ✅ Logout (Stateless - frontend handles token removal)
export const logoutUser = async (req, res) => {
  try {
    // Just respond with a success message
    return res.status(200).json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    console.error('❌ Logout error:', error.message);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
