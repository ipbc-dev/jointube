<template>
  <div id="app" class="container">
    <vue-headful
      title="JoinPeerTube"
      :html="{ body: {id: $route.meta.id } }"
      :lang="$route.meta.lang"
    />

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
  }
}
</script>
