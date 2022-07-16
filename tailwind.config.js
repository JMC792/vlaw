/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'back-1' : "url('..//public/artboard2.jpg')",
        'back-2' : "url('..//public/family-smiling.jpg')",
        'back-3' : "url('..//public/background3.jpg')",
        'back-4' : "url('..//public/new-york.jpg')",
        'overview-img-1' : "url('..//public/flag.jpg')"
      }
    },
  },
  plugins: [],
}
