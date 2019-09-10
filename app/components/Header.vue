<template>
  <header id="main-header">

    <nav class="navbar navbar-expand-lg">
      <router-link :to="'/' + $t('lang') + '/'" class="navbar-brand">
        <img alt="PeerTube" :src="`${$root['/']}img/brand-small.png`">
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
            <router-link class="nav-link" :to="'/' + $t('lang') + '/'">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" :to="'/' + $t('lang') + '/'">Create an account</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" :to="'/' + $t('lang') + '/news'" v-html="$t('menu.faq')">News</router-link>
          </li>

          <li class="nav-item">
            <a class="nav-link">Help</a>
          </li>

          <li class="nav-item">
            <a class="nav-link">Contribute</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" :href="$root.link.gitPT">Git</a>
          </li>

          <div class="pull-right">
            <I18n />
          </div>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
  header {
    margin-bottom: 30px;
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
  }
</style>

<script>
  import I18n from './I18n.vue'

  export default {
    components: {
      I18n,
    },
  }
</script>

