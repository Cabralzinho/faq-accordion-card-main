/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      screens: {
        desktop: {
          min: "850px"
        }
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [],
}

