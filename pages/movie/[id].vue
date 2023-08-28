<script setup lang="ts">
// 숫자가 아닌 잘못된 params.id 값 받을 경우 알림과 함께 redirect 처리
definePageMeta({
  middleware: ["id"],
});
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
      <p class="tagline"><span>{{ searchData.tagline }}</span></p>
      <p class="status">{{ searchData.status === "Post Production" ? "개봉 예정" : "개봉 완료"}}</p>
      <h1 class="name">{{ searchData.title }}</h1>
      <p class="overview">{{ searchData.overview }}</p>
      <div class="cont">
        <h2 class="title">장르</h2>
        <div class="genres">
          <p v-for="genres in searchData.genres" :key="genres.id">
            {{ genres.name }}
          </p>
        </div>
      </div>
      <div class="cont">
        <h2 class="title">제작사</h2>
        <div class="production_companies">
          <p v-for="companies in searchData.production_companies" :key="companies.id">{{ companies.name }}</p>
        </div>
      </div>
      <div class="cont">
        <h2 class="title">개봉일</h2>
        <p>{{ searchData.release_date }}</p>
      </div>
      <div class="cont">
        <h2 class="title">런닝타임</h2>
        <p>{{ searchData.runtime }}분</p>
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
    row-gap: 20px;
    .tagline {
      color: #7b7b7b;
      text-decoration: underline;
    }
    .name {
      font-size: 28px;
      font-weight: 600;
      line-height: 1.25rem;
      padding-bottom: 16px;
    }
    .overview {
      color: #7b7b7b;
    }
    .cont {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      column-gap: 16px;
      .title {
        font-size: 18px;
        font-weight: 500;
      }
      .genres {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        column-gap: 8px;
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
          padding: 3px 6px;
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
}
</style>
