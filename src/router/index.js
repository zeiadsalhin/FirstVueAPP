import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Sensors from '../views/SensorsView.vue'
import Manager from '../views/ManagerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/SensorsView',
      name: 'sensors',
      component: Sensors
    },
    {
      path: '/ManagerView',
      name: 'manager',
      component: Manager
    }
  ]
})

export default router
