import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/course',
      name: 'course',
      component: () => import('./views/Course.vue')
    },
    {
      path: '/examination',
      name: 'examination',
      component: () => import('./views/Examination.vue')
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('./views/Personal.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/signup/:type',
      name: 'signup',
      component: () => import('./views/Signup.vue')
    },
    {
      path: '/pay/:id',
      name: 'pay',
      component: () => import('./views/Pay.vue')
    }
  ]
})
