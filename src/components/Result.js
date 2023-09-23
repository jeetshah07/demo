import React from 'react';

function Result({ answers }) {
  // Calculate the total score based on the user's answers.
  const totalScore = answers.reduce((acc, answer) => acc + parseInt(answer), 0);

  // Define your logic to evaluate the user's mental health based on the total score.
  // You can use conditional statements to determine the result.

  let resultMessage = 'Based on your responses, you might be experiencing:';
  let mentalHealthProblems = [];

  if (totalScore >= 30) {
    mentalHealthProblems.push('Severe stress and anxiety');
    mentalHealthProblems.push('Possible depression');
    mentalHealthProblems.push('Consider seeking professional help');
  } else if (totalScore >= 20) {
    mentalHealthProblems.push('Moderate stress and anxiety');
    mentalHealthProblems.push('Mild depression symptoms');
    mentalHealthProblems.push('Consider talking to a mental health professional');
  } else {
    mentalHealthProblems.push('Low stress and anxiety levels');
    mentalHealthProblems.push('No significant depression symptoms');
    mentalHealthProblems.push('Keep up with self-care practices');
  }

  // Render the results.
  return (
    <div>
      <h2>Quiz Result</h2>
      <p>{resultMessage}</p>
      <ul>
        {mentalHealthProblems.map((problem, index) => (
          <li key={index}>{problem}</li>
        ))}
      </ul>
    </div>
  );
}

export default Result;