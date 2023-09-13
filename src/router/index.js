import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Help from '../views/HelpView.vue'
import blog from '../views/blogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/helpView',
      name: 'help',
      component: Help
    },
    {
      path: '/blogView',
      name: blog,
      component: blog
    }
  ]
})

export default router
