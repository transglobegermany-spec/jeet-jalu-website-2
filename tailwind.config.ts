import type { Config } from "tailwindcss";

/**
 * Brand design tokens.
 * All colors, fonts, motion, and spacing decisions live here — never
 * hardcode values inside components. Change the brand in one place.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#141414",
          soft: "#2A2A28",
        },
        paper: {
          DEFAULT: "#FAF9F6",
          raised: "#FFFFFF",
        },
        slate: {
          DEFAULT: "#5C5C57",
          light: "#8A8A83",
        },
        mist: "#E4E2DA",
        gold: {
          DEFAULT: "#B8862B",
          deep: "#8F6716",
        },
        cream: "#F5F4EF",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      letterSpacing: {
        caps: "0.14em",
      },
      /* One easing curve for the whole brand: begins swiftly, lands softly. */
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
