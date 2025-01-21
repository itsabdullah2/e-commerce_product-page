/** @type {import('tailwindcss').Config} */

const colors = {
  primary: "rgb(255, 125, 26)",
  paleOrange: "rgb(255, 237, 224)",
  veryDarkBlue: "rgb(29, 32, 37)",
  darkGrayishBlue: "rgb(104, 112, 125)",
  grayishBlue: "rgb(182, 188, 200)",
  lightGrayishBlue: "rgb(247, 248, 253)",
  customBlack: "rgba(0, 0, 0, 0.75)",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: colors,
      backgroundColor: colors,
    },
  },
  plugins: [],
};
