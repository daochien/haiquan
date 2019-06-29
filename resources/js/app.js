import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Vuelidate from 'vuelidate';
import BootstrapVue from "bootstrap-vue"

import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css';


import router from './router/index.js';
import store from './store/index';
import { initialize } from './router/middleware/auth';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuelidate);
Vue.use(BootstrapVue);

initialize(store, router);

const app = new Vue({
    el: '#app',
    router,
    store
});
