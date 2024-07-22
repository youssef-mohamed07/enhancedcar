import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <motion.section 
        className="bg-white bg-opacity-90 rounded-3xl shadow-2xl p-8 max-w-4xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-5xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-black"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          About Us
        </motion.h1>
        
        <div className="space-y-6">
          <motion.p 
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Welcome to <span className="font-semibold text-blue-600">Car Sales and Rental</span>, your trusted partner in finding the perfect car for your needs. Our mission is to provide a seamless and enjoyable car buying and renting experience.
          </motion.p>
          
          <motion.div 
            className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-xl shadow-inner"
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-lg text-gray-800 font-medium">
              Our team is dedicated to offering:
            </p>
            <ul className="mt-4 space-y-2">
              {['Wide range of vehicles', 'Excellent customer service', 'Competitive pricing', 'Flexible rental options'].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                >
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.p 
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            Thank you for choosing Car Sales and Rental. We look forward to serving you and helping you find your dream car.
          </motion.p>
        </div>
        
        <motion.div
          className="mt-8 text-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5, type: "spring" }}
        >
          <a href="#contact" className="inline-block bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition duration-300 transform hover:scale-105">
            Contact Us Today
          </a>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutUs;