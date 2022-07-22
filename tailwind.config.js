/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      backgroundImage: {
        'back-1' : "url('..//public/artboard2.jpg')",
        'back-2' : "url('..//public/scott-graham.jpg')",
        'back-3' : "url('..//public/law_background.jpg')",
        'back-4' : "url('..//public/new-york.jpg')",
        'back-5' : "url('..//public/julio-reyes-1.jpg')",
        'overview-img-1' : "url('..//public/flag.jpg')"
      },
    },
  },
  plugins: [],
}
