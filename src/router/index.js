import Vue from 'vue'
import Router from 'vue-router'
import item from '../components/item'
import comic from '../components/comic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'item',
      component: item
    },
    {
      path: '/comic',
      name: 'comic',
      component: comic
    }
  ]
})
