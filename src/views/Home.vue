<template>
  <v-container class="conteudo">
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Sistema de Ponto WEB
        </h1>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
    <RegistrarPonto />
  </v-container>
</template>

<script>
import RegistrarPonto from "../components/ponto/RegistrarPonto.vue";
export default {
  components: {
    RegistrarPonto,
  },
  data() {
    return {
      data: "",
    };
  },
  methods: {},
};
</script>

<style>
.conteudo {
  background-color: #fff;
}
</style>