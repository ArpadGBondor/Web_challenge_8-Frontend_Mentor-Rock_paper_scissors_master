// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Frontend Mentor | Rock Paper Scissors',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/gabriel.ico' }],
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@pinia/nuxt'],
  components: {
    global: true,
    dirs: ['~/components'],
  },
});
