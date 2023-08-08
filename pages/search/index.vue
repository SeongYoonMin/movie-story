<script setup lang="ts">
const route = useRoute();

const searchQuery = computed(() => {
  const { query, region, page } = route.query;
  return {
    query: query?.toString() || "",
    region: region?.toString() || "",
    page: page?.toString() || 1,
  };
});

const { data: searchData } = await useApiFetch<IMovieSearch>("/search/keyword", {
  method: "GET",
  query: searchQuery,
  watch: [searchQuery],
});
</script>

<template>
  <main id="search">
    <SectionSearch></SectionSearch>
    <section v-if="searchData">
      <div v-for="items in searchData.results">{{ items.name }}</div>
    </section>
    <section v-else>
      <p>{{ searchQuery.query }}에 대한 검색결과가 없습니다.</p>
    </section>
  </main>
</template>

<style lang="scss" scoped>
#search {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}
</style>