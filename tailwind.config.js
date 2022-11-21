/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      theme: {
        padding : '1.5rem'
      },
        screens: {
          'xs': '375px',
      },
      backgroundImage: {
        'back-1' : "url('..//public/images/artboard3.jpg')",
        'back-2' : "url('..//public/images/blue-bg.jpg')",
        'back-3' : "url('..//public/images/law_background.jpg')",
        'back-4' : "url('..//public/images/new-york.jpg')",
        'back-5' : "url('..//public/images/immigration-girl.jpg')",
        'back-6' : "url('..//public/images/law-backgrounds-1.png')",
        'back-7' : "url('..//public/images/gavel.jpg')",
        'back-8' : "url('..//public/images/flag.jpg')",
        'back-9' : "url('..//public/images/library.jpg')",
        'back-10' : "url('..//public/images/law-background-2.jpg')",
      },
    },
  },
  plugins: [],
}
