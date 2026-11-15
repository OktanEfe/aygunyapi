import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Marka renkleri — logodan
        midnight: {
          DEFAULT: "#19294f",
          700: "#1f3260",
          800: "#142142",
          900: "#101a35",
          950: "#0b1328",
        },
        bordo: {
          DEFAULT: "#481a2c",
          600: "#5c2439",
          400: "#8a4a60",
          200: "#d9b8c2",
          50: "#f7eff2",
        },
        // Sıcak nötrler
        sand: {
          DEFAULT: "#f5f1ec",
          200: "#ebe4dc",
          300: "#dcd2c6",
        },
        luxury: "#F5F5F7",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      animation: {
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        "hero-progress": "hero-progress linear forwards",
      },
      keyframes: {
        "hero-progress": {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        "slow-zoom": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;