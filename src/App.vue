<template>
  <div id="app" class="container">
    <header-component></header-component>

    <router-view></router-view>
  </div>
</template>

<style scoped>
  .container {
    padding-top: 0;
    margin-top: 0;
    width: 1024px;
  }
</style>

<script>
  import HeaderComponent from './components/Header.vue'

  export default {
    name: 'app',
    components: {
      HeaderComponent
    },
    metaInfo: function () {
      return {
        title: 'JoinPeerTube',
        titleTemplate: '%s | JoinPeerTube',
        meta: {
          description: this.$gettext(
            'A free software to take back control of your videos! ' +
            'With more than 100 000 hosted videos, viewed more than 6 millions times and 20 000 users, ' +
            'PeerTube is the decentralized free software alternative to videos platforms developed by Framasoft'
          )
        }
      }
    }
  }
</script>
