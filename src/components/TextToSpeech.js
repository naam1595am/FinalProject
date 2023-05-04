import React from 'react';

const TextToSpeech = () => {
  const handleClick = () => {
    const pageContent = document.body.innerText;
    tts(pageContent);
  };

  const tts = (speechText) => {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = speechText;

    window.speechSynthesis.speak(speech);
  };

  return (
    <div>
      <button id="announce" onClick={handleClick}>Announce Emotion</button>
    </div>
  );
};

export default TextToSpeech;
