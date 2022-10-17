/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      maxWidth: {
        '48': '12rem'
      },
      minWidth: {
        '48': '12rem'
      }
    },
  },
  plugins: [],
}
