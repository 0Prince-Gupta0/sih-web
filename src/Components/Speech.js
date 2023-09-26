import React, { useState, useEffect, useRef } from 'react';
import classes from './Speech.module.css'

const Speech = () => {
  const [listening, setListening] = useState(false);
  const [interimTranscript, setInterimTranscript] = useState('');
  const [finalTranscript, setFinalTranscript] = useState('');
  const transcriptRef = useRef(null);
  const recognition = useRef(null);

  useEffect(() => {
    recognition.current = new window.webkitSpeechRecognition();
    recognition.current.continuous = true;
    recognition.current.interimResults = true;
    recognition.current.lang = 'hi-IN';

    recognition.current.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }

      console.log(interimTranscript, finalTranscript);
      setInterimTranscript(interimTranscript);
      setFinalTranscript(finalTranscript);
    };

    recognition.current.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    return () => {
      recognition.current.onresult = null;
      recognition.current.onerror = null;
    };
  }, []);

  const toggleListening = () => {
    if (!listening) {
      recognition.current.start();
      setListening(true);
    } else {
      recognition.current.stop();
      setListening(false);
    }
  };

  return (
    <div className={classes.transcript}>
        
        <textarea
        rows="25"
        cols="206"
        ref={transcriptRef}
        value={finalTranscript || interimTranscript}
        readOnly
      />

      <button id="action" onClick={toggleListening}>
        {listening ? 'रूके' : 'बोले'}
      </button>
    </div>
  );
};

export default Speech;
