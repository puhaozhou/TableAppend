import Vue from 'vue'
import Router from 'vue-router'
import TableAppend from '@/components/TableAppend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TableAppend',
      component: TableAppend
    }
  ]
})
