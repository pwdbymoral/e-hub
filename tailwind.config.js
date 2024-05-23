/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0D173A",
          light: "#2F395C",
        },
        accent: {
          DEFAULT: "#E9D62D",
        },
        white: "#FAFAFA",
        black: "#0a0a0a",
      },
    },
  },
  plugins: [],
};
