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
        'border-gray': 'hsl(217, 16%, 45%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'dark-text': 'hsl(229, 25%, 31%)',
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
      boxShadow: {
        'paper-inner': 'inset 0 0.25rem rgba(0, 0, 0, 0.15)',
        paper: '0 0.5rem rgba(0, 0, 0, 0.3), 0 0.5rem hsl(230, 89%, 62%)',
      },
    },
  },
  plugins: [],
  content: ['./{pages,components,layouts,stores}/**/*.{html,js,ts,vue}'],
};
