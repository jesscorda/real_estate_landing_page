/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        'gray-400': '#889099',
        'primary-700': '#2C3A61',
        'primary-500': '#4A60A1',
        'primary-400': '#6E80B4',
        'primary-50': '#EDEFF6',
        'blue-overlay': '#063053'
      }
    },
  },
  plugins: [],
};
