/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {},
    screens: {
    

      'xl': {'min':'767px','max': '1369px'},
      // => @media (max-width: 1279px) { ... }

     

      'sm':  {'min':'250px','max': '767px'},
      // => @media (max-width: 390px) { ... }
    }
  },
  plugins: [],
}

