# 🤖 JARVIS - Your Personal AI Assistant

JARVIS is a sleek, intelligent AI assistant web application inspired by Tony Stark's iconic virtual assistant. Built with modern web technologies, it offers a fast, interactive, and futuristic experience for both guests and authenticated users.

![screenshot](https://ibb.co/G303Zfqp)
![screenshot](https://ibb.co/s98V6KM3)
![screenshot](https://ibb.co/whs8Lczq)
![screenshot](https://ibb.co/Sw5rr7N0)

---

## 🌟 Features

- 🔒 **Guest & Authenticated Chat:** Chat without logging in, or create an account to save chat history.
- 🎙️ **Voice Input:** Speak your queries with real-time voice-to-text.
- 🔊 **Text-to-Speech (TTS):** Listen to JARVIS read responses aloud.
- 📜 **Persistent History:** Save and access your past conversations (for logged-in users).
- 🧠 **Context-Aware Replies:** JARVIS understands and responds with context-aware intelligence.
- 💬 **Typing Indicator:** Real-time assistant typing feedback.
- 🌐 **Responsive UI:** Smooth, animated, and mobile-friendly design.

---

## 🛠️ Tech Stack

### Frontend:
- **React + TypeScript**
- **Tailwind CSS**
- **Framer Motion** (for smooth animations)
- **Redux Toolkit** with `redux-persist` for state management
- **Web Speech API** (STT & TTS)

### Backend:
- **Node.js + Express**
- **MongoDB** with Mongoose
- **JWT Authentication**
- **RESTful API**

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- MongoDB
- A `.env` file with necessary variables (see below)

### .env Example

```env
PORT=3001
JWT_SECRET=your_secret_key
MONGO_URI=your_mongodb_uri
Install & Run
Backend:
bash
Copy
Edit
cd backend
npm install
npm run dev
Frontend:
bash
Copy
Edit
cd frontend
npm install
npm run dev
Replace folder names if your structure differs.

📁 Folder Structure
Copy
Edit
├── backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── utils/
├── frontend
│   ├── components/
│   ├── pages/
│   ├── redux/
│   └── hooks/
🔐 Authentication
JWT-based login/signup

Tokens stored in localStorage

Protected routes and chat history per user

✨ Live Demo
🔗 jarvissmall.vercel.app (Replace with your deployed URL)

👨‍💻 Author
Made with ❤️ by Vishal Singh
A passionate developer, hackathon winner, and AI enthusiast.

📝 License
This project is open-source and available under the MIT License.

python
Copy
Edit

---

Let me know if you'd like me to:
- Add badges (e.g., Vercel, MongoDB, Netlify)
- Customize it for deployment to Render/Vercel
- Include API documentation

I'm happy to help make this even more polished!