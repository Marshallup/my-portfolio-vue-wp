import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.prototype.$siteUrl = process.env.VUE_APP_SITE_URL;
Vue.prototype.$imgDir = `${Vue.prototype.$siteUrl}/wp-content/themes/myPortfolio/img/`;

new Vue({
  router,
  store,
  data() {
    return {
      test: 'test',
    };
  },
  render: (h) => h(App),
}).$mount('#app');
