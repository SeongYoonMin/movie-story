<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const searchType = ref<string>("");
const searchValue = ref<string>(route.query.query?.toString() || ""); // 검색어
const searchYear = ref<string>(route.query.primary_release_year?.toString() || ""); // 출시일
const searchRegion = ref<string>(route.query.region?.toString() || ""); // 지역?
const updateSearchValue = (value: string) => {
  searchValue.value = value;
};

const searchQuery = computed(() => {
  const {
    query,
    language,
    region,
    page,
    primary_release_year,
    year,
  } = route.query;
  return <ISearchQuery>{
    query: query?.toString() || "",
    language: language?.toString() || "ko-KR",
    region: region?.toString() || "",
    page: page?.toString() || 1,
    primary_release_year: primary_release_year?.toString() || "",
    year: year?.toString() || "",
  };
});
const { data: searchData } = await useApiFetch<IMovieSearch>("/search/movie", {
  method: "GET",
  query: searchQuery,
  watch: [searchQuery],
});
const submitEvent = () => {
  router.push({ path: "/test", query: { query: searchValue.value } });
};
</script>

<template>
  <section class="movie">
    <SectionSearch
      :search_type="searchType"
      :search_value="searchValue"
      @update:value="updateSearchValue"
      @submit:value="submitEvent"
    ></SectionSearch>
    <div v-if="searchData" class="data">
      <div v-for="(items, index) in searchData.results" :key="index">
        {{ items.title }}
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.movie {
  width: 100%;
  max-width: 1400px;
  padding: 40px;
  box-sizing: border-box;
  margin: 0 auto;
  .data {
    padding: 40px 0;
  }
}
</style>
