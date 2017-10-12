export default {
  install (Vue, options) {
    Vue.prototype.getData = function (type) {
      this.axios.get('http://39.108.155.202/jsons/' + type + '.json').then((res) => {
        res.data[type].forEach((item) => {
          item.id % 2 === 0 ? this.$store.commit('addToRight', item) : this.$store.commit('addToLeft', item)
        })
      })
    }
  }
}
