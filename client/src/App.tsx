import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import About from "./pages/About";
import Features from "./pages/Features";
import AIInsights from "./pages/AIInsights";
import AITechnology from "./pages/AITechnology";
import { SpeechProvider } from "./contexts/SpeechContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <SpeechProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

          <main className="relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/ai-insights" element={<AIInsights />} />
              <Route path="/ai-technology" element={<AITechnology />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/success" element={<LoginSuccess />} />
            </Routes>
          </main>

          {/* Animated background elements */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>
      </Router>
    </SpeechProvider>
  );
}

export default App;
