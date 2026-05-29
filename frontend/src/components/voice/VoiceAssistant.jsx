"use client";

import { useState } from "react";

import {
  Mic,
  MicOff,
} from "lucide-react";

export default function VoiceAssistant() {

  const [listening, setListening] =
    useState(false);

  const startListening = () => {

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

      alert(
        "Speech Recognition not supported"
      );

      return;

    }

    const recognition =
      new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.start();

    setListening(true);

    recognition.onresult = (event) => {

      const text =
        event.results[0][0].transcript;

      alert(
        "Farmer Said: " + text
      );

    };

    recognition.onend = () => {

      setListening(false);

    };

  };

  return (

    <div
      className="
        fixed
        bottom-8
        left-8
        z-50
      "
    >

      <button
        onClick={startListening}
        className={`
          w-16
          h-16
          rounded-full
          flex
          items-center
          justify-center
          shadow-2xl
          transition
          duration-300
          ${
            listening
              ? "bg-red-500 animate-pulse"
              : "bg-purple-500 hover:scale-110"
          }
        `}
      >

        {listening ? (

          <MicOff className="text-white w-8 h-8" />

        ) : (

          <Mic className="text-white w-8 h-8" />

        )}

      </button>

    </div>
  );
}