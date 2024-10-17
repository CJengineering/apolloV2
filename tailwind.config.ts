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
  darkMode: "class", // Enable class-based dark mode
  theme: {

    extend: {

      textShadow: {
        'default': '0 2px 4px rgba(0, 0, 0, 0.3)',
        'md': '0 4px 8px rgba(0, 0, 0, 0.4)',
        'lg': '0 6px 12px rgba(0, 0, 0, 0.7)',
        'xl': '0 8px 16px rgba(0, 0, 0, 1)',
      },

      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            a: {
              fontWeight: "inherit",
              color: "inherit",
              textDecorationLine: "underline",
              textDecorationThickness: "from-font",
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            p: {
              fontWeight: "400",
              fontSize: "1.1rem",
            },
            
            li: {
              fontWeight: "400",
              fontSize: "1.1rem",
            },

            'li::marker': {
              fontWeight: "inherit",
              color: "black",
            },
            figure: {
              position: "relative !important",
              width: "100% !important",
              paddingBottom: "56.25% !important",
            },
            iframe: {
              position: "absolute !important",
              top: "0 !important",
              left: "0 !important",
              width: "100% !important",
              height: "100% !important",
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.white'),
            a: {
              color: theme('colors.white'),
              '&:hover': {
                color: theme('colors.blue.400'),
              },
            },

            'li::marker': {
              color: theme('colors.white'),
              fontSize: "inherit",
              fontWeight: "inherit",
            },
            marker: {
              
              
            },
            p: {
              color: theme('colors.white'), // Set paragraph text color to white in dark mode
              fontWeight: '400',
              fontSize: '1.1rem',
            },
            strong: {
              color: theme('colors.white'), // Set paragraph text color to white in dark mode
              fontWeight: '600',
              fontSize: '1.1rem',
            },
            figure: {
              position: 'relative !important',
              width: '100% !important',
              paddingBottom: '56.25% !important',
            },
            iframe: {
              position: 'absolute !important',
              top: '0 !important',
              left: '0 !important',
              width: '100% !important',
              height: '100% !important',
            },
          },
        },
      }),
      fontFamily: {
        arial: ["var(--font-arial)", "sans-serif"],
        nycd: ["var(--font-nycd)", "cursive"],
      },
      screens: {
        xlc: "1500px",
      },
      fontSize: {
        base: "1.1rem",
        lg: "1.25rem",
        tiny: "0.8rem",
        md: "1.1rem",
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
            transform: "rotate(360deg) translate(-0.25rem) rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [
    formsPlugin,
    require("@tailwindcss/typography"),
    headlessuiPlugin,
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
    require('tailwindcss-textshadow'),
  ],
};
