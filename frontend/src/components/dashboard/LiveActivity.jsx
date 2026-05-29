"use client";

import { useEffect, useState } from "react";

import { Activity } from "lucide-react";

const updates = [
  "Wheat prices increased by 4%",
  "Punjab mandi updated rates",
  "AI detected crop demand surge",
  "Rice prices expected to rise tomorrow",
  "New market analytics generated",
  "Weather conditions affecting supply",
];

export default function LiveActivity() {

  const [feed, setFeed] = useState([]);

  useEffect(() => {

    let index = 0;

    const interval = setInterval(() => {

      setFeed((prev) => [

        {
          id: Date.now(),
          text: updates[index % updates.length],
        },

        ...prev.slice(0, 5),

      ]);

      index++;

    }, 2000);

    return () => clearInterval(interval);

  }, []);

  return (
    <section className="px-6 py-24">

      <div className="max-w-7xl mx-auto">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

          <div className="flex items-center gap-4 mb-8">

            <Activity className="text-green-400 w-8 h-8 animate-pulse" />

            <div>

              <p className="text-gray-400">
                Real-Time Monitoring
              </p>

              <h2 className="text-4xl font-bold">
                Live Market Activity
              </h2>

            </div>

          </div>

          <div className="space-y-4">

            {feed.map((item) => (

              <div
                key={item.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 animate-pulse"
              >

                <p className="text-lg">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}