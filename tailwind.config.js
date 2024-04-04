/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {

    extend: {
      colors :{
'blue' : 'hsl(231, 69%, 60%)',
'gray' : 'hsl(229, 8%, 60%)',
'red ' : 'hsl(0, 94%, 66%)'


      },
      
      fontFamily: {
        'sanss': ["Rubik", 'sans-serif']
      },
    },
  },
  plugins: [],
}