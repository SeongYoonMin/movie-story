<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();
const { $swiper } = useNuxtApp();
const searchQuery = computed(() => {
  const { language, page, region } = route.query;
  return <INowPlayingSearch>{
    language: language?.toString() || "ko-KR",
    page: page?.toString() || 1,
    region: region?.toString() || "KR",
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
    <div class="movie_list">
      <ClientOnly>
        <h2 class="title">현재 상영중인 영화 </h2>
        <Swiper
          v-if="nowPlaying"
          class="list now_playing"
          :slidesPerView="'auto'"
          :spaceBetween="16"
          :modules="[$swiper.Autoplay]"
          :loop="true"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
          }"
        >
          <SwiperSlide
            v-for="items in nowPlaying.results.slice(0, 10)"
            class="items"
          >
            <NuxtLink :to="'/movie/' + items.id">
              <picture class="thumb"
                ><img :src="config.public.img_url + items.poster_path" alt=""
              /></picture>
            </NuxtLink>
          </SwiperSlide>
        </Swiper>
        <div v-else>현재 개봉된 영화 없음</div>
      </ClientOnly>
      <hr class="line" />
      <ClientOnly>
        <h2 class="title">개봉 예정인 영화 </h2>
        <Swiper
          v-if="upComing"
          class="list up_coming"
          :slidesPerView="'auto'"
          :spaceBetween="16"
          :modules="[$swiper.Autoplay]"
          :loop="true"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
            reverseDirection: true,
          }"
        >
          <SwiperSlide
            v-for="items in upComing.results.slice(0, 10)"
            class="items"
          >
            <NuxtLink :to="'/movie/' + items.id">
              <picture class="thumb"
                ><img :src="config.public.img_url + items.poster_path" alt=""
              /></picture>
            </NuxtLink>
          </SwiperSlide>
        </Swiper>
        <div v-else>현재 개봉된 영화 없음</div>
      </ClientOnly>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.movie_list {
  width: 100%;
  box-sizing: border-box;
  padding: 40px 20px;
  .title {
    font-size: 24px;
    line-height: 1.25;
    font-weight: 500;
    margin-bottom: 24px;
  }
  .line {
    margin: 40px 0;
    width: 100%;
    height: 1px;
    background-color: #7b7b7b;
  }
  .list {
    width: 100%;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    .items {
      position: relative;
      z-index: 1;
      width: auto;
      .thumb {
        max-width: 100%;
      }
    }
  }
}
</style>
