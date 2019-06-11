export function initialize(store, router)
{
    router.beforeEach((to, form, next) => {
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        const token = store.state.user.token;
        if(!token && requiresAuth)
        {
            next('/login');
        }
        else if(to.path == '/login' && token)
        {
            next('/')
        }
        else
        {
            next();
        }
    });
}
