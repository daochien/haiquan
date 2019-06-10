import Vue from 'vue/dist/vue.esm.js';
import VueRouter from 'vue-router';

import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';

import router from './router/index.js';

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router
});
