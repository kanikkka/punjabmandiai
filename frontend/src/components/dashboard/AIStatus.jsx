"use client";

import {
  Activity,
  Brain,
  Wifi,
  Database,
} from "lucide-react";

const stats = [

  {
    icon: Brain,
    title: "AI Prediction Engine",
    value: "ACTIVE",
  },

  {
    icon: Wifi,
    title: "Live Market Feed",
    value: "CONNECTED",
  },

  {
    icon: Database,
    title: "Gov Data Sync",
    value: "RUNNING",
  },

  {
    icon: Activity,
    title: "AI Accuracy",
    value: "96.4%",
  },

];

export default function AIStatus() {

  return (

    <section className="px-6 py-24">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="mb-14">

          <p className="text-green-400 text-lg">
            System Intelligence
          </p>

          <h2 className="text-5xl font-black mt-4">

            AI System Status

          </h2>

        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => {

            const Icon = item.icon;

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
                      bg-green-500/10
                      flex
                      items-center
                      justify-center
                      mb-6
                    "
                  >

                    <Icon className="w-8 h-8 text-green-400" />

                  </div>

                  <p className="text-gray-400">

                    {item.title}

                  </p>

                  <h3
                    className="
                      text-3xl
                      font-black
                      mt-4
                      text-green-400
                    "
                  >

                    {item.value}

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