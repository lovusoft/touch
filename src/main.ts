import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store';
import axios from '@/api/axios.config';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
