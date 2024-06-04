import { createRouter, createWebHistory } from 'vue-router'
import UserManagementView from '@/views/UserManagementView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'user-management',
      component: UserManagementView
    },
    {
      path: '/cookies',
      name: 'cookies',
      component: () => import('@/components/GenericComponent.vue')
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: () => import('@/components/GenericComponent.vue')
    },
    {
      path: '/general-policies',
      name: 'general-policies',
      component: () => import('@/components/GenericComponent.vue')
    }
  ]
})

export default router
