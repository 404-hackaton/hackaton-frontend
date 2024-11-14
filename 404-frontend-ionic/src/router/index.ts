import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import SchedulePage from "@/views/SchedulePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/schedule'
  },
  {
    path: '/schedule',
    component: SchedulePage,
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/NotFoundPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
