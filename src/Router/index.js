import { createRouter, createWebHistory } from 'vue-router';

import Hero from '@/components/Hero.vue';


const routes = [
    {
      path: '/',
      name: 'Root',
      component: Hero
    },
    {
        path: '/home',
        name: 'Home',
        component: Hero
      },
];



// const router = createRouter({
//     history: createWebHistory(),
//     routes
//   });

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      setTimeout(() => {
        document.querySelector(to.hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50); // Small delay for better performance
      return false;
    } else {
      window.scrollTo({ top: 0, behavior: "auto" }); // Instant scroll for non-hash routes
      return false;
    }
  },
});
export default router;