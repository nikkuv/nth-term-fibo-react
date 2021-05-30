module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      extend: {
        colors:{
          primary : '#01A9E7'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
}