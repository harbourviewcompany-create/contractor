import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16201a",
        forest: "#254734",
        moss: "#6f8364",
        stone: "#e9e1d5",
        oatmeal: "#f6f1e9",
        brass: "#b98b4b"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(22, 32, 26, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
