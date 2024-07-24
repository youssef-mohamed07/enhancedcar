import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaUser, FaPaperPlane } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white-900 to-black flex items-center justify-center p-4" id='contact-us'>
      <motion.section 
        className="bg-white-800 shadow-2xl rounded-lg p-8 max-w-4xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-6xl font-extrabold mb-8 text-center text-yellow-500"
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
            <h2 className="text-2xl font-bold mb-4 text-yellow-500">Get in Touch</h2>
            <p className="text-white-300 mb-4">
              We'd love to hear from you. Our team is ready to answer all your questions.
            </p>
            <div className="space-y-4">
              <motion.p 
                className="flex items-center text-white-300"
                whileHover={{ x: 5, color: '#EAB308' }}
              >
                <FaEnvelope className="w-5 h-5 mr-3 text-yellow-500" />
                contact@carsalesandrental.com
              </motion.p>
              <motion.p 
                className="flex items-center text-white-300"
                whileHover={{ x: 5, color: '#EAB308' }}
              >
                <FaPhone className="w-5 h-5 mr-3 text-yellow-500" />
                +1 (123) 456-7890
              </motion.p>
            </div>
          </motion.div>
          
          <motion.form 
            className="space-y-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div>
              <label className="block text-yellow-500 text-sm font-bold mb-2" htmlFor="name">
                <FaUser className="inline mr-2" />Name
              </label>
              <input 
                className="w-full px-3 py-2 bg-white-700 text-white border border-yellow-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                id="name" 
                type="text" 
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-yellow-500 text-sm font-bold mb-2" htmlFor="email">
                <FaEnvelope className="inline mr-2" />Email
              </label>
              <input 
                className="w-full px-3 py-2 bg-white-700 text-white border border-yellow-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                id="email" 
                type="email" 
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-yellow-500 text-sm font-bold mb-2" htmlFor="message">
                <FaPaperPlane className="inline mr-2" />Message
              </label>
              <textarea 
                className="w-full px-3 py-2 bg-white-700 text-white border border-yellow-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                id="message" 
                placeholder="Your message" 
                rows="4"
              ></textarea>
            </div>
            <motion.button 
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded transition duration-200 flex items-center justify-center"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(234,179,8)" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
            >
              <FaPaperPlane className="mr-2" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactUs;