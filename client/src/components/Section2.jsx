import React from 'react'
import { useState } from "react";

const Section2 = () => {
    const [votes, setVotes] = useState({ crime: 0, harassment: 0, other: 0 });

    const handleVote = (category) => {
      setVotes({ ...votes, [category]: votes[category] + 1 });
    };
  
    return (
      <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow py-36">
        <h2 className="text-2xl font-semibold mb-4">Polls</h2>
        <p className="mb-4">What is your biggest safety concern?</p>
        <div className="flex flex-col gap-3">
          {Object.entries(votes).map(([category, count]) => (
            <button
              key={category}
              onClick={() => handleVote(category)}
              className="w-full px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)} ({count} votes)
            </button>
          ))}
        </div>
      </div>
    );
}

export default Section2

