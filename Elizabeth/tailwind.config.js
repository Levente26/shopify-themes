module.exports = {
  content: [
    "./assets/*.liquid",
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/**/*.liquid",
  ],
  theme: {
    extend: {
      height: {
        "94": "22rem"
      }
    },
  },
  plugins: [],
}
