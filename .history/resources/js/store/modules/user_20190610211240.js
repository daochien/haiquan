import { login, logout, getInfo } from '../../api/user';
import { getToken, setToken, removeToken } from '../../utils/auth';
import router, { resetRouter } from '../../router/index';
import store from '@/store';

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
}

const mutations = {

}