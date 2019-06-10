import Vue from 'vue/dist/vue.esm.js';
import VueRouter from 'vue-router';
import store from './store/index';
console.log(store);
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';

import router from './router/index.js';

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router,
    store
});
