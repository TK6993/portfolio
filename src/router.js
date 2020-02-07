import Vue from 'vue'
import VueRouter from 'vue-router'
import storageHelper from 'storage-helper'

Vue.use(VueRouter)

function load(componentName){
  return () => import(`@/components/${componentName}`)
}

const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path:'/',
      name: 'Home',
      component: load('Home'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path:'/portfolio',
      name: 'Portfolio',
      component: load('Portfolio'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path:'/protected',
      name: 'Protected',
      component: load('Protected'),
      meta: {
        requiresAuth: false
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!storageHelper.getItem('user-password')) next('/protected')
    else next()
  } else next()
})

export default router
