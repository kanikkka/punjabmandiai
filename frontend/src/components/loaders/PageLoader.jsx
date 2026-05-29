"use client";

import { motion } from "framer-motion";

export default function PageLoader() {

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        bg-[#050816]
        flex
        items-center
        justify-center
      "
    >

      <div className="text-center">

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          className="
            w-24
            h-24
            border-4
            border-green-500
            border-t-transparent
            rounded-full
            mx-auto
          "
        />

        <h1
          className="
            text-4xl
            font-black
            mt-10
            text-green-400
          "
        >

          PunjabiMandi AI

        </h1>

        <p className="text-gray-400 mt-4">

          Loading Smart Agriculture Intelligence...

        </p>

      </div>

    </div>
  );
}