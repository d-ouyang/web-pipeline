import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: {
        title: '管道E生培训'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '管道E生培训'
      }
    },
    {
      path: '/course',
      name: 'course',
      component: () => import('./views/Course.vue'),
      meta: {
        title: '管道E生培训'
      }
    },
    {
      path: '/examination',
      name: 'examination',
      component: () => import('./views/Examination.vue'),
      meta: {
        title: '管道E生培训'
      }
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('./views/Personal.vue'),
      meta: {
        title: '管道E生培训'
      },
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
          path: 'myexamdetail/:id',
          name: 'myexamdetail',
          component: () => import('./views/children/MyexamDetail.vue')
        },
        {
          path: 'mycourse',
          name: 'mycourse',
          component: () => import('./views/children/Mycourse.vue')
        },
        {
          path: 'mycoursedetail/:id',
          name: 'mycoursedetail',
          component: () => import('./views/children/MycourseDetail.vue')
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
      component: () => import('./views/Register.vue'),
      meta: {
        title: '管道E生培训'
      }
    },
    {
      path: '/signup/:group/:type/:id',
      name: 'signup',
      component: () => import('./views/Signup.vue'),
      meta: {
        title: '管道E生培训'
      }
    },
    {
      path: '/pay/:group/:type/:id/:orderid',
      name: 'pay',
      component: () => import('./views/Pay.vue'),
      meta: {
        title: '管道E生培训'
      }
    },
    {
      path: '/payOver/:group/:type/:id/',
      name: 'payOver',
      component: () => import('./views/PayOver.vue'),
      meta: {
        title: '管道E生培训'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
