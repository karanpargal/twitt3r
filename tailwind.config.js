/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      sans:['sans-serif','Ubuntu-Light-300'],
    },

    extend: {  colors: {
      'regal-blue': '#001253',
      'Bluish-white':'#ECF9FF'
    },

  },
  },
  plugins: [],
}
