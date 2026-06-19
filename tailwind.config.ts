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
        teal: {
          50: "#f0fafa",
          100: "#cceeee",
          200: "#99dddd",
          300: "#66cccc",
          400: "#33bbbb",
          500: "#0d7377",
          600: "#0a5f62",
          700: "#084d50",
          800: "#063a3d",
          900: "#042729",
        },
        amber: {
          400: "#fbbf24",
          500: "#e8a012",
          600: "#d4900f",
          700: "#b8790d",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        heading: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
