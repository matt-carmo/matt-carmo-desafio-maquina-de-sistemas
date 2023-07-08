/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#0D1B2A",
        secondary: "#1B263B",
        terciary: "#415A77",
        white: "#E0E1DD",
      },
    },
  },
  plugins: [],
}