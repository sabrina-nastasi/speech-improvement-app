// src/components/SpeechRecognition.js
import React, { useState } from 'react';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const SpeechRecognitionComponent = () => {
  const [feedback, setFeedback] = useState('');
  const phrase = "The quick brown fox jumps over the lazy dog"; // Example phrase

  const startListening = () => {
    recognition.start();
    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      if (spokenText.toLowerCase() === phrase.toLowerCase()) {
        setFeedback("Correct!");
      } else {
        setFeedback("Try again.");
      }
    };
  };

  return (
    <div>
      <h2>Practice Speaking</h2>
      <p>Phrase: {phrase}</p>
      <button onClick={startListening}>Start Speaking</button>
      <p>{feedback}</p>
    </div>
  );
};

export default SpeechRecognitionComponent;
