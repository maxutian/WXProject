<template>
  <md-toolbar class="md-dense">
    <img src="../../static/logo.png" alt="logo" class="v-header-logo">
  </md-toolbar>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style>
  .v-header-logo {
    width: 4.5rem;
    margin: 1% 0;
    margin-left: 3%;
  }

  .md-theme-default .md-toolbar {
    z-index: 999;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(255,112,160,.85);
    box-shadow: 0 1px 3px rgba(0,0,0,.2), 0 1px 1px rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
  }
</style>
