<template>
  <v-container>
    <v-spacer></v-spacer>

    <div class="form-login">
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
export default {
  name: "FormLogin",

  data: () => ({
    usuario: "",
    senha: "",
  }),
  methods: {
    login() {
      const vm = this;

      const login = {
        email: vm.usuario,
        senha: vm.senha,
      };

      console.log(JSON.stringify(login));
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
</style>
