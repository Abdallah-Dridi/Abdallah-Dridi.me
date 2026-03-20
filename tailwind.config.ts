import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f0ece4",
        gold: "#c8b89a",
        noir: {
          950: "#050505",
          900: "#0b0b0c",
          850: "#111113",
          800: "#151518",
          750: "#1b1b1f",
          700: "#232329"
        }
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
