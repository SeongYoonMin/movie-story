<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const searchValue = ref<string>(route.query.query?.toString() || ""); // 검색어
const searchYear = ref<string>(
  route.query.primary_release_year?.toString() || ""
); // 출시일
const searchRegion = ref<string>(route.query.region?.toString() || "KR"); // 지역?

// METHOD

const updateSearchValue = (value: string) => {
  searchValue.value = value;
};
const updateSearchYear = (value: string) => {
  searchYear.value = value;
};
const updateSearchRegion = (value: string) => {
  searchRegion.value = value;
};

const searchQuery = computed(() => {
  const { query, language, region, page, primary_release_year, year } =
    route.query;
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
  router.push({
    path: "/movie",
    query: {
      query: searchValue.value,
      region: searchRegion.value,
      year: searchYear.value,
      page: searchData.value?.page,
    },
  });
};
</script>

<template>
  <section></section>
</template>

<style lang="scss" scoped></style>
