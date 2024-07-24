import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => setLanguage(language === 'EN' ? 'AR' : 'EN');

  return (
    <header className="bg-black text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <img src="auth.png" alt="Athar Motor Company Logo" className="h-12 w-auto" />
            <div>
              <h1 className="text-2xl font-bold text-yellow-600">Athar Motor Company</h1>
              <p className="text-sm text-gray-400">شركة اثر موتور</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {['Car Details', 'Car List', 'About Us', 'Contact Us'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase().replace(' ', '-')}
                smooth={true}
                duration={500}
                className="hover:text-yellow-600 transition duration-300 cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Auth and Language */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-yellow-700 transition duration-300"
            >
              Sign Up
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-yellow-600 text-yellow-600 px-4 py-2 rounded-full font-semibold hover:bg-yellow-600 hover:text-white transition duration-300"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="text-xl text-yellow-600"
            >
              <FaGlobe /> {language}
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl focus:outline-none text-yellow-600">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-black"
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-3">
            {['Car Details', 'Car List', 'About Us', 'Contact Us'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase().replace(' ', '-')}
                smooth={true}
                duration={500}
                className="hover:text-yellow-600 transition duration-300 cursor-pointer"
              >
                {item}
              </Link>
            ))}
            <button className="bg-yellow-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-yellow-700 transition duration-300">
              Sign Up
            </button>
            <button className="bg-transparent border-2 border-yellow-600 text-yellow-600 px-4 py-2 rounded-full font-semibold hover:bg-yellow-600 hover:text-white transition duration-300">
              Login
            </button>
            <button onClick={toggleLanguage} className="flex items-center space-x-2 text-yellow-600">
              <FaGlobe /> <span>{language}</span>
            </button>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;