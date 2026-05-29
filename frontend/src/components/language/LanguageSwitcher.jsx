"use client";

import { useState } from "react";

import {
  Languages,
} from "lucide-react";

export default function LanguageSwitcher() {

  const [language, setLanguage] =
    useState("English");

  return (

    <div
      className="
        fixed
        top-24
        right-8
        z-50
      "
    >

      <div
        className="
          glass
          rounded-2xl
          p-4
          flex
          items-center
          gap-4
        "
      >

        <Languages className="text-green-400" />

        <select
          value={language}
          onChange={(e) =>
            setLanguage(e.target.value)
          }
          className="
            bg-transparent
            outline-none
            text-white
          "
        >

          <option
            value="English"
            className="bg-black"
          >
            English
          </option>

          <option
            value="Hindi"
            className="bg-black"
          >
            हिंदी
          </option>

          <option
            value="Punjabi"
            className="bg-black"
          >
            ਪੰਜਾਬੀ
          </option>

        </select>

      </div>

    </div>
  );
}