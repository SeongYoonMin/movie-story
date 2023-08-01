<script setup lang="ts">
const { $swiper } = useNuxtApp();

const poster = ref<IPoster[]>([
  {
    id: 0,
    src: "assets/images/poster1.png",
    name: "1번 모모 에디션",
    path: "#none",
  },
  {
    id: 1,
    src: "assets/images/poster2.png",
    name: "2번 모모의 영화칼럼",
    path: "#none",
  },
  {
    id: 2,
    src: "assets/images/poster3.png",
    name: "3번 모모 VVIP",
    path: "#none",
  },
]);
</script>

<template>
  <section class="main_top">
    <div class="today"></div>
    <div class="poster">
      <ClientOnly>
        <Swiper
          class="list"
          :slidesPerView="'auto'"
          :modules="[$swiper.Autoplay, $swiper.Pagination]"
          :pagination="{
            type: 'fraction',
            }"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
          }"
        >
          <SwiperSlide v-for="items in poster" :key="items.id" class="items">
            <NuxtLink to="#none">
              <img :src="items.src" :alt="items.name" class="thumb" />
            </NuxtLink>
          </SwiperSlide>
          
        </Swiper>
      </ClientOnly>
      <NuxtLink to="#none"
            ><img src="~/assets/images/main_only.png" alt="ONLY TIME SALE"
          /></NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main_top {
  display: grid;
  align-items: flex-start;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 40px;
  .poster {
    width: 100%;
    position: relative;
    overflow: hidden;
    .items {
      position: relative;
      z-index: 1;
      width: 100%;
      .thumb {
        max-width: 100%;
      }
    }
  }
}
</style>
