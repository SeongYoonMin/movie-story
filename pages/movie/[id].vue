<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();
const { data: searchData } = await useApiFetch<IMovieDetail>(
  "/movie/" + route.params.id,
  {
    method: "GET",
    query: {
      language: "ko-KR",
    },
  }
);
</script>

<template>
  <section v-if="searchData" class="detail">
    <picture class="thumb"
      ><img :src="config.public.img_url + searchData.poster_path" alt=""
    /></picture>
    <div class="info">
      <h1 class="title">{{ searchData.title }}</h1>
      <p class="overview">{{ searchData.overview }}</p>
      <div class="genres">
        <p v-for="genres in searchData.genres" :key="genres.id">{{ genres.name }}</p>
      </div>
      <div class="production_companies">
        <picture
          v-for="images in searchData.production_companies.filter((el) => {
            return !!el.logo_path;
          })"
          class="companies"
          ><img
            :src="config.public.img_url + images.logo_path"
            alt=""
        /></picture>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.detail {
  width: 100%;
  max-width: 1400px;
  padding: 80px 0;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  column-gap: 20px;
  .thumb {
    display: block;
    overflow: hidden;
    img {
      border-radius: 8px;
    }
  }
  .info {
    padding: 10px 0;
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    .title {
      font-size: 28px;
      font-weight: 600;
      line-height: 1.25rem;
      padding-bottom: 16px;
    }
    .overview {
      color: #7b7b7b;
    }
    .production_companies {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      column-gap: 16px;
      .companies {
        width: 30px;
        height: 24px;
        background-color: white;
        border-radius: 50%;
        padding: 3px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
}
</style>
