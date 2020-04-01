import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  //mode: 'history',
  base: '/wisdomBuilding',
  routes: [
    {
      path: '/',
      component: () => import('./views/Welcome.vue')
    },
    {
      path: '/login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/welcome',
      component: () => import('./views/Welcome.vue')
    },
    {
      path: '/about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/platform',
      component: () => import('./views/ESMap.vue')
    },
    {
      path: '/experience',
      component: () => import('./views/OnlineExperience.vue')
    },
    {
      path: '/admin',
      redirect: "/admin/index"
    },
    {
      path: '/admin/index',
      component: () => import('./views/admin/Home.vue')
    }
  ]
})

//全局路由拦截钩子
router.beforeEach((to, from, next) => {
  console.log("to:" + to)
  console.log("from:" + from)
  console.log("next:" + next)
  next()
})

export default router
