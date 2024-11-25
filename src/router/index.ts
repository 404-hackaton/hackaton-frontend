import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import SchedulePage from "@/views/SchedulePage.vue";
import LessonPage from "@/views/LessonPage.vue";
import store from "@/store/storage";
import EducationPage from "@/views/Education/EducationPage.vue";
import CoursePage from "@/views/Education/CoursePage.vue";
import TasksPage from "@/views/Education/TasksPage.vue";
import AttendancePage from "@/views/Education/AttendancePage.vue";






const isLoggedIn = async () => {
  if (await store.get('token') == null) {
    return '/login'
  } else {
    return '/schedule'
  }
}




const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: await isLoggedIn(),
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/schedule',
    component: SchedulePage,
  },
  {
    path: '/edu',
    component: EducationPage
  },
  {
    path: '/edu/courseId/:id',
    component: CoursePage
  },
  {
    path: '/edu/courseId/:id/tasks',
    component: TasksPage
  },
  {
    path: '/edu/courseId/:id/attendance',
    component: AttendancePage
  },
  {
    path: '/lesson/:id',
    component: LessonPage
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
