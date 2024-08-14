// src/components/TextToSpeech.js
import React, { useState } from 'react';

const TextToSpeech = () => {
  const [text, setText] = useState('');

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <h2>Type and Listen</h2>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <button onClick={speak}>Speak</button>
    </div>
  );
};

export default TextToSpeech;
