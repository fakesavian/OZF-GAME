import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MenuScreen from "./MainMenu"; 

export const LoginScreen = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Added error state
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);
    setError(null); // Clear previous errors
    setTimeout(() => {
      // TEMPORARY: Auto-login bypass for testing
      sessionStorage.setItem('seenBoot', 'true'); // Set seenBoot to true after successful login
      setRedirect(true);
    }, 1200);
  };

  useEffect(() => {
    if (redirect) {
      const timer = setTimeout(() => {
        navigate("/menu");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [redirect, navigate]); // Added navigate to dependency array

  if (redirect && !error) { // Ensure no error before showing access granted
    return (
      <div className="w-screen h-screen bg-black flex items-center justify-center text-green-400 font-mono">
        <div className="text-xl animate-crt-glow">ACCESS GRANTED: WELCOME TO LAWLESSLANDS</div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen bg-black relative flex flex-col justify-center items-center text-green-400 font-mono p-4">
      <div className="absolute top-0 left-0 w-full h-full scanlines pointer-events-none" />
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-xl glitch text-center">OZF SYSTEM LOGIN</h1>
        <input
          type="text"
          placeholder="Username"
          className="w-full bg-black border border-green-500 p-2 text-green-400 placeholder-green-600 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-black border border-green-500 p-2 text-green-400 placeholder-green-600 focus:outline-none"
        />
        <button
          onClick={handleLogin}
          className="w-full border border-green-500 py-2 hover:bg-green-700 hover:text-black transition-all"
        >
          {loading ? "AUTHORIZING..." : "LOGIN"}
        </button>
        {error && <div className="glitch text-red-500 text-sm animate-glitch-fast">{error}</div>}
        <div className="flex justify-between text-xs">
          <button className="underline">Forgot Password?</button>
          <button className="underline">Sign Up</button>
        </div>
      </div>
    </div>
  );
};