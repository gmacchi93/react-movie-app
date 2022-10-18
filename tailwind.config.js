/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'fade-in': 'fadeIn 0.3s ease-in',
      },
      maxWidth: {
        '48': '12rem'
      },
      minWidth: {
        '48': '12rem'
      },
      keyframes: () => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        }
      })
    },
  },
  plugins: [],
}
