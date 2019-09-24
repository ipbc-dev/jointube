<template>
  <div id="app" class="container">
    <header-component></header-component>

    <router-view></router-view>

    <footer-component></footer-component>
  </div>
</template>

<script>
  import HeaderComponent from './components/Header.vue'
  import FooterComponent from './components/Footer.vue'

  export default {
    name: 'app',
    components: {
      HeaderComponent,
      FooterComponent
    },
    metaInfo: function () {
      return {
        title: 'JoinPeerTube',
        titleTemplate: '%s | JoinPeerTube',
        meta: [
          {
            description: this.$gettext(
              'A free software to take back control of your videos! ' +
                'With more than 100 000 hosted videos, viewed more than 6 millions times and 20 000 users, ' +
                'PeerTube is the decentralized free software alternative to videos platforms developed by Framasoft'
            )
          }
        ]
      }
    }
  }
</script>
