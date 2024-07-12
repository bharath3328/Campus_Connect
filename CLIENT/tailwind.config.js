/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { 'border-color': 'transparent' },
        },
      },
      animation: {
        typing: 'typing 2s steps(40, end) forwards, blink 0.75s step-end infinite',
      },
    },
  },
  plugins: [],
});

// "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"