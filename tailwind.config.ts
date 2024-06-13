/** @type {import('tailwindcss').Config} */
import formsPlugin from "@tailwindcss/forms";
import headlessuiPlugin from "@headlessui/tailwindcss";
import { type Config } from "tailwindcss";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        aspekta: ["var(--font-aspekta)", "sans-serif"],
        nycd: ["var(--font-nycd)", "cursive"],
      },
      screens: {
        xlc: "1500px",
      },
      fontSize: {
        tiny: "0.813rem",
        md: "1.063rem",
        "5xl": "2.65rem",
        "6xl": "2.75rem",
      },

      maxWidth: {
        xxs: "16rem",
      },

      height: {
        96: "24rem",
      },

      margin: {
        13: "3.25rem",
      },

      padding: {
        full: "100%",
      },

      textDecorationThickness: {
        3: "3px",
      },

      translate: {
        "4/5": "80%",
      },

      animation: {
        orbit: "orbit 2.5s linear infinite",
      },

      keyframes: {
        orbit: {
          "0%": {
            transform: "rotate(0deg) translate(-0.25rem) rotate(0deg)",
          },

          "100%": {
            transform: "rotate(360deg) translate(-0.25rem) rotate(-360deg);",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    headlessuiPlugin,
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
  ],
};
