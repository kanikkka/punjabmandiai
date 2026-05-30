"use client";

import { useEffect, useState } from "react";

import axios from "axios";

export default function FestivalPrediction() {

  const [data, setData] =
    useState(null);

  useEffect(() => {

    fetchFestivalPrediction();

  }, []);

  const fetchFestivalPrediction = async () => {

    try {

      const response = await axios.get(
        "https://punjabmandiai-1.onrender.com/festival/predict"
      );

      setData(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  if (!data) {

    return null;

  }

  return (

    <section className="px-6 py-24">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="mb-14">

          <p className="text-yellow-400 text-lg">

            Festival + MSP Intelligence

          </p>

          <h2
            className="
              text-5xl
              font-black
              mt-4
            "
          >

            Seasonal Market Prediction

          </h2>

        </div>

        {/* Main Card */}

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
              bg-yellow-500/10
              blur-[120px]
              rounded-full
            "
          />

          <div className="relative z-10">

            <div
              className="
                grid
                md:grid-cols-4
                gap-6
              "
            >

              {/* Current Price */}

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

                  ₹{data.current_price}

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
                    text-green-400
                  "
                >

                  ₹{data.predicted_price}

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

                  {data.change_percent}%

                </h3>

              </div>

              {/* Reason */}

              <div
                className="
                  glass
                  rounded-3xl
                  p-8
                "
              >

                <p className="text-gray-400">

                  Market Driver

                </p>

                <h3
                  className="
                    text-2xl
                    font-black
                    mt-4
                    text-yellow-400
                  "
                >

                  {data.reason}

                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}