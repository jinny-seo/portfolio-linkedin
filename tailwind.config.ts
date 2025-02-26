import type { Config } from "tailwindcss";

export default {
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
      },
      fontFamily: { 
        RocGrotesk: ["roc-grotesk", 'sans-serif'],
        Tiny5: ['Tiny5', 'sans-serif'],
        PixelifySans: ['Pixelify Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
