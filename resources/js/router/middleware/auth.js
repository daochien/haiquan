export function initialize(store, router)
{
    router.beforeEach(async (to, form, next) => {
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        const token = store.state.user.token;

        if(requiresAuth)
        {
            if(token)
            {
                if(to.path === '/login' || to.path === '/signup')
                {

                    next({ path: '/' });
                }
                else
                {
                    try
                    {
                        const data = await store.dispatch('user/getInfo');
                        next();
                    }
                    catch
                    {
                        // remove token and go to login page to re-login
                        await store.dispatch('user/resetToken');
                        next(`/login?redirect=${to.path}`);
                    }
                }
            }
            else
            {

                next({path: '/login'});
            }
        }
        else
        {
            if(token)
            {
                if(to.path === '/login' || to.path === '/signup')
                {
                    next('/');
                }
            }
            next();
        }
    });
}
