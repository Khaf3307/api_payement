import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Profile.vue'
import Projects from '../views/Documentation.vue'
import CreationCompte from '../views/compte/CreationCompte.vue'
import Login from '../views/compte/Login.vue'
import Team from '../views/Setting.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/team',
    name: 'team',
    component: Team
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/compte',
    name: 'creation',
    component: CreationCompte
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
