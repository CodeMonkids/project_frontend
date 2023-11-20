/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      common: {
        white: '#FEFEFE',
        black: '#000000',
      },
      pink: {
        100: '#FFF6F6',
        200: '#FFEDED',
        300: '#FF90C2',
      },
    },
    extend: {},
  },
  plugins: [],
};
