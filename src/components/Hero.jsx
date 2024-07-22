import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      className="text-white text-center relative bg-cover bg-center bg-no-repeat h-screen"
      style={{
        backgroundImage: 'url("aa.webp")',
      }}
    >
      {/* Fallback background in case image fails to load */}
      <div className="absolute inset-0 "></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-bold mb-6 leading-tight md:text-7xl"
        >
          Find Your Dream Car
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg mb-8 max-w-xl md:text-xl"
        >
          Buy or rent the perfect car for your needs with ease and confidence.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            Browse Cars
          </button>
        </motion.div>
        
        {/* Decorative elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-10 left-10 hidden md:block"
        >
          <div className="w-20 h-20 border-4 border-white rounded-full"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-10 right-10 hidden md:block"
        >
          <div className="w-16 h-16 border-4 border-white transform rotate-45"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;