<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header'

export default {
  name: 'app',
  components: {
    'v-header': header
  }
}
</script>

<style>
  * {
    font-family: '微软雅黑';
  }

  body {
    padding-bottom: .5rem !important;
  }
</style>
