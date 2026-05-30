"use client";

import { useEffect, useState } from "react";

import axios from "axios";

export default function AIPredictionCard() {

  const [prediction, setPrediction] =
    useState(null);

  useEffect(() => {

    fetchPrediction();

    const interval = setInterval(() => {

      fetchPrediction();

    }, 30000);

    return () => clearInterval(interval);

  }, []);

  const fetchPrediction = async () => {

    try {

      const response = await axios.get(
        "https://punjabmandiai-1.onrender.com/ai/predict"
      );

      setPrediction(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  if (!prediction) {

    return null;

  }

  return (

    <section className="px-6 py-24">

      <div className="max-w-7xl mx-auto">

        <div
          className="
            glass
            rounded-[40px]
            p-10
            overflow-hidden
            relative
          "
        >

          {/* Glow */}

          <div
            className="
              absolute
              top-0
              right-0
              w-96
              h-96
              bg-green-500/10
              blur-[120px]
              rounded-full
            "
          />

          <div className="relative z-10">

            <p className="text-green-400 text-lg">

              AI Forecast Engine

            </p>

            <h2
              className="
                text-5xl
                font-black
                mt-4
              "
            >

              Smart Price Prediction

            </h2>

            <div
              className="
                grid
                md:grid-cols-4
                gap-6
                mt-14
              "
            >

              {/* Current */}

              <div
                className="
                  glass
                  rounded-3xl
                  p-8
                "
              >

                <p className="text-gray-400">

                  Current Price

                </p>

                <h3
                  className="
                    text-4xl
                    font-black
                    mt-4
                  "
                >

                  ₹
                  {prediction.current_price}

                </h3>

              </div>

              {/* Predicted */}

              <div
                className="
                  glass
                  rounded-3xl
                  p-8
                "
              >

                <p className="text-gray-400">

                  Predicted Price

                </p>

                <h3
                  className="
                    text-4xl
                    font-black
                    mt-4
                  "
                >

                  ₹
                  {prediction.predicted_price}

                </h3>

              </div>

              {/* Trend */}

              <div
                className="
                  glass
                  rounded-3xl
                  p-8
                "
              >

                <p className="text-gray-400">

                  Trend

                </p>

                <h3
                  className={`
                    text-4xl
                    font-black
                    mt-4
                    ${
                      prediction.trend ===
                      "increase"
                        ? "text-green-400"
                        : "text-red-400"
                    }
                  `}
                >

                  {prediction.trend}

                </h3>

              </div>

              {/* Change */}

              <div
                className="
                  glass
                  rounded-3xl
                  p-8
                "
              >

                <p className="text-gray-400">

                  Change %

                </p>

                <h3
                  className="
                    text-4xl
                    font-black
                    mt-4
                    text-cyan-400
                  "
                >

                  {prediction.change_percent}%

                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}