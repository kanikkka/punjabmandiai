"use client";

import { motion } from "framer-motion";

import {
  TrendingUp,
  Brain,
  Activity,
  Wheat,
  CloudRain,
  BarChart3,
} from "lucide-react";

export default function DashboardPreview() {

  const cards = [

    {
      title: "AI Accuracy",
      value: "98.2%",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
    },

    {
      title: "Live Monitoring",
      value: "24/7",
      icon: <Activity className="w-8 h-8 text-green-400" />,
    },

    {
      title: "Crop Analytics",
      value: "120+",
      icon: <Wheat className="w-8 h-8 text-yellow-400" />,
    },

    {
      title: "Weather Sync",
      value: "Realtime",
      icon: <CloudRain className="w-8 h-8 text-blue-400" />,
    },

  ];

  return (
    <section className="px-6 py-28 relative">

      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[600px]
          h-[600px]
          bg-green-500/10
          blur-[140px]
          rounded-full
        "
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-green-400 text-lg mb-4">
            Smart Intelligence Dashboard
          </p>

          <h2 className="text-6xl font-black leading-tight">

            Real-Time

            <span className="text-green-400">
              {" "}AI Analytics
            </span>

          </h2>

          <p
            className="
              text-gray-400
              max-w-3xl
              mx-auto
              mt-8
              text-xl
              leading-9
            "
          >

            Monitor live crop prices, AI forecasts,
            weather patterns, and market analytics
            with futuristic agricultural intelligence.

          </p>

        </motion.div>

        {/* Grid */}

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Cards */}

          <div className="space-y-8">

            {cards.map((card, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="
                  glass
                  rounded-3xl
                  p-8
                  hover:scale-105
                  transition
                  duration-300
                "
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-gray-400">
                      {card.title}
                    </p>

                    <h3 className="text-4xl font-bold mt-3">
                      {card.value}
                    </h3>

                  </div>

                  {card.icon}

                </div>

              </motion.div>

            ))}

          </div>

          {/* Main Analytics */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              lg:col-span-2
              glass
              rounded-[40px]
              p-10
              relative
              overflow-hidden
            "
          >

            <div
              className="
                absolute
                top-0
                right-0
                w-60
                h-60
                bg-green-500/10
                blur-[100px]
                rounded-full
              "
            />

            {/* Header */}

            <div
              className="
                flex
                flex-wrap
                items-center
                justify-between
                gap-6
                mb-14
                relative
                z-10
              "
            >

              <div>

                <p className="text-gray-400">
                  Market Intelligence
                </p>

                <h3 className="text-5xl font-bold mt-3">
                  Punjab Analytics
                </h3>

              </div>

              <div
                className="
                  px-5
                  py-3
                  rounded-2xl
                  bg-green-500/20
                  border
                  border-green-500/20
                  text-green-400
                  font-semibold
                "
              >

                LIVE DATA

              </div>

            </div>

            {/* Chart Area */}

            <div
              className="
                bg-white/5
                rounded-[30px]
                p-10
                relative
                z-10
              "
            >

              <div className="flex items-end gap-6 h-[300px]">

                {[40, 65, 55, 80, 72, 95, 88].map((height, index) => (

                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="
                      flex-1
                      bg-gradient-to-t
                      from-green-500
                      to-green-300
                      rounded-t-3xl
                      glow
                    "
                  />

                ))}

              </div>

              <div
                className="
                  flex
                  justify-between
                  mt-6
                  text-gray-400
                "
              >

                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>

              </div>

            </div>

            {/* Bottom Stats */}

            <div
              className="
                grid
                md:grid-cols-3
                gap-6
                mt-10
                relative
                z-10
              "
            >

              <div className="glass rounded-3xl p-6">

                <div className="flex items-center gap-4">

                  <TrendingUp className="text-green-400" />

                  <div>

                    <p className="text-gray-400 text-sm">
                      Price Growth
                    </p>

                    <h4 className="text-3xl font-bold mt-2">
                      +12%
                    </h4>

                  </div>

                </div>

              </div>

              <div className="glass rounded-3xl p-6">

                <div className="flex items-center gap-4">

                  <BarChart3 className="text-blue-400" />

                  <div>

                    <p className="text-gray-400 text-sm">
                      AI Signals
                    </p>

                    <h4 className="text-3xl font-bold mt-2">
                      342
                    </h4>

                  </div>

                </div>

              </div>

              <div className="glass rounded-3xl p-6">

                <div className="flex items-center gap-4">

                  <Activity className="text-purple-400" />

                  <div>

                    <p className="text-gray-400 text-sm">
                      Live Updates
                    </p>

                    <h4 className="text-3xl font-bold mt-2">
                      1.2K
                    </h4>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}