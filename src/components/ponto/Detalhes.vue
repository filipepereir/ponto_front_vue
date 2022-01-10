<template>
  <v-data-table
    :headers="headers"
    :items="registros"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:item.acoes="{ item }">
      <v-btn color="secondary" @click="alterarRegistro(item)"> Alterar </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";
import constants from "../../store/Constants";
export default {
  data: () => {
    return {
      registros: [],
      headers: [
        { text: "Nome", value: "nomeUsuario", width: "10%", align: "left" },
        {
          text: "DataBatida",
          value: "dataBatida",
          width: "30%",
          align: "center",
        },
        {
          text: "Data hora",
          value: "dataHoraRegistro",
          width: "20%",
          align: "center",
        },
        { text: "Status", value: "status", width: "20%", align: "center" },
        { text: "Ações", value: "acoes", width: "10%", align: "center" },
      ],
    };
  },
  methods: {
    alterarRegistro(registro) {
      console.log(registro);
    },
    buscarBatidas() {
      const vm = this;

      const data = this.$route.params.data;

      axios
        .get(constants().getUrl() + "registro?data=" + data, {
          headers: {
            Authorization: constants().getToken(),
            "content-type": "application/json",
          },
        })
        .then((response) => {
          vm.registros = response.data;

          console.log(vm.registros);
        })
        .catch((error) => {
          console.log(error.response.data);
        })
        .finally(function () {});
    },
  },
  created() {
    const vm = this;
    vm.buscarBatidas();
  },
};
</script>

<style>
</style>