<template>
  <md-toolbar class="md-dense" v-if="isTop">
    <img src="../../static/logo.png" alt="logo" class="v-header-logo">
    <img :src="url" @click="changeUrl" class="faceImg">
  </md-toolbar>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      isTop: true,
      index: 0,
      url: '../../static/0.png'
    }
  },
  methods: {
    menu: function () {
      this.scroll = document.body.scrollTop
    },
    changeUrl: function () {
      if (this.index === 0) {
        this.url = '../../static/1.png'
        this.index = 1
      } else {
        this.url = '../../static/0.png'
        this.index = 0
      }
    }
  }
}
</script>

<style>
  .v-header-logo {
    width: 4.5rem !important;
    margin: 1% 0 !important;
    margin-left: 3% !important;
  }

  .faceImg {
    width: 20%;
    margin-top: 2%;
    margin-left: 29%;
  }

  .md-theme-default .md-toolbar {
    z-index: 999;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(255,112,160,.85) !important;
    box-shadow: 0 1px 3px rgba(0,0,0,.2), 0 1px 1px rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12) !important;
  }
</style>
