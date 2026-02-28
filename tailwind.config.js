/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0A0A0B',
          lighter: '#121214',
          subtle: '#18181B',
        },
        champagne: {
          DEFAULT: '#E5D5B3',
          muted: '#C4B594',
          glow: 'rgba(229, 213, 179, 0.2)',
        },
        slate: {
          silver: '#708090',
          dark: '#3F4E5E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};