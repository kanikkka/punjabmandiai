"use client";

import {
  AlertTriangle,
  TrendingUp,
  CloudRain,
  ShieldAlert,
} from "lucide-react";

const alerts = [

  {
    icon: TrendingUp,
    title: "Wheat Prices Rising",
    description:
      "AI predicts a 12% rise in wheat prices next week.",
  },

  {
    icon: CloudRain,
    title: "Heavy Rain Warning",
    description:
      "Punjab rainfall may affect mandi transportation.",
  },

  {
    icon: AlertTriangle,
    title: "Rice Demand Spike",
    description:
      "High rice demand detected in Amritsar market.",
  },

  {
    icon: ShieldAlert,
    title: "Market Volatility",
    description:
      "Cotton prices may fluctuate heavily this week.",
  },

];

export default function SmartAlerts() {

  return (

    <section className="px-6 py-24">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="mb-14">

          <p className="text-green-400 text-lg">
            AI Monitoring System
          </p>

          <h2 className="text-5xl font-black mt-4">

            Smart AI Alerts

          </h2>

        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 gap-8">

          {alerts.map((alert, index) => {

            const Icon = alert.icon;

            return (

              <div
                key={index}
                className="
                  glass
                  rounded-[32px]
                  p-8
                  relative
                  overflow-hidden
                  hover:scale-[1.02]
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
                    w-48
                    h-48
                    bg-green-500/10
                    blur-[100px]
                    rounded-full
                  "
                />

                <div className="relative z-10">

                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-green-500/10
                      flex
                      items-center
                      justify-center
                      mb-6
                    "
                  >

                    <Icon className="w-8 h-8 text-green-400" />

                  </div>

                  <h3 className="text-2xl font-bold">

                    {alert.title}

                  </h3>

                  <p
                    className="
                      text-gray-400
                      mt-4
                      leading-8
                    "
                  >

                    {alert.description}

                  </p>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );
}