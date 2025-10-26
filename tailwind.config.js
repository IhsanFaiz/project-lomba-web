/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    fontFamily:{
      sans: ['sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

