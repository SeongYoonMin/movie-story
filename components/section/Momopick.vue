<script setup lang="ts">

const { results: trendingList } = await useApi<IMovieList>(
  "/trending/all/week?language=ko-KR",
  {
    method: "get",
  }
);
const trendingMovie = trendingList.filter((el:IMovieItems) => {
  return el.media_type === "movie";
});
const trendingTv = trendingList.filter((el:IMovieItems) => {
  return el.media_type === "tv";
});
const mediaTypeState = ref<string>("movie");
const mediaTypeHandleEvent = (state: string) => {
  mediaTypeState.value = state;
};
</script>

<template>
  <section class="pink">
    <template v-if="trendingList">
      <div class="pink_header">
        <h2 class="header_title">모모에서 추천하는 작품도 만나보세요!</h2>
        <NuxtLink to="/movie" class="more">
          <span>더보기</span>
          <img src="~/assets/images/arrow.svg" alt="" />
        </NuxtLink>
      </div>
      <div class="pink_type">
        <button
          type="button"
          @click="mediaTypeHandleEvent('movie')"
          class="type_button"
          :class="{ on: mediaTypeState === 'movie' }"
        >
          영화
        </button>
        <button
          type="button"
          @click="mediaTypeHandleEvent('tv')"
          class="type_button"
          :class="{ on: mediaTypeState === 'tv' }"
        >
          드라마
        </button>
      </div>

      <!-- {{ items.media_type === "movie" ? items.title : items.name }} -->
      <ClientOnly>
        <Swiper
          class="list"
          :slidesPerView="2.8"
          :spaceBetween="24"
          v-show="mediaTypeState === 'movie' ? true : false"
        >
          <SwiperSlide
            class="items"
            v-for="items in trendingMovie"
            :key="items.id"
          >
            <NuxtLink :to="'/movie/' + items.id">
              <picture class="thumb"
                ><img
                  :src="'https://image.tmdb.org/t/p/w500/' + items.poster_path"
                  :alt="items.title"
              /></picture>
              <div class="desc">
                <div class="info">
                  <h3 class="title">{{ items.title }}</h3>
                  <p class="overview">{{ items.original_title }}</p>
                </div>
                <div class="etc">
                  <p>평점 {{ items.vote_average }}</p>
                  <p>
                    <img src="~/assets/images/heart.svg" alt="하트" />{{
                      items.vote_count
                    }}
                  </p>
                  <p>{{ items.release_date }}</p>
                </div>
              </div>
            </NuxtLink>
          </SwiperSlide>
        </Swiper>

        <Swiper
          class="list"
          :slidesPerView="2.8"
          :spaceBetween="24"
          v-show="mediaTypeState === 'tv' ? true : false"
        >
          <SwiperSlide
            class="items"
            v-for="items in trendingTv"
            :key="items.id"
          >
            <NuxtLink :to="'/drama/'+items.id">
              <picture class="thumb"
                ><img
                  :src="'https://image.tmdb.org/t/p/w500/' + items.poster_path"
                  :alt="items.name"
              /></picture>
              <div class="desc">
                <div class="info">
                  <h3 class="title">{{ items.name }}</h3>
                  <p class="overview">{{ items.original_name }}</p>
                </div>
                <div class="etc">
                  <p>평점 {{ items.vote_average }}</p>
                  <p>
                    <img src="~/assets/images/heart.svg" alt="하트" />{{
                      items.vote_count
                    }}
                  </p>
                  <p>{{ items.first_air_date }}</p>
                </div>
              </div>
            </NuxtLink>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </template>
  </section>
</template>

<style lang="scss" scoped>
.pink {
  box-sizing: border-box;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto 140px;
  .pink_header {
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
  .pink_type {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    column-gap: 32px;
    padding: 16px;
    box-sizing: border-box;
    .type_button {
      padding: 0;
      background-color: transparent;
      border: 0;
      color: #7b7b7b;
      transition: 0.3s all;
      cursor: pointer;
      &.on {
        color: white;
        font-weight: 500;
      }
      &:hover {
        color: white;
      }
    }
  }
  .list {
    .items {
      display: flex;
      flex-direction: column;
      row-gap: 16px;
      .thumb {
        border-radius: 8px;
        overflow: hidden;
      }
      .desc {
        padding: 0 8px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        row-gap: 16px;
        .info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          row-gap: 8px;
          .title {
            text-decoration: underline;
            color: white;
            font-weight: 700;
          }
          .overview {
            display: -webkit-box;
            color: #7b7b7b;
            line-height: 1.2;
            height: 17.2px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }
        }
        .etc {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          column-gap: 32px;
          p {
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
            column-gap: 8px;
            color: white;
            line-height: 24px;
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
    }
  }
}
</style>
