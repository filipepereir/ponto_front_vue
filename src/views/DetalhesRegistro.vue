<template>
  <div>
    <Header />
    <Detalhes />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Detalhes from "../components/ponto/Detalhes.vue";
export default {
  components: {
    Header,
    Detalhes,
  },
};
</script>

<style>
</style>