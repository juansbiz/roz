/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-roz-yellow',
    'text-roz-yellow',
    'border-roz-yellow',
    'hover:bg-roz-yellow',
    'bg-roz-dark',
    'text-roz-dark',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'bebas': ['Bebas Neue', 'cursive'],
      },
      colors: {
        'roz': {
          yellow: '#f2ff00',
          dark: '#101010',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
