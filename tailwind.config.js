/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/*.vue',
    './src/**/*.vue',
    './src/**/**/*.vue',
    './src/**/**/**/*.vue',
    './src/**/**/**/**/*.vue'
  ],
  theme: {
    fontFamily: {
      'rob': ['Roboto', 'sans-serif'],
      'rob-con': ['Roboto Condensed', 'sans-serif'],
      'ptsans': ['PT Sans', 'sans-serif'],
    },
    extend: {}
  },
  plugins: []
}

