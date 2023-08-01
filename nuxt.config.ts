// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      movie_url: "https://api.themoviedb.org/3",
      access_token:
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTYyNjM5MTMzZTE2ODlhN2VjZTMxYzQxNDBmMTYwNyIsInN1YiI6IjY0ODFjZjc4ZTI3MjYwMDE0N2I4ODhmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rNGh_Ij7dWQ1We97kKo_oymFHNQBsOLw1Pei8mX6338bb",
      api_key: "0962639133e1689a7ece31c4140f1607",
    },
  },
  app: {
    head: {
      title: "MOVIE TIME",
    },
  },
  css: ['~/assets/reset.scss','~/assets/main.scss'],
  modules: ["@pinia/nuxt"],
});