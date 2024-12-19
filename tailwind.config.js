/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3498DB',
        secondary: '#FF6B35',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};