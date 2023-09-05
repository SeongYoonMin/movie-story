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

const { results: popularMovie } = await useApi<IMovieList>(
  "/movie/popular?language=ko-KR&page=1",
  {
    method: "get",
  }
);
</script>

<template>
  <section class="main_top">
    <div class="today">
      <div class="today_header">
        <h2 class="header_title">현재 상영중인 영화 순위</h2>
        <a href="/open" class="more">
          <span>더보기</span>
          <img src="~/assets/images/arrow.svg" alt="더보기" />
        </a>
      </div>
      <div v-if="popularMovie" class="list">
        <div
          class="items"
          v-for="(items, index) in popularMovie.slice(0, 3)"
          :key="items.id"
        >
          <p class="no" :class="{ first: index === 0 }">{{ index + 1 }}</p>
          <NuxtLink class="content" :to="'/movie/' + items.id">
            <picture class="thumb">
              <img
                :src="'https://image.tmdb.org/t/p/w500/' + items.poster_path"
                :alt="items.title"
              />
            </picture>
            <div class="desc">
              <div class="text">
                <h3 class="title">{{ items.title }}</h3>
                <p class="overview">{{ items.overview }}</p>
              </div>
              <div class="info">
                <p>
                  평점 <span>{{ items.vote_average }}</span>
                </p>
                <p>
                  <img src="~/assets/images/heart.svg" alt="" /><span>{{
                    items.vote_count
                  }}</span>
                </p>
                <p>
                  <span>{{ items.release_date }}</span>
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div v-else>오늘의 추천 게시글이 없습니다.</div>
    </div>
    <div class="poster">
      <ClientOnly>
        <Swiper
          class="list"
          :slidesPerView="'auto'"
          :modules="[$swiper.Autoplay, $swiper.Pagination]"
          :loop="true"
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
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main_top {
  display: grid;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
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
  .today {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    row-gap: 16px;
    .today_header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      border-top: 1px solid white;
      padding: 18px 16px;
      color: white;
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
    .list {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      row-gap: 16px;
      .items {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        column-gap: 40px;
        color: white;
        .no {
          padding: 8px;
          font-size: 40px;
          &.first {
            color: #ffc700;
          }
        }
        .content {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          column-gap: 16px;
          .thumb {
            max-width: 90px;
            border-radius: 8px;
            overflow: hidden;
            img {
              width: 100%;
            }
          }
          .desc {
            flex: 1 1 0;
            height: 100%;
            position: relative;
            padding: 8px 0;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            row-gap: 37px;
            .title {
              font-size: 16px;
              font-weight: 700;
              color: white;
              text-decoration: underline;
              padding-bottom: 8px;
            }
            .overview {
              display: -webkit-box;
              font-size: 16px;
              color: #7b7b7b;
              line-height: 1.2;
              height: 36px;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .info {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              column-gap: 32px;
              p {
                font-size: 16px;
                line-height: 24px;
                display: flex;
                align-content: center;
                position: relative;
                &::after {
                  position: absolute;
                  content: "";
                  top: 8px;
                  right: -15px;
                  width: 1px;
                  height: 8px;
                  display: block;
                  background-color: #7b7b7b;
                }
                &:last-child::after {
                  display: none;
                }
              }
            }
          }
          .date {
            position: absolute;
            bottom: 0;
            left: 0;
            font-size: 16px;
            color: #7b7b7b;
          }
        }
      }
    }
  }
}
</style>
