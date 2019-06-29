const state = {
    visibleLogout: false
}

const getters = {

    getVisibleLogout(state)
    {
        return state.visibleLogout;
    }
}

const mutations = {

    SET_VISIBLE_lOGOUT(state, show)
    {
        state.visibleLogout = show;
    }
}

const actions = {
    setVisibleLogout(context, payload)
    {

        context.commit('SET_VISIBLE_lOGOUT', payload);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
