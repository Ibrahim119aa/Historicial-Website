import React, { useEffect, useState } from 'react';
import { doc, addDoc, getDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const QuizPage = () => {
  const { Id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const docRef = doc(db, 'quizzes', Id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setQuiz({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error('Quiz not found!');
        }
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
    };

    fetchQuiz();
  }, [Id]);

  const handleOptionClick = (questionIndex, optionIndex) => {
    if (!isSubmitted) {
      setSelectedOptions(prev => ({
        ...prev,
        [questionIndex]: optionIndex
      }));
    }
  };

  const handleSubmit = async () => {
    if (isSubmitted) return;

    let totalScore = 0;
    quiz.questions.forEach((q, index) => {
      if (selectedOptions[index] === q.correctIndex) {
        totalScore += 1;
      }
    });

    setScore(totalScore);
    await addDoc(collection(db, "quizresult"), {
      userid: JSON.parse(localStorage.getItem("users")).uid,
      quizid: Id,
      percentage: (totalScore / quiz.questions.length) * 100,
      createdAt: new Date()
    });

    setIsSubmitted(true);
  };

  if (!quiz) return <p className="text-center text-gray-400 mt-10">Loading quiz...</p>;

  return (
    <div className="bg-[#0d1117] min-h-screen text-white font-sans px-4 py-10">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-2">{quiz.title}</h1>
        <p className="text-center text-gray-400 mb-8">
          {quiz.topic} | {quiz.category}
        </p>

        {quiz.questions?.map((q, qIndex) => (
          <motion.div
            key={qIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: qIndex * 0.1 }}
            className="mb-8 bg-[#161b22] p-6 rounded-2xl border border-[#30363d]"
          >
            <p className="text-xl font-semibold mb-4">{qIndex + 1}. {q.question}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {q.options.map((opt, optIndex) => {
                const isSelected = selectedOptions[qIndex] === optIndex;
                const isCorrect = optIndex === q.correctIndex;
                const isAnswered = selectedOptions[qIndex] !== undefined;

                let btnClass = 'py-2 px-4 rounded-xl transition-all duration-200 border text-left';

                if (isSubmitted) {
                  if (isCorrect) {
                    btnClass += ' border-green-500 bg-green-600 text-white';
                  } else if (isSelected) {
                    btnClass += ' bg-red-600 text-white border-red-500';
                  } else {
                    btnClass += ' border-gray-700 text-gray-400';
                  }
                } else {
                  btnClass += isSelected
                    ? ' bg-blue-600 text-white border-blue-500'
                    : ' bg-[#1f2937] hover:bg-[#374151] border-gray-600 text-gray-200';
                }

                return (
                  <button
                    key={optIndex}
                    onClick={() => handleOptionClick(qIndex, optIndex)}
                    disabled={isSubmitted}
                    className={btnClass}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {isSubmitted && (
              <div className="mt-4 text-sm text-gray-400">
                <p>Your answer: <strong>{q.options[selectedOptions[qIndex]] || 'Not answered'}</strong></p>
                <p>Correct answer: <strong className="text-green-400">{q.options[q.correctIndex]}</strong></p>
              </div>
            )}
          </motion.div>
        ))}

        <div className="text-center mt-12">
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl text-lg font-medium transition"
            >
              Submit Quiz
            </button>
          ) : (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ delay: 0.2 }}
              className="text-2xl font-semibold text-green-400"
            >
              ✅ You scored {score} out of {quiz.questions.length}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default QuizPage;
