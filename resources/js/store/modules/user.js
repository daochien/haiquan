import { login, logout, getInfo } from '../../api/user';
import { getToken, setToken, removeToken } from '../../utils/auth';
import router, { resetRouter } from '../../router/index';
import store from '../../store/index';


const state = {
    id: null,
    token: getToken(),
    name: '',
    email: ''
};

const getters = {
    getId(state)
    {
        return state.id;
    },
    getName(state)
    {
        return state.name;
    },
    getEmail(state)
    {
        return state.email;
    }
};

const mutations = {
    SET_ID(state, id)
    {
        state.id = id;
    },
    SET_TOKEN(state, token)
    {
        state.token = token;
    },
    SET_NAME(state, name)
    {
        state.name = name;
    },
    SET_EMAIL(state, email)
    {
        state.email = email;
    }
};

const actions = {
    login({ commit }, userInfo)
    {
        const { email, password } = userInfo;
        return new Promise((resolve, rejects) => {
            login({ email: email.trim(), password: password })
            .then(response => {
                commit('SET_TOKEN', response.token);
                setToken(response.token);
                resolve();
            })
            .catch(error => {
                rejects(error);
            });
        });
    },

    getInfo(context)
    {
        return new Promise((resolve, reject) => {
            getInfo()
            .then((response) => {
                if(response.status)
                {

                    const {id, email, name} = response.data;
                    context.commit('SET_ID', id); // set id
                    context.commit('SET_NAME', name); // set name
                    context.commit('SET_EMAIL', email); //set email
                    resolve(response.data);
                }
                else
                {
                    reject('getInfo: roles must be a non-null array!');
                }
            })
            .catch((error) => {
                reject(error);
            });
        });
    },

    logout(context)
    {
        return new Promise((resolve, reject) => {
            logout(state.token)
            .then(() => {
                context.commit('SET_TOKEN', '');
                removeToken();
                //resetRouter();
                resolve();
            })
            .catch((error) => {
                reject(error);
            })
        });
    },

    resetToken(context)
    {
        return new Promise(resolve => {
            context.commit('SET_TOKEN', '');
            removeToken();
            resolve();
        });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
  };

