/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{njk,md}", "./_includes/**/*.{njk,md}",, "./_templates/**/*.{njk,md}", "./src/**/*.svg",],
  theme: {
    extend: {},
  },
  plugins: [],
}

