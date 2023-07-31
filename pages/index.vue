<script setup lang="ts">
import axios from "axios";

const config: IConfig = useRuntimeConfig();

const movieListApi = async () => {
  try {
    const { data } = await axios.get<IMovieItems>(
      `${config.public.movie_url}/movie/popular?api_key=${config.public.api_key}&language=ko-KR`
    );
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
};
</script>

<template>
  <section>
    
  </section>
</template>

<style lang="scss" scoped></style>