"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import {
  TrendingUp,
  TrendingDown,
  Brain,
} from "lucide-react";

export default function RealPrediction() {

  const [data, setData] = useState(null);

  useEffect(() => {

    fetchPrediction();

  }, []);

  const fetchPrediction = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/predict/wheat"
      );

      setData(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  if (!data) {

    return (

      <div className="text-center py-20">

        Loading AI Prediction...

      </div>

    );

  }

  const prediction = data.prediction;

  return (

    <section className="px-6 py-24">

      <div className="max-w-6xl mx-auto">

        <div
          className="
            glass
            rounded-[40px]
            p-10
            relative
            overflow-hidden
          "
        >

          {/* Glow */}

          <div
            className="
              absolute
              top-0
              right-0
              w-72
              h-72
              bg-green-500/10
              blur-[120px]
              rounded-full
            "
          />

          <div className="relative z-10">

            {/* Heading */}

            <div
              className="
                flex
                items-center
                justify-between
                flex-wrap
                gap-6
                mb-14
              "
            >

              <div>

                <p className="text-green-400 text-lg">
                  AI Prediction Engine
                </p>

                <h2 className="text-5xl font-black mt-3">

                  Wheat Forecast

                </h2>

              </div>

              <div
                className="
                  px-5
                  py-3
                  rounded-2xl
                  bg-green-500/20
                  border
                  border-green-500/20
                  text-green-400
                  font-semibold
                "
              >

                LIVE AI

              </div>

            </div>

            {/* Grid */}

            <div className="grid md:grid-cols-3 gap-8">

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

                <h3 className="text-5xl font-black mt-4">

                  ₹{prediction.current_price}

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

                <h3 className="text-5xl font-black mt-4 text-green-400">

                  ₹{prediction.predicted_price}

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
                  Market Trend
                </p>

                <div className="flex items-center gap-4 mt-4">

                  {prediction.trend === "UP" ? (

                    <TrendingUp className="text-green-400 w-12 h-12" />

                  ) : (

                    <TrendingDown className="text-red-400 w-12 h-12" />

                  )}

                  <h3 className="text-4xl font-black">

                    {prediction.trend}

                  </h3>

                </div>

              </div>

            </div>

            {/* Confidence */}

            <div
              className="
                glass
                rounded-3xl
                p-8
                mt-10
                flex
                items-center
                justify-between
                flex-wrap
                gap-6
              "
            >

              <div className="flex items-center gap-4">

                <Brain className="w-12 h-12 text-purple-400" />

                <div>

                  <p className="text-gray-400">
                    AI Confidence
                  </p>

                  <h3 className="text-4xl font-black mt-2">

                    {prediction.confidence}

                  </h3>

                </div>

              </div>

              <div
                className="
                  h-4
                  w-[300px]
                  bg-white/10
                  rounded-full
                  overflow-hidden
                "
              >

                <div
                  className="
                    h-full
                    bg-gradient-to-r
                    from-green-400
                    to-green-600
                    rounded-full
                  "
                  style={{
                    width: prediction.confidence,
                  }}
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}