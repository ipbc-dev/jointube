<template>
  <main>
    <div class="blocks">

      <div class="title-block">
        <div class="title" v-translate>Our content selections</div>

        <div class="separator"></div>
      </div>

      <content-selections></content-selections>
    </div>
  </main>
</template>

<style scoped lang="scss">
  @import '../scss/_variables.scss';

  .blocks {
    margin: 60px auto;
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
