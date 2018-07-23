import Vue from 'vue';
import App from './App.vue';
// ROUTER
import router from '@/router/index';
// STORE
import store from '@/store/index';
// FILTERS
import trancate from '@/filters/trancate';

Vue.config.productionTip = false;
Vue.filter('trancate', trancate);

new Vue({
  router,
  store,
  // filters,
  render: h => h(App),
  mounted() {
    this.$store.dispatch('initData');
  }
}).$mount('#app');
