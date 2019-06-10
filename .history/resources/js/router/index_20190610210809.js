import Vue from 'Vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Login from '../components/auth/Login.vue';
import SignUp from '../components/auth/SignUp.vue';

export const constantRoutes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp
    }
];

const router = new VueRouter({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
});

export function resetRouter() {
    const newRouter = router();
    router.matcher = newRouter.matcher; // reset router
  }

export default router;
