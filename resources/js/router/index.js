import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Login from '../page/auth/Login.vue';
import SignUp from '../page/auth/Register.vue';
import App from '../layout/App.vue';

export const constantRoutes = [
    {
        path: '/',
        name: 'app',
        component: App,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: 'shipment',
                component: () => import('../page/shipment/Index.vue'),
                name: 'Shipment',
                children: [
                    {
                        path: 'add',
                        component: () => import('../page/shipment/Add.vue'),
                        name: 'ShipmentAdd',
                    },
                    {
                        path: 'manage',
                        component: () => import('../page/shipment/Manage.vue'),
                        name: 'ShipmentManage',
                    },
                ]
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: Login,

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
