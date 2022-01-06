<template>
  <div id="login">
    <FormLogin />
  </div>
</template>

<script>
import axios from "axios";

import FormLogin from "../components/login/FormLogin.vue";
export default {
  components: {
    FormLogin,
  },
  data() {
    return {
      email: null,
      senha: null,
    };
  },
  methods: {
    logar() {
      axios
        .get("http://localhost:8080/ponto/registro/v1")
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        })
        .finally(function () {});
    },
  },
};
</script>

<style>
</style>