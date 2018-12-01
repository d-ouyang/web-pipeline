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
      component: () => import('./views/Personal.vue'),
      children: [
        {
          path: '',
          redirect: 'myexam',
          component: () => import('./views/children/Myexam.vue')
        },
        {
          path: 'myexam',
          name: 'myexam',
          component: () => import('./views/children/Myexam.vue')
        },
        {
          path: 'mycourse',
          name: 'mycourse',
          component: () => import('./views/children/Mycourse.vue')
        },
        {
          path: 'myinfo',
          name: 'myinfo',
          component: () => import('./views/children/Myinfo.vue')
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/signup/:group/:type/:id',
      name: 'signup',
      component: () => import('./views/Signup.vue')
    },
    {
      path: '/pay/:id',
      name: 'pay',
      component: () => import('./views/Pay.vue')
    },
    {
      path: '/payOver/:id',
      name: 'payOver',
      component: () => import('./views/PayOver.vue')
    }
  ]
})
