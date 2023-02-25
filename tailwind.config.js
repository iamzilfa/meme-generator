/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      boxShadow:{
        '3xl': '5px 5px 5px 1px rgba(120,120,120,0.44)',
      }
    },
  },
  plugins: [],
}
