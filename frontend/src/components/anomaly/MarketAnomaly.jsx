"use client";

import { useEffect, useState } from "react";

import axios from "axios";

export default function MarketAnomaly() {

  const [data, setData] =
    useState(null);

  useEffect(() => {

    fetchAnomaly();

  }, []);

  const fetchAnomaly = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/market/anomaly"
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

          <p className="text-red-400 text-lg">

            AI Market Intelligence

          </p>

          <h2
            className="
              text-5xl
              font-black
              mt-4
            "
          >

            Market Anomaly Detection

          </h2>

        </div>

        {/* Risk Card */}

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
              text-red-400
            "
          >

            Highest Risk Market:
            {" "}
            {
              data.highest_risk_market
              ?.mandi
            }

          </h3>

          <div
            className="
              grid
              md:grid-cols-4
              gap-6
              mt-8
            "
          >

            <div>

              <p className="text-gray-400">

                Arrivals

              </p>

              <h4
                className="
                  text-3xl
                  font-bold
                  mt-2
                "
              >

                {
                  data.highest_risk_market
                  ?.arrivals
                }

              </h4>

            </div>

            <div>

              <p className="text-gray-400">

                Volatility

              </p>

              <h4
                className="
                  text-3xl
                  font-bold
                  mt-2
                "
              >

                ₹
                {
                  data.highest_risk_market
                  ?.volatility
                }

              </h4>

            </div>

            <div>

              <p className="text-gray-400">

                Risk

              </p>

              <h4
                className="
                  text-3xl
                  font-bold
                  mt-2
                  text-red-400
                "
              >

                {
                  data.highest_risk_market
                  ?.risk
                }

              </h4>

            </div>

            <div>

              <p className="text-gray-400">

                AI Insight

              </p>

              <h4
                className="
                  text-xl
                  font-bold
                  mt-2
                  text-yellow-400
                "
              >

                {
                  data.highest_risk_market
                  ?.anomaly
                }

              </h4>

            </div>

          </div>

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

                    Mandi

                  </th>

                  <th className="p-6 text-left">

                    Arrivals

                  </th>

                  <th className="p-6 text-left">

                    Old Price

                  </th>

                  <th className="p-6 text-left">

                    New Price

                  </th>

                  <th className="p-6 text-left">

                    Risk

                  </th>

                </tr>

              </thead>

              <tbody>

                {data.all_markets?.map(
                  (
                    market,
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

                        {market.mandi}

                      </td>

                      <td className="p-6">

                        {market.arrivals}

                      </td>

                      <td className="p-6">

                        ₹
                        {market.old_price}

                      </td>

                      <td className="p-6">

                        ₹
                        {market.new_price}

                      </td>

                      <td
                        className={`
                          p-6
                          font-bold
                          ${
                            market.risk ===
                            "High"
                              ? "text-red-400"
                              : market.risk ===
                                "Medium"
                              ? "text-yellow-400"
                              : "text-green-400"
                          }
                        `}
                      >

                        {market.risk}

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