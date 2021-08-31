// tailwind.config.js
// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#0A1128',
      white: '#FFFFFF',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
