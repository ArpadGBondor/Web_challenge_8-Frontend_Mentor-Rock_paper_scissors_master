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
        'disk-inner-sm': 'inset 0 0.3rem rgba(0, 0, 0, 0.15)',
        'disk-inner-md': 'inset 0 0.5rem rgba(0, 0, 0, 0.15)',
        'disk-inner-lg': 'inset 0 0.75rem rgba(0, 0, 0, 0.15)',
        'rock-sm': '0 0.5rem rgba(0, 0, 0, 0.3), 0 0.5rem hsl(349, 71%, 52%)',
        'paper-sm': '0 0.5rem rgba(0, 0, 0, 0.3), 0 0.5rem hsl(230, 89%, 62%)',
        'scissors-sm':
          '0 0.5rem rgba(0, 0, 0, 0.3), 0 0.5rem hsl(39, 89%, 49%)',
        'rock-md': '0 0.65rem rgba(0, 0, 0, 0.3), 0 0.65rem hsl(349, 71%, 52%)',
        'paper-md':
          '0 0.65rem rgba(0, 0, 0, 0.3), 0 0.65rem hsl(230, 89%, 62%)',
        'scissors-md':
          '0 0.65rem rgba(0, 0, 0, 0.3), 0 0.65rem hsl(39, 89%, 49%)',
        'rock-lg': '0 0.8rem rgba(0, 0, 0, 0.3), 0 0.8rem hsl(349, 71%, 52%)',
        'paper-lg': '0 0.8rem rgba(0, 0, 0, 0.3), 0 0.8rem hsl(230, 89%, 62%)',
        'scissors-lg':
          '0 0.8rem rgba(0, 0, 0, 0.3), 0 0.8rem hsl(39, 89%, 49%)',
      },
    },
  },
  plugins: [],
  content: ['./{pages,components,layouts,stores}/**/*.{html,js,ts,vue}'],
  safelist: [
    'shadow-rock-sm',
    'shadow-paper-sm',
    'shadow-scissors-sm',
    'shadow-rock-md',
    'shadow-paper-md',
    'shadow-scissors-md',
    'shadow-rock-lg',
    'shadow-paper-lg',
    'shadow-scissors-lg',
  ],
};
