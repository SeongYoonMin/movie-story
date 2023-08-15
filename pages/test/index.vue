<script setup lang="ts">
const searchType = ref<string>("");
const searchValue = ref<string>("");
const route = useRoute();
const router = useRouter();
const testUpdate = (value: string) => {
  searchValue.value = value;
};

// query: string
// include_adult: boolean
// language: string
// primary_release_year: string 출시년도
// page: number
// region: string
// year: string ~year 까지의 작품

const searchQuery = computed(() => {
  const { query,language, region, page, include_adult, primary_release_year, year } = route.query;
  return <ISearchQuery>{
    query: query?.toString() || "",
    include_adult: include_adult?.toString() || "true",
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
  <section>
    <SectionSearch
      :search_type="searchType"
      :search_value="searchValue"
      @update:value="testUpdate"
      @submit:value="submitEvent"
    ></SectionSearch>
    <div v-if="searchData">
      <div v-for="(items, index) in searchData.results" :key="index">
        {{ items.title }}
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
