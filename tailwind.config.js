/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
    
  ],
  safelist: [
    "animate-reveal","delay-1","delay-2","delay-3","delay-4","delay-5","delay-6","delay-7","delay-8",
    "delay-9","delay-10","delay-11","delay-12","delay-13","delay-14","delay-15","delay-16","delay-17",
    "delay-18","delay-19","delay-20","delay-21",
  ],
  theme: {
    fontFamily:{
      sans: ['sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

