"use client";

import {
  useState,
  useEffect,
} from "react";

import axios from "axios";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import {
  MessageCircle,
  Send,
  X,
  Mic,
} from "lucide-react";

export default function FloatingChatbot() {

  const [open, setOpen] =
    useState(false);

  const [message, setMessage] =
    useState("en");

  const [messages, setMessages] =
    useState([
      {
        sender: "ai",
        text:
          "Hello Farmer 👋 Ask me about crops, weather, or mandi prices.",
      },
    ]);

  const {
    transcript,
    listening,
    resetTranscript,
  } = useSpeechRecognition();

  useEffect(() => {

    if (transcript) {

      setMessage(transcript);

    }

  }, [transcript]);

  const startListening = () => {

    resetTranscript();

    SpeechRecognition.startListening({

      continuous: false,

      language: "en-IN",

    });

  };

  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMessage = {

      sender: "user",

      text: message,

    };

    setMessages((prev) => [

      ...prev,

      userMessage,

    ]);

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/chat",
        {
          message,
          language,
        }
      );

      const aiMessage = {

        sender: "ai",

        text: response.data.response,

      };

      setMessages((prev) => [

        ...prev,

        aiMessage,

      ]);

    } catch (error) {

      console.log(error);

    }

    setMessage("");

    resetTranscript();

  };

  return (

    <div
      className="
        fixed
        bottom-8
        right-8
        z-50
      "
    >

      {/* Floating Button */}

      {!open && (

        <button
          onClick={() => setOpen(true)}
          className="
            w-16
            h-16
            rounded-full
            bg-green-500
            flex
            items-center
            justify-center
            shadow-2xl
            hover:scale-110
            transition
          "
        >

          <MessageCircle className="text-white" />

        </button>

      )}

      {/* Chat Window */}

      {open && (

        <div
          className="
            w-[380px]
            h-[550px]
            glass
            rounded-[32px]
            overflow-hidden
            flex
            flex-col
          "
        >

          {/* Header */}

          <div
            className="
              p-5
              border-b
              border-white/10
              flex
              items-center
              justify-between
            "
          >

            <div>

              <h3 className="font-bold text-xl">

                PunjabiMandi AI

              </h3>

              <p className="text-green-400 text-sm">

                {listening
                  ? "Listening..."
                  : "Online"}

              </p>

            </div>

            <button
              onClick={() => setOpen(false)}
            >

              <X />

            </button>

          </div>

          {/* Language Selector */}

<div className="px-5 pt-4">

  <select
    value={language}
    onChange={(e) =>
      setLanguage(e.target.value)
    }
    className="
      w-full
      bg-white/5
      border
      border-white/10
      rounded-2xl
      px-4
      py-3
      outline-none
    "
  >

    <option value="en">

      English

    </option>

    <option value="hi">

      हिन्दी

    </option>

    <option value="pa">

      ਪੰਜਾਬੀ

    </option>

  </select>

</div>
          {/* Messages */}

          <div
            className="
              flex-1
              overflow-y-auto
              p-5
              space-y-4
            "
          >

            {messages.map((msg, index) => (

              <div
                key={index}
                className={`
                  max-w-[80%]
                  p-4
                  rounded-2xl
                  ${
                    msg.sender === "user"
                      ? "ml-auto bg-green-500 text-white"
                      : "bg-white/10"
                  }
                `}
              >

                {msg.text}

              </div>

            ))}

          </div>

          {/* Input */}

          <div
            className="
              p-5
              border-t
              border-white/10
              flex
              gap-3
            "
          >

            <input
              type="text"
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              placeholder="Ask AI..."
              className="
                flex-1
                bg-white/5
                border
                border-white/10
                rounded-2xl
                px-4
                py-3
                outline-none
              "
            />

            {/* Mic */}

            <button
              onClick={startListening}
              className="
                w-12
                h-12
                rounded-xl
                bg-purple-500
                flex
                items-center
                justify-center
              "
            >

              <Mic className="text-white w-5 h-5" />

            </button>

            {/* Send */}

            <button
              onClick={sendMessage}
              className="
                w-12
                h-12
                rounded-xl
                bg-green-500
                flex
                items-center
                justify-center
              "
            >

              <Send className="text-white w-5 h-5" />

            </button>

          </div>

        </div>

      )}

    </div>
  );
}