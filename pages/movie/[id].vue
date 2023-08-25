<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();
const { data: searchData } = await useApiFetch<IMovieDetail>(
  "/movie/" + route.params.id,
  {
    method: "GET",
  }
);
</script>

<template>
  <section v-if="searchData">
    <picture><img :src="config.public.img_url + searchData.poster_path" alt=""></picture>
  </section>
</template>

<style lang="scss" scoped></style>
