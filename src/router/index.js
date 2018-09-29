import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Main from '@/page/main/main'
import Permission from '@/page/system/permission'
import Login from  '@/page/login'

Vue.use(Router)

export default new Router({
  routes: [{
      path:'/',
      name:'Login',
      component:Login
    },{
      path: '/index',
      name: 'Index',
      component: Index,
      children:[{
        path:'/main',
        component:Main
      },{
        path:'/permission',
        component:Permission
      }]
    }
  ]
})
