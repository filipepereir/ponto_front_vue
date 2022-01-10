import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Registros from "../views/Registros.vue";
import DetalhesRegistro from "../views/DetalhesRegistro.vue";

export const routes = [{
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/registros",
    name: "Registros",
    component: Registros,
  },
  {
    path: "/registros/detalhes/:data",
    name: "Registros",
    component: DetalhesRegistro,
  }
];