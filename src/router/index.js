import {
  createRouter, createWebHistory,
} from 'vue-router';

import HomePage from '../home/HomePage.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
    },
  }],
});
