import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaBolt, FaRoad, FaTachometerAlt, FaStar } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const CarCard = ({ car }) => {
  const { t } = useTranslation();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      id="car-list"
      className="bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-2xl shadow-2xl overflow-hidden transition-transform duration-500 hover:shadow-3xl transform hover:scale-105"
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
      <div className="p-6 bg-white text-yellow-600">
        <h3 className="text-2xl font-bold mb-3">{car.name}</h3>
        <p className="text-black mb-4">{t(`cars.${car.id}.description`)}</p>
        <div className="flex justify-between items-center mb-4">
          <motion.span 
            className="text-md text-black  flex items-center"
          >
            <FaBolt className="mr-2 text-blue-600" /> {t(`cars.${car.id}.price`)}
          </motion.span>
          <motion.span 
            className="bg-gray-200 text-black px-4 py-2 text-sm flex items-center"
          > 
            <FaRoad className="mr-2" /> {t(`cars.${car.id}.range`)}
          </motion.span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-800 flex items-center">
            <FaTachometerAlt className="mr-2 text-gray-800" /> {t('mph')} {/* Add translation key */}
          </span>
          <motion.span 
            className="text-sm text-gray-800"
          >
            {t(`cars.${car.id}.acceleration`)}
          </motion.span>
        </div>
        <motion.button
          className="w-full bg-gray-200 text-black py-2 px-4  hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center"
          onClick={() => setShowDetails(!showDetails)}
        >
          <FaStar className="mr-2 text-yellow-600" /> {showDetails ? t('carCard.hideDetails') : t('carCard.buyNow')}
        </motion.button>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-black"
          >
            <p className="mb-2">{t('carCard.price')}: {t(`cars.${car.id}.price`)}</p>
            <p className="mb-6">{t('carCard.recommendation')}: {t(`cars.${car.id}.recommendation`)}</p>
            <a
              href={`https://wa.me/1234567890?text=${encodeURIComponent(t('carCard.contactMsg', { carName: car.name }))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition-colors duration-300"
            >
              <FaWhatsapp className="mr-2" />
              {t('carCard.contact')}
            </a>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const CarList = () => {
  const { t } = useTranslation();
  const cars = [
    {
      id: 1,
      name: 'Tesla Model S',
      image: 'Tesla Model S.avif'
    },
    {
      id: 2,
      name: 'Ford Mustang Mach-E',
      image: 'Ford Mustang Mach-E.avif'
    },
    {
      id: 3,
      name: 'Porsche Taycan',
      image: 'Porsche Taycan.avif'
    },
    {
      id: 4,
      name: 'Chevrolet Bolt EV',
      image: 'Chevrolet Bolt EV.avif'
    },
    {
      id: 5,
      name: 'Audi e-tron GT',
      image: 'Audi e-tron GT.avif'
    },
    {
      id: 6,
      name: 'Rivian R1T',
      image: 'Rivian R1T.avif'
    }
  ];

  return (
    <section className="container mx-auto p-6 bg-white">
      <motion.h2
        className="text-6xl font-extrabold mb-12 text-center text-yellow-600 drop-shadow-lg"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
      >
        {t('carList.title')}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default CarList;
