<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const searchValue = ref<string>(route.query.query?.toString() || ""); // 검색어
const searchYear = ref<string>(
  route.query.primary_release_year?.toString() || ""
); // 출시일

// METHOD

const updateSearchValue = (value: string) => {
  searchValue.value = value;
};
const updateSearchYear = (value: string) => {
  searchYear.value = value;
};

const searchQuery = computed(() => {
  const { query, language, first_air_date_year, page, include_adult, year } =
    route.query;
  return <ISearchQuery>{
    query: query?.toString() || "",
    language: language?.toString() || "ko-KR",
    first_air_date_year: first_air_date_year?.toString() || "",
    include_adult: include_adult?.toString() || false,
    page: page?.toString() || 1,
    year: year?.toString() || "",
  };
});
const { data: searchData } = await useApiFetch<IMovieSearch>("/search/tv", {
  method: "GET",
  query: searchQuery,
  watch: [searchQuery],
});

const submitEvent = () => {
  router.push({
    path: "/drama",
    query: {
      query: searchValue.value,
      year: searchYear.value,
      page: searchData.value?.page,
    },
  });
};
const eventDetail = (id: number) => {
  router.push("/drama/" + id);
};
</script>

<template>
  <section class="drama">
    <SectionSearch
      :search_type="'drama'"
      :search_value="searchValue"
      :search_year="searchYear"
      @update:value="updateSearchValue"
      @update:year="updateSearchYear"
      @submit:value="submitEvent"
    ></SectionSearch>
    <div v-if="searchData" class="data">
      <p v-if="searchData.total_results" class="search_total_result">
        검색된 결과는 총
        <strong>{{ searchData.total_results.toLocaleString("ko-KR") }}</strong
        >건 입니다.
      </p>
      <SectionSearchList
        :results="searchData.results"
        :media_type="'drama'"
        @event:detail="eventDetail"
      ></SectionSearchList>
      <SectionPagination
        v-if="searchData.page"
        :page="searchData.page"
        :total="searchData.total_pages"
      ></SectionPagination>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.drama {
  width: 100%;
  max-width: 1400px;
  padding: 40px;
  box-sizing: border-box;
  margin: 0 auto;
  .data {
    padding: 40px 0;
    .search_total_result {
      padding-bottom: 40px;
      width: 100%;
      text-align: end;
      strong {
        font-weight: 600;
      }
    }
  }
}
</style>
