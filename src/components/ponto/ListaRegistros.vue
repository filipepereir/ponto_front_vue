
  <template>
  <div>
    <v-row class="text-center">
      <v-col>
        <h1>Registros</h1>
      </v-col>
    </v-row>
    <v-sheet tile height="54" class="d-flex">
      <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn icon class="ma-2" @click="$refs.calendar.next()">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-sheet>
    <v-sheet height="600">
      <v-calendar
        ref="calendar"
        v-model="value"
        :weekdays="weekday"
        :type="type"
        :events="events"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
        locale="pt-BR"
        @click:more="view"
        @click:date="view"
      ></v-calendar>
    </v-sheet>
  </div>
</template>

<script>
import axios from "axios";
import constants from "../../store/Constants";
export default {
  data: () => {
    return {
      batidas: [],
      batida: "",
      date: "",
      registros: [],
      type: "month",
      types: ["month", "week", "day", "4day"],
      mode: "stack",
      modes: ["stack", "column"],
      weekday: [0, 1, 2, 3, 4, 5, 6],
      weekdays: [
        { text: "Sun - Sat", value: [0, 1, 2, 3, 4, 5, 6] },
        { text: "Mon - Sun", value: [1, 2, 3, 4, 5, 6, 0] },
        { text: "Mon - Fri", value: [1, 2, 3, 4, 5] },
        { text: "Mon, Wed, Fri", value: [1, 3, 5] },
      ],
      value: "",
      events: [],
      colors: [
        "blue",
        "indigo",
        "deep-purple",
        "cyan",
        "green",
        "orange",
        "grey darken-1",
      ],
      names: [
        "Meeting",
        "Holiday",
        "PTO",
        "Travel",
        "Event",
        "Birthday",
        "Conference",
        "Party",
      ],
    };
  },
  methods: {
    view({ date }) {
      const vm = this;
      vm.date = date;

      vm.$router.push("/registros/detalhes/" + date);
    },
    buscarRegistros() {
      const vm = this;

      axios
        .get(constants().getUrl() + "registro/v2", {
          headers: {
            Authorization: constants().getToken(),
            "content-type": "application/json",
          },
        })
        .then((response) => {
          vm.registros = response.data;

          vm.montarCalendario();
        })
        .catch((error) => {
          console.log(error.response.data);
        })
        .finally(function () {});
    },
    montarCalendario() {
      const vm = this;
      const events = [];

      let cont = 1;

      vm.registros.forEach((registro) => {
        let dataSplit = registro.dataBatida.split("/");

        let data = new Date(dataSplit[2], dataSplit[1] - 1, dataSplit[0]);

        const event = {
          color: vm.colors[cont],
          end: data,
          name: "Registros " + registro.dataBatida,
          start: data,
          timed: true,
        };

        events.push(event);

        cont++;
      });
      this.events = events;
    },
  },

  created() {
    const vm = this;
    vm.buscarRegistros();
  },
};
</script>

<style>
</style>