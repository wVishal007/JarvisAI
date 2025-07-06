
import React, { useEffect } from 'react';

const LoginSuccess = () => {
    useEffect(() => {
  const timer = setTimeout(() => {
    window.location.href = "/chat";
  }, 2000);

  return () => clearTimeout(timer);
}, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold">🎉 Login Successful!</h1>
        <p className="mt-4">Welcome back, enjoy using JARVIS AI.</p>
        <a href="/chat" className="mt-6 inline-block bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Go to Chat</a>
      </div>
    </div>
  );
};

export default LoginSuccess;
