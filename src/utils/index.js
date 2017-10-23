export default{
  install (Vue, options) {
    Vue.prototype.loadData = function () {
      for (let i = 10 * (this.$store.state.curPage - 1); i < 10 * this.$store.state.curPage; i++) {
        if (this.$store.state.allColumns[i]) {
          this.$store.state.allColumns[i].id % 2 === 0 ? this.$store.commit('addToRight', this.$store.state.allColumns[i]) : this.$store.commit('addToLeft', this.$store.state.allColumns[i])
        }
      }
    }
    Vue.prototype.initData = function () {
      this.$store.state.leftColumn = []
      this.$store.state.rightColumn = []
      this.$store.state.allColumns = []
    }
  }
}
