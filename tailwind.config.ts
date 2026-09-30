import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        paper: "var(--paper)",
        gold: "var(--gold)"
      },
      letterSpacing: {
        display: "0.08em",
        mono: "0.22em"
      },
      boxShadow: {
        panel: "0 40px 120px rgba(0, 0, 0, 0.38)"
      },
      backgroundImage: {
        vignette:
          "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.28) 72%, rgba(0, 0, 0, 0.62) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
