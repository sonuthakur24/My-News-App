// src/components/Quiz.js
import React, { useState } from 'react';

export default function Quiz({ topic }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Define your quiz questions here based on the 'topic' prop
  const questions = [
    {
      text: 'What does DoS stand for in cybersecurity?',
      options: [
        { id: 0, text: 'Denial-of-Service', isCorrect: true },
        { id: 1, text: 'Data-over-Satellite', isCorrect: false },
        { id: 2, text: 'Digital Operating System', isCorrect: false },
        { id: 3, text: 'Distributed Online Security', isCorrect: false },
      ],
    },
    // ... more questions related to the 'topic'
  ];

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="quiz-container">
      {showResults ? (
        <div className="results">
          <h2 className="text-2xl font-bold text-black">Quiz Results</h2>
          <p className="text-black">You scored {score} out of {questions.length}</p>
        </div>
      ) : (
        <div className="question-card">
          <h2 className="text-2xl font-bold text-black">{questions[currentQuestion].text}</h2>
          <div className="options mt-4">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswerClick(option.isCorrect)}
                className="block w-1/3 p-2 mb-2 text-black bg-white border border-gray-300 rounded hover:bg-gray-100 text-left"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
