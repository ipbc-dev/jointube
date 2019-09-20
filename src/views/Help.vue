<template>
  <main>
    <div class="blocks">

      <div class="title-block">
        <div class="title" v-translate>Help</div>

        <p>Questions on PeerTube? Need help? You've come to the right place!</p>

        <div class="separator"></div>
      </div>

      <div class="block-with-image understand">
        <div class="image-block">
          <img width="167px" height="252px" :src="buildImgUrl('help/rabbit.png')" alt="Rabbit image">
        </div>

        <div class="text-block">
          <div v-translate class="title">Better understand and use PeerTube</div>

          <p v-translate>You have a question?</p>
          <div class="bottom-link-wrapper">
            <router-link to="/faq" class="bottom-link">
              <span class="text" v-translate>Discover our FAQ</span>
              <icon-right></icon-right>
            </router-link>
          </div>

          <p>Need a detailed guide?</p>
          <div class="bottom-link-wrapper">
            <a class="bottom-link" href="https://docs.joinpeertube.org" target="_blank" rel="noopener noreferrer">
              <span class="text" v-translate>Read the documentation</span>
              <icon-right></icon-right>
            </a>
          </div>
        </div>
      </div>

      <div class="block-with-image community">
        <div class="text-block">
          <div class="title">Ask questions to the community</div>

          <div class="bottom-link-wrapper">
            <a href="https://framacolibri.org/c/peertube" class="bottom-link" target="_blank" rel="noopener noreferrer">
              <span class="text" v-translate>Go to the forum</span>
              <icon-right></icon-right>
            </a>
          </div>
        </div>

        <div class="image-block">
          <img width="189px" height="205px" :src="buildImgUrl('help/cat.png')" alt="Cat image">
        </div>
      </div>

      <div class="block-with-image administrators">
        <div class="image-block">
          <img width="158px" height="219px" :src="buildImgUrl('help/panda.png')" alt="Panda image">
        </div>

        <div class="text-block">
          <div class="title">For PeerTube admins</div>

          <div class="bottom-link-wrapper">
            <a class="bottom-link" href="https://docs.joinpeertube.org/#/install-any-os" target="_blank" rel="noopener noreferrer">
              <span class="text" v-translate>Install PeerTube</span>
              <icon-right></icon-right>
            </a>
          </div>

          <div class="bottom-link-wrapper">
            <a class="bottom-link" href="https://docs.joinpeertube.org/#/install-any-os?id=upgrade" target="_blank" rel="noopener noreferrer">
              <span class="text" v-translate>Upgrade PeerTube</span>
              <icon-right></icon-right>
            </a>
          </div>

          <div class="bottom-link-wrapper">
            <a class="bottom-link" href="https://docs.joinpeertube.org/#/admin-following-instances" target="_blank" rel="noopener noreferrer">
              <span class="text" v-translate>Administer PeerTube</span>
              <icon-right></icon-right>
            </a>
          </div>
        </div>
      </div>

      <div class="block-with-image contribute">
        <div class="text-block">
          <div class="title">Contribute to PeerTube</div>

          <div class="bottom-link-wrapper">
            <a class="bottom-link" href="https://docs.joinpeertube.org/#/contribute-getting-started" target="_blank" rel="noopener noreferrer">
              <span class="text" v-translate>How to contribute?</span>
              <icon-right></icon-right>
            </a>
          </div>
        </div>

        <div class="image-block">
          <img width="242px" height="221px" :src="buildImgUrl('help/dog.png')" alt="Dog image">
        </div>
      </div>

    </div>
  </main>
</template>

<style scoped lang="scss">
  @import '../scss/_variables.scss';

  .blocks {
    margin: 60px auto;
    width: 500px;
  }

  .block-with-image {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 100px;

    .image-block + .text-block,
    .text-block + .image-block {
      margin-left: 40px;
    }

    .text-block {
      text-align: right;

      p {
        margin-bottom: 0;
      }

      .title {
        font-size: 24px;
        margin-bottom: 25px;
      }

      .bottom-link-wrapper {
        margin-top: 5px;
        margin-bottom: 0;
      }

      .bottom-link-wrapper + * {
        margin-top: 40px;
      }
    }

    .image-block + .text-block {
      text-align: left;
    }
  }

</style>

<script>
  import IconRight from '../components/icons/IconRight'

  export default {
    components: {
      IconRight
    },

    metaInfo: function () {
      return {
        title: this.$gettext('Help')
      }
    }
  }
</script>
