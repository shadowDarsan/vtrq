/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: { min: '640px', max: '767px' },
        md: { min: '768px', max: '1023px' },
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {},
    },
  },
  plugins: [],
}
