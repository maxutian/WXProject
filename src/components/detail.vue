<template>
  <div class="detail-container">
    <img :src="url" alt="" class="detail-content">
    <div class="button-group">
      <md-button class="detail-button" @click.native="lastChapter()">上一章</md-button>
      <md-button class="detail-button" @click.native="lastPage()">上一页</md-button>
      <md-button class="md-accent detail-button" @click.native="backToMenu()">目录</md-button>
      <md-button class="detail-button" @click.native="nextPage()">下一页</md-button>
      <md-button class="detail-button" @click.native="nextChapter()">下一章</md-button>
    </div>

    <transition name="noMore">
      <div class="detail-toast" v-if="noMore">
        <p class="detail-toast-text">没有了哦~</p>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        url: '',
        content: [],
        chapter: 'chapter',
        cpIndex: 0,
        cpLength: 0,
        pageIndex: 0,
        pageLength: 0,
        noMore: false
      }
    },
    methods: {
      initImg: function (index) {
        this.url = this.content[index][this.chapter][this.pageIndex].url
        this.pageLength = this.content[index][this.chapter].length
      },
      initChapter: function (index) {
        this.chapter = this.chapter + (index - 0 + 1)
      },
      backToMenu: function () {
        this.$router.go(-1)
      },
      nextPage: function () {
        if (this.pageIndex === (this.pageLength - 1)) {
          this.nextChapter()
        } else {
          ++this.pageIndex
          this.initImg(this.cpIndex)
        }
      },
      lastPage: function () {
        if (this.pageIndex === 0) {
          this.lastChapter()
        } else {
          --this.pageIndex
          this.initImg(this.cpIndex)
        }
      },
      nextChapter: function () {
        if (this.cpIndex === this.cpLength - 1) {
          this.noMore = true
          setTimeout(() => {
            this.noMore = false
          }, 2000)
        } else {
          this.pageIndex = 0
          this.chapter = 'chapter'
          ++this.cpIndex
          this.initChapter(this.cpIndex)
          this.initImg(this.cpIndex)
        }
      },
      lastChapter: function () {
        if (this.cpIndex === 0) {
          this.noMore = true
          setTimeout(() => {
            this.noMore = false
          }, 2000)
        } else {
          this.pageIndex = 0
          this.chapter = 'chapter'
          --this.cpIndex
          --this.$route.query.index
          this.initChapter(this.cpIndex)
          this.initImg(this.cpIndex)
        }
      }
    },
    created () {
      this.axios.get('http://39.108.155.202/jsons/comic.json').then((res) => {
        this.content = res.data.comic[this.$route.query.comicIndex].detail
        this.cpLength = res.data.comic[this.$route.query.comicIndex].detail.length
        this.cpIndex = this.$route.query.index
        this.initChapter(this.$route.query.index)
        this.initImg(this.$route.query.index)
      })
    }
  }
</script>

<style scoped>
  .detail-container {
    position: relative;
    width: 100%;
    top: 1.3rem !important;
  }

  @media (max-width: 350px) {
    .detail-container {
      top: 1.5rem !important;
    }

    .detail-button {
      min-width: .7rem !important;
      min-height: 27px !important;
      line-height: 27px !important;
      margin: .2rem .1rem !important;
      padding: 0 .2rem !important;
      font-size: 12px !important;
    }
  }

  .detail-content {
    width: 100%;
  }

  .button-group {
    text-align: center;
    width: 100%;
  }

  .detail-button {
    min-width: 1rem !important;
    margin: .3rem .2rem !important;
    padding: 0 .2rem !important;
  }

  .detail-toast {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 39%;
    bottom: 3px;
    width: 22%;
    max-height: 1rem;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, .7);
  }

  .detail-toast-text {
    color: rgba(255, 255, 255, .7);
  }

  .noMore-enter,.noMore-leave-to{
    opacity: 0;
    transform: translateY(40px);
  }

  .noMore-enter-to,.noMore-leave {
    opacity: 1;
    transform: translateY(0)
  }

  .noMore-leave-active{
    transition: all 1s cubic-bezier(.69,.01,.04,1.17);
  }

  .noMore-enter-active {
    transition: all .5s cubic-bezier(.69,.01,.04,1.17);
  }
</style>

