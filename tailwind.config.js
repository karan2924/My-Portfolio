/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      Exo: ['Exo Thin'],
      Media: ['Media Sans SemiCondensed'],
      SF: ['SF Pro Display'],
     Holly : ['Holly Groove Three']
    }
  },
  plugins: [],
}