/** @type {import('tailwindcss').Config} */




export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blackMain: "var(--blackMain, #e7890e)",
        darkMain: "#8383fc",
        redMain: "var(--redMain, #e7890e)",
        blackSecondary: "#282828",
      },
      fontFamily: {
        primary: "DM Sans",
        secondary: "Oswald",
      },
    },
  },
  plugins: [],
};