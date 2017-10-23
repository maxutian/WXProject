// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import axios from 'axios'
import utils from './utils'
import router from './router'
import VueAxios from 'vue-axios'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'lib-flexible/flexible.js'
import { InfiniteScroll } from 'mint-ui'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(VueMaterial)
Vue.use(InfiniteScroll)
Vue.use(utils)

const store = new Vuex.Store({
  state: {
    leftColumn: [],
    rightColumn: [],
    allColumns: [],
    curPage: 1,
    firstLoad: true
  },
  mutations: {
    addToLeft: (state, data) => {
      state.leftColumn.push(data)
    },
    addToRight: (state, data) => {
      state.rightColumn.push(data)
    }
  },
  actions: {
    getData: (context, type) => {
      axios.get('http://39.108.155.202/jsons/' + type + '.json').then((res) => {
        context.state.allColumns = res.data[type]
        context.state.curPage = 1
        for (let i = 10 * (context.state.curPage - 1); i < 10 * context.state.curPage; i++) {
          if (context.state.allColumns[i]) {
            context.state.allColumns[i].id % 2 === 0 ? context.commit('addToRight', context.state.allColumns[i]) : context.commit('addToLeft', context.state.allColumns[i])
          }
        }
        context.state.firstLoad = false
      })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
}).$mount('#app')
