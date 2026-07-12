import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          orange: "#FF5A00",
          blue: "#1239B8",
          yellow: "#FFDD73",
          dark: "#0F172A",
          gray: "#F8F8F8",
          pink: "#E81D73",
        },
      },
      fontFamily: {
        sans: ["var(--font-brookeshappell)", "sans-serif"],
        serif: ["var(--font-brookeshappell)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
