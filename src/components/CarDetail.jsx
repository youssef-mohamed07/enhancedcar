import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';


const cars = [
  {
    id: 1,
    name: 'Tesla Model S',
    image: 'Tesla Model S.avif',
    description: 'Luxury electric sedan with impressive range and performance.',
    price: '$79,990',
    range: '405 miles',
    acceleration: '0-60 mph in 3.1s',
  },
  {
    id: 2,
    name: 'Ford Mustang Mach-E',
    image: 'Ford Mustang Mach-E.avif',
    description: 'All-electric SUV with Mustang-inspiyellow design and cutting-edge technology.',
    price: '$45,995',
    range: '314 miles',
    acceleration: '0-60 mph in 3.5s',
  },
  {
    id: 3,
    name: 'Porsche Taycan',
    image: 'Porsche Taycan.avif',
    description: 'High-performance electric sports car with stunning design and handling.',
    price: '$82,700',
    range: '227 miles',
    acceleration: '0-60 mph in 2.6s',
  },
  {
    id: 4,
    name: 'Chevrolet Bolt EV',
    image: 'Chevrolet Bolt EV.avif',
    description: 'Affordable and practical electric hatchback with good range.',
    price: '$31,995',
    range: '259 miles',
    acceleration: '0-60 mph in 6.5s',
  },
  {
    id: 5,
    name: 'Audi e-tron GT',
    image: 'Audi e-tron GT.avif',
    description: 'Sleek and powerful electric grand tourer with quattro all-wheel drive.',
    price: '$99,900',
    range: '238 miles',
    acceleration: '0-60 mph in 3.1s',
  },
  {
    id: 6,
    name: 'Rivian R1T',
    image: 'Rivian R1T.avif',
    description: 'Innovative electric pickup truck with adventure-ready features.',
    price: '$67,500',
    range: '314 miles',
    acceleration: '0-60 mph in 3.0s',
  },
];
const CarList = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-6xl md:text-7xl font-extrabold text-center text-yellow-600 mb-16 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        >
          Electrifying Car Showcase
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {cars.map((car, index) => (
            <motion.div 
              key={car.id} 
              className="bg-gradient-to-br from-yellow-600 to-yellow-600 rounded-3xl overflow-hidden shadow-2xl cursor-pointer transform perspective-1000"
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 15,
                boxShadow: "0px 0px 20px rgba(255, 204, 0, 0.7)"
              }}
              onClick={() => setSelectedCar(car)}
            >
              <div className="h-56 overflow-hidden relative">
                <img src={car.image} alt={car.name} className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-start p-4">
                  <h2 className="text-2xl font-bold text-white drop-shadow-lg">{car.name}</h2>
                </div>
              </div>
              <div className="p-6 bg-black">
                <p className="text-3xl font-extrabold text-yellow-600 mb-2">{car.price}</p>
                <p className="text-sm text-yellow-600">{car.range}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedCar && (
          <CarDetail car={selectedCar} onClose={() => setSelectedCar(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

const CarDetail = ({ car, onClose }) => {
  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.section 
        className="bg-gradient-to-br from-yellow-600 to-yellow-600 rounded-3xl p-8 max-w-4xl w-full shadow-2xl"
        initial={{ scale: 0.5, rotateY: 90 }}
        animate={{ scale: 1, rotateY: 0 }}
        exit={{ scale: 0.5, rotateY: -90 }}
        transition={{ type: "spring", damping: 15 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-5xl font-extrabold mb-8 text-black">{car.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={car.image} alt={car.name} className="w-full h-80 object-cover" />
          </motion.div>
          <div className="space-y-6">
            <p className="text-xl text-black">{car.description}</p>
            <div className="bg-black bg-opacity-80 p-6 rounded-2xl text-yellow-600">
              <h3 className="text-2xl font-bold mb-4">Specifications</h3>
              <ul className="space-y-3">
                <li><span className="font-semibold">Price:</span> {car.price}</li>
                <li><span className="font-semibold">Range:</span> {car.range}</li>
                <li><span className="font-semibold">Acceleration:</span> {car.acceleration}</li>
              </ul>
            </div>
            <motion.a
              href={`https://wa.me/1234567890?text=I'm interested in the ${car.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 text-white px-8 py-3 rounded-full text-xl font-bold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="mr-2 text-2xl" />
              Contact via WhatsApp
            </motion.a>
          </div>
        </div>
        <motion.button
          className="absolute top-4 right-4 text-black hover:text-yellow-600"
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
      </motion.section>
    </motion.div>
  );
};

export default CarList;