<template>
  <v-app>
    <v-app-bar v-if="true" app color="primary" dark>
      <v-spacer></v-spacer>

      <v-btn @click="sair()" text>
        <span class="mr-2">Sair</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    logado: false,
  }),
  methods: {
    sair() {
      const vm = this;
      localStorage.clear();

      vm.$router.push("/login");
    },
  },
};
</script>
<style scoped>
.sidebar {
  color: white;
  background-color: #2f855a;
  width: 200px;

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3 ease;

  display: flex;
  flex-direction: column;
}
</style>
