import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaGoogle, FaFacebook } from 'react-icons/fa';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   try{
     const response = await axios.post('http://localhost:5000/register', { 
      email: formData.email,
      password: formData.password, 
      confirmPassword: formData.confirmPassword,
      phone: formData.phone, 
      name: formData.name,
    });
    if (response.data.error){
      toast.error(response.data.error);
    }
    else{
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        name: '',
      });
      toast.success('User signed up successfully!');
      navigate('/login');
    }
  }
  catch(error){
    setError("missing data")
    console.error('There was an error logging in:', error);
    toast.error(error.response.data);
  }
    // console.log('Form submitted:', formData);
  };

  const inputFields = [
    { name: 'name', type: 'text', placeholder: 'John Doe', icon: FaUser, label: 'Full Name' },
    { name: 'email', type: 'email', placeholder: 'johndoe@example.com', icon: FaEnvelope, label: 'Email' },
    { name: 'password', type: 'password', placeholder: '********', icon: FaLock, label: 'Password' },
    { name: 'confirmPassword', type: 'password', placeholder: '********', icon: FaLock, label: 'Confirm Password' },
    { name: 'phone', type: 'tel', placeholder: '+1 (123) 456-7890', icon: FaPhone, label: 'Phone Number' },
  ];

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
          <h2 className="text-4xl font-bold text-yellow-500 mb-6 text-center">Join Us</h2>
        </motion.div>

        <form onSubmit={handleSubmit}>
          {inputFields.map((field, index) => (
            <motion.div
              key={field.name}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="mb-4"
            >
              <label className="block text-sm font-medium mb-2" htmlFor={field.name}>
                {field.label}
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <field.icon />
                </span>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full py-3 pl-10 pr-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 transition duration-300"
                  placeholder={field.placeholder}
                  required
                />
              </div>
            </motion.div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition duration-300 shadow-lg mt-6"
          >
            Sign Up
          </motion.button>
        </form>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-6"
        >
          <p className="text-center text-sm text-gray-400 mb-4">Or sign up with</p>
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
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8 text-center text-sm text-gray-400"
        >
          Already have an account?{' '}
          <a href="/login" className="text-yellow-500 hover:underline font-medium">
            Log in
          </a>
        </motion.p>

        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700"></div>
      </motion.div>
    </div>
  );
};

export default SignUp;