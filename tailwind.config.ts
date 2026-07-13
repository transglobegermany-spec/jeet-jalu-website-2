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
          DEFAULT: "#202020", // rich charcoal
          soft: "#2C2B27",
        },
        paper: {
          DEFAULT: "#F8F6F1", // warm ivory
          raised: "#FFFDF8", // warm white
        },
        slate: {
          DEFAULT: "#57544C", // warm secondary text
          light: "#8B867A",
        },
        mist: "#E5DFD3", // soft stone hairlines
        stone: "#EFEAE2", // secondary background
        gold: {
          DEFAULT: "#C9A86A", // champagne gold
          deep: "#7C6434", // accessible gold for text on ivory
        },
        cream: "#F3EFE6",
        forest: {
          DEFAULT: "#0F4C3A", // deep forest green — primary accent
          deep: "#0B3A2C",
          soft: "#16614B",
        },
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
