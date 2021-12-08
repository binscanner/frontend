module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: ['active'],
    },
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
      'xsm': {'max': '500px'},

      'mob2xl': {'min': '1535px'},
      'mobxl': {'min': '1279px'},
      'moblg': {'min': '1023px'},
      'mobmd': {'min': '767px'},
      'mobsm': {'min': '639px'},
      'mobxsm': {'min': '500px'},

      'h2xl': {'min': '1535px'},
      'hxl': {'min': '1279px'},
      'hlg': {'min': '1023px'},
      'h900': {'min': '900px'},
      'hmd': {'min': '767px'},
      'hsm': {'min': '639px'},
      'hxsm': {'min': '500px'},
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'item': '#ffc278',
      'bio': '#6d4e46',
      'glass': '#4dc591',
      'plastic' : '#ffff33',
      'paper' : '#336fff',
      'userProfileColor': '#085CAF',
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
