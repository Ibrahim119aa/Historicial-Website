import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const QuizCategoryPage = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();
  const user = localStorage.getItem('users');

  const QuizDetail = (url) => {
    if (user) return navigate(url);
    alert('Login First');
    navigate('/sign-in');
  };

  useEffect(() => {
    const fetchQuizzes = async () => {
      const snapshot = await getDocs(collection(db, 'quizzes'));
      const quizList = snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((q) => q.status === 'published');
      setQuizzes(quizList);
    };

    fetchQuizzes();
  }, []);

  return (
    <div className="bg-[#0f0f0f] min-h-screen px-6 py-8 font-inter text-white">
      <h1 className="text-4xl font-extrabold text-center mb-10 tracking-tight">Explore Quiz Categories</h1>
      <div className="grid gap-8 mx-auto max-w-7xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {quizzes.map((quiz) => (
          <motion.div
            key={quiz.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#1a1a1a] border border-gray-700 shadow-md rounded-2xl overflow-hidden transition-all duration-300"
          >
            <img
              src={quiz.imageUrl}
              alt="quiz category"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{quiz.title}</h2>
              <p className="text-sm text-gray-400 mb-1">Category: <span className="font-medium text-white">{quiz.category}</span></p>
              <p className="text-sm text-gray-500 mb-1">Questions: {quiz.questions?.length || 0}</p>
              <p className="text-xs text-gray-600 mt-1">
                Published: {quiz?.publishDate || 'N/A'}
              </p>
              <button
                onClick={() => QuizDetail(`/quizz/${quiz.id}`)}
                className="mt-4 w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 transition-colors duration-300 font-medium text-white"
              >
                Start Quiz
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QuizCategoryPage;
