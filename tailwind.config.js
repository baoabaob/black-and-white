/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'number': ['eajrl', 'sans-serif']
    },
    extend: {
      dropShadow: {
        '3xl': '0px 0px 10px rgba(0, 0, 0, 0.3)',
      },
      flexBasis: {
        '1/9': '11.111%',
      },
    },
  },
  plugins: [],
}

