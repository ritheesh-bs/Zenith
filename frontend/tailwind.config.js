/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors:{
      transparent: 'transparent',
      black:'#000000',
      slate:{
        100:'#E5E5E5',
        200:'#CCCCCC',
        300:'#AAAAAA',
      },
      white:{
        100:'#FFFFFF',
        200:'#F8F8F8',
        300:'#F0F0F0',
      },
      gray:{
        100:'#040404',
        200:'#060606',
        300:'#121212',
        400:'#0B0B0B',
        500:'#222222',
        600:'#333333',
        700:'#444444',
        800:'#666666',
      }
    },
    extend: {},
  },
  plugins: [],
}

