import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase-config.js";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      alert("Registration Successful");
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700">
      <div className="w-[350px]  bg-white shadow-2xl shadow-rose-200 border-2 border-gray-500 rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-semibold mb-4  text-gray-800 font-serif">
          Register
        </h1>
        <input
          type="email"
          className="border-1 bg-gray-700 placeholder-slate-50 text-white  rounded-md px-3 py-2 mb-4 mt-4 w-full font-serif"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="border border-gray-300 bg-gray-700 placeholder-slate-50 text-white rounded-md px-3 py-2 mb-4 mt-4 w-full font-serif"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="bg-fuchsia-700 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded w-full"
          onClick={register} // Call handleRegister function on button click
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
