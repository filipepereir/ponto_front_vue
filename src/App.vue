<template>
  <v-app id="app">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({}),
  methods: {},
};
</script>
<style>
#app {
  font-family: "Roboto", sans-serif;
}
</style>
