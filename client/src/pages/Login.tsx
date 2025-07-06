import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { AuthResponse } from "../types/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

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
      // dispatch(setMessages(res.chatlog || [])); // Add this line if you want to set chat history
      navigate("/success");
    } else {
      alert(res.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Login to JARVIS
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 rounded bg-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 rounded bg-gray-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded"
        >
          Login
        </button>
        <p className="text-center mt-4">
          No account?{" "}
          <a href="/signup" className="text-blue-400">
            Sign up
          </a>
          or // Somewhere in login component
          <a href="https://jarvisai-oktt.onrender.com/api/v1/user/google">
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              Login with Google
            </button>
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
