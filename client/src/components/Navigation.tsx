import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Zap,
  MessageSquare,
  Info,
  Sparkles,
  Brain,
  Cpu,
  Activity,
  LogOut,
  LogIn,
  UserPlus,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [showAuthMenu, setShowAuthMenu] = useState(false);

  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const navItems = [
    { path: "/", label: "Home", icon: Zap },
    { path: "/chat", label: "Chat", icon: MessageSquare },
    { path: "/about", label: "About", icon: Info },
    { path: "/features", label: "Features", icon: Sparkles },
    { path: "/ai-insights", label: "AI Insights", icon: Brain },
    { path: "/ai-technology", label: "AI Tech", icon: Cpu },
  ];

  return (
    <nav className="relative z-50">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between px-6 py-4 glass-dark border-b border-white/10">
        {/* Brand */}
        <Link to="/" className="flex items-center space-x-3 text-white group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-hologram">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <div>
            <span className="text-2xl font-bold gradient-text">JARVIS</span>
            <div className="flex items-center space-x-1 mt-1">
              <Activity className="w-2 h-2 text-green-400 animate-pulse" />
              <span className="text-xs text-gray-400 terminal-text">
                ONLINE
              </span>
            </div>
          </div>
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden group ${
                  isActive
                    ? "bg-blue-600/20 text-blue-400 cyber-glow-blue"
                    : "text-white hover:bg-white/10 hover:text-blue-400"
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan-line"></div>
                )}
                <Icon className="w-4 h-4" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Auth Buttons */}
        <div className="relative">
          <button
            className="flex items-center space-x-2 px-4 py-2 bg-black/30 rounded-lg border border-blue-400/30 text-blue-400 hover:bg-blue-600/10 transition"
            onClick={() =>
              isLoggedIn ? handleLogout() : setShowAuthMenu((prev) => !prev)
            }
          >
            {isLoggedIn ? (
              <>
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Logout</span>
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                <span className="text-sm font-medium">Login</span>
              </>
            )}
          </button>

          {!isLoggedIn && showAuthMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-slate-800 border border-white/10 rounded-lg shadow-xl animate-fade-in">
              <Link
                to="/login"
                className="flex items-center px-4 py-2 hover:bg-white/10 transition text-white"
                onClick={() => setShowAuthMenu(false)}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Link>
              <Link
                to="/register"
                className="flex items-center px-4 py-2 hover:bg-white/10 transition text-white"
                onClick={() => setShowAuthMenu(false)}
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
<div className="md:hidden px-4 py-3 flex items-center justify-between glass-dark border-b border-white/10">
  {/* Brand */}
  <Link to="/" className="flex items-center space-x-2 text-white">
    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-hologram">
      <Zap className="w-4 h-4" />
    </div>
    <span className="text-lg font-bold gradient-text">JARVIS</span>
  </Link>

  {/* Menu Toggle Button */}
  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="text-white hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/10"
  >
    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
  </button>
</div>

{/* Dropdown Menu */}
{isMenuOpen && (
  <div className="md:hidden glass-dark border-b border-white/10 px-4 py-3 space-y-2 animate-fade-in-down">
    {navItems.map((item) => {
      const Icon = item.icon;
      const isActive = location.pathname === item.path;
      return (
        <Link
          key={item.path}
          to={item.path}
          onClick={() => setIsMenuOpen(false)}
          className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition ${
            isActive
              ? "bg-blue-600/20 text-blue-400"
              : "text-white hover:bg-white/10 hover:text-blue-400"
          }`}
        >
          <Icon className="w-4 h-4" />
          <span>{item.label}</span>
        </Link>
      );
    })}

    {/* Auth Options */}
    {isLoggedIn ? (
      <button
        onClick={() => {
          handleLogout();
          setIsMenuOpen(false);
        }}
        className="flex items-center space-x-2 text-red-400 px-3 py-2 hover:bg-white/10 w-full rounded-lg"
      >
        <LogOut className="w-4 h-4" />
        <span>Logout</span>
      </button>
    ) : (
      <div className="space-y-1">
        <Link
          to="/login"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center space-x-2 px-3 py-2 text-white hover:text-blue-400 hover:bg-white/10 rounded-lg"
        >
          <LogIn className="w-4 h-4" />
          <span>Login</span>
        </Link>
        <Link
          to="/register"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center space-x-2 px-3 py-2 text-white hover:text-blue-400 hover:bg-white/10 rounded-lg"
        >
          <UserPlus className="w-4 h-4" />
          <span>Signup</span>
        </Link>
      </div>
    )}
  </div>
)}

    </nav>
  );
};

export default Navigation;
