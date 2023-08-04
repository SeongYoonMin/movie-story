<script setup lang="ts">
const searchValue = ref<string>("");

const searchEvent = async (values: string) => {
  if (values === "") {
    alert("검색어을 입력해주세요.");
    return;
  }
  await navigateTo({
    path: "/search",
    query: {
      search: values,
    },
  });
};
</script>

<template>
  <header id="header">
    <nav class="navigation">
      <a href="/" class="logo">
        <img src="~/assets/images/logo.svg" alt="메인" />
      </a>
      <ul class="list">
        <li class="items" v-for="items in navigation" :key="items.id">
          <NuxtLink :to="items.href" class="nav">{{ items.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <form class="search_box" @submit.prevent="searchEvent(searchValue)">
      <input
        type="text"
        placeholder="검색어을 입력해주세요."
        class="search_input"
        v-model="searchValue"
      />
      <button type="submit" class="search_button" title="검색 버튼">
        <img src="~/assets/images/search.png" alt="검색버튼" />
      </button>
    </form>
  </header>
</template>

<style lang="scss" scoped>
#header {
  z-index: 10;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  padding: 24px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1B1B1B;
  .navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    .logo {
      transition: 0.3s all;
      &:hover {
        transform: scale(1.1);
      }
    }
    .list {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      column-gap: 24px;
      .items {
        padding: 8px;
        font-size: 16px;
        font-weight: 500;
        .nav {
          color: white;
          text-decoration: none;
          transition: 0.3s all;
          &:hover {
            font-size: 20px;
            color: #ffc700;
          }
        }
      }
    }
  }
  .search_box {
    position: relative;
    .search_input {
      width: 400px;
      box-sizing: border-box;
      height: 40px;
      padding: 4px 20px;
      border: 0;
      border-radius: 50px;
      position: relative;
    }
    .search_button {
      cursor: pointer;
      background-color: transparent;
      border: 0;
      padding: 0;
      position: absolute;
      width: 26px;
      height: 26px;
      z-index: 2;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;
      img {
        display: block;
        width: 100%;
      }
    }
  }
}
</style>
