<template>
  <div class="chapter-container">
    <md-whiteframe md-elevation="1" class="chapter-item" 
                   @click.native="goToDetail(index)"
                   v-for="(item, index) in this.$store.state.chapters.detail" :key="item.id">
      <p class="chapter-content">{{'第 ' + (index + 1) + ' 章'}}</p>
    </md-whiteframe>
  </div>
</template>

<script>
  export default {
    name: 'chapter',
    data () {
      return {
      }
    },
    methods: {
      goToDetail: function (index) {
        this.$router.push({path: '/detail', query: {index: index}})
      }
    },
    created () {
      for (let i in this.$store.state.allColumns) {
        if (this.$store.state.allColumns[i].id === this.$route.query.id) {
          this.$store.commit('addToChapter', this.$store.state.allColumns[i])
        }
      }
    }
  }
</script>

<style>
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

