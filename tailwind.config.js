/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
        'montserrat': ['Montserrat'],
      },
      'lavender-gray': {  
        DEFAULT: '#C9B6D7',  
        '50': '#FFFFFF',  
        '100': '#FFFFFF',  
        '200': '#FFFFFF',  
        '300': '#F0EBF4',  
        '400': '#DCD0E5',  
        '500': '#C9B6D7',  
        '600': '#AE92C3',  
        '700': '#936EAF',  
        '800': '#775194',  
        '900': '#5A3D70'
      },
    },
    screens: {
      'sm': {'min': '360px', 'max': '430px'},
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
  
};
