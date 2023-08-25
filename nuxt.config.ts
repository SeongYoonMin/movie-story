// https://nuxt.com/docs/api/configuration/nuxt-config
require("dotenv").config();

export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      img_url: process.env.IMG_URL,
      movie_url: process.env.TMDB_URL,
      access_token: process.env.ACCESS_TOKEN,
      api_key: process.env.API_KEY,
    },
  },
  app: {
    head: {
      title: "MOVIE TIME",
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/@vuepic/vue-datepicker@latest/dist/main.css",
        },
        {
          rel: "stylesheet",
          as: "style",
          href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css"
        }
      ],
    },
  },
  css: [
    "~/assets/reset.scss",
    "~/assets/main.scss",
    "swiper/css",
    "~/assets/swiper.scss",
    "~/assets/datepicker.scss",
  ],
  modules: ["@pinia/nuxt"],
  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },
});
