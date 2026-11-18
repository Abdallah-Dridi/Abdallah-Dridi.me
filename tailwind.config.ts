import type { Config } from "tailwindcss";

// Tailwind only supplies the base reset; the design system lives in app/globals.css.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};

export default config;
