<template>
  <div id="app">
    <v-header></v-header>
    <item></item>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from './components/header'
import item from './components/item'
import footer from './components/footer'

export default {
  name: 'app',
  components: {
    'v-header': header,
    'item': item,
    'v-footer': footer
  }
}
</script>

<style>

</style>
