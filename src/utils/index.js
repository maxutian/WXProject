export default {
  install (Vue, options) {
    Vue.prototype.getData = function (type) {
      this.axios.get('http://39.108.155.202:8080/ecyk/data.json').then((res) => {
        const prop = type
        this.$store.commit('setData', res.data[prop])
      })
    }
  }
}
