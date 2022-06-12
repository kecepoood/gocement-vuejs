import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/abangjago',
    name: 'abangjago',
    component: () => import('../views/AbangJagoView.vue')
  },
  {
    path: '/carapesan',
    name: 'carapesan',
    component: () => import('../views/CaraPesanView.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('../views/FaqView.vue')
  },
  {
    path: '/karir',
    name: 'karir',
    component: () => import('../views/KarirView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/kontak',
    name: 'kontak',
    component: () => import('../views/KontakView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
