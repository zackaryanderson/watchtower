module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': "#201e1f",
        'secondary': "#ff4000",
        'tertiary': "#faaa8d",
        'fourth': "#feefdd",
        'fifth': "#50b2c0"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
