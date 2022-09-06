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
        'back-1' : "url('..//public/artboard3.jpg')",
        'back-2' : "url('..//public/blue-bg.jpg')",
        'back-3' : "url('..//public/law_background.jpg')",
        'back-4' : "url('..//public/new-york.jpg')",
        'back-5' : "url('..//public/immigration-girl.jpg')",
        'back-6' : "url('..//public/law-backgrounds-1.png')",
        'back-7' : "url('..//public/gavel.jpg')",
        'back-8' : "url('..//public/flag.jpg')",
        'back-9' : "url('..//public/library.jpg')"
      },
    },
  },
  plugins: [],
}
