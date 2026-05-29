"use client";

import { useEffect, useState } from "react";

import axios from "axios";

export default function MandiPrices() {

  const [prices, setPrices] = useState([]);

  useEffect(() => {

  fetchPrices();

  const interval = setInterval(() => {

    fetchPrices();

  }, 10000);

  return () => clearInterval(interval);

}, []);

  const fetchPrices = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/market/live"
      );

      console.log(response.data);

      if (response.data.records) {

        setPrices(response.data.records);

      }

      else if (response.data.fallback_data) {

        setPrices(response.data.fallback_data);

      }

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
            Real Government Market Data
          </p>

          <h2 className="text-5xl font-black mt-4">

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

              <thead
                className="
                  bg-white/10
                  text-left
                "
              >

                <tr>

                  <th className="p-6">
                    Commodity
                  </th>

                  <th className="p-6">
                    Market
                  </th>

                  <th className="p-6">
                    Price
                  </th>

                </tr>

              </thead>

              <tbody>

                {prices.length > 0 ? (

                  prices.map((item, index) => (

                    <tr
                      key={index}
                      className="
                        border-t
                        border-white/10
                        hover:bg-white/5
                        transition
                      "
                    >

                      <td className="p-6 font-semibold">

                        {item.commodity}

                      </td>

                      <td className="p-6 text-gray-300">

                        {item.market}

                      </td>

                      <td className="p-6 text-green-400 font-bold">

                        ₹
                        {item.modal_price || item.price}

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="3"
                      className="p-10 text-center text-gray-400"
                    >

                      Loading live mandi data...

                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </section>
  );
}