import React from 'react';
import TextToSpeech from './components/TextToSpeech';
import SpeechRecognitionComponent from './components/SpeechRecognition';
import RandomPhrase from './components/RandomPhrase';

function App() {
  return (
    <div className="App">
      <h1>Speech Improvement Tool</h1>
      <TextToSpeech />
      <SpeechRecognitionComponent />
      <RandomPhrase />
    </div>
  );
}

export default App;
