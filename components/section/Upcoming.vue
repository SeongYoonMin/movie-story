<script setup lang="ts">
const { data: upComingList } = await api("/movie/upcoming", "get");
const mediaTypeState = ref<string>("movie");
const mediaTypeHandleEvent = (state: string) => {
  mediaTypeState.value = state;
};
console.log(upComingList.value);
</script>

<template>
  <section class="upcoming">
    <div class="upcoming_header">
      <h2 class="header_title">오픈 예정작 예고편을 바로 확인해 보세요!</h2>
    </div>

    <div class="upcoming_list" v-if="upComingList">
      <ClientOnly>
        <Swiper v-if="upComingList.results" class="list" :slidesPerView="2" :spaceBetween="40">
          
          <SwiperSlide v-for="items in upComingList.results"
            ><picture class="thumb"
              ><img
                :src="'https://image.tmdb.org/t/p/w500/' + items.poster_path"
                :alt="items.name" /></picture
          ></SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.upcoming {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  border-radius: 16px;
  border: 1px solid #636363;
  box-sizing: border-box;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 16px;
  .upcoming_header {
    box-sizing: border-box;
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header_title {
      font-size: 20px;
      font-weight: 700;
    }
    .more {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: white;
      text-decoration: none;
    }
  }

  .upcoming_list {
    padding: 0 16px;
    box-sizing: border-box;
  }
}
</style>
