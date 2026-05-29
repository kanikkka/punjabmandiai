"use client";

import { useState } from "react";

export default function AIChatbot() {

  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");

  const askAI = () => {

    const q =
      question.toLowerCase();

    if (
      q.includes("wheat")
    ) {

      setAnswer(
        "Patiala mandi currently offers the best wheat pricing."
      );

    }

    else if (
      q.includes("rice")
    ) {

      setAnswer(
        "Ludhiana mandi has strong rice demand today."
      );

    }

    else if (
      q.includes("weather")
    ) {

      setAnswer(
        "High temperature risk detected in Punjab regions."
      );

    }

    else if (
      q.includes("fire")
    ) {

      setAnswer(
        "NASA satellite detected active fire hotspots."
      );

    }

    else {

      setAnswer(
        "AI is analyzing market conditions."
      );

    }

  };

  return (

    <section className="px-6 py-24">

      <div className="max-w-4xl mx-auto">

        <div
          className="
            glass
            rounded-[40px]
            p-12
          "
        >

          <p className="text-cyan-400 text-lg">

            AI Agriculture Assistant

          </p>

          <h2
            className="
              text-5xl
              font-black
              mt-4
            "
          >

            Smart Farmer Chatbot

          </h2>

          {/* Input */}

          <div className="mt-10">

            <input
              type="text"
              placeholder="
                Ask AI anything...
              "
              value={question}
              onChange={(e) =>
                setQuestion(
                  e.target.value
                )
              }
              className="
                w-full
                p-5
                rounded-2xl
                bg-white/10
                border
                border-white/10
                outline-none
                text-xl
              "
            />

            <button
              onClick={askAI}
              className="
                mt-6
                px-10
                py-4
                rounded-full
                bg-cyan-500
                text-black
                font-bold
                hover:scale-105
                transition
              "
            >

              Ask AI

            </button>

          </div>

          {/* Answer */}

          <div
            className="
              mt-10
              glass
              rounded-3xl
              p-8
            "
          >

            <p className="text-gray-400">

              AI Response

            </p>

            <h3
              className="
                text-3xl
                font-bold
                mt-4
              "
            >

              {
                answer ||
                "Waiting for question..."
              }

            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}