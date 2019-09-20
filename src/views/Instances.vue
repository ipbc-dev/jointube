<template>
  <main>
    <div class="blocks">

      <div class="title-block">
        <div class="title" v-translate>Create an account</div>

        <p v-translate>
          If you would like to interact with videos (like, comment, download...), subscribe to channels, create playlists or play videos,
          then all you have to do is <strong>create an account on the PeerTube instance of your choice.</strong>
        </p>

        <button class="jpt-button">
          <span v-translate>See the instances list</span>
        </button>
      </div>

      <div class="block-with-image">
        <div>
          <img :src="buildImgUrl('peertube-federation-multiplicity.png')" alt="Multiple instances illustration">
        </div>

        <div>
          <div class="title" v-translate>1. Find the instance that suits you best</div>

          <p v-translate>
            By <strong>filtering according to your profile</strong> (video maker or viewer), <strong>themes</strong> that you are
            looking for or <strong>languages</strong> you speak, <strong>find an instance whose rules match your needs!</strong>
          </p>
        </div>
      </div>

      <div class="block-with-image">
        <div>
          <div class="title" v-translate>2. Create your account and enjoy PeerTube</div>

          <p v-translate>
            A username, an email, a password and you can already <strong>enjoy all the features of PeerTube!</strong>
          </p>
        </div>

        <div>
          <img :src="buildImgUrl('peertube-upload.png')" alt="PeerTube upload illustration">
        </div>
      </div>

      <instances-list></instances-list>
    </div>
  </main>
</template>

<style scoped lang="scss">
  @import '../scss/_variables.scss';

  .blocks {
    margin: 60px auto;
    width: 770px;
  }

  .title-block {
    p {
      text-align: left;
    }

    .jpt-button {
      margin-top: 25px;
      border: 2px solid $orange;
      min-width: 225px;
      height: 35px;
    }
  }

  .block-with-image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;

    & > div {
      flex-basis: 100%;

      img {
        width: 370px;
      }
    }

    & > * {
      margin-right: 20px;
    }

    .title {
      font-size: 24px;
      margin-bottom: 20px;
    }
  }
</style>

<script>
  import InstancesList from '../components/InstancesList'

  export default {
    components: {
      InstancesList
    },

    metaInfo: function () {
      return {
        title: this.$gettext('PeerTube instances')
      }
    }
  }
</script>
