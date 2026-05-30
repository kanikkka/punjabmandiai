"use client";

import { useEffect, useState } from "react";

import axios from "axios";

export default function NasaFireMonitor() {

  const [fires, setFires] =
    useState([]);

  useEffect(() => {

    fetchFireData();

  }, []);

  const fetchFireData = async () => {

    try {

      const response = await axios.get(
        "https://punjabmandiai-1.onrender.com/nasa/fires"
      );

      setFires(
        response.data.fires || []
      );

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <section className="px-6 py-24">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="mb-14">

          <p className="text-orange-400 text-lg">

            NASA Satellite Intelligence

          </p>

          <h2
            className="
              text-5xl
              font-black
              mt-4
            "
          >

            Stubble Burning Detection

          </h2>

        </div>

        {/* Grid */}

        <div
          className="
            grid
            md:grid-cols-3
            gap-8
          "
        >

          {fires.map(
            (
              fire,
              index
            ) => (

              <div
                key={index}
                className="
                  glass
                  rounded-[32px]
                  p-8
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
                    w-40
                    h-40
                    bg-red-500/20
                    blur-[80px]
                    rounded-full
                  "
                />

                <div className="relative z-10">

                  <h3
                    className="
                      text-3xl
                      font-black
                      text-red-400
                    "
                  >

                    Fire Alert

                  </h3>

                  <div className="mt-6 space-y-4">

                    <div>

                      <p className="text-gray-400">

                        Latitude

                      </p>

                      <h4 className="text-xl font-bold">

                        {fire.latitude}

                      </h4>

                    </div>

                    <div>

                      <p className="text-gray-400">

                        Longitude

                      </p>

                      <h4 className="text-xl font-bold">

                        {fire.longitude}

                      </h4>

                    </div>

                    <div>

                      <p className="text-gray-400">

                        Brightness

                      </p>

                      <h4
                        className="
                          text-xl
                          font-bold
                          text-orange-400
                        "
                      >

                        {fire.brightness}

                      </h4>

                    </div>

                    <div>

                      <p className="text-gray-400">

                        Confidence

                      </p>

                      <h4
                        className="
                          text-xl
                          font-bold
                          text-yellow-400
                        "
                      >

                        {fire.confidence}

                      </h4>

                    </div>

                  </div>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
}