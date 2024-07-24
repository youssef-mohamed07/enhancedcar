import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative bg-cover bg-center bg-no-repeat h-screen overflow-hidden"
      style={{
        backgroundImage: 'url("aa.webp")',
      }}
    >
      {/* Animated background overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 100%)',
            'linear-gradient(45deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      ></motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl font-bold mb-6 leading-tight md:text-7xl text-yellow-500 drop-shadow-lg"
        >
          Find Your Dream Car
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg mb-8 max-w-xl md:text-xl text-white"
        >
          Buy or rent the perfect car for your needs with ease and confidence.
        </motion.p>

        <motion.div variants={itemVariants}>
          <button className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50">
            Browse Cars
          </button>
        </motion.div>

        {/* 3D floating car model */}
        <motion.div
          className="absolute bottom-10 right-10 w-64 h-36 hidden lg:block"
          animate={{
            y: [0, -15, 0],
            rotateY: [0, 360],
          }}
          transition={{
            y: {
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            },
            rotateY: {
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            },
          }}
        >
          <div className="w-full h-full bg-contain bg-center bg-no-repeat"
               style={{
                 backgroundImage: 'url("car-silhouette.png")', // Replace with an actual car silhouette image
                 filter: 'drop-shadow(0 0 15px rgba(255, 255, 0, 0.4))',
               }}
          ></div>
        </motion.div>

        {/* Animated lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-yellow-500 opacity-40"
            style={{
              top: `${15 + i * 12}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              scaleX: [0, 1, 0],
              originX: ['left', 'right', 'left'],
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + i,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Pulsating circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-yellow-500"
            style={{
              top: `${25 + i * 15}%`,
              left: `${10 + i * 20}%`,
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + i,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
