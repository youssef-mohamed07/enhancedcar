import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    description: 'All-electric SUV with Mustang-inspired design and cutting-edge technology.',
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
<div className="min-h-screen bg-white p-8">      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center text-black mb-12 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Electric Cars Showcase
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div 
              key={car.id} 
              className="bg-white bg-opacity-90 rounded-2xl overflow-hidden shadow-lg cursor-pointer transform perspective-1000"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0px 0px 8px rgb(255,255,255)"
              }}
              onClick={() => setSelectedCar(car)}
            >
              <div className="h-48 overflow-hidden">
                <img src={car.image} alt={car.name} className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{car.name}</h2>
                <p className="text-2xl font-bold text-green-600 mb-2">{car.price}</p>
                <p className="text-sm text-gray-600">{car.range}</p>
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
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.section 
        className="bg-white rounded-2xl p-8 max-w-2xl w-full"
        initial={{ scale: 0.5, rotateY: 90 }}
        animate={{ scale: 1, rotateY: 0 }}
        exit={{ scale: 0.5, rotateY: -90 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-800">{car.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={car.image} alt={car.name} className="w-full h-64 object-cover" />
          </motion.div>
          <div className="space-y-4">
            <p className="text-xl text-gray-700">{car.description}</p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">Specifications</h3>
              <ul className="space-y-2">
                <li><span className="font-semibold">Price:</span> {car.price}</li>
                <li><span className="font-semibold">Range:</span> {car.range}</li>
                <li><span className="font-semibold">Acceleration:</span> {car.acceleration}</li>
              </ul>
            </div>
            <motion.button
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Test Drive
            </motion.button>
          </div>
        </div>
        <motion.button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
      </motion.section>
    </motion.div>
  );
};

export default CarList;