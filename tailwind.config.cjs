/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        glitchText: "'Rubik Glitch', cursive",
        h1Text: "'IM Fell English', serif",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
