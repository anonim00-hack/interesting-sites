/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'mini' : '470px'
      },
    },
  },
  plugins: [],
}
