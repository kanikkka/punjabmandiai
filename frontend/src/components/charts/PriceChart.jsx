"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function PriceChart() {

  const [chartData, setChartData] = useState([]);

  useEffect(() => {

    fetchChartData();

    const interval = setInterval(() => {

      fetchChartData();

    }, 10000);

    return () => clearInterval(interval);

  }, []);

  const fetchChartData = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/market/live"
      );

      let records = [];

      if (response.data.records) {

        records = response.data.records;

      }

      else if (response.data.fallback_data) {

        records = response.data.fallback_data;

      }

      const formatted = records.slice(0, 7).map((item) => ({

        name:
          item.commodity || "Crop",

        price:
          Number(item.modal_price || item.price),

      }));

      setChartData(formatted);

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
            Real-Time AI Analytics
          </p>

          <h2 className="text-5xl font-black mt-4">

            Live Crop Price Trends

          </h2>

        </div>

        {/* Chart Card */}

        <div
          className="
            glass
            rounded-[40px]
            p-10
            overflow-hidden
          "
        >

          <div style={{ width: "100%", height: 450 }}>

            <ResponsiveContainer>

              <LineChart data={chartData}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#ffffff20"
                />

                <XAxis
                  dataKey="name"
                  stroke="#9ca3af"
                />

                <YAxis
                  stroke="#9ca3af"
                />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#22c55e"
                  strokeWidth={4}
                  dot={{
                    r: 6,
                  }}
                  activeDot={{
                    r: 10,
                  }}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </section>

  );
}