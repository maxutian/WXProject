<template>
  <div>
    <md-toolbar class="md-dense">
      <md-button class="md-icon-button" @click="$refs.sidenav.toggle()">
        <md-icon>menu</md-icon>
      </md-button>
      <!-- <img src="../../static/logo.png" alt="logo" class="v-header-logo"> -->
    </md-toolbar>

    <md-sidenav class="md-left" ref="sidenav">
      <md-toolbar class="md-account-header">
        <img src="../../static/sidebarLogo.png" alt="logo" class="sidebar-logo"/>
      </md-toolbar>

      <md-list>
        <md-list-item @click="$refs.sidenav.toggle(), swipePage('movie')" 
                      :class="[this.$store.state.curTab === 'movie' ? activeClass : '']">
          <md-icon>movie</md-icon> <span>电影</span>
        </md-list-item>

        <md-list-item @click="$refs.sidenav.toggle(), swipePage('TVShow')" 
                      :class="[this.$store.state.curTab === 'TVShow' ? activeClass : '']">
          <md-icon>live_tv</md-icon> <span>电视剧</span>
        </md-list-item>

        <md-list-item @click="$refs.sidenav.toggle(), swipePage('animation')" 
                      :class="[this.$store.state.curTab === 'animation' ? activeClass : '']">
          <md-icon>child_care</md-icon> <span>动漫</span>
        </md-list-item>

        <md-list-item @click="$refs.sidenav.toggle(), swipePage('novel')" 
                      :class="[this.$store.state.curTab === 'novel' ? activeClass : '']">
          <md-icon>book</md-icon> <span>小说</span>
        </md-list-item>

        <md-list-item @click="$refs.sidenav.toggle(), swipePage('comic')"
                      :class="[this.$store.state.curTab === 'comic' ? activeClass : '']">
          <md-icon>photo_album</md-icon> <span>漫画</span>
        </md-list-item>
      </md-list>
    </md-sidenav>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      activeClass: 'md-primary'
    }
  },
  methods: {
    menu: function () {
      this.scroll = document.body.scrollTop
    },
    swipePage: function (type) {
      if (this.$route.path !== '/') {
        this.$store.commit('switchTab', type)
        this.$store.commit('enterIndex')
        this.initData()
        this.$router.push({path: '/'})
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      } else {
        this.initData()
        this.$store.commit('switchTab', type)
        this.$store.dispatch('getData', type)
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
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

  .sidebar-logo {
    width: 2.5rem;
    height: 2.5rem;
    margin-left: .2rem;
  }

  .md-theme-default .md-toolbar {
    z-index: 2;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(255,112,160,.85) !important;
    box-shadow: 0 1px 3px rgba(0,0,0,.2), 0 1px 1px rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12) !important;
  }

  .md-toolbar.md-account-header {
    height: 4.5rem !important;
  }

  .md-theme-default.md-sidenav .md-sidenav-content {
    z-index: 100 !important;
    position: fixed !important;
  }

  .md-theme-default.md-list .md-list-item.md-primary .md-list-item-container, 
  .md-theme-default.md-list .md-list-item.md-primary .md-list-item-container>.md-icon {
    color: #ff85ae !important;
  }

  .md-sidenav.md-active .md-sidenav-backdrop {
    position: fixed !important;
  }

  .md-list {
    top: 4.5rem !important;
  }

  @media (max-width: 350px) {
    .md-list {
      top: 5rem !important;
    }
  }
</style>
