<script setup lang="ts">
interface ISearchProps {
  media_type: string;
  results: ISearchItems[];
}
const props = defineProps<ISearchProps>();
const emits = defineEmits<{
  (e: "event:detail", id: number): void;
}>();
const eventDetail = (id:number) => {
  emits("event:detail", id);
} 
</script>

<template>
  <section v-if="props.results" class="search_list">
    <div v-for="items in props.results" class="items" @click="eventDetail(items.id)">
      <picture class="thumb">
        <img
          v-if="items.poster_path === null"
          src="~/assets/images/null_image.png"
          alt="이미지 찾기 실패"
        />
        <img
          v-else
          :src="'https://image.tmdb.org/t/p/w500/' + items.poster_path"
          :alt="items.title"
        />
      </picture>
      <div class="info">
        <h1 class="title">
          {{ props.media_type === "movie" ? items.title : items.name }}
        </h1>
        <p class="overview">{{ items.overview }}</p>
        <p class="date">
          출시일 :
          {{
            props.media_type === "movie"
              ? items.release_date
              : items.first_air_date
          }}
        </p>
        <div class="vote">
          <p class="avg">평점 : {{ items.vote_average.toFixed(1) }}</p>
          <div class="count">
            <img src="~/assets/images/heart.svg" alt="좋아요" />
            <p>{{ items.vote_count }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.search_list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
  column-gap: 16px;
  padding: 60px 0;
  .items {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    .thumb {
      display: block;
      width: 100%;
      img {
        max-width: 100%;
        object-fit: contain;
        border-radius: 8px;
      }
    }
    .info {
      padding: 0 8px;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      row-gap: 8px;
      .title {
        font-size: 20px;
        line-height: 25px;
        height: 25px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        font-weight: 600;
      }
      .overview {
        font-size: 16px;
        font-weight: 300;
        line-height: 20px;
        height: 80px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        color: #7b7b7b;
      }
      .vote {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        column-gap: 16px;
        .count {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
</style>
