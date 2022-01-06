<template>
  <v-container>
    <v-spacer></v-spacer>

    <div class="form-login">
      <v-row v-if="alerta" class="text-center">
        <v-col class="mb-4">
          <span class="alerta">
            <strong>Atenção</strong> usuário ou senha inválidos</span
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="usuario"
            type="text"
            label="Usuário"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="senha"
            type="password"
            label="Senha"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row class="center">
        <v-col cols="6">
          <v-btn color="primary" @click="login()"> Entrar </v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn color="secondary"> Limpar </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import constants from "../../store/Constants";
import axios from "axios";

export default {
  name: "FormLogin",

  data: () => ({
    usuario: "",
    senha: "",
    alerta: false,
  }),
  methods: {
    login() {
      const vm = this;

      localStorage.clear();

      const login = {
        email: vm.usuario,
        senha: vm.senha,
      };

      axios
        .post(constants().getUrl() + "auth", login)
        .then((response) => {
          constants().persist(response.data);
          vm.$router.push("/home");
        })
        .catch((error) => {
          if (error.response.status == 401) {
            vm.alerta = true;
          }
        })
        .finally(function () {});
    },
  },
};
</script>

<style scoped>
.form-login {
  background-color: #fff;
  width: 400px;
  height: 300px;
  left: 50%;
  margin: -130px 0 0 -210px;

  position: absolute;
  top: 50%;
}

.center {
  text-align: center;
}

.alerta {
  color: red;
}
</style>
