import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import CompanyProfileView from '@/views/CompanyProfileView.vue';
import RidesView from '@/views/RidesView.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const routes = [
  {
    component: MainLayout,
    path: '/',
    children: [
      {
        path: '',
        component: HomeView
      },
      {
        path: '/company-profile',
        component: CompanyProfileView
      },
      {
        path: '/rides',
        component: RidesView
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'nav__link--active',
  routes
});

export default router;
