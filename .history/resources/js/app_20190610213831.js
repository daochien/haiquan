import Vue from 'vue/dist/vue.esm.js';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import store from './store/index';

import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';

import router from './router/index.js';

Vue.use(VueRouter);
Vue.use(Vuex);

const app = new Vue({
    el: '#app',
    router,
    store
});
