<template>
  <div class="detail-container">
    <img :src="url" alt="" class="detail-content">
  </div>
</template>

<script>
  export default {
    data () {
      return {
        url: '',
        detail: [],
        chapter: 'chapter',
        cpIndex: 0
      }
    },
    methods: {
      initImg: function () {
        this.url = this.detail[this.chapter][0].url
      },
      initChapter: function (index) {
        this.chapter = this.chapter + (index + 1)
        this.cpIndex = index + 1
      },
      nextPage: function () {
      },
      lastPage: function () {
      },
      nextChapter: function () {
      },
      lastChapter: function () {
      }
    },
    created () {
      this.detail = this.$store.state.chapters.detail[this.$route.query.index]
      this.initChapter(this.$route.query.index)
      this.initImg()
    }
  }
</script>

<style>
  .detail-container {
    width: 100%;
    margin-top: 1.3rem !important;
  }

  @media (max-width: 350px) {
    .detail-container {
      margin-top: 1.5rem !important;
    }
  }
</style>

