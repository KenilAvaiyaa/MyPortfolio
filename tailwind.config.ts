import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      transitionTimingFunction: {
        'custom-bezier': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      rotate: {
        '360': '360deg',
      },
    },
  },
  plugins: [],
} satisfies Config;
