import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Demo_1 from '@/page/demo_1'
import Demo_2 from '@/page/demo_2'
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
        path:'/demo_1',
        component:Demo_1
      },{
        path:'/demo_2',
        component:Demo_2
      }]
    }
  ]
})
