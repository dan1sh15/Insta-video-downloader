/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ipad: "1150px",
        wideScreen: "900px"
      }
    },
  },
  plugins: [],
}

