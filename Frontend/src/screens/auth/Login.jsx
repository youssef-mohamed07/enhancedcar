import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaGoogle, FaFacebook } from 'react-icons/fa';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(''); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { 
        email: formData.email,
        password: formData.password, 
      });
      if (response.data.error) {
        toast.error(response.data.error);
    } else {
      setFormData({ email: '', password: '' });
        toast.success('User logged in successfully!');
        navigate('/');
    }
      // console.log('Form submitted:', formData);
      // console.log('Response:', response.data);

    } catch (error) {
      setError('Login failed. Please check your credentials.'); 
      console.error('There was an error logging in:', error);
      toast.error(error.response.data);
    }
  };

  return (
    <div className="bg-gradient-to-br from-black to-gray-900 text-white min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-yellow-500 mb-6 text-center">Welcome Back</h2>
        </motion.div>

        <form onSubmit={handleSubmit}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6"
          >
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
                className="w-full py-3 pl-10 pr-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 transition duration-300"
                placeholder="johndoe@example.com"
                required
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-8"
          >
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
                className="w-full py-3 pl-10 pr-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 transition duration-300"
                placeholder="********"
                required
              />
            </div>
          </motion.div>

          {error && <p className="text-red-500 mb-4">{error}</p>} {/* Added error message rendering */}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition duration-300 shadow-lg"
          >
            Log In
          </motion.button>
        </form>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6"
        >
          <p className="text-center text-sm text-gray-400 mb-4">Or continue with</p>
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-red-600 text-white p-2 rounded-full"
            >
              <FaGoogle />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-600 text-white p-2 rounded-full"
            >
              <FaFacebook />
            </motion.button>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 text-center text-sm text-gray-400"
        >
          Don't have an account?{' '}
          <a href="/signup" className="text-yellow-500 hover:underline font-medium">
            Sign Up
          </a>
        </motion.p>

        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700"></div>
      </motion.div>
    </div>
  );
};

export default Login;
