"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import {
  TrendingUp,
  TrendingDown,
  Brain,
} from "lucide-react";

const crops = [

  "wheat",
  "rice",
  "cotton",
  "maize",
  "potato",
  "tomato",

];

export default function PredictionCard() {

  const [crop, setCrop] =
    useState("wheat");

  const [data, setData] =
    useState(null);

  useEffect(() => {

    fetchPrediction();

  }, [crop]);

  const fetchPrediction = async () => {

    try {

      const response = await axios.get(
        `https://punjabmandiai-1.onrender.com/predict/${crop}`
      );

      setData(response.data.prediction);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <section className="px-6 py-24">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="mb-14">

          <p className="text-green-400 text-lg">
            AI Forecasting Engine
          </p>

          <h2 className="text-5xl font-black mt-4">

            Smart Crop Prediction

          </h2>

        </div>

        {/* Card */}

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
              bg-purple-500/10
              blur-[120px]
              rounded-full
            "
          />

          <div className="relative z-10">

            {/* Top */}

            <div
              className="
                flex
                items-center
                justify-between
                flex-wrap
                gap-6
              "
            >

              <div>

                <p className="text-gray-400">

                  Select Crop

                </p>

                <select
                  value={crop}
                  onChange={(e) =>
                    setCrop(e.target.value)
                  }
                  className="
                    mt-4
                    bg-black/40
                    border
                    border-white/10
                    rounded-2xl
                    px-6
                    py-3
                    text-white
                    outline-none
                  "
                >

                  {crops.map((item) => (

                    <option
                      key={item}
                      value={item}
                    >

                      {item}

                    </option>

                  ))}

                </select>

              </div>

              {/* Trend */}

              <div
                className={`
                  px-6
                  py-3
                  rounded-2xl
                  flex
                  items-center
                  gap-3
                  ${
                    data?.trend === "UP"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }
                `}
              >

                {data?.trend === "UP" ? (

                  <TrendingUp />

                ) : (

                  <TrendingDown />

                )}

                <span className="font-bold">

                  {data?.trend}

                </span>

              </div>

            </div>

            {/* Prices */}

            <div
              className="
                grid
                md:grid-cols-2
                gap-8
                mt-14
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

                  Current Price

                </p>

                <h3
                  className="
                    text-6xl
                    font-black
                    mt-4
                  "
                >

                  ₹
                  {data?.current_price}

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
                    text-6xl
                    font-black
                    mt-4
                    text-green-400
                  "
                >

                  ₹
                  {data?.predicted_price}

                </h3>

              </div>

            </div>

            {/* Insights */}

            <div
              className="
                grid
                md:grid-cols-3
                gap-6
                mt-10
              "
            >

              <div
                className="
                  glass
                  rounded-3xl
                  p-6
                "
              >

                <p className="text-gray-400">

                  Market Demand

                </p>

                <h4 className="text-3xl font-black mt-3">

                  {data?.market_demand}

                </h4>

              </div>

              <div
                className="
                  glass
                  rounded-3xl
                  p-6
                "
              >

                <p className="text-gray-400">

                  Weather Impact

                </p>

                <h4 className="text-3xl font-black mt-3">

                  {data?.weather_impact}

                </h4>

              </div>

              <div
                className="
                  glass
                  rounded-3xl
                  p-6
                "
              >

                <p className="text-gray-400">

                  Recommendation

                </p>

                <h4
                  className="
                    text-3xl
                    font-black
                    mt-3
                    text-yellow-400
                  "
                >

                  {data?.recommendation}

                </h4>

              </div>

            </div>

            {/* Bottom */}

            <div
              className="
                flex
                items-center
                justify-between
                flex-wrap
                gap-6
                mt-12
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <Brain className="text-purple-400" />

                <span className="text-gray-300">

                  AI Confidence:
                  {" "}
                  {data?.confidence}

                </span>

              </div>

              <p className="text-gray-500">

                Updated:
                {" "}
                {data?.updated_at}

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}