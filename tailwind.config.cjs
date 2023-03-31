/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.jsx"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'review-photo' : "url('https://webkit.org/demos/srcset/image-src.png')",
      }
    },
  },
  plugins: [require("daisyui"),],
}
