// src/components/RandomPhrase.js
import React, { useState } from 'react';

const phrases = [
  "Hello, how are you?",
  "The weather is nice today.",
  "I love programming.",
  "React is awesome!",
  // Add more phrases here
];

const RandomPhrase = () => {
  const [randomPhrase, setRandomPhrase] = useState('');

  const generatePhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomPhrase(phrases[randomIndex]);
  };

  return (
    <div>
      <h2>Random Phrase Generator</h2>
      <button onClick={generatePhrase}>Generate Phrase</button>
      <p>{randomPhrase}</p>
    </div>
  );
};

export default RandomPhrase;
