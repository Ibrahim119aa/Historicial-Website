import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div className="relative w-full h-[50vh] sm:h-[70vh] overflow-hidden bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]">
      <motion.img
        src="/assets/images/Histopedia.png"
        alt="Histopedia Banner"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="w-full h-full object-cover object-center absolute inset-0"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />

      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-white text-3xl sm:text-5xl font-bold tracking-tight font-sans bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow">
          Welcome to Histopedia
        </h1>
        <p className="mt-4 text-gray-300 text-sm sm:text-lg max-w-xl">
          Dive into a curated world of historical facts, articles, quizzes, and knowledge from across the globe.
        </p>
      </motion.div>
    </div>
  );
};

export default Banner;
