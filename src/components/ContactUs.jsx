import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <motion.section 
        className="bg-black shadow-2xl rounded-lg p-8 max-w-4xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-6xl font-extrabold mb-8 text-center text-yellow-600"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-yellow-600">Get in Touch</h2>
            <p className="text-gray-300 mb-4">
              We'd love to hear from you. Our team is ready to answer all your questions.
            </p>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                contact@carsalesandrental.com
              </p>
              <p className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +1 (123) 456-7890
              </p>
            </div>
          </motion.div>
          
          <motion.form 
            className="space-y-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div>
              <label className="block text-yellow-600 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input 
                className="w-full px-3 py-2 bg-gray-800 text-white border border-yellow-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 transition duration-200"
                id="name" 
                type="text" 
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-yellow-600 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input 
                className="w-full px-3 py-2 bg-gray-800 text-white border border-yellow-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 transition duration-200"
                id="email" 
                type="email" 
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-yellow-600 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea 
                className="w-full px-3 py-2 bg-gray-800 text-white border border-yellow-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 transition duration-200"
                id="message" 
                placeholder="Your message" 
                rows="4"
              ></textarea>
            </div>
            <motion.button 
              className="w-full bg-yellow-600 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded transition duration-200"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,0)" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactUs;