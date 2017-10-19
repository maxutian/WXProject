// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import axios from 'axios'
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

const store = new Vuex.Store({
  state: {
    leftColumn: [],
    rightColumn: [],
    allColumns: [],
    curPage: 1,
    curTab: 'movie'
  },
  mutations: {
    addToLeft: (state, data) => {
      state.leftColumn.push(data)
    },
    addToRight: (state, data) => {
      state.rightColumn.push(data)
    },
    changeCurTab: (state, type) => {
      state.curPage = 1
      state.curTab = type
    }
  },
  actions: {
    getData: (context, type) => {
      axios.get('http://39.108.155.202/jsons/' + type + '.json').then((res) => {
        context.state.allColumns = res.data[type]
        for (let i = 10 * (context.state.curPage - 1); i < 10 * context.state.curPage; i++) {
          if (res.data[type][i]) {
            res.data[type][i].id % 2 === 0 ? context.commit('addToRight', res.data[type][i]) : context.commit('addToLeft', res.data[type][i])
          }
        }
      })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
}).$mount('#app')
