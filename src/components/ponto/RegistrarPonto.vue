<template>
  <div class="registrar">
    <v-row v-if="alerta" class="text-center">
      <v-col class="mb-4">
        <span class="alerta"> <strong>Atenção</strong> {{ mensagemErro }}</span>
      </v-col>
    </v-row>
    <v-row v-if="sucesso" class="text-center">
      <v-col class="mb-4">
        <span class="sucesso">
          <strong>{{ mensagemSucesso }}</strong>
        </span>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col v-if="!loading" class="data" cols="12"> {{ data }} </v-col>
      <v-col v-if="loading">
        <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-btn x-large color="info" @click="registrarPonto()">
          Registrar
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import constants from "../../store/Constants";
export default {
  data: () => {
    return {
      data: "",
      loading: true,
      mensagemErro: "",
      mensagemSucesso: "",
      alerta: false,
      sucesso: false,
    };
  },
  methods: {
    registrarPonto() {
      const vm = this;

      const localizacao = {
        latitude: 0,
        longitude: 0,
      };

      navigator.geolocation.getCurrentPosition(function (location) {
        localizacao.latitude = location.coords.latitude;
        localizacao.longitude = location.coords.longitude;
      });

      console.log(constants().getToken());

      axios
        .post(constants().getUrl() + "registro", JSON.stringify(localizacao), {
          headers: {
            Authorization: constants().getToken(),
            "content-type": "application/json",
          },
        })
        .then((response) => {
          vm.mensagemSucesso = response.data.mensagem;
          vm.sucesso = true;

          let delay = 2500;
          setTimeout(() => {
            vm.sucesso = false;
          }, delay);
        })
        .catch((error) => {
          vm.alerta = true;

          let delay = 2500;
          setTimeout(() => {
            vm.mensagemErro = "Erro o registrar o ponto " + error.response.data;
            vm.alerta = false;
          }, delay);
        })
        .finally(function () {});
    },
  },
  created() {
    const vm = this;
    vm.loading = true;
    setInterval(() => {
      let hora = new Date().getHours();
      let minutos = new Date().getMinutes();
      let segundos = new Date().getSeconds().toPrecision();

      vm.data =
        ("0" + hora).slice(-2) +
        ":" +
        ("0" + minutos).slice(-2) +
        ":" +
        ("0" + segundos).slice(-2);
      vm.loading = false;
    }, 1000);
  },
};
</script>

<style>
.data {
  font-size: 100px;
}
.registrar {
  margin-top: 100px;
}
.sucesso {
  color: green;
}
</style>