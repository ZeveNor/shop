import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom,rgba(71, 18, 230, 0.44),rgb(0, 0, 0))', 
        'custom-gradient-light': 'linear-gradient(to bottom,rgb(142, 226, 96),rgb(255, 255, 255))', 
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}
