// https://nuxt.com/docs/api/configuration/nuxt-config
require('dotenv').config();

export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      movie_url: process.env.TMDB_URL,
      access_token:
        process.env.ACCESS_TOKEN,
      api_key: process.env.API_KEY,
    },
  },
  app: {
    head: {
      title: "MOVIE TIME",
    },
  },
  css: ['~/assets/reset.scss','~/assets/main.scss', 'swiper/css', '~/assets/swiper.scss'],
  modules: ["@pinia/nuxt"],
});