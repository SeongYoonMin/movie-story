<script setup lang="ts">
import dayjs from 'dayjs';

interface ISearchProps {
  search_value: string;
  search_year: string;
  search_region: string;
}
const props = defineProps<ISearchProps>();
const inputValue = ref<string>(props.search_value);
const inputYear = ref<string>(props.search_year === "" ? dayjs().year().toString() : props.search_year);
const inputRegion = ref<string>(props.search_region);
const emits = defineEmits<{
  (e: "update:value", value: string): void;
  (e: "update:year", value: string): void;
  (e: "update:region", value: string): void;
  (e: "submit:value", value: string): void;
}>();

// 검색어 변경 이벤트
const changeInputValue = () => {
  emits("update:value", inputValue.value);
};
// 년도 변경
const changeInputYear = (modelData: number) => {
  emits("update:year", inputYear.value.toString());
};
// 나라 변경
watch(inputRegion, (region) => {
  emits("update:region", inputRegion.value);
});
// 검색 버튼
const submitValueEvent = () => {
  emits("submit:value", "");
};
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
        <div class="filter_region">
          <h3>지역</h3>
          <select name="지역" v-model="inputRegion" id="regionSelect">
            <option
              v-for="items in regions"
              :value="items.iso_3166_1"
              class="regions_items"
            >
              {{ items.native_name }}
            </option>
          </select>
        </div>
        <div class="filter_year">
          <h3>출시년도</h3>
          <DatePicker year-picker v-model="inputYear" @update:model-value="changeInputYear" />
        </div>
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
    box-sizing: border-box;
    padding: 16px 0;
    row-gap: 16px;
    .filter_keyword {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      column-gap: 24px;

      h3 {
        width: 120px;
        box-sizing: border-box;
        padding: 8px 16px;
      }
      input {
        border: 1px solid white;
        background-color: transparent;
        padding: 12px 16px;
        flex: 1 1 0%;
        box-sizing: border-box;
        border-radius: 50px;
        color: white;
        max-width: 380px;
      }
    }
    .filter_region {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      column-gap: 24px;
      h3 {
        width: 120px;
        box-sizing: border-box;
        padding: 8px 16px;
      }
      #regionSelect {
        border: 1px solid white;
        background-color: transparent;
        padding: 12px 16px;
        flex: 1 1 0%;
        max-width: 380px;
        border-radius: 50px;
        color: white;
        -moz-appearance: none; /* Firefox */
        -webkit-appearance: none; /* Safari and Chrome */
        appearance: none; /* 화살표 없애기 공통*/
        cursor: pointer;
        background-image: url('~/assets/images/bottom_arrow.svg');
        background-repeat: no-repeat;
        background-position: 98% 50%;
        
        option {
          color: black;
          background-color: transparent;
        }
      }
    }
    .filter_year {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      column-gap: 24px;
      h3 {
        width: 120px;
        box-sizing: border-box;
        padding: 8px 16px;
      }
    }
  }
}
</style>
