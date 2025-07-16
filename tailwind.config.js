/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#c1a1d3',   // light purple
        secondary: '#aee0d3', // light green
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
