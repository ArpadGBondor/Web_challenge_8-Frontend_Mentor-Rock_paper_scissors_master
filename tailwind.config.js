/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      backgroundColor: {
        modal: 'rgba(0, 0, 0, 0.35)',
      },
      colors: {
        'dark-blue': 'rgb(24, 36, 66)',
        'border-gray': 'rgba(127,127,127,0.5)',
      },
      height: {
        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
      },
      left: {
        'wide-middle': 'calc(50% - 22rem)',
      },
      width: {
        wide: '44rem',
      },
    },
  },
  plugins: [],
  content: ['./{pages,components,layouts,stores}/**/*.{html,js,ts,vue}'],
};
