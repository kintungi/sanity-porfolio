module.exports = {
  content: [
    "./src/*/*.{jsx,html,tsx,js}", "./public/*.html", "./src/*.{jsx,html,tsx,js}"
  ],
  mode: "jit",
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
