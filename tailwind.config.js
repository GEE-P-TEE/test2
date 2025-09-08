/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mango-orange': '#FF8C42',
        'tropical-green': '#2ECC71',
        'golden-yellow': '#F39C12',
        'soft-cream': '#FFF8E1',
        'light-green': '#F1F8E9',
        'deep-navy': '#2C3E50',
        'warm-gray': '#7F8C8D',
        'success-green': '#27AE60',
        'warning-orange': '#E67E22',
        'error-red': '#E74C3C'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem'
      },
      boxShadow: {
        'tropical': '0 4px 12px rgba(255, 140, 66, 0.15)',
        'soft': '0 2px 8px rgba(0, 0, 0, 0.1)'
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
}