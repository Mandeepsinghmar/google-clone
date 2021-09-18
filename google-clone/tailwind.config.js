module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '0 2px 5px 1px rgb(64 60 67 / 16%)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
