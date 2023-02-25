const defaultTheme = require("tailwindcss/defaultTheme");

const themeColors = {
  darkBlue: {
    DEFAULT: "#031B4D",
    50: "#3977F7",
    100: "#2569F7",
    200: "#0952EA",
    300: "#0844C3",
    400: "#06379C",
    500: "#052974",
    600: "#031B4D",
    700: "#010817",
    800: "#000000",
    900: "#000000",
  },
  lightBlue: {
    DEFAULT: "#0061EB",
    50: "#CCE1FF",
    100: "#B8D5FF",
    200: "#8FBDFF",
    300: "#66A5FF",
    400: "#3E8DFF",
    500: "#1575FF",
    600: "#0061EB",
    700: "#004AB3",
    800: "#00337B",
    900: "#001C43",
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      colors: {
        primary: themeColors.lightBlue,
        ...themeColors,
      },
      fontFamily: {
        sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
