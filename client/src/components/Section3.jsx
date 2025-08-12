import React from 'react'
import { useState } from "react";
const Section3 = () => {
    const questions = [
        {
          question: "What should you do if you're being followed?",
          options: ["Confront the person", "Call a friend", "Go to a public place"],
          correct: 2,
        },
        {
          question: "Should you share your live location publicly?",
          options: ["Yes", "No"],
          correct: 1,
        },
      ];
    
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [showScore, setShowScore] = useState(false);
    
      const handleAnswer = (index) => {
        if (index === questions[currentQuestion].correct) {
          setScore(score + 1);
        }
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setShowScore(true);
        }
      };
    
      return (
        <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow py-36">
          <h2 className="text-2xl font-semibold mb-4">Quiz</h2>
          {showScore ? (
            <div>
              <p className="text-lg">Your score: {score} / {questions.length}</p>
            </div>
          ) : (
            <div>
              <p className="mb-4">{questions[currentQuestion].question}</p>
              <div className="flex flex-col gap-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="w-full px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      );
}

export default Section3
