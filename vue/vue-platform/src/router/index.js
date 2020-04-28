import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {path: '*',component: () => import('@/views/index/Index.vue')},
  {path: '/',redirect: '/index/welcome'},
  {
    path: '/index',
    component: () => import('@/views/index/Index.vue'),
    children: [
      {path:'welcome',component: () => import('@/views/index/Welcome.vue')},
      {path:'experience-online',component: () => import('@/views/index/ExperienceOnline.vue')},
      {path:'visual',component: () => import('@/views/index/Visual.vue')}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
