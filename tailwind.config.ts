import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "surface-light": "var(--surface-light)",
        accent: "var(--accent)",
        "accent-dark": "var(--accent-dark)",
        "accent-orange": "var(--accent-orange)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
      },
      fontFamily: {
        heading: ["'NumbersFallback'", "var(--font-arista)", "sans-serif"],
        sans: ["'NumbersFallback'", "var(--font-arista)", "sans-serif"],
        serif: ["'NumbersFallback'", "var(--font-arista)", "sans-serif"],
        arista: ["'NumbersFallback'", "var(--font-arista)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;