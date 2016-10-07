import Vue from 'vue';
import App from './App';
import VueSocketio from 'vue-socket.io';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// 路由模块和HTTP模块
Vue.use(VueResource);
Vue.use(VueRouter);
// Socket.io 模块
Vue.use(VueSocketio, 'http://localhost:9000');

const router = new VueRouter({
  hashbang: false
});

router.map({
  '/index': {
    component: App
  }
});

router.redirect({
  '*': '/index'
});

router.start(App, '#app');
