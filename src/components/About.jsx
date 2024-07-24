import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 overflow-hidden">
      <motion.section 
        className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full relative"
        initial={{ opacity: 0, rotateY: -90 }}
        animate={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-yellow-600 rounded-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        />
        
        <motion.h1 
          className="text-6xl font-extrabold mb-8 text-center text-black relative z-10"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, type: "spring", stiffness: 120 }}
        >
          About Us
        </motion.h1>
        
        <div className="space-y-8 relative z-10">
          <motion.p 
            className="text-xl text-black leading-relaxed"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Welcome to <span className="font-semibold text-yellow-600">Car Sales and Rental</span>, your trusted partner in finding the perfect car for your needs. Our mission is to provide a seamless and enjoyable car buying and renting experience.
          </motion.p>
          
          <motion.div 
            className="bg-black p-8 rounded-xl shadow-inner text-yellow-600"
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          >
            <p className="text-xl font-medium mb-4">
              Our team is dedicated to offering:
            </p>
            <ul className="space-y-4">
              {['Wide range of vehicles', 'Excellent customer service', 'Competitive pricing', 'Flexible rental options'].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + index * 0.2, duration: 0.5 }}
                >
                  <motion.svg 
                    className="w-8 h-8 mr-4" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    initial={{ rotate: -180 }}
                    animate={{ rotate: 0 }}
                    transition={{ delay: 1.4 + index * 0.2, duration: 0.5 }}
                  >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </motion.svg>
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.p 
            className="text-xl text-black leading-relaxed"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            Thank you for choosing Car Sales and Rental. We look forward to serving you and helping you find your dream car.
          </motion.p>
        </div>
        
        <motion.div
          className="mt-12 text-center relative z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.8, type: "spring", stiffness: 120 }}
        >
          <a href="#contact" className="inline-block bg-black text-yellow-600 font-bold text-xl py-4 px-10 rounded-full hover:bg-yellow-600 hover:text-black transition duration-300 transform hover:scale-110 shadow-lg">
            Contact Us Today
          </a>
        </motion.div>
        
        <motion.div
          className="absolute -bottom-16 -right-16 w-64 h-64 bg-yellow-600 rounded-full opacity-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.6, duration: 1, ease: "easeOut" }}
        />
        <motion.div
          className="absolute -top-20 -left-20 w-80 h-80 bg-yellow-600 rounded-full opacity-30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.8, duration: 1, ease: "easeOut" }}
        />
      </motion.section>
    </div>
  );
};

export default AboutUs;