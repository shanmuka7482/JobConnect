/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary" : "#424874",
        "secondary" : "#DCD6F7",
        "light":"#A6B1E1",
        "light1":"#D6E5E3",
        "light2":"#CACFD6"
      }
    },
  },
  plugins: [],
};
