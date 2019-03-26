import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import oui from '../src/index';

Vue.use(VueRouter);
Vue.use(oui);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
  esModule: false,
  routes: [
    {
      path: '/button',
      component: resolve => require(['./routers/button.vue'], resolve)
    }
  ]
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
