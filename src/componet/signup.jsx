
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = ({}) => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
const navigate =useNavigate()

  const formsumbit = (e) => {
    e.preventDefault();
    console.log("signup");

    axios.post('http://localhost:3000/regiser', { name, email, password })
      .then(() => {
        setname("");
        setemail("");
        setpassword("");
        navigate('/login');
      })
      .catch(err => console.error("Signup Error:", err));
  };

  return (
<div className="bg-gray-900 p-10 rounded-2xl shadow-2xl max-w-md mx-auto transition-transform transform hover:scale-105 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">


      <h2 className="text-4xl font-bold text-center text-white mb-8">
        Create an Account
      </h2>
      <form onSubmit={formsumbit}>
        <div className="mb-6">
          <label htmlFor="name" className="text-lg font-medium text-gray-300">Full Name</label>
          <input
            type="text"
            id="name"
            value={name} 
            placeholder="Enter your full name"
            className="w-full px-6 py-3 mt-2 border border-gray-600 bg-[#1f1f1f] text-white rounded-lg"
            required
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="text-lg font-medium text-gray-300">Email Address</label>
          <input
            type="email"
            id="email"
            value={email} 
            placeholder="Enter your email"
            className="w-full px-6 py-3 mt-2 border border-gray-600 bg-[#1f1f1f] text-white rounded-lg"
            required
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label htmlFor="password" className="text-lg font-medium text-gray-300">Password</label>
          <input
            type="password"
            id="password"
            value={password} 
            placeholder="Create a password"
            className="w-full px-6 py-3 mt-2 border border-gray-600 bg-[#1f1f1f] text-white rounded-lg"
            required
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg text-lg font-semibold" 
        >
          Sign Up
        </button>
      </form>
      <Link to={'/Login'} className="text-center text-gray-400 mt-6">
        Already have an account? 
        <span className="text-indigo-400 hover:text-indigo-500 font-medium ml-1">
          Login
        </span>
      </Link>
    </div>
  );
};

export default SignupForm;
