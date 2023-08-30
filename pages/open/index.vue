<script setup lang="ts">

const route = useRoute();



const searchQuery = computed(() => {
  const { language, region, page} =
    route.query;
  return <INowPlayingSearch>{
    language: language?.toString() || "ko-KR",
    region: region?.toString() || "",
    page: page?.toString() || 1,
  };
});
const { data: nowPlaying } = await useApiFetch<INowPlayingMovieList>("/search/now_playing", {
  method: "GET",
  query: searchQuery,
  watch: [searchQuery],
});
</script>

<template>
  <section>open</section>
</template>

<style lang="scss" scoped></style>
