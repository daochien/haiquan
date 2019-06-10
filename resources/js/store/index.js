import Vue from 'vue';
import Vuex from 'vuex';
import camelCase from 'camelcase';

Vue.use(Vuex);

//tu dong load cac file trong thu muc modules ma khong can phai import
const modulesFiles = require.context('./modules', false, /\.js$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = camelCase(modulePath.replace(/^\.\/(.*)\.\w+$/, '$1'));
    const value = modulesFiles(modulePath);
    modules[moduleName] = value.default;
    return modules;
}, {});

const store = new Vuex.Store({
    modules
});

export default store;
