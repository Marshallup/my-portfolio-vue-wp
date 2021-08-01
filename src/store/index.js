import axios from 'axios';

import Vue from 'vue';
import Vuex from 'vuex';

import apiRoutes from './modules/apiRoutes';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mainPage: {},
  },
  getters: {
    getMainPage(state) {
      return state.mainPage;
    },
  },
  mutations: {
    setMainPage(state, data) {
      state.mainPage = data;
    },
  },
  actions: {
    async requestMainPage({ commit }) {
      const posts = await axios.get(`${Vue.prototype.$siteUrl}/wp-json/portfolio/v1/page/main`)
        .then((res) => {
          commit('setMainPage', res.data);
          return res;
        })
        .catch((error) => {
          console.log(error.message, 'error');
          return error;
        });
      console.log(posts, 'page');
    },
  },
  modules: {
    apiRoutes,
  },
});
