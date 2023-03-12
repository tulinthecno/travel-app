/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'inter': ['Inter', 'sans-serif'], 
      'urbanist': ['Urbanist', 'sans-serif'], 
      'arabic': ['Noto Sans Arabic', 'sans-serif'], 
      SansArabic: ["IBM Plex Sans Arabic", "sans-serif"],
   
    }
  },
  plugins: [require("tailwind-scrollbar-hide"), require("@tailwindcss/forms")],
};
