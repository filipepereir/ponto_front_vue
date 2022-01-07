<template>
  <v-app-bar v-if="isLogado" app color="primary" dark>
    <v-toolbar-title>
      <router-link
        class="side"
        to="/home"
        active-class="active"
        exact
        tag="button"
      >
        <v-icon> mdi-home</v-icon>&nbsp;
        <span class="mr-2">Home</span>
      </router-link>

      <router-link
        class="side"
        to="/registros"
        active-class="active"
        exact
        tag="button"
      >
        <v-icon> mdi-clock</v-icon>&nbsp;
        <span class="mr-2">Registros</span>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn @click="sair()" text>
      <span class="mr-2">Sair</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import constants from "../store/Constants";

export default {
  data: () => {
    return {
      isLogado: false,
    };
  },
  methods: {
    sair() {
      const vm = this;
      localStorage.clear();

      vm.isLogado = false;
      vm.$router.push("/login");
    },
  },
  mounted() {
    const vm = this;

    console.log("CHAMOU HEADER");

    vm.isLogado = constants().isLogado();

    console.log(vm.isLogado);
  },
};
</script>

<style>
.side.active {
  background-color: rgb(18, 83, 168);
  color: #fff;
  font-weight: 500;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
}
</style>