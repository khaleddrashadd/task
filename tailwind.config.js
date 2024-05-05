/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        xs: '100%',
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1320px'
      }
    },
    extend: {
      colors: {
        main: '#000000',
        sec: '#ffffff'
      },
      borderRadius: {
        main: '6px'
      },
      dropShadow: {
        main: '0px 0px 20px rgba(191, 191, 191, 0.25)'
      }
    }
  },
  plugins: []
};
