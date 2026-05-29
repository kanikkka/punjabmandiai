"use client";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function HeroSection() {

  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        justify-center
        relative
        overflow-hidden
        px-6
      "
    >

      {/* Background Glow */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          bg-green-500/20
          blur-[150px]
          rounded-full
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-20
          items-center
          relative
          z-10
        "
      >

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <div
            className="
              inline-flex
              items-center
              gap-3
              px-5
              py-3
              rounded-full
              glass
              mb-8
            "
          >

            <Sparkles className="text-green-400 w-5 h-5" />

            <p className="text-sm text-gray-300">
              AI-Powered Agriculture Intelligence
            </p>

          </div>

          <h1
            className="
              text-6xl
              lg:text-8xl
              font-black
              leading-tight
              floating
            "
          >

            Smart

            <span className="text-green-400">
              {" "}Mandi{" "}
            </span>

            Forecasting

          </h1>

          <p
            className="
              text-gray-400
              text-xl
              leading-9
              mt-8
              max-w-2xl
            "
          >

            Predict crop prices, analyze live market trends,
            monitor weather conditions, and empower farmers
            using real-time AI analytics.

          </p>

          <div
            className="
              flex
              flex-wrap
              gap-6
              mt-12
            "
          >

            <button
              className="
                px-8
                py-4
                rounded-2xl
                bg-green-500
                hover:bg-green-400
                transition
                font-semibold
                flex
                items-center
                gap-3
                glow
              "
            >

              Launch Dashboard

              <ArrowRight className="w-5 h-5" />

            </button>

            <button
              className="
                px-8
                py-4
                rounded-2xl
                glass
                hover:border-green-400
                transition
                font-semibold
              "
            >

              Explore Analytics

            </button>

          </div>

          {/* Stats */}

          <div
            className="
              flex
              gap-10
              mt-16
              flex-wrap
            "
          >

            <div>

              <h3 className="text-4xl font-bold text-green-400">
                10K+
              </h3>

              <p className="text-gray-400 mt-2">
                Farmers Connected
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold text-green-400">
                98%
              </h3>

              <p className="text-gray-400 mt-2">
                Prediction Accuracy
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold text-green-400">
                24/7
              </h3>

              <p className="text-gray-400 mt-2">
                Live Monitoring
              </p>

            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          <div
            className="
              glass
              rounded-[40px]
              p-10
              glow
              floating
            "
          >

            <div
              className="
                flex
                items-center
                justify-between
                mb-10
              "
            >

              <div>

                <p className="text-gray-400">
                  Live Prediction
                </p>

                <h2 className="text-4xl font-bold mt-2">
                  Wheat Prices
                </h2>

              </div>

              <TrendingUp className="w-12 h-12 text-green-400" />

            </div>

            <div className="space-y-6">

              {[
                ["Monday", "₹2450"],
                ["Tuesday", "₹2520"],
                ["Wednesday", "₹2580"],
                ["Thursday", "₹2610"],
              ].map((item, index) => (

                <div
                  key={index}
                  className="
                    flex
                    items-center
                    justify-between
                    bg-white/5
                    rounded-2xl
                    px-6
                    py-5
                  "
                >

                  <p className="text-lg text-gray-300">
                    {item[0]}
                  </p>

                  <h3 className="text-2xl font-bold text-green-400">
                    {item[1]}
                  </h3>

                </div>

              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}