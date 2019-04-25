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
      component: resolve => require(['./routers/button/index'], resolve)
    },
    {
      path: '/message',
      component: resolve => require(['./routers/message.vue'], resolve)
    },
    {
      path: '/badge',
      component: resolve => require(['./routers/badge/index'], resolve)
    },
    {
      path: '/icon',
      component: resolve => require(['./routers/icon/index'], resolve)
    },
    {
      path: '/switch',
      component: resolve => require(['./routers/switch/index'], resolve)
    },
    {
      path: '/input',
      component: resolve => require(['./routers/input/index'], resolve)
    }
  ]
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
