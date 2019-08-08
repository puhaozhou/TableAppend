import Vue from 'vue'
import Router from 'vue-router'
import TableAppend from '@/components/TableAppend'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/TableAppend',
      name: 'TableAppend',
      component: TableAppend
    }
  ]
})
