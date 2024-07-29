/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const { colors } = require('@mui/material');
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%, 20%': { width: '0%' },
          '40%, 60%': { width: '100%' },
          '80%, 100%': { width: '0%' },
        },
        blink: {
          '0%, 100%': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'white' },
        },
      },
      animation: {
        typing: 'typing 4s steps(40, end) infinite, blink 0.75s step-end infinite',
      },
      colors:{
        'custom-blue': 'rgb(13, 47, 102)'
      },
    },
  },
  plugins: [],
});

// "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"