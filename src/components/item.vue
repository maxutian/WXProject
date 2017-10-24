<template>
  <div class="v-item-container" id="item-container" 
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10">
    <transition-group tag="div" name="enterAnimation" class="leftColumn">

      <md-card v-for="(item, index) in this.$store.state.leftColumn" :key="item.id">

        <md-card-media md-ratio="3:4">
          <img :src="item.thumb" alt="People" @click="leftGoTo(index)" class="v-item-image"/>
        </md-card-media>

        <md-card-header>
          <md-card-header-text>
            <div class="md-title" @click="leftGoTo(index)">{{item.name}}</div>
            <div class="md-subhead">提取码: {{item.code}}</div>
          </md-card-header-text>
        </md-card-header>

      </md-card>

    </transition-group>
    <transition-group tag="div" name="enterAnimation" class="rightColumn">

      <md-card v-for="(item, index) in this.$store.state.rightColumn" :key="item.id">

        <md-card-media md-ratio="3:4">
          <img :src="item.thumb" alt="People" @click="rightGoTo(index)" class="v-item-image"/>
        </md-card-media>

        <md-card-header>
          <md-card-header-text>
            <div class="md-title" @click="rightGoTo(index)">{{item.name}}</div>
            <div class="md-subhead">提取码: {{item.code}}</div>
          </md-card-header-text>
        </md-card-header>

      </md-card>

    </transition-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: 'item',
        loading: false,
        scroll: ''
      }
    },
    methods: {
      leftGoTo: function (index) {
        if (this.$store.state.curTab === 'comic') {
          this.routerGoTo(index)
        } else {
          window.open(this.$store.state.leftColumn[index].url)
        }
      },
      rightGoTo: function (index) {
        if (this.$store.state.curTab === 'comic') {
          this.routerGoTo(index)
        } else {
          window.open(this.$store.state.rightColumn[index].url)
        }
      },
      routerGoTo: function (index) {
        this.$router.push({path: '/chapter', query: {id: this.$store.state.allColumns[index].id}})
      },
      loadMore: function () {
        if (!this.$store.state.firstLoad) {
          this.loading = true
          this.$store.state.curPage++
          this.loadData()
          this.loading = false
        }
      }
    },
    mounted () {
      this.initData()
      this.$store.dispatch('getData', this.$store.state.curTab)
    }
  }
</script>

<style>
  @import url('../styles/item.css');
</style>
