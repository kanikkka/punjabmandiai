"use client";

import { useEffect, useState } from "react";

import axios from "axios";

export default function ColdStorage() {

  const [data, setData] =
    useState(null);

  useEffect(() => {

    fetchStorage();

  }, []);

  const fetchStorage = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/storage/status"
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

            Supply Chain Intelligence

          </p>

          <h2
            className="
              text-5xl
              font-black
              mt-4
            "
          >

            Cold Storage Tracking

          </h2>

        </div>

        {/* Best Storage */}

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

            Best Available Storage:
            {" "}
            {
              data.best_storage
              ?.name
            }

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

                Occupancy

              </p>

              <h4
                className="
                  text-3xl
                  font-bold
                  mt-2
                "
              >

                {
                  data.best_storage
                  ?.occupancy
                }%

              </h4>

            </div>

            <div>

              <p className="text-gray-400">

                Available Space

              </p>

              <h4
                className="
                  text-3xl
                  font-bold
                  mt-2
                  text-cyan-400
                "
              >

                {
                  data.best_storage
                  ?.available
                }%

              </h4>

            </div>

            <div>

              <p className="text-gray-400">

                Spoilage Risk

              </p>

              <h4
                className="
                  text-3xl
                  font-bold
                  mt-2
                  text-yellow-400
                "
              >

                {
                  data.best_storage
                  ?.spoilage_risk
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

                    Storage

                  </th>

                  <th className="p-6 text-left">

                    Occupancy

                  </th>

                  <th className="p-6 text-left">

                    Available

                  </th>

                  <th className="p-6 text-left">

                    Risk

                  </th>

                </tr>

              </thead>

              <tbody>

                {data.all_storages?.map(
                  (
                    storage,
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

                        {storage.name}

                      </td>

                      <td className="p-6">

                        {storage.occupancy}%

                      </td>

                      <td className="p-6">

                        {storage.available}%

                      </td>

                      <td
                        className={`
                          p-6
                          font-bold
                          ${
                            storage.spoilage_risk ===
                            "High"
                              ? "text-red-400"
                              : "text-green-400"
                          }
                        `}
                      >

                        {
                          storage.spoilage_risk
                        }

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