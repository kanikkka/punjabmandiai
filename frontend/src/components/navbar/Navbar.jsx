"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingChatbot() {

  return (
    <button
      className="
        fixed
        bottom-8
        right-8
        z-50
        w-16
        h-16
        rounded-full
        bg-green-500
        flex
        items-center
        justify-center
        shadow-2xl
        hover:scale-110
        transition
        duration-300
        glow
      "
    >

      <MessageCircle className="w-8 h-8 text-white" />

    </button>
  );
}