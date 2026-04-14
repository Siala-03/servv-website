
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          coral: '#FF6B35',
          'coral-dark': '#E55A2B',
          navy: '#1B2A4A',
          'navy-light': '#2A3F6C',
          teal: '#2EC4B6',
          gray: '#F8F9FA',
          'gray-dark': '#E9ECEF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(27, 42, 74, 0.05)',
        'card': '0 10px 30px -5px rgba(27, 42, 74, 0.08)',
      }
    },
  },
  plugins: [],
}
