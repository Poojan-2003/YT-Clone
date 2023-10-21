/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"], //Track all Files located at (/src & /src/<anyfolder>/<anyfiles>)ending with .js  
  theme: {
    extend: {},
    // colors:{
    //   'yt':"#f2f2f2"
    // },
    fontFamily:{
      'roboto': ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
}

