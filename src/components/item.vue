<template>
  <div class="v-item-container">
    <transition-group tag="div" name="enterAnimation" class="leftColumn">

      <md-card v-for="(item, index) in this.$store.state.leftColumn" :key="item.id">

        <md-card-media md-ratio="3:4">
          <img :src="item.thumb" alt="People" @click="leftGoTo(index)" class="v-item-image">
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
          <img :src="item.thumb" alt="People" @click="rightGoTo(index)" class="v-item-image">
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
        scroll: ''
      }
    },
    methods: {
      leftGoTo: function (index) {
        window.open(this.$store.state.leftColumn[index].url)
      },
      rightGoTo: function (index) {
        window.open(this.$store.state.rightColumn[index].url)
      }
    },
    created () {
      this.$store.state.leftColumn = []
      this.$store.state.rightColumn = []
      this.getData('movie')
    }
  }
</script>

<style>
  .v-item-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    margin-top: 1.5rem !important;
  }

  .leftColumn, .rightColumn {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 48%;
  }

  .leftColumn {
    margin-left: 1%;
  }

  .v-item-image {
    width: 100%;
  }

  .md-card {
    width: 97%;
    margin-top: 0.25rem;
    margin-left: 2%;
  }

  .md-card .md-card-header.md-card-header-flex {
    padding-bottom: .2rem !important;
  }

  .md-card .md-title {
    cursor: pointer;
    font-size: 0.5rem !important;
    margin-top: -0.1rem !important;
  }

  .md-card .md-subhead {
    margin-top: 0.2rem !important;
  }

  .md-card .md-card-header:last-child {
    margin-top: 0.2rem !important;
    margin-bottom: 0 !important;
  }

  .md-card .md-card-media + .md-card-header {
    padding-top: 0.3rem !important;
  }

  .enterAnimation-enter,.enterAnimation-leave-active{
    opacity: 0;
    transform: translateY(7%);
  }

  .enterAnimation-enter-to,.enterAnimation-leave {
    opacity: 1;
    transform: translateY(0);
  }

  .enterAnimation-leave-to {
    opacity: 0;
    transform: translateY(7%);
  }

  .enterAnimation-enter-active,.enterAnimation-leave-active{
    transition: all .6s cubic-bezier(.69,.01,.04,1.17);
  }
</style>
