/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    extend: {
      colors: {
        'maintext' : '#2F2F2F',
        'secotext' : '#BBBCBC',
        'mainbody' : '#FFFFFF',
        'secobody' : '#E9E9E9'
      },
    },
    extend: {
      fontSize: {
        'heading': '9.370rem', // Custom extra small font size
        'paragraph': '1.750rem',   // Another custom extra small font size
        'nav': '1.125rem',     // Custom extra large font size
      },
    },
  },
  plugins: [],
};
