<template>
  <div>
    <Header />
    <ListaRegistros />
  </div>
</template>

<script>
import ListaRegistros from "../components/ponto/ListaRegistros.vue";
import Header from "../components/Header.vue";
export default {
  components: {
    ListaRegistros,
    Header,
  },
};
</script>

<style>
</style>