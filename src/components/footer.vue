
<template>
  <md-bottom-bar class="footer">
    <md-bottom-bar-item md-active @click.native="swipePage(movie)">影视</md-bottom-bar-item>
    <md-bottom-bar-item @click.native="swipePage(animation)">动漫</md-bottom-bar-item>
    <md-bottom-bar-item @click.native="swipePage(novel)">小说</md-bottom-bar-item>
  </md-bottom-bar>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      movie: 'movie',
      animation: 'animation',
      novel: 'novel'
    }
  },
  methods: {
    swipePage: function (type) {
      this.getData(type)
    }
  }
}
</script>

<style>
.footer {
  z-index: 999;
  position: fixed !important;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 16px !important;
}

.footer button span {
  margin-top: 30%;
}

.md-text {
  font-size: 16px;
}
</style>