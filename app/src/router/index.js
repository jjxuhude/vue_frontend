import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import List from '@/components/List'
import View from '@/components/View'
import Child1 from '@/components/View/Child1'
import Increment from '../components/Increment'


Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/view/:catalogId/:productId',
      component: View,
      name: 'view',
      children: [
        {path: 'child1', component: Child1},
      ]
    },
    {
      path: '/increment',
      name: 'increment',
      component: Increment
    }
  
  ]
})
