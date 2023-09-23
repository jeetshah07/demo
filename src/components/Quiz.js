import React, { useState } from 'react';
import Question from './Question.js';
import Result from './Result.js';
import "./quiz.css";

// Function to shuffle an array (Fisher-Yates algorithm).
function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const questions = [
    {
      text: "On a scale of 1 to 5, how often do you feel overwhelmed by daily tasks and responsibilities?",
      options: ["Rarely", "Sometimes", "Frequently", "Almost always", "Always"],
    },
    {
      text: "How often do you experience feelings of sadness or hopelessness?",
      options: ["Rarely", "Sometimes", "Frequently", "Almost always", "Always"],
    },
    {
      text: "How well do you sleep at night?",
      options: ["Very well", "Fairly well", "Neutral", "Not well", "Not at all"],
    },
    {
      text: "How often do you engage in activities you enjoy or find relaxing?",
      options: ["Daily", "Several times a week", "Once a week", "Rarely", "Never"],
    },
    {
      text: "How comfortable are you discussing your feelings with friends or family?",
      options: ["Very comfortable", "Somewhat comfortable", "Neutral", "Somewhat uncomfortable", "Very uncomfortable"],
    },
    {
      text: "How often do you engage in physical exercise or physical activity?",
      options: ["Daily", "Several times a week", "Once a week", "Rarely", "Never"],
    },
    {
      text: "How often do you feel a sense of accomplishment or fulfillment in your daily life?",
      options: ["Daily", "Several times a week", "Once a week", "Rarely", "Never"],
    },
    {
      text: "How often do you experience racing thoughts or difficulty concentrating?",
      options: ["Rarely", "Sometimes", "Frequently", "Almost always", "Always"],
    },
    {
      text: "How would you rate your overall level of stress?",
      options: ["Very low", "Low", "Moderate", "High", "Very high"],
    },
    {
      text: "How often do you engage in mindfulness or relaxation exercises?",
      options: ["Daily", "Several times a week", "Once a week", "Rarely", "Never"],
    },
    {
      text: "How satisfied are you with your personal relationships (e.g., friends, family, romantic)?",
      options: ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very dissatisfied"],
    },
    {
      text: "How often do you set and achieve goals in your life?",
      options: ["Regularly", "Sometimes", "Rarely", "Never", "I don't set goals"],
    },
    {
      text: "How would you rate your self-esteem and self-worth?",
      options: ["Very high", "High", "Moderate", "Low", "Very low"],
    },
    {
      text: "How often do you engage in hobbies or activities that bring you joy?",
      options: ["Daily", "Several times a week", "Once a week", "Rarely", "Never"],
    },
    {
      text: "How well do you cope with life's challenges and setbacks?",
      options: ["Very well", "Well", "Moderately", "Poorly", "Very poorly"],
    },
    {
      text: "How often do you experience physical symptoms of stress, such as headaches or muscle tension?",
      options: ["Rarely", "Sometimes", "Frequently", "Almost always", "Always"],
    },
    {
      text: "How would you describe your overall mood in the past month?",
      options: ["Very positive", "Positive", "Neutral", "Negative", "Very negative"],
    },
    {
      text: "How often do you engage in social activities and spend time with friends or loved ones?",
      options: ["Daily", "Several times a week", "Once a week", "Rarely", "Never"],
    },
    {
      text: "How well do you manage your time and prioritize tasks in your daily life?",
      options: ["Very well", "Well", "Moderately", "Poorly", "Very poorly"],
    },
    {
      text: "How often do you feel a sense of purpose or meaning in your life?",
      options: ["Daily", "Several times a week", "Once a week", "Rarely", "Never"],
    },
    {
      text: "How often do you experience feelings of loneliness or isolation?",
      options: ["Rarely", "Sometimes", "Frequently", "Almost always", "Always"],
    },
    {
      text: "How well do you manage and express your emotions, such as anger or sadness?",
      options: ["Very well", "Well", "Moderately", "Poorly", "Very poorly"],
    },
    {
      text: "How often do you engage in self-reflective practices, such as journaling or meditation?",
      options: ["Daily", "Several times a week", "Once a week", "Rarely", "Never"],
    },
    {
      text: "How often do you experience feelings of guilt or shame?",
      options: ["Rarely", "Sometimes", "Frequently", "Almost always", "Always"],
    },
    {
      text: "How well do you maintain a work-life balance?",
      options: ["Very well", "Well", "Moderate", "Poorly", "Very poorly"],
    },
    {
      text: "How often do you engage in activities that challenge your mind or creativity?",
      options: ["Daily", "Several times a week", "Once a week", "Rarely", "Never"],
    },
    {
      text: "How often do you engage in activities that promote self-care and self-love?",
      options: ["Daily", "Several times a week", "Once a week", "Rarely", "Never"],
    },
    {
      text: "How often do you find yourself dwelling on past mistakes or regrets?",
      options: ["Rarely", "Sometimes", "Frequently", "Almost always", "Always"],
    },
    {
      text: "How would you rate your ability to communicate your needs and boundaries to others?",
      options: ["Excellent", "Good", "Average", "Poor", "Very poor"],
    },
    {
      text: "How often do you engage in outdoor activities or spend time in nature?",
      options: ["Daily", "Several times a week", "Once a week", "Rarely", "Never"],
    },
    {
      text: "How well do you handle major life changes or transitions?",
      options: ["Very well", "Well", "Moderate", "Poorly", "Very poorly"],
    },
    {
      text: "How often do you feel a sense of connection to a greater purpose or spirituality?",
      options: ["Daily", "Several times a week", "Once a week", "Rarely", "Never"],
    },
    {
      text: "How often do you engage in acts of kindness or volunteer work?",
      options: ["Daily", "Several times a week", "Once a week", "Rarely", "Never"],
    },
    {
      text: "How often do you find yourself comparing yourself to others on social media or in real life?",
      options: ["Rarely", "Sometimes", "Frequently", "Almost always", "Always"],
    },
    
  {
    question: "How satisfied are you with your current living environment and surroundings?",
    options: ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very dissatisfied"],
  },
  {
    question: "How often do you engage in activities that challenge your mental abilities, such as puzzles or learning new skills?",
    options: ["Daily", "Several times a week", "Once a week", "Rarely", "Never"],
  },
  {
    question: "How well do you handle unexpected and stressful events?",
    options: ["Very well", "Well", "Moderate", "Poorly", "Very poorly"],
  },
  {
    question: "How often do you experience feelings of irritability or frustration?",
    options: ["Rarely", "Sometimes", "Frequently", "Almost always", "Always"],
  },
  {
    question: "How would you rate your ability to forgive and let go of grudges?",
    options: ["Excellent", "Good", "Average", "Poor", "Very poor"],
  },
  {
    question: "How often do you seek out opportunities for personal growth and self-improvement?",
    options: ["Daily", "Several times a week", "Once a week", "Rarely", "Never"],
  },
  {
    question: "How well do you manage your finances and financial stress?",
    options: ["Very well", "Well", "Moderate", "Poorly", "Very poorly"],
  },
  {
    question: "How often do you practice gratitude and express appreciation for the positive aspects of your life?",
    options: ["Daily", "Several times a week", "Once a week", "Rarely", "Never"],
  },
  {
    question: "How often do you engage in deep and meaningful conversations with friends or family?",
    options: ["Daily", "Several times a week", "Once a week", "Rarely", "Never"],
  },
  {
    question: "How would you rate your ability to bounce back from setbacks and adversity?",
    options: ["Excellent", "Good", "Average", "Poor", "Very poor"],
  },
  {
    question: "How often do you experience feelings of overwhelm due to a busy schedule or numerous responsibilities?",
    options: ["Rarely", "Sometimes", "Frequently", "Almost always", "Always"],
  },
  {
    question: "How well do you maintain a healthy work-life balance?",
    options: ["Very well", "Well", "Moderate", "Poorly", "Very poorly"],
  },
  {
    question: "How often do you engage in activities that promote physical health, such as regular exercise and a balanced diet?",
    options: ["Daily", "Several times a week", "Once a week", "Rarely", "Never"],
  }
  ];
function Quiz() {
  // Shuffle the list of questions and select the first 10.
  const shuffledQuestions = shuffleArray(questions).slice(0, 10);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const handleAnswerSubmit = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestionIndex < 9) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>
      {showResult ? (
        <Result answers={answers} />
      ) : (
        <Question
          question={currentQuestion}
          onAnswerSubmit={handleAnswerSubmit}
        />
      )}
    </div>
  );
}

export default Quiz;
