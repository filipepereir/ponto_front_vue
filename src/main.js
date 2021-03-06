import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import PrimeVue from 'primevue/config';
import {
    routes
} from './router/routes';
import constants from './store/Constants';
import vuetify from './plugins/vuetify'

Vue.use(VueRouter);
Vue.use(PrimeVue);

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.name && to.name == "Login") next();

    try {
        const isLogado = constants().isLogado();
        if (isLogado) next();
        else throw "error"
    } catch (e) {
        next({
            name: "Login"
        })
    }
});

new Vue({
    el: '#app',
    router,
    vuetify,
    render: h => h(App)
});