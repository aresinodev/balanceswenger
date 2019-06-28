import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes/routes';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import i18n from '@/plugins/i18n';

// JS imports
import 'lazysizes';

// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(VueRouter);

const router = new VueRouter({ mode: 'history', routes });

new Vue({
  i18n,
  render: h => h(App),
  router
})
  .$mount('#app');

