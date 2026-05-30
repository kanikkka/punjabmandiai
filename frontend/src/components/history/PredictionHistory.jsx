"use client";

import {

  useEffect,
  useState,

} from "react";

import axios from "axios";

export default function PredictionHistory() {

  const [history, setHistory] =
    useState([]);

  useEffect(() => {

    fetchHistory();

  }, []);

  const fetchHistory = async () => {

    try {

      const response = await axios.get(
        "https://punjabmandiai-1.onrender.com/prediction/history"
      );

      setHistory(
        response.data.history
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

          <p className="text-cyan-400 text-lg">

            Persistent AI Database

          </p>

          <h2
            className="
              text-5xl
              font-black
              mt-4
            "
          >

            Prediction History

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

                    ID

                  </th>

                  <th className="p-6 text-left">

                    Crop

                  </th>

                  <th className="p-6 text-left">

                    Price

                  </th>

                  <th className="p-6 text-left">

                    Mandi

                  </th>

                </tr>

              </thead>

              <tbody>

                {history.map(
                  (
                    item,
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

                        {item.id}

                      </td>

                      <td className="p-6">

                        {item.crop}

                      </td>

                      <td className="p-6">

                        ₹{item.price}

                      </td>

                      <td className="p-6">

                        {item.mandi}

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