import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaGlobe, } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const navItems = [
    { name: "Showcase", id: "car-list" },
    { name: "Features", id: "features" },
    { name: "Contact", id: "contact-us" },
  ];

  return (
    <header className="bg-white text-gray-900 font-semibold shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center "
          >
            <a href="/">
              <img src="logo1.png" alt="Athar Motor Company Logo" width={50} className="mr-4 mt-2 mb-2" />
            </a>
            <div>
              <h1 className="text-2xl font-bold text-yellow-600" >{t("Athar Motors")}</h1>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80} // Adjust this value based on your header height
                className="hover:text-yellow-600 transition duration-300 cursor-pointer"
              >
                {t(item.name)}
              </Link>
            ))}
          </nav>

          {/* Auth and Language */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-600 text-white px-4 py-1 font-semibold hover:bg-yellow-700 transition duration-300"
              onClick={() => navigate("signup")}
            >
              {t("Sign Up")}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-yellow-600 text-yellow-600 px-4 py-1 font-semibold hover:bg-yellow-600 hover:text-white transition duration-300 border"
              onClick={() => navigate("login")}
            >
              {t("Login")}
            </motion.button>

            {/* language */}
            <motion.button
              whileHover={{ scale: 1}}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="text-xl pl-3 pt-2 text-yellow-600"
            >
              <CiGlobe /> {language}
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
        animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden"
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-4 items-center">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80} // Adjust this value based on your header height
                className="hover:text-yellow-600 duration-300 cursor-pointer hover:border-b-yellow-600 hover:border-b-2 transition"
                onClick={() => setIsMenuOpen(false)} // Close menu after clicking
              >
                {t(item.name)}
              </Link>
            ))}
            <button
              className="bg-yellow-600 text-white px-4 py-2 w-[50%]  font-semibold hover:bg-yellow-700  transition duration-300"
              onClick={() => {
                navigate("signup");
                setIsMenuOpen(false);
              }}
            >
              {t("Sign Up")}
            </button>
            <button
              className="bg-transparent border-2 border-yellow-600 w-[50%] text-yellow-600 px-4 py-2 font-semibold hover:bg-yellow-600 hover:text-white transition duration-300"
              onClick={() => {
                navigate("login");
                setIsMenuOpen(false);
              }}
            >
              {t("Login")}
            </button>
            <button
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="flex items-center space-x-2 text-yellow-600"
            >
              <CiGlobe className="text-xl" /> <span>{language}</span>
            </button>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;