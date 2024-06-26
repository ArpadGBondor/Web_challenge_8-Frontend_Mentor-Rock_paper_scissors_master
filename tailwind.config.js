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
      colors: {
        'dark-blue': 'rgb(24, 36, 66)',
      },
    },
  },
  plugins: [],
  content: ['./{pages,components,stores}/**/*.{html,js,ts,vue}'],
};
