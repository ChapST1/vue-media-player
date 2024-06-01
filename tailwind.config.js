/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#17E07B',
        accent: '#173F2B',
        bg: '#161616',
      },
      height: {
        'player-h': '78px',
      },
    },
  },
  plugins: [],
};
