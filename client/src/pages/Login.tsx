import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { AuthResponse } from "../types/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { GoogleLogin } from "@react-oauth/google";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res: AuthResponse = await login(email, password);

    if (res.success && res.token) {
      localStorage.setItem("token", res.token);
      dispatch(setUser(res.userDetails));
      navigate("/success");
    } else {
      alert(res.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 text-white px-4">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 bg-opacity-80 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Login to JARVIS</h2>

        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-200 py-3 rounded-lg font-semibold"
        >
          Login
        </button>

        <p className="text-center text-sm mt-6">
          No account?{" "}
          <a href="/signup" className="text-blue-400 hover:underline">
            Sign up
          </a>
        </p>

        <div className="mt-6 text-center">
          <span className="text-sm text-gray-400">or</span>
        </div>

        <div className="flex justify-center mt-4">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log("Google login success", credentialResponse);
              navigate("/success");
            }}
            onError={() => {
              alert("Google login failed");
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
