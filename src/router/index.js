import Vue from 'vue'
import Router from 'vue-router'
import item from '../components/item'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'item',
      component: item
    }
  ]
})
