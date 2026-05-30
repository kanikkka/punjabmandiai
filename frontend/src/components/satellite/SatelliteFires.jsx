"use client";

import { useEffect, useState } from "react";

import axios from "axios";

export default function SatelliteFires() {

  const [fires, setFires] =
    useState([]);

  useEffect(() => {

    fetchFireData();

    const interval = setInterval(() => {

      fetchFireData();

    }, 60000);

    return () => clearInterval(interval);

  }, []);

  const fetchFireData = async () => {

    try {

      const response = await axios.get(
        "https://punjabmandiai-1.onrender.com/satellite/fires"
      );

      setFires(response.data.fires);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <section className="px-6 py-24">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="mb-14">

          <p className="text-red-400 text-lg">

            NASA FIRMS Satellite Feed

          </p>

          <h2
            className="
              text-5xl
              font-black
              mt-4
            "
          >

            Live Stubble Fire Detection

          </h2>

        </div>

        {/* Table */}

        <div
          className="
            glass
            rounded-[40px]
            overflow-hidden
          "
        >

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr
                  className="
                    border-b
                    border-white/10
                  "
                >

                  <th className="p-6 text-left">

                    Latitude

                  </th>

                  <th className="p-6 text-left">

                    Longitude

                  </th>

                  <th className="p-6 text-left">

                    Brightness

                  </th>

                  <th className="p-6 text-left">

                    Date

                  </th>

                  <th className="p-6 text-left">

                    Time

                  </th>

                </tr>

              </thead>

              <tbody>

                {fires.map(
                  (fire, index) => (

                    <tr
                      key={index}
                      className="
                        border-b
                        border-white/5
                        hover:bg-white/5
                        transition
                      "
                    >

                      <td className="p-6">

                        {fire.latitude}

                      </td>

                      <td className="p-6">

                        {fire.longitude}

                      </td>

                      <td
                        className="
                          p-6
                          text-red-400
                          font-bold
                        "
                      >

                        {fire.brightness}

                      </td>

                      <td className="p-6">

                        {fire.date}

                      </td>

                      <td className="p-6">

                        {fire.time}

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </section>
  );
}