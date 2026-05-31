"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function MandiPrices() {

  const [prices, setPrices] = useState([]);

  useEffect(() => {

    fetchPrices();

    const interval = setInterval(() => {
      fetchPrices();
    }, 30000);

    return () => clearInterval(interval);

  }, []);

  const fetchPrices = async () => {

    try {

      const response = await axios.get(
        "https://punjabmandiai-1.onrender.com/market/cards"
      );

      setPrices(response.data);

    } catch (error) {

      console.log("Error loading prices:", error);

    }

  };

  return (

    <section className="px-6 py-24">

      <div className="max-w-7xl mx-auto">

        <div className="mb-14">

          <p className="text-green-400 text-lg">
            Agricultural Market Dataset
          </p>

          <h2 className="text-5xl font-black mt-4">
            Mandi Price Highlights
          </h2>

          <p className="text-gray-400 mt-4">
            Historical mandi price records used for analytics and AI forecasting.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {prices.length > 0 ? (

            prices.map((item, index) => (

              <div
                key={index}
                className="
                  glass
                  rounded-[30px]
                  p-8
                  text-center
                  hover:scale-105
                  transition
                "
              >

                <h3 className="text-2xl font-bold">
                  {item.commodity}
                </h3>

                <p className="text-green-400 text-4xl font-black mt-4">
                  ₹{item.price}
                </p>

                <p className="text-gray-400 mt-3">
                  Dataset Price
                </p>

              </div>

            ))

          ) : (

            <div className="col-span-4 text-center text-gray-400 py-10">
              Loading mandi prices...
            </div>

          )}

        </div>

      </div>

    </section>

  );

}