import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import SchedulePage from "@/views/SchedulePage.vue";
import LessonPage from "@/views/LessonPage.vue";
import store from "@/store/storage";
import EducationPage from "@/views/Education/EducationPage.vue";
import CoursePage from "@/views/Education/CoursePage.vue";
import TasksPage from "@/views/Education/TasksPage.vue";
import AttendancePage from "@/views/Education/AttendancePage.vue";
import GradesPage from "@/views/Education/GradesPage.vue";
import StatisticsPage from "@/views/Statistics/StatisticsPage.vue";
import GPAPage from "@/views/Statistics/GPAPage.vue";






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
    path: '/edu/courseId/:id/grades',
    component: GradesPage
  },
  {
    path: '/lesson/:id',
    component: LessonPage
  },
  {
    path: '/statistics',
    component: StatisticsPage
  },
  {
    path: '/statistics/GPA',
    component: GPAPage
  },
  {
    path: '/statistics/percentel',
    component: () => import('@/views/Statistics/PercentelPage.vue')
  },
  {
    path: '/statistics/attendance',
    component: () => import('@/views/Statistics/AttendancePage.vue')
  },
  {
    path: '/me',
    component: () => import('@/views/MePage.vue')
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
