import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.prototype.$imgDir = `${process.env.VUE_APP_SITE_URL}/wp-content/themes/myPortfolio/img/`;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
