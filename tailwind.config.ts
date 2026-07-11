import type { Config } from "tailwindcss";

/**
 * Brand design tokens.
 * All colors, fonts, and spacing decisions live here — never hardcode
 * hex values inside components. Change the brand in one place.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#141414", // primary text, dark sections
          soft: "#2A2A28", // raised surfaces on dark sections
        },
        paper: {
          DEFAULT: "#FAF9F6", // warm off-white page background
          raised: "#FFFFFF", // cards on paper
        },
        slate: {
          DEFAULT: "#5C5C57", // secondary text on light
          light: "#8A8A83", // muted text / captions
        },
        mist: "#E4E2DA", // hairline borders on light
        gold: {
          DEFAULT: "#B8862B", // single brand accent
          deep: "#8F6716", // accent hover / text-on-light accessible
        },
        cream: "#F5F4EF", // text on dark sections
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem", // 1152px — the single site container width
        prose: "42rem",
      },
      letterSpacing: {
        caps: "0.14em", // eyebrow labels
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
