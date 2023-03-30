/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    '*.html'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: '250px 1fr',
        mobile: '60px 1fr',
      }
    },
  },
  plugins: [],
}
