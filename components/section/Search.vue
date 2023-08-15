<script setup lang="ts">
interface ISearchProps {
  search_value: string;
  search_type: string;
}
const props = defineProps<ISearchProps>();
const inputValue = ref<string>(props.search_value);
const emits = defineEmits<{
  (e: "update:value", value:string): void
  (e: "submit:value", value:string): void
}>();

// 검색어 변경 이벤트
const changeInputValue = () => {
  emits("update:value", inputValue.value);
};

const submitValueEvent = () => {
  emits("submit:value", "");
}
</script>

<template>
  <section id="search">
    <form @submit.prevent="submitValueEvent" class="search_form">
      <legend class="sr-only">검색</legend>
      <div class="header">
        <div class="left">
          <h2>필터</h2>
          <button type="button" class="filter_clear">
            <span>필터 초기화</span>
            <img src="~/assets/images/filter_clear.svg" alt="" />
          </button>
        </div>
        <button type="submit" class="right">검색</button>
      </div>
      <div class="filter">
        <label for="" class="filter_keyword"
          ><h3>검색어</h3>
          <input
            type="text"
            placeholder="검색어를 입력해주세요."
            required
            v-model="inputValue"
            @input="changeInputValue"
        /></label>
        <!-- <div class="filter_genre">
          <h3>장르</h3>
          <div class="list">
            <input type="radio" name="" value="" checked />
          </div>
        </div> -->
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
#search {
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
  border-radius: 16px;
  border: 1px solid #636363;
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    .left {
      display: flex;
      column-gap: 16px;
      align-items: center;
      justify-content: center;
      h2 {
        font-size: 24px;
        font-weight: 600;
      }
      .filter_clear {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        line-height: 28px;
      }
    }
    .right {
      padding: 12px 16px;
      font-weight: 700;
      color: #1b1b1b;
      border-radius: 10px;
      background-color: #ffc700;
    }
  }
  .filter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .filter_keyword {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      column-gap: 24px;
      padding: 16px 0;
      h3 {
        padding: 8px 16px;
      }
      input {
        border: 1px solid white;
        background-color: transparent;
        padding: 12px 16px;
        flex: 1 1 0%;
        max-width: 280px;
        border-radius: 50px;
        color: white;
      }
    }
  }
}
</style>
