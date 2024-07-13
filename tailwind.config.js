/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{pages,components,layouts,plugins,stores}/**/*.{html,js,ts,vue}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        modal: 'rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        game: 'radial-gradient( circle at 50% 0%, hsl(214, 47%, 23%), hsl(237, 49%, 15%) )',
        rock: 'linear-gradient(hsl(349, 70%, 56%), hsl(349, 71%, 52%))',
        paper: 'linear-gradient(hsl(230, 89%, 65%), hsl(230, 89%, 62%))',
        scissors: 'linear-gradient(hsl(40, 84%, 53%), hsl(39, 89%, 49%))',
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
        'play-area': 'calc(100vh - 18.5rem)',
      },
      boxShadow: {
        'disk-inner-sm': 'inset 0 0.3rem rgba(0, 0, 0, 0.15)',
        'disk-inner-md': 'inset 0 0.5rem rgba(0, 0, 0, 0.15)',
        'disk-inner-lg': 'inset 0 0.75rem rgba(0, 0, 0, 0.15)',
      },
      transitionProperty: {
        'top-left': 'top, left',
        'top-left-opacity': 'top, left, opacity',
        'top-left-width-height-opacity': 'top, left, width, height, opacity',
        'top-left-width-height-opacity-shadow':
          'top, left, width, height, opacity, box-shadow',
      },
    },
  },
  plugins: [],
};
