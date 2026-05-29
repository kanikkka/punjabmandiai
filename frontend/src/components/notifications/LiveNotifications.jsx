"use client";

import { useEffect } from "react";

import toast from "react-hot-toast";

const alerts = [

  "🌾 Wheat prices rising in Punjab",

  "🌧 Heavy rainfall expected tomorrow",

  "📈 Rice demand increased in Ludhiana",

  "🚚 Transport delays due to weather",

  "🤖 AI predicts strong cotton growth",

  "⚠ Market volatility detected",

];

export default function LiveNotifications() {

  useEffect(() => {

    const interval = setInterval(() => {

      const randomAlert =
        alerts[
          Math.floor(
            Math.random() * alerts.length
          )
        ];

      toast(randomAlert);

    }, 15000);

    return () => clearInterval(interval);

  }, []);

  return null;
}