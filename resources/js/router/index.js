import Vue from 'Vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Login from '../components/auth/Login.vue';

export const constantRoutes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    }
];

const router = new VueRouter({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
});

export default router;
