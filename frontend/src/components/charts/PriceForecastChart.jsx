"use client";

import {

  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,

} from "recharts";

export default function PriceForecastChart() {

  const data = [

    {
      day: "Mon",
      wheat: 2400,
      rice: 2200,
    },

    {
      day: "Tue",
      wheat: 2450,
      rice: 2250,
    },

    {
      day: "Wed",
      wheat: 2380,
      rice: 2280,
    },

    {
      day: "Thu",
      wheat: 2500,
      rice: 2320,
    },

    {
      day: "Fri",
      wheat: 2600,
      rice: 2360,
    },

    {
      day: "Sat",
      wheat: 2550,
      rice: 2400,
    },

  ];

  return (

    <section className="px-6 py-24">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="mb-14">

          <p className="text-cyan-400 text-lg">

            AI Forecasting Analytics

          </p>

          <h2
            className="
              text-5xl
              font-black
              mt-4
            "
          >

            Crop Price Forecast Trends

          </h2>

        </div>

        {/* Chart Card */}

        <div
          className="
            glass
            rounded-[40px]
            p-10
          "
        >

          <div
            style={{
              width: "100%",
              height: 500,
            }}
          >

            <ResponsiveContainer>

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
                  stroke="#22d3ee"
                  strokeWidth={4}
                />

                <Line
                  type="monotone"
                  dataKey="rice"
                  stroke="#facc15"
                  strokeWidth={4}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </section>
  );
}