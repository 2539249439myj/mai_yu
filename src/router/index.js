import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from '../views/Recommend.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', // 路由默认匹配的首则
    name: 'Recommend',
    component: Recommend
  },
  {
    path: '/hotsong',
    name: 'Hotsong',
    component: () => import('../views/Hotsong.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

export default router
