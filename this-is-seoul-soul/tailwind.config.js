/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      yellow: {
        50: '#FFF2D0',
        100: '#FFE5A2',
        200: '#FFD873',
        300: '#FFCB45',
        400: '#FFBE16',
        500: '#CC9812',
        600: '#99720D',
        700: '#664C09',
        800: '#332604',
      },
      gray: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#EEEEEE',
        300: '#E0E0E0',
        400: '#BDBDBD',
        500: '#9E9E9E',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
      },
    },
    extend: {},
  },
  plugins: [],
};
