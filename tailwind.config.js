export default {
  theme: {
    extend: {
      colors: {
        brand: {
          'black': '#000',
          'dark': '#22211F',
          'semi-dark': '#353433',
          'gray': '#6E6B68',
          'light-gray': '#8B8986',
          'light': '#F3F4EF',
          'white': '#FFF',
          'accent': '#E7FA50',
        },
        steel: {
          '50': '#F2F2F2',
          '300': '#4C4C4C',
          '400': '#353537',
          '500': '#272727',
          '600': '#1F1F1F',
          '700': '#141414',
          '800': '#0D0D0D',
          '900': '#090909',
        }
      },
      fontSize: {
        '8xl': '7rem',
        '2xs': '.6rem',
      },
      screens: {
        'portrait': { 'raw': '(orientation: portrait)' },
        'lg': '1280px',
        'xl': '1600px',
        'xxl': '2000px',
      },
    }
  },
  variants: {
  },
  plugins: [],
}
