<template>
  <div class="registrar">
    <v-row class="text-center">
      <v-col>
        <h1>Registrar Ponto</h1>
      </v-col>
    </v-row>
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
      <v-col v-if="!loading" class="hora" cols="12"> {{ horaAtual }} </v-col>
      <v-col v-if="loading">
        <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col class="data">{{ dataHoje }}</v-col>
    </v-row>
    <v-row class="text-center">
      <v-col class="data">{{ diaDaSemana }}</v-col>
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
      horaAtual: "",
      dataHoje: "",
      loading: true,
      mensagemErro: "",
      mensagemSucesso: "",
      alerta: false,
      sucesso: false,
      diaDaSemana: "",
      diasDaSemana: [
        "Domingo",
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira",
        "Sábado",
      ],
    };
  },
  methods: {
    registrarPonto() {
      const vm = this;
      navigator.geolocation.getCurrentPosition(function (location) {
        axios
          .post(
            constants().getUrl() + "registro",
            JSON.stringify({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }),
            {
              headers: {
                Authorization: constants().getToken(),
                "content-type": "application/json",
              },
            }
          )
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
              vm.mensagemErro =
                "Erro o registrar o ponto " + error.response.data;
              vm.alerta = false;
            }, delay);
          })
          .finally(function () {});
      });
    },
    carregarHoraAtual() {
      const vm = this;
      vm.loading = true;
      setInterval(() => {
        let hora = new Date().getHours();
        let minutos = new Date().getMinutes();
        let segundos = new Date().getSeconds().toPrecision();

        vm.horaAtual =
          ("0" + hora).slice(-2) +
          ":" +
          ("0" + minutos).slice(-2) +
          ":" +
          ("0" + segundos).slice(-2);
        vm.loading = false;
      }, 1000);
    },
    carregarDataHoje() {
      const vm = this;

      let dia = new Date().getDate();
      let mes = new Date().getMonth() + 1;
      let ano = new Date().getFullYear();

      vm.dataHoje =
        ("0" + dia).slice(-2) + "/" + ("0" + mes).slice(-2) + "/" + ano;
    },
    carregarDiaDaSemana() {
      const vm = this;

      vm.diaDaSemana = vm.diasDaSemana[new Date().getDay()];
    },
  },
  created() {
    const vm = this;

    vm.carregarHoraAtual();
    vm.carregarDataHoje();
    vm.carregarDiaDaSemana();
  },
};
</script>

<style>
.hora {
  font-size: 100px;
}

.data {
  font-size: 25px;
}
.sucesso {
  color: green;
}
</style>