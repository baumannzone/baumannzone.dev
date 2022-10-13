const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
