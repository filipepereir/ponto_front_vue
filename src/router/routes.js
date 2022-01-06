
import Login from "../views/Login.vue"
import Home from "../views/Home.vue"
import App from "../App.vue"

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
    path: "/",
    name: "App",
    component: App,
  },
];
