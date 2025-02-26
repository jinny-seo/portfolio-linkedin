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
      });
    }),
  ],
} satisfies Config;
