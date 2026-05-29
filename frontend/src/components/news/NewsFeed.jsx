"use client";

import { useEffect, useState } from "react";

const newsItems = [

  "🌾 Wheat demand increasing across Punjab markets",

  "📈 AI predicts strong rice exports this month",

  "🌧 Heavy rainfall warning issued for Ludhiana",

  "🚜 Government announces new farmer subsidy",

  "🤖 Smart farming adoption rising rapidly",

  "📊 Cotton prices expected to rise next week",

  "⚠ Transportation delays due to weather conditions",

  "🌱 AI recommends optimized irrigation scheduling",

];

export default function NewsFeed() {

  const [news, setNews] =
    useState(newsItems);

  useEffect(() => {

    const interval = setInterval(() => {

      setNews((prev) => {

        const shuffled =
          [...prev].sort(
            () => Math.random() - 0.5
          );

        return shuffled;

      });

    }, 8000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="px-6 py-24">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="mb-10">

          <p className="text-yellow-400 text-lg">

            AI News Intelligence

          </p>

          <h2
            className="
              text-5xl
              font-black
              mt-4
            "
          >

            Live Agriculture Feed

          </h2>

        </div>

        {/* Feed */}

        <div
          className="
            glass
            rounded-[40px]
            p-8
            overflow-hidden
          "
        >

          <div
            className="
              space-y-6
            "
          >

            {news.map((item, index) => (

              <div
                key={index}
                className="
                  glass
                  rounded-3xl
                  p-6
                  hover:scale-[1.02]
                  transition
                  duration-300
                "
              >

                <p className="text-lg">

                  {item}

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}