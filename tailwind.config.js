/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      scale: {
        '95': '0.95',
        '98': '0.98',
        '102': '1.02',
        '105': '1.05',
        '110': '1.10',
      },
    },
  },
  plugins: [],
};