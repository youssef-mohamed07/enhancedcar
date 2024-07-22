import React from 'react';
import { motion } from 'framer-motion';

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
    <section className="container mx-auto p-6 bg-gray-100">
      <motion.h2 
        className="text-4xl font-bold mb-8 text-center text-black"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Available Electric Cars
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car, index) => (
          <motion.div 
            key={car.id} 
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{car.name}</h3>
              <p className="text-gray-600 mb-4">{car.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-green-600">{car.price}</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {car.range}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">0-60 mph</span>
                <span className="text-sm font-semibold text-gray-700">{car.acceleration}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CarList;