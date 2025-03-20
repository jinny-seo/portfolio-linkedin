import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: { 
        RocGrotesk: ["roc-grotesk", 'sans-serif'],
        Tiny5: ['Tiny5', 'sans-serif'],
        PixelifySans: ['Pixelify Sans', 'sans-serif'],
        Doto: ['Doto', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".subheading": {
          marginBottom: ".5rem",
          letterSpacing: ".05rem",
          // textTransform: "uppercase",
          fontSize: ".9rem",
          fontWeight: "800",
          lineHeight: "1.3",
          color: "rgba(0,0,0, .6)", // Optional: Default text color (gray-700)
        },
        ".caption": {
          marginTop: "0.75rem",
          marginBottom: "1.5rem",
          fontSize: "0.9rem",
          lineHeight: "140%",
          fontStyle: "italic",
          color: "rgba(0,0,0, .6)", // Optional: Default text color (gray-700)
        },
        ".quote": {
          marginTop: "1.5rem",
          marginBottom: "1.5rem",
          paddingLeft: "1.75rem",
          borderLeft: "4px solid rgba(0,0,0,.2)",
          fontSize: "1.2rem",
          lineHeight: "140%",
          fontStyle: "italic",
          color: "rgba(0,0,0, .6)", // Optional: Default text color (gray-700)
        },
      });
    }),
  ],
} satisfies Config;
