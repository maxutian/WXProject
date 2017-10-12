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
import utils from './utils'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(VueMaterial)
Vue.use(utils)

const store = new Vuex.Store({
  state: {
    leftColumn: [],
    rightColumn: []
  },
  mutations: {
    addToLeft: (state, data) => {
      state.leftColumn.push(data)
    },
    addToRight: (state, data) => {
      state.rightColumn.push(data)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
}).$mount('#app')
