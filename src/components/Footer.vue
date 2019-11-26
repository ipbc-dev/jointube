<template>
  <footer id="main-footer">

    <div class="links">
      <div>
        <a target="_blank" rel="noopener noreferrer" href="https://framasoft.org/en/legals/" v-translate>Legal notices</a>

        <a target="_blank" rel="noopener noreferrer" href="https://contact.framasoft.org" v-translate>Contact</a>

        <a target="_blank" rel="noopener noreferrer" href="https://framalistes.org/sympa/subscribe/peertube-newsletter" v-translate>Newsletter</a>

        <a target="_blank" rel="noopener noreferrer" href="https://framacolibri.org/c/peertube" v-translate>Forum</a>
      </div>

      <div>
        <a target="_blank" rel="noopener noreferrer" v-bind:href="buildPublicUrl('press-kit.zip')" v-translate>Press kit</a>

        <a target="_blank" rel="noopener noreferrer" href="https://framagit.org/framasoft/peertube/joinpeertube" v-translate>JoinPeerTube Git</a>

        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Chocobozzz/PeerTube" v-translate>PeerTube Git</a>
      </div>
    </div>

    <div class="credits">
      <div v-translate>
        Website developed by <a target="_blank" rel="noopener noreferrer" href="https://framasoft.org">Framasoft</a> and designed by <a target="_blank" rel="noopener noreferrer" href="https://www.maiwann.net/">Maiwann</a>
      </div>

      <div v-translate>
        Illustrations from <a target="_blank" rel="noopener noreferrer" href="https://framatube.org/videos/watch/9c9de5e8-0a1e-484a-b099-e80766180a6d">What is PeerTube video</a>,
        created by <a target="_blank" rel="noopener noreferrer" href="https://libreart.info/">LILA</a> - <a target="_blank" rel="noopener noreferrer" href="https://film.zemarmot.net/">ZeMarmot Team</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
  @import '../scss/_variables.scss';
  @import '../scss/_mixins.scss';

  #main-footer {
    margin-top: 30px;
    background-color: #fff;
    padding: 30px 200px;

    .links {
      display: flex;
      justify-content: space-between;

      > div {
        a {
          display: block;
          color: #000;
          font-weight: $font-semibold;
          margin-bottom: 10px;
        }
      }
    }

    .credits {
      margin-top: 40px;
      font-size: 12px;
      text-align: center;
    }

    @media screen and (max-width: $responsive-screen) {
      padding: 30px;
    }
  }
</style>

<script>

  export default {
    components: {

    }
  }
</script>
