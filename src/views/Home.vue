<template>
  <div id="home">
    <Header />
    <RegistrarPonto />
  </div>
</template>

<script>
import RegistrarPonto from "../components/ponto/RegistrarPonto.vue";
import Header from "../components/Header.vue";
export default {
  components: {
    RegistrarPonto,
    Header,
  },
  data() {
    return {
      data: "",
    };
  },
  methods: {},
  created() {
    console.log("CHAMOU HOME");
  },
};
</script>

<style>
</style>