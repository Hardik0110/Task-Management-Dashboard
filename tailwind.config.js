/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      
      extend: {
        fontFamily: {
          sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
          jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }