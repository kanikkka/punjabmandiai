"use client";

import {
  Brain,
  TrendingUp,
  AlertTriangle,
  CloudRain,
} from "lucide-react";

export default function AIInsights() {

  const insights = [
    {
      icon: <TrendingUp className="text-green-400" />,
      title: "Price Surge Prediction",
      desc: "Wheat prices may rise by 8% next week.",
    },

    {
      icon: <CloudRain className="text-blue-400" />,
      title: "Weather Impact",
      desc: "Rainfall may affect rice supply chain.",
    },

    {
      icon: <AlertTriangle className="text-yellow-400" />,
      title: "Demand Alert",
      desc: "High mandi demand detected in Punjab.",
    },
  ];

  return (
    <section className="px-6 py-24">

      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-12">

          <Brain className="w-10 h-10 text-purple-400" />

          <div>

            <p className="text-gray-400">
              Artificial Intelligence
            </p>

            <h2 className="text-5xl font-bold">
              AI Insights
            </h2>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {insights.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition duration-300"
            >

              <div className="mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}