// 创建一个router实例  导出给main使用
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
Vue.use(VueRouter)
const router = new VueRouter({
  // 定义路由规则 （路径 ==> 组件）
  routes: [
    // { path: '/', redirect: '/login' },
    { path: '/login', name: 'login', component: Login }
  ]
})

export default router
