"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import {
  Cloud,
  Wind,
  Droplets,
  Thermometer,
} from "lucide-react";

export default function WeatherCard() {

  const [weather, setWeather] = useState(null);

  useEffect(() => {

    fetchWeather();

    const interval = setInterval(() => {

      fetchWeather();

    }, 10000);

    return () => clearInterval(interval);

  }, []);

  const fetchWeather = async () => {

    try {

      const response = await axios.get(
        "https://punjabmandiai-1.onrender.com/weather/live"
      );

      setWeather(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <section>

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
            w-72
            h-72
            bg-cyan-500/10
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

              <p className="text-cyan-400 text-lg">

                Live Punjab Weather

              </p>

              <h2
                className="
                  text-5xl
                  font-black
                  mt-4
                "
              >

                {weather?.city || "Loading..."}

              </h2>

            </div>

            <div
              className="
                w-24
                h-24
                rounded-full
                bg-cyan-500/10
                flex
                items-center
                justify-center
              "
            >

              <Cloud className="w-12 h-12 text-cyan-400" />

            </div>

          </div>

          {/* Temperature */}

          <div className="mt-14">

            <h3
              className="
                text-8xl
                font-black
              "
            >

              {weather?.temperature || "--"}°C

            </h3>

            <p
              className="
                text-2xl
                text-gray-300
                mt-4
                capitalize
              "
            >

              {weather?.description || "Loading..."}

            </p>

          </div>

          {/* Grid */}

          <div
            className="
              grid
              md:grid-cols-3
              gap-6
              mt-14
            "
          >

            {/* Humidity */}

            <div
              className="
                glass
                rounded-3xl
                p-6
              "
            >

              <Droplets className="text-blue-400 w-10 h-10" />

              <p className="text-gray-400 mt-4">

                Humidity

              </p>

              <h4 className="text-4xl font-black mt-2">

                {weather?.humidity || "--"}%

              </h4>

            </div>

            {/* Wind */}

            <div
              className="
                glass
                rounded-3xl
                p-6
              "
            >

              <Wind className="text-green-400 w-10 h-10" />

              <p className="text-gray-400 mt-4">

                Wind Speed

              </p>

              <h4 className="text-4xl font-black mt-2">

                {weather?.wind_speed || "--"}

              </h4>

            </div>

            {/* Condition */}

            <div
              className="
                glass
                rounded-3xl
                p-6
              "
            >

              <Thermometer className="text-red-400 w-10 h-10" />

              <p className="text-gray-400 mt-4">

                Condition

              </p>

              <h4
                className="
                  text-3xl
                  font-black
                  mt-2
                "
              >

                {weather?.condition || "--"}

              </h4>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}