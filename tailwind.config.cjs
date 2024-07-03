/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'secondary-gray': '#c4c4c4',
        primary: '#D50036',
        secondary: '#C4C4C4',
        'primary-green': '#00B454',
        'primary-gray': '#4B5054',
        'primary-black': '#0F151F',
        'primary-blue': '#313EB2',
        'primary-red': '#E50303',
        'primary-yellow': '#F39D1C',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/line-clamp')
  ],
}
