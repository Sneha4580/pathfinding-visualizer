/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Includes all JavaScript and TypeScript files in the src folder
  ],
  theme: {
    extend: {
      keyframes: {
        wall:{
          "0%": {
            transform: "scale(0.7)"
          },
          "100%" : {
            transform: "scale(1)"
          }
        }
      }
    },
  },
  plugins: [],
};
