"use client";

import { useEffect, useState } from "react";

import axios from "axios";

export default function MarketTable() {

  const [records, setRecords] =
    useState([]);

  useEffect(() => {

    fetchMarketData();

    const interval = setInterval(() => {

      fetchMarketData();

    }, 30000);

    return () => clearInterval(interval);

  }, []);

  const fetchMarketData = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/market/live"
      );

      setRecords(response.data.records);

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

            Government Market Feed

          </p>

          <h2
            className="
              text-5xl
              font-black
              mt-4
            "
          >

            Live Mandi Prices

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

                    Commodity

                  </th>

                  <th className="p-6 text-left">

                    Market

                  </th>

                  <th className="p-6 text-left">

                    Price

                  </th>

                  <th className="p-6 text-left">

                    Date

                  </th>

                </tr>

              </thead>

              <tbody>

                {records.map(
                  (item, index) => (

                    <tr
                      key={index}
                      className="
                        border-b
                        border-white/5
                        hover:bg-white/5
                        transition
                      "
                    >

                      <td
                        className="
                          p-6
                          font-semibold
                        "
                      >

                        {item.commodity}

                      </td>

                      <td className="p-6">

                        {item.market}

                      </td>

                      <td
                        className="
                          p-6
                          text-green-400
                          font-bold
                        "
                      >

                        ₹{item.price}

                      </td>

                      <td className="p-6">

                        {item.timestamp}

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