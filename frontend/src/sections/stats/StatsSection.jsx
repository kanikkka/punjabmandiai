"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import {
  Users,
  Brain,
  Bell,
  Activity,
} from "lucide-react";

export default function StatsSection() {

  const [stats, setStats] = useState(null);

  useEffect(() => {

    fetchStats();

    const interval = setInterval(() => {

      fetchStats();

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  const fetchStats = async () => {

    try {

      const response = await axios.get(
        "https://punjabmandiai-1.onrender.com/stats/live"
      );

      setStats(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const cards = [

    {
      title: "Active Farmers",
      value: stats?.active_farmers || "...",
      icon: Users,
      color: "text-green-400",
    },

    {
      title: "AI Accuracy",
      value: stats
        ? `${stats.ai_accuracy}%`
        : "...",
      icon: Brain,
      color: "text-purple-400",
    },

    {
      title: "Market Alerts",
      value: stats?.market_alerts || "...",
      icon: Bell,
      color: "text-yellow-400",
    },

    {
      title: "Live Requests",
      value: stats?.live_requests || "...",
      icon: Activity,
      color: "text-cyan-400",
    },

  ];

  return (

    <section className="px-6 py-24">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="mb-14">

          <p className="text-green-400 text-lg">
            Real-Time AI Dashboard
          </p>

          <h2 className="text-5xl font-black mt-4">

            Live Platform Statistics

          </h2>

          <p className="text-gray-400 mt-4">

            Updated:
            {" "}
            {stats?.updated_at || "--"}

          </p>

        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {cards.map((card, index) => {

            const Icon = card.icon;

            return (

              <div
                key={index}
                className="
                  glass
                  rounded-[32px]
                  p-8
                  relative
                  overflow-hidden
                  hover:scale-[1.03]
                  transition
                  duration-300
                "
              >

                {/* Glow */}

                <div
                  className="
                    absolute
                    top-0
                    right-0
                    w-40
                    h-40
                    bg-green-500/10
                    blur-[90px]
                    rounded-full
                  "
                />

                <div className="relative z-10">

                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-white/5
                      flex
                      items-center
                      justify-center
                      mb-6
                    "
                  >

                    <Icon
                      className={`
                        w-8
                        h-8
                        ${card.color}
                      `}
                    />

                  </div>

                  <p className="text-gray-400">

                    {card.title}

                  </p>

                  <h3
                    className="
                      text-5xl
                      font-black
                      mt-4
                    "
                  >

                    {card.value}

                  </h3>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}