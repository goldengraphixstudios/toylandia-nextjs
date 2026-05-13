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
          red:        "#E11D2A",
          redDark:    "#B5121E",
          redSoft:    "#FFE7E9",
          yellow:     "#FFCC00",
          yellowDeep: "#E6B600",
          yellowSoft: "#FFF6CC",
          ink:        "#1A1410",
          charcoal:   "#3A3530",
          muted:      "#6E6760",
          line:       "#EDE6DA",
          warm:       "#FFFBF2",
          surface:    "#FFF6E1",
        },
      },
      fontFamily: {
        sans:    ["Fredoka", "Nunito", "system-ui", "sans-serif"],
        display: ["Fredoka", "Nunito", "system-ui", "sans-serif"],
        fun:     ["'Bagel Fat One'", "Fredoka", "system-ui", "sans-serif"],
      },
      animation: {
        "float":          "float 6s ease-in-out infinite",
        "float-slow":     "float 10s ease-in-out infinite",
        "wiggle":         "wiggle 4s ease-in-out infinite",
        "wiggle-fast":    "wiggle 1.6s ease-in-out infinite",
        "spin-slow":      "spin 20s linear infinite",
        "spin-reverse":   "spin 25s linear infinite reverse",
        "pulse-slow":     "pulse-slow 3s ease-in-out infinite",
        "bounce-soft":    "bounce-soft 2.4s ease-in-out infinite",
        "tada":           "tada 1.6s ease-in-out infinite",
        "marquee-x":      "marquee-x 60s linear infinite",
        "marquee-x-fast": "marquee-x 30s linear infinite",
        "marquee-y":      "marquee-y 28s linear infinite",
        "fade-up":        "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) backwards",
        "pop-in":         "pop-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) backwards",
        "shimmer":        "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float:        { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        wiggle:       { "0%,100%": { transform: "rotate(-2deg)" }, "50%": { transform: "rotate(2deg)" } },
        "pulse-slow": { "0%,100%": { opacity: "0.6", transform: "scale(1)" }, "50%": { opacity: "1", transform: "scale(1.05)" } },
        "bounce-soft":{ "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        tada:         { "0%,100%": { transform: "scale(1) rotate(0deg)" }, "20%": { transform: "scale(0.95) rotate(-3deg)" }, "40%,60%": { transform: "scale(1.05) rotate(3deg)" }, "80%": { transform: "scale(1.05) rotate(-3deg)" } },
        "marquee-x":  { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "marquee-y":  { from: { transform: "translateY(0)" }, to: { transform: "translateY(-50%)" } },
        "fade-up":    { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "pop-in":     { "0%": { opacity: "0", transform: "scale(0.6)" }, "100%": { opacity: "1", transform: "scale(1)" } },
        shimmer:      { from: { backgroundPosition: "-200% 0" }, to: { backgroundPosition: "200% 0" } },
      },
      boxShadow: {
        "toy":      "0 6px 0 0 #1A1410",
        "toy-sm":   "0 4px 0 0 #1A1410",
        "toy-lg":   "0 10px 0 0 #1A1410",
        "soft":     "0 6px 24px -8px rgba(26,20,16,0.18)",
        "soft-lg":  "0 18px 40px -16px rgba(26,20,16,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
