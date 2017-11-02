<template>
  <div>
    <md-toolbar class="md-dense">
      <md-button class="md-icon-button" @click="$refs.sidenav.toggle(), hideTips()">
        <md-icon>menu</md-icon>
      </md-button>
    </md-toolbar>

    <transition name="tips">
      <div class="tips" v-if="showTips">
        <div class="arrow_left"></div>
        <p class="tips_text">菜单栏在这里哦~</p>
      </div>
    </transition>

    <md-sidenav class="md-left" ref="sidenav">
      <md-toolbar class="md-account-header">
        <img src="../../static/sidebarLogo.png" alt="logo" class="sidebar-logo"/>
        <div class="sidebar-text">
          <p style="font-size: .7rem; font-weight: 600; margin-bottom: -2%; letter-spacing: .05rem;">二次元控</p>
          <p>CIYUAN2020</p>
        </div>
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
      activeClass: 'md-primary',
      showTips: false
    }
  },
  methods: {
    swipePage: function (type) {
      this.initData()
      this.toTop()
      if (this.$route.path !== '/') {
        this.$store.commit('switchTab', type)
        this.$router.push({path: '/'})
        this.$store.state.firstLoad = true
      } else {
        this.$store.commit('switchTab', type)
        this.$store.dispatch('getData', type)
      }
    },
    hideTips: function () {
      this.showTips = false
      clearTimeout()
    }
  },
  created () {
    setTimeout(() => {
      this.showTips = true
    }, 500)
    setTimeout(() => {
      this.showTips = false
    }, 3000)
  }
}
</script>

<style>
  .v-header-logo {
    width: 4.5rem !important;
    margin: 1% 0 !important;
    margin-left: 3% !important;
  }

  .arrow_left {
    z-index: 9;
    width: 0;
    height: 0;
    border: .2rem solid transparent;
    border-right: .25rem solid rgba(0, 0, 0, .6);
  }

  .tips {
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 12%;
    top: .18rem;
    max-height: 1rem;
  }

  .tips_text {
    padding: .2rem;
    color: rgba(255, 255, 255, .6);
    border-radius: 3px;
    background-color: rgba(0, 0, 0, .6);
  }

  @media (max-width: 350px) {
    .tips {
      top: .3rem !important;
    }
  }

  @media (min-width: 750px) {
    .tips {
      left: 6% !important;
    }

    .sidebar-logo {
      width: 2.5rem;
      height: 2.5rem;
      margin-left: .2rem;
      margin-top: .5rem;
    }
  }

  .tips-enter,.tips-leave-to{
    opacity: 0;
  }

  .tips-enter-to,.tips-leave {
    opacity: 1;
  }

  .tips-leave-active{
    transition: all .5s cubic-bezier(.69,.01,.04,1.17);
  }

  .tips-enter-active {
    transition: all .5s cubic-bezier(.69,.01,.04,1.17);
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

  .sidebar-text {
    font-size: .3rem;
    
    margin-left: 8%;
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
