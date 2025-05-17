import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BookOpenText, Globe, FileText, GraduationCap } from 'lucide-react';

const cards = [
  {
    id: 'blog',
    title: 'Blog',
    description: 'Read insightful articles and updates.',
    icon: <FileText className="w-8 h-8" />,
    url: '/blog',
  },
  {
    id: 'quiz',
    title: 'Quiz',
    description: 'Challenge yourself with fun quizzes.',
    icon: <GraduationCap className="w-8 h-8" />,
    url: '/quiz',
  },
  {
    id: 'world',
    title: 'World Page',
    description: 'Explore countries, cultures and more.',
    icon: <Globe className="w-8 h-8" />,
    url: '/world',
  },
  {
    id: 'encyclopedia',
    title: 'Encyclopedia',
    description: 'A vast library of curated knowledge.',
    icon: <BookOpenText className="w-8 h-8" />,
    url: '/encyclopedia',
  },
];

const Body = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0e0e0e] min-h-screen px-6 py-16 font-sans text-white">
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-center mb-16 tracking-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore Our Features
      </motion.h1>

      <div className="grid gap-12 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.05, rotate: [-1, 1, 0] }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
            className="bg-[#1c1c1c]/70 backdrop-blur-sm border border-[#333] shadow-xl rounded-2xl p-6 flex flex-col items-start transition-all duration-300 cursor-pointer group hover:bg-[#272727]/90"
            onClick={() => navigate(card.url)}
          >
            <div className="bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-500 p-3 rounded-xl shadow-md mb-5 transform transition-transform duration-300 group-hover:rotate-6">
              {card.icon}
            </div>
            <h2 className="text-xl font-bold mb-2 text-white tracking-tight">{card.title}</h2>
            <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Body;
