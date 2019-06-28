import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes/routes';

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(VueRouter);

const router = new VueRouter({ mode: 'history', routes });

new Vue({
  render: h => h(App),
  router
})
  .$mount('#app');

