import jwt from 'jsonwebtoken';
import Chat from '../models/chat.model.js';

export const chatWithAI = async (req, res, client) => {
  try {
    const { message, conversationHistory = [] } = req.body;
    const authHeader = req.headers.authorization;

    let userId = null;

    if (authHeader?.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.id;
      } catch {
        console.warn('⚠️ Invalid token. Guest mode.');
      }
    }

    if (!message) {
      return res.status(400).json({ success: false, error: 'Message is required' });
    }

    const messages = [
      { role: 'system', content: "You are JARVIS, an advanced AI assistant inspired by Tony Stark." },
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    const chatResponse = await client.chat.complete({
      model: 'mistral-small',
      messages,
      temperature: 0.7,
      max_tokens: 1000
    });

    const reply = chatResponse.choices[0]?.message?.content;
    if (!reply) throw new Error('No response from Mistral API');

    if (userId) {
      await Chat.create({ userId, role: 'user', content: message });
      await Chat.create({ userId, role: 'assistant', content: reply });
    }

    res.json({ success: true, response: reply, timestamp: new Date().toISOString() });

  } catch (err) {
    console.error('Chat Error:', err.message);
    res.status(500).json({ success: false, error: err.message });
  }
};

// export const clearChatHistory = async (req, res) => {
//   try {
//     const userId = req.user?.id;
//     if (!userId) return res.status(401).json({ success: false, error: 'Unauthorized' });

//     await Message.deleteMany({ userId });
//     res.json({ success: true, message: 'Chat history cleared' });
//   } catch (err) {
//     console.error('Error clearing chat:', err.message);
//     res.status(500).json({ success: false, error: 'Server error' });
//   }
// };

// export const getChatHistory = async (req, res) => {
//   try {
//     const userId = req.user?.id;
//     if (!userId) return res.status(401).json({ success: false, error: 'Unauthorized' });

//     const messages = await Message.find({ userId }).sort({ timestamp: 1 });

//     res.json({
//       success: true,
//       history: messages.map(m => ({
//         role: m.role,
//         content: m.content,
//         timestamp: m.timestamp
//       }))
//     });
//   } catch (err) {
//     console.error('Fetch history error:', err.message);
//     res.status(500).json({ success: false, error: 'Server error' });
//   }
// };

// export const saveMessage = async (req, res) => {
//   try {
//     const userId = req.user?.id;
//     const { role, content } = req.body;

//     if (!userId) return res.status(401).json({ success: false, error: 'Unauthorized' });
//     if (!role || !['user', 'assistant'].includes(role)) {
//       return res.status(400).json({ success: false, error: 'Invalid role' });
//     }
//     if (!content || typeof content !== 'string') {
//       return res.status(400).json({ success: false, error: 'Invalid content' });
//     }

//     await Message.create({ userId, role, content });

//     res.status(201).json({ success: true, message: 'Message saved successfully' });
//   } catch (err) {
//     console.error('Save message error:', err.message);
//     res.status(500).json({ success: false, error: 'Server error' });
//   }
// };

export const saveChat = async (req, res) => {
  try {
    const userId = req.user?.id;
    const { role, content } = req.body;

    if (!userId) return res.status(401).json({ success: false, error: 'Unauthorized' });

    const message = new Chat({ userId, role, content });
    await message.save();

    res.status(201).json({ success: true, message: 'Saved' });
  } catch (error) {
    console.error('Save message error:', error.message);
    res.status(500).json({ success: false, error: 'Internal error' });
  }
};

// Get user chat history
export const getChatHistory = async (req, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ success: false, error: 'Unauthorized' });

    const messages = await Chat.find({ userId }).sort({ timestamp: 1 });

    res.json({
      success: true,
      history: messages.map(msg => ({
        role: msg.role,
        content: msg.content,
        timestamp: msg.timestamp
      }))
    });
  } catch (error) {
    console.error('Get history error:', error.message);
    res.status(500).json({ success: false, error: 'Internal error' });
  }
};

// Clear user chat history
export const clearChatHistory = async (req, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ success: false, error: 'Unauthorized' });

    await Chat.deleteMany({ userId });
    res.json({ success: true, message: 'History cleared' });
  } catch (error) {
    console.error('Clear history error:', error.message);
    res.status(500).json({ success: false, error: 'Internal error' });
  }
};