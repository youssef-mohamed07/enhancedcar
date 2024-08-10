import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaSearch, FaCar, FaBolt, FaTachometerAlt, FaDollarSign } from 'react-icons/fa';
import { GiElectric } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { useTranslation } from 'react-i18next';


const cars = [
  {
    id: 1,
    name: 'Tesla Model S',
    image: 'Tesla Model S.avif',
    description: 'Luxury electric sedan with impressive range and performance.',
    price: '$79,990',
    range: '405 ',
    acceleration: '0-60 mph in 3.1s',
    category: 'Sedan',
  },
  {
    id: 2,
    name: 'Ford Mustang Mach-E',
    image: 'Ford Mustang Mach-E.avif',
    description: 'All-electric SUV with Mustang-inspired design and cutting-edge technology.',
    price: '$45,995',
    range: '314 ',
    acceleration: '0-60 mph in 3.5s',
    category: 'SUV',
  },
  {
    id: 3,
    name: 'Porsche Taycan',
    image: 'Porsche Taycan.avif',
    description: 'High-performance electric sports car with stunning design and handling.',
    price: '$82,700',
    range: '227 ',
    acceleration: '0-60 mph in 2.6s',
    category: 'Sports Car',
  },
  {
    id: 4,
    name: 'Chevrolet Bolt EV',
    image: 'Chevrolet Bolt EV.avif',
    description: 'Affordable and practical electric hatchback with good range.',
    price: '$31,995',
    range: '259 ',
    acceleration: '0-60 mph in 6.5s',
    category: 'Hatchback',
  },
  {
    id: 5,
    name: 'Audi e-tron GT',
    image: 'Audi e-tron GT.avif',
    description: 'Sleek and powerful electric grand tourer with quattro all-wheel drive.',
    price: '$99,900',
    range: '238 ',
    acceleration: '0-60 mph in 3.1s',
    category: 'Sedan',
  },
  {
    id: 6,
    name: 'Rivian R1T',
    image: 'Rivian R1T.avif',
    description: 'Innovative electric pickup truck with adventure-ready features.',
    price: '$67,500',
    range: '314 ',
    acceleration: '0-60 mph in 3.0s',
    category: 'Pickup',
  },
  {
    id: 7,
    name: 'Rivian R1T',
    image: 'Rivian R1T.avif',
    description: 'Innovative electric pickup truck with adventure-ready features.',
    price: '$67,500',
    range: '314 ',
    acceleration: '0-60 mph in 3.0s',
    category: 'Pickup',
  },
  {
    id: 8,
    name: 'Chevrolet Bolt EV',
    image: 'Chevrolet Bolt EV.avif',
    description: 'Affordable and practical electric hatchback with good range.',
    price: '$31,995',
    range: '259 ',
    acceleration: '0-60 mph in 6.5s',
    category: 'Hatchback',
  },
  {
    id: 9,
    name: 'Porsche Taycan',
    image: 'Porsche Taycan.avif',
    description: 'High-performance electric sports car with stunning design and handling.',
    price: '$82,700',
    range: '227 ',
    acceleration: '0-60 mph in 2.6s',
    category: 'Sports Car',
  },
];
const categories = ['All', 'Sedan', 'SUV', 'Sports Car', 'Hatchback', 'Pickup'];

const CarList = () => {
  const { t } = useTranslation();

  const [selectedCar, setSelectedCar] = useState(null);
  const [category, setCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCars = cars.filter(car => 
    (category === 'All' || car.category === category) &&
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" bg-gray-100 p-8" id='car-list'>
      <div className="max-w-[1200px] mx-auto">
        <motion.h1 
          className="text-[3.2rem] md:text-[2.9rem]   
          text-center text-yellow-600 mb-8 flex 
          items-center justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        >
          Cars Showcase
        </motion.h1>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex flex-wrap justify-center md:justify-start space-x-2 space-y-2">
            {categories.map(cat => (
              <motion.button 
                key={cat}
                className={`px-4 py-2 font-semibold flex items-center text-center ${category === cat ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setCategory(cat)}
                whileTap={{ scale: 0.95 }}
              >
                <FaCar className="mr-2" />
                {cat}
              </motion.button>
            ))}
          </div>
          <div className="relative">
            <input 
              type="text"
              placeholder="Search cars..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="focus:outline-none px-4 py-2 pl-10 shadow-lg w-full md:w-auto focus:shadow-2xl"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car, index) => (
            <motion.div 
              key={car.id} 
              className="bg-white overflow-hidden shadow-xl cursor-pointer transform perspective-1000"
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
              whileHover={{ 
                scale: 1.02, 
              }}
              onClick={() => setSelectedCar(car)}
            >
              <div className="h-full overflow-hidden relative">
                <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-start p-4">
                  <h2 className="text-2xl font-bold text-white drop-shadow-lg">{car.name}</h2>
                </div>
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
  className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  onClick={onClose}
>
  <motion.section
    className="bg-gray-300 rounded-lg p-6 w-full max-w-3xl sm:max-w-4xl relative"
    initial={{ scale: 0.5, rotateY: 90 }}
    animate={{ scale: 1, rotateY: 0 }}
    exit={{ scale: 0.5, rotateY: -90 }}
    transition={{ type: "spring", damping: 15 }}
    onClick={(e) => e.stopPropagation()}
  >
    <motion.button
      className="absolute top-4 right-4 text-black text-2xl hover:text-yellow-600 transition"
      onClick={onClose}
      whileHover={{ scale: 1.01 }}
    >
      <IoMdClose />
    </motion.button>

    {/* Card Title */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-yellow-600 flex items-center">
      {car.name}
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      <motion.div
        className="rounded-xl overflow-hidden shadow-lg"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Car Image */}
        <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
      </motion.div>

      {/* Specifications */}
      <div className="space-y-4 sm:space-y-6">
        <p className="text-base sm:text-lg md:text-xl text-black">{car.description}</p>
        <div className="bg-gray-100 p-4 sm:p-6 rounded-md text-gray-700">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Specifications</h3>
          <hr className="mb-6 sm:mb-8 border-2 rounded-xl" />
          <ul className="space-y-2 sm:space-y-3">
            <li className="flex items-center">
              <FaDollarSign className="mr-2 text-green-500" />
              <span className="font-semibold">Price:</span> &nbsp; {car.price}
              <span>
                <a
                  target="_blank"
                  href={`https://wa.me/1234567890?text=I'm interested in the ${car.name}`}
                  className="ml-2 text-yellow-600 italic"
                >
                  Contact
                </a>
              </span>
            </li>
            <li className="flex items-center">
              <FaBolt className="mr-2 text-blue-500" />
              <span className="font-semibold">Range:</span> &nbsp; {car.range} miles
            </li>
            <li className="flex items-center">
              <FaTachometerAlt className="mr-2 text-red-500" />
              <span className="font-semibold">Acceleration:</span> &nbsp; {car.acceleration}
            </li>
          </ul>
        </div>

        <motion.a
          href={`https://wa.me/1234567890?text=I'm interested in the ${car.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-green-500 text-white py-2 rounded-md text-center text-lg sm:text-xl font-bold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.01 }}
        >
          <FaWhatsapp className="mr-2 text-xl sm:text-2xl" />
          Contact via WhatsApp
        </motion.a>
      </div>
    </div>
  </motion.section>
</motion.div>

  );
};

export default CarList;