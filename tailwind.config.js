const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit", // https://tailwindcss.com/docs/just-in-time-mode
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      "4/5": "80%",
    },
    extend: {
      fontFamily: {
        sans: ['"Barlow Condensed"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
