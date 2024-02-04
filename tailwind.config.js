/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        Cedarville: ['Cedarville Cursive'] ,
        protest:['"Protest Riot", sans-serif']
    } 
    },
  },
  plugins: [],
}

