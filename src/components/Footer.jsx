import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: <FaFacebookF /> },
    { name: 'Twitter', href: 'https://twitter.com', icon: <FaTwitter /> },
    { name: 'Instagram', href: 'https://instagram.com', icon: <FaInstagram /> },
  ];

  return (
    <motion.footer 
      className="bg-black text-white py-16 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div 
            className="text-center md:text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img src="auth1.png" alt="Athar Motor Company Logo" className="h-24 mx-auto md:mx-0" />
            </motion.div>
            <motion.h2 
              className="text-3xl font-extrabold mb-4 text-yellow-600"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            >
              Athar Motor Company
            </motion.h2>
            <motion.p 
              className="text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Your trusted partner in finding the perfect car for your needs.
            </motion.p>
          </motion.div>
          <div>
            <motion.h4 
              className="text-xl font-semibold mb-6 text-center text-yellow-600"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-3 text-center">
              {footerLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                >
                  <a href={link.href} className="text-gray-300 hover:text-yellow-600 transition duration-300">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h4 
              className="text-xl font-semibold mb-6 text-center md:text-right text-yellow-600"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Connect With Us
            </motion.h4>
            <div className="flex justify-center md:justify-end space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-yellow-600 transition duration-300"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.5, type: 'spring' }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                >
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-700 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-gray-400">
            &copy; {currentYear} Athar Motor Company. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
