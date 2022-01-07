import Login from "../views/Login.vue"
import Home from "../views/Home.vue"
import Registros from "../views/Registros.vue"

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
];