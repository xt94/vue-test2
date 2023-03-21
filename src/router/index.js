import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    name: 'login',
    path: '/login',

    component: () => import('../views/login/index.vue')
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('../views/home/index.vue')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  if (!sessionStorage.getItem('userToken')) return next('/login')
  else {
    next()
  }
})

export default router
