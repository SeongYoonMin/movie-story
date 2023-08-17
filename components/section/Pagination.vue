<script setup lang="ts">
interface IPaginationProps {
  page: number;
  total: number;
}
const props = defineProps<IPaginationProps>();
const nowPage = ref<number>(props.page);
const totalPage = ref<number>(props.total);

const emits = defineEmits<{
  (e: "update:next", value: number): void;
  (e: "update:prev", value: number): void;
  (e: "update:last", value: number): void;
  (e: "update:first", value: number): void;
}>();

const prevEventHandle = (value: number) => {
  emits("update:prev", value);
};
const nextEventHandle = (value: number) => {
  emits("update:next", value);
};
const firstEventHandle = (value: number) => {
  emits("update:first", value);
};
const lastEventHandle = (value: number) => {
  emits("update:last", value);
};
</script>

<template>
  <section class="pagination" v-if="totalPage > 1">
    <button
      type="button"
      @click="firstEventHandle(1)"
      v-if="nowPage !== 1 && nowPage - 2 > 0"
      class="first"
      title="처음으로"
    >
      <img src="assets/images/pagination_arrow.svg" alt="처음으로" />
    </button>
    <button
      type="button"
      @click="prevEventHandle(nowPage - 1)"
      v-if="nowPage - 1 > 0"
      class="prev"
    >
      {{ nowPage - 1 }}
    </button>
    <p class="now">{{ nowPage }}</p>
    <button
      type="button"
      @click="nextEventHandle(nowPage + 1)"
      v-if="totalPage > nowPage"
      class="next"
    >
      {{ nowPage + 1 }}
    </button>
    <button
      type="button"
      @click="lastEventHandle(totalPage)"
      v-if="nowPage !== totalPage && nowPage + 2 <= totalPage"
      class="last"
      title="맨끝으로"
    >
      <img
        src="assets/images/pagination_arrow.svg"
        alt="처음으로"
        style="transform: rotate(180deg)"
      />
    </button>
  </section>
</template>

<style lang="scss" scoped>
.pagination {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;
  button {
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 28px;
    color: #7B7B7B;
    height: 28px;
    cursor: pointer;
  }
  .now {
    font-size: 16px;
    line-height: 28px;
    font-weight: 500;
    padding: 0 4px;
    position: relative;
    &::before {
      position: absolute;
      content: "";
      width: 100%;
      left: 0;
      bottom: 0;
      height: 1px;
      background-color: white;
    }
  }
}
</style>
