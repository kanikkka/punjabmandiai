"use client";

import { useEffect, useState } from "react";

import axios from "axios";

export default function TransportOptimizer() {

  const [data, setData] =
    useState(null);

  useEffect(() => {

    fetchOptimization();

  }, []);

  const fetchOptimization = async () => {

    try {

      const response = await axios.get(
        "https://punjabmandiai-1.onrender.com/transport/optimize"
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

          <p className="text-cyan-400 text-lg">

            AI Logistics Engine

          </p>

          <h2
            className="
              text-5xl
              font-black
              mt-4
            "
          >

            Smart Transport Optimization

          </h2>

        </div>

        {/* Best Mandi */}

        <div
          className="
            glass
            rounded-[40px]
            p-10
            mb-10
          "
        >

          <h3
            className="
              text-4xl
              font-black
              text-green-400
            "
          >

            Best Mandi:
            {" "}
            {data.best_mandi?.mandi}

          </h3>

          <div
            className="
              grid
              md:grid-cols-3
              gap-6
              mt-8
            "
          >

            <div>

              <p className="text-gray-400">

                Distance

              </p>

              <h4
                className="
                  text-3xl
                  font-bold
                  mt-2
                "
              >

                {data.best_mandi?.distance}
                km

              </h4>

            </div>

            <div>

              <p className="text-gray-400">

                Crop Price

              </p>

              <h4
                className="
                  text-3xl
                  font-bold
                  mt-2
                "
              >

                ₹
                {data.best_mandi?.price}

              </h4>

            </div>

            <div>

              <p className="text-gray-400">

                Estimated Profit

              </p>

              <h4
                className="
                  text-3xl
                  font-bold
                  mt-2
                  text-green-400
                "
              >

                ₹
                {data.best_mandi?.profit}

              </h4>

            </div>

          </div>

        </div>

        {/* All Mandis */}

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

                    Mandi

                  </th>

                  <th className="p-6 text-left">

                    Distance

                  </th>

                  <th className="p-6 text-left">

                    Crop Price

                  </th>

                  <th className="p-6 text-left">

                    Profit

                  </th>

                </tr>

              </thead>

              <tbody>

                {data.all_results?.map(
                  (
                    mandi,
                    index
                  ) => (

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

                        {mandi.mandi}

                      </td>

                      <td className="p-6">

                        {mandi.distance}
                        km

                      </td>

                      <td className="p-6">

                        ₹{mandi.price}

                      </td>

                      <td
                        className="
                          p-6
                          text-green-400
                          font-bold
                        "
                      >

                        ₹{mandi.profit}

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