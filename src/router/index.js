import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import log from "../components/log";
import navMenu from "../components/navMenu";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: log
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: log
  },
  {
    path: '/nav',
    name: 'nav',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: navMenu
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
