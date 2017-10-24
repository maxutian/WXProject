import Vue from 'vue'
import Router from 'vue-router'
import item from '../components/item'
import chapter from '../components/chapter'
import detail from '../components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'item',
      component: item
    },
    {
      path: '/chapter',
      name: 'chapter',
      component: chapter
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
