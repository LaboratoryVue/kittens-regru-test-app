import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';
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
