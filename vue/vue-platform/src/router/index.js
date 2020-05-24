import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {path: '*',component: () => import('@/components/page.vue')},
  {path: '/',redirect: '/index/welcome'},
  {
    path: '/index',
    component: () => import('@/components/page.vue'),
    children: [
      {path:'welcome',component: () => import('@/views/index/Welcome.vue')},
      {path:'experience-online',component: () => import('@/views/index/ExperienceOnline.vue')},
      {path:'visual',component: () => import('@/views/index/Visual.vue')},
      {path:'login',component: () => import('@/views/index/Login.vue')},
      {path:'register',component: () => import('@/views/index/Register.vue')}
    ]
  },
  {
    path: '/platform',
    component: () => import('@/components/page.vue'),
    children: [
      {path:'home',component: () => import('@/views/home/Home.vue')},
      {path:'userInfo',component: () => import('@/views/home/PersonInfo.vue')},
      {path:'shopInfo',component: () => import('@/views/home/ShopInfo.vue')}
    ]
  },
  {path:'/realFlow',component: () => import('@/components/home/RealFlowChart.vue')}
]

const router = new VueRouter({
  routes
})

export default router
