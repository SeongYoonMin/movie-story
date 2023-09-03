<script setup lang="ts">
const route = useRoute();
const searchQuery = computed(() => {
  const { language, region, page } = route.query;
  return <INowPlayingSearch>{
    language: language?.toString() || "ko-KR",
    region: region?.toString() || "",
    page: page?.toString() || 1,
  };
});

const [{ data: nowPlaying }, { data: upComing }] = await Promise.all([
  useApiFetch<INowPlayingMovieList>("/movie/now_playing", {
    method: "GET",
    query: searchQuery,
    watch: [searchQuery],
  }),
  useApiFetch<IUpcomingMovieList>("/movie/upcoming", {
    method: "GET",
    query: searchQuery,
    watch: [searchQuery],
  }),
]);
</script>

<template>
  <section>
    <div v-if="nowPlaying">
      Now Play is <br />
      {{ nowPlaying.result }}
    </div>
    <div v-if="upComing">
      upComing is <br />
      {{ upComing}}
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
