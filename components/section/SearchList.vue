<script setup lang="ts">
interface ISearchProps {
  results: IMovieItems[];
}
const props = defineProps<ISearchProps>();
</script>

<template>
  <section v-if="props.results" class="search_list">
    <div v-for="items in props.results" class="items">
      <picture class="thumb">
        <img v-if="items.poster_path === null" src="~/assets/images/null_image.png" alt="이미지 찾기 실패">
        <img v-else :src="'https://image.tmdb.org/t/p/w500/' + items.poster_path" :alt="items.title">
      </picture>

    </div>
  </section>
</template>

<style lang="scss" scoped>
.search_list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 12px;
  column-gap: 40px;
  .items {
    .thumb {
      display: block;
      width: 100%;
      img {
        max-width: 100%;
        border-radius: 8px;
      }
    }
  }
}
</style>
