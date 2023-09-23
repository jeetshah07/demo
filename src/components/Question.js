import React, { useState } from 'react';

function Question({ question, onAnswerSubmit }) {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = () => {
    onAnswerSubmit(selectedAnswer);
    setSelectedAnswer('');
  };

  return (
    <div>
      <h2>{question.text}</h2>
      <form>
        {question.options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selectedAnswer === option}
              onChange={handleAnswerChange}
            />
            {option}
          </label>
        ))}
      </form>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
}

export default Question;
