/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'inter':['Inter', 'sans-serif'],
      'pacifico':[ 'Pacifico', 'cursive']
    },
    extend: {
      colors: {
        'primary-600': '#FF914D',
        'primary' :'#FF5C00',
        'secondary-gray':'#6D6D6D'
      },
    },
  },
  plugins: [],
}
