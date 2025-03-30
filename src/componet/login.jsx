//complete
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";

const LoginForm = () => {
  const { setUser } = useContext(UserContext);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/login", { email, password })
      .then((res) => {
        if (res.data.success) {
          setUser(res.data.user);  
          navigate("/home");  
        } else {
          alert("Invalid email or password");
        }
      })
      .catch((err) => console.error("Login Error:", err));
  };

  return (
    <div className="bg-gray-900 p-10 rounded-2xl shadow-2xl max-w-md mx-auto transition-transform transform hover:scale-105 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Welcome Back!</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="text-lg font-medium text-gray-300">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-6 py-3 mt-2 border border-gray-600 bg-[#1f1f1f] text-white rounded-lg"
            required
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label className="text-lg font-medium text-gray-300">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-6 py-3 mt-2 border border-gray-600 bg-[#1f1f1f] text-white rounded-lg"
            required
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
       <button type="submit" className="w-full py-3 mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg text-lg font-semibold">
          Login
        </button>
       
      </form>
      <Link to={"/regiser"} className="text-center text-gray-400 mt-6">
        Don't have an account?
        <p className="text-indigo-400 hover:text-indigo-500 font-medium ml-1">Sign up</p>
      </Link>
    </div>
  );
};

export default LoginForm;
