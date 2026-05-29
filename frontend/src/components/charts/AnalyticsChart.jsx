"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { useEffect, useState } from "react";

export default function AnalyticsChart() {

  const [data, setData] =
    useState([]);

  useEffect(() => {

    generateData();

    const interval = setInterval(() => {

      generateData();

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  const generateData = () => {

    const chartData = [];

    for (let i = 1; i <= 7; i++) {

      chartData.push({

        day: `Day ${i}`,

        wheat:
          Math.floor(
            Math.random() * 3000
          ) + 2000,

        rice:
          Math.floor(
            Math.random() * 4000
          ) + 2500,

      });

    }

    setData(chartData);

  };

  return (

    <section className="px-6 py-24">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="mb-14">

          <p className="text-cyan-400 text-lg">

            AI Market Intelligence

          </p>

          <h2
            className="
              text-5xl
              font-black
              mt-4
            "
          >

            Live Crop Analytics

          </h2>

        </div>

        {/* Chart */}

        <div
          className="
            glass
            rounded-[40px]
            p-10
            h-[500px]
          "
        >

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <LineChart data={data}>

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="wheat"
                stroke="#22c55e"
                strokeWidth={4}
              />

              <Line
                type="monotone"
                dataKey="rice"
                stroke="#06b6d4"
                strokeWidth={4}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </section>
  );
}