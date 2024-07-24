import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-yellow-600 mb-6 text-center">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <FaEnvelope />
              </span>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-2 pl-10 pr-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-yellow-600"
                placeholder="johndoe@example.com"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <FaLock />
              </span>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full py-2 pl-10 pr-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-yellow-600"
                placeholder="********"
                required
              />
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-yellow-700 transition duration-300"
          >
            Log In
          </motion.button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <a href="/signup" className="text-yellow-600 hover:underline">
            Sign Up
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
