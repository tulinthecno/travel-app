/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true ,

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
   
    } ,
    screens: {
      'xs':'300px' ,
      'sm':'640px',
      'md':'768px',
      lg:'1024px',

      
      "xl":'1233px',
      '2xl':'1455px',
    }
  },
  plugins: [require("tailwind-scrollbar-hide"), require("@tailwindcss/forms")],
};
