"use client";

import {

  useState,

} from "react";

import axios from "axios";

export default function RealMLPrediction() {

  const [prediction,
    setPrediction] =
    useState(null);

  const [loading,
    setLoading] =
    useState(false);

  const getPrediction =
    async () => {

      try {

        setLoading(true);

        const response =
          await axios.get(

            "https://punjabmandiai-1.onrender.com/ml/predict"

          );

        setPrediction(
          response.data
        );

      }

      catch (error) {

        console.log(error);

      }

      finally {

        setLoading(false);

      }

    };

  return (

    <section className="px-6 py-24">

      <div className="max-w-5xl mx-auto">

        <div
          className="
            glass
            rounded-[40px]
            p-12
          "
        >

          <p className="text-cyan-400 text-lg">

            Real AI Forecasting

          </p>

          <h2
            className="
              text-5xl
              font-black
              mt-4
            "
          >

            XGBoost Market Prediction

          </h2>

          {/* Button */}

          <button
            onClick={getPrediction}
            className="
              mt-10
              px-10
              py-5
              rounded-full
              bg-cyan-400
              text-black
              font-bold
              text-xl
              hover:scale-105
              transition
            "
          >

            {
              loading
              ?
              "Analyzing..."
              :
              "Generate Prediction"
            }

          </button>

          {/* Result */}

          {
            prediction && (

              <div
                className="
                  mt-14
                  grid
                  md:grid-cols-3
                  gap-6
                "
              >

                <div
                  className="
                    glass
                    rounded-3xl
                    p-8
                  "
                >

                  <p className="text-gray-400">

                    Commodity

                  </p>

                  <h3
                    className="
                      text-3xl
                      font-bold
                      mt-3
                    "
                  >

                    {
                      prediction.commodity
                    }

                  </h3>

                </div>

                <div
                  className="
                    glass
                    rounded-3xl
                    p-8
                  "
                >

                  <p className="text-gray-400">

                    Market

                  </p>

                  <h3
                    className="
                      text-3xl
                      font-bold
                      mt-3
                    "
                  >

                    {
                      prediction.market
                    }

                  </h3>

                </div>

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
                      text-3xl
                      font-bold
                      mt-3
                    "
                  >

                    ₹
                    {
                      prediction.predicted_price
                    }

                  </h3>

                </div>

              </div>

            )
          }

        </div>

      </div>

    </section>
  );
}