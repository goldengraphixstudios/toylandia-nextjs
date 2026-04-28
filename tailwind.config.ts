import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tl: {
          red: "#D91E2A",
          redDark: "#B01520",
          yellow: "#FFCC00",
          yellowLight: "#FFF3B0",
          cream: "#FFFBF0",
          dark: "#1A1A1A",
          card: "#F9F9F9",
          border: "#E5E5E5",
          muted: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Nunito", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
