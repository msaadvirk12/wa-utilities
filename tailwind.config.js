/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'sans-serif']
      }
    },
    colors:{
      gray: {
        200: '#e0e6e9',
        500: '#abbbc2',
        700: '#393c49',
        900: '#1f102b',
        800: '#252836'
      },
      'primary-bg': '#EB966A'
    },
    boxShadow:{
      'primary-sh': '5px 5px 24px rgba(234, 124, 105, 0.32)',
      'inverse-top': '4px 4px 0 #252836',
      'inverse-bottom': '4px 4px 0 #252836'
    }
  },
  plugins: [],
}