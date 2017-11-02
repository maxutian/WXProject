<template>
  <div class="chapter-container">
    <div class="backButton">
      <md-button class="md-icon-button" @click.native="backToList()">
        <md-icon>arrow_back</md-icon>
      </md-button>

      <p class="chapter-title">{{this.$route.query.name}}</p>
    </div>
    <md-whiteframe md-elevation="1" class="chapter-item" 
                   @click.native="goToDetail(index)"
                   v-for="(item, index) in this.chapters" :key="item.id">
      <p class="chapter-content">{{'第 ' + (index + 1) + ' 话'}}</p>
    </md-whiteframe>
  </div>
</template>

<script>
  export default {
    name: 'chapter',
    data () {
      return {
        chapters: []
      }
    },
    methods: {
      goToDetail: function (index) {
        this.$router.push({path: '/detail', query: {id: this.$route.query.id, index: index, length: this.chapters.length}})
      },
      backToList: function () {
        this.initData()
        this.toTop()
        this.$store.commit('switchTab', 'comic')
        this.$router.push({path: '/'})
        this.$store.state.firstLoad = true
      }
    },
    created () {
      this.toTop()
      this.axios.get('http://39.108.155.202/jsons/comics/' + this.$route.query.id + '/' + this.$route.query.id + '.json').then((res) => {
        this.chapters = res.data.detail
      })
    }
  }
</script>

<style scoped>
  .backButton {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-top: .1rem;
  }

  .chapter-title {
    font-size: .47rem;
    font-weight: 600;
  }

  .chapter-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    margin-top: 1.3rem !important;
  }

  .chapter-item {
    cursor: pointer;
    text-align: center;
    width: 47%;
    margin-left: 2%;
    margin-top: .2rem;
    padding: 3% auto;
  }

  @media (max-width: 350px) {
  .chapter-container {
    margin-top: 1.5rem !important;
  }
}
</style>

