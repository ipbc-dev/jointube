<template>
  <header id="main-header">

    <nav class="navbar navbar-expand-lg">
      <router-link :to="getPath('/')" class="navbar-brand">
        <img alt="PeerTube" :src="buildImgUrl('brand-small.png')">

        <div class="support">
          developed by

          <img alt="Framasoft text logo" :src="buildImgUrl('framasoft-logo-text-small.png')">
        </div>
      </router-link>

      <button class="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>

      <div id="navbar" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>

          <li class="nav-item ">
            <router-link class="nav-link create-account" to="/">Create an account</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/news">News</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/help">Help</router-link>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="https://docs.joinpeertube.org/#/contribute-getting-started" target="_blank" rel="noopener noreferrer">Contribute</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="https://github.com/Chocobozzz/PeerTube" target="_blank" rel="noopener noreferrer">Git</a>
          </li>

          <div class="pull-right">
            <I18n/>
          </div>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  @import '../scss/_variables.scss';
  @import '../scss/_mixins.scss';

  header {
    margin-bottom: 30px;
  }

  .navbar-brand {
    @include disable-default-a-behaviour;

    color: #000;
    font-family: 'Proza Libre', sans-serif;
    font-size: 10px;

    .support img {
      vertical-align: initial;
      margin-left: 1px;
    }
  }

  nav {
    height: 60px;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  }

  .navbar-nav {
    align-items: center;
  }

  .nav-item {
    margin-right: 40px;
  }

  .nav-link {
    padding-right: 0 !important;
    padding-left: 0 !important;
    color: #000;
    font-family: 'Proza Libre', sans-serif;

    &.create-account {
      font-weight: $font-semibold;
    }
  }
</style>

<script>
  import I18n from './I18n.vue'

  export default {
    components: {
      I18n
    },

    methods: {
      getPath (path) {
        return path
      }
    }
  }
</script>
