 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#1c1c22", //background color
        secondary: "#25262f", // gray card color
        subsecondary:"#a6a6a9", // light gray text-color 
        active:"#8180fc", // blue active button color
        white:"#ededee", // white text color 

      },
    },
  },
  plugins: [],
}