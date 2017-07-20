import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import List from '@/components/List'
import View from '@/components/View'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Hello
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
      {
          path:'/view',
          name:'view',
          component:View
      }

  ]
})
