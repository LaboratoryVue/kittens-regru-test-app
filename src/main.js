import Vue from 'vue';
import App from './App.vue';
// ROUTER
import router from '@/router/index';
// STORE
import store from '@/store/index';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    this.$store.dispatch('initData');
  }
}).$mount('#app');
