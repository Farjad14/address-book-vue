import {
  createRouter, createWebHistory,
} from 'vue-router';

import HomePage from '../home/HomePage.vue';
import ContactCard from '../components/ContactCard.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
    },
  },
  { path: '/contact-info/:id', component: ContactCard, props: true },
  ],
});
