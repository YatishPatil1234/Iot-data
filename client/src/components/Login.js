import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase-config.js";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      console.log("Success!");
      alert("Login Successfully!");
      sessionStorage.setItem("isAuthenticated", true);
      onLogin();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-white p-6 rounded shadow-2xl  shadow-rose-300 w-[350px]">
        <h1 className="text-2xl font-semibold mb-6 font-serif">Login</h1>
        <input
          type="email"
          className="border-1 bg-gray-700 rounded-md px-3 py-2 mb-4 w-full text-white placeholder-slate-50 font-serif"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="border-2 bg-gray-700  rounded-md px-3 py-2 mb-4 text-white w-full placeholder-slate-50 font-serif"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-fuchsia-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full mb-4"
          onClick={login}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
