/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        main :  ['Space Mono', 'monospace'],
      },
      colors : {
        cyanBg : 'hsl(185, 41%, 84%)',
        text: 'hsl(183, 100%, 15%)',
        darkGrayishCyan : 'hsl(186, 14%, 43%)' ,
        lightGrayishCyan : '#21C3AC',
        veryLightGrayishCyan : 'hsl(189, 41%, 97%)',
        lightCyan : 'hsl(185, 41%, 84%)'


      }
    },
  },
  plugins: [],
}
