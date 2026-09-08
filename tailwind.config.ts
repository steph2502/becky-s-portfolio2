import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: "#5B1E2D",
        "maroon-deep": "#2A1014",
        gold: "#C8A45E",
        "gold-soft": "#DFC38C",
        cream: "#F7F3ED",
        ink: "#1E1E1E",
        white: "#FFFDFB",
        line: "rgba(30,30,30,0.12)",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-source-sans)", "Helvetica", "Arial", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "2px",
        sm: "2px",
        md: "2px",
        lg: "2px",
      },
      maxWidth: {
        wrap: "1140px",
      },
      keyframes: {
        "fade-slide-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
