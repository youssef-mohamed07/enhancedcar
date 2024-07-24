import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp } from 'react-icons/fa';

const CarCard = ({ car, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-2xl shadow-2xl overflow-hidden transition-transform duration-500 hover:shadow-3xl transform hover:scale-105"
      initial={{ opacity: 0, rotateY: 90 }}
      animate={inView ? { opacity: 1, rotateY: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, type: 'spring', damping: 12 }}
      whileHover={{ rotateY: 10, z: 50 }}
    >
      <div className="relative">
        <img src={car.image} alt={car.name} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <motion.span 
            className="text-white text-2xl font-bold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          >
            {car.name}
          </motion.span>
        </div>
      </div>
      <div className="p-6 bg-black text-yellow-600">
        <h3 className="text-2xl font-bold mb-3">{car.name}</h3>
        <p className="text-yellow-200 mb-4">{car.description}</p>
        <div className="flex justify-between items-center mb-4">
          <motion.span 
            className="text-3xl font-extrabold"
            whileHover={{ scale: 1.2, rotate: -3 }}
          >
            {car.price}
          </motion.span>
          <motion.span 
            className="bg-yellow-600 text-black px-4 py-2 rounded-full text-sm font-bold"
            whileHover={{ scale: 1.1, rotate: 3 }}
          >
            {car.range}
          </motion.span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-yellow-200">0-60 mph</span>
          <motion.span 
            className="text-sm font-bold"
            whileHover={{ scale: 1.1, x: -5 }}
          >
            {car.acceleration}
          </motion.span>
        </div>
        <motion.button
          className="w-full bg-yellow-600 text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-300 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Hide Details' : 'Buy Now'}
        </motion.button>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-yellow-200"
          >
            <p className="mb-2">Price: {car.price}</p>
            <a
              href={`https://wa.me/1234567890?text=I'm interested in buying the ${car.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition-colors duration-300"
            >
              <FaWhatsapp className="mr-2" />
              Contact via WhatsApp
            </a>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const CarList = () => {
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

  return (
    <section className="container mx-auto p-6 bg-white">
      <motion.h2
        className="text-6xl font-extrabold mb-12 text-center text-yellow-600 drop-shadow-lg"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
      >
        Electrifying Car Collection
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {cars.map((car, index) => (
          <CarCard key={car.id} car={car} index={index} />
        ))}
      </div>
    </section>
  );
};

export default CarList;
