<template>
  <main id="all-content-selections">
    <div class="blocks">

      <div class="title-block">
        <h1 v-translate>Our content selections</h1>

        <div class="separator"></div>
      </div>

      <content-selections></content-selections>
    </div>
  </main>
</template>

<style lang="scss">
  @import '../scss/_variables.scss';

  #all-content-selections {
    .blocks {
      margin: 60px auto;
    }
  }
</style>

<script>
  import ContentSelections from '../components/ContentSelections'

  export default {
    components: {
      ContentSelections
    },

    metaInfo: function () {
      return {
        title: this.$gettext('Our content selections')
      }
    }
  }
</script>
