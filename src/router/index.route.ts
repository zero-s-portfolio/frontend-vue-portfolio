import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/pages/home/App.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Home,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Home,
  },
  {
    path: '/projects',
    name: 'projects',
    component: Home,
  },
  {
    path: '/games',
    name: 'games',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: Home,
  },
  {
    path: '/blog',
    name: 'blog',
    component: Home,
  },
  {
    path: '/faq',
    name: 'faq',
    component: Home,
  },
  {
    path: '/skills',
    name: 'skills',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router