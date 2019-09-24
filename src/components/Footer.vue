<template>
  <footer>
    <div>
      <a target="_blank" rel="noopener noreferrer" href="https://framasoft.org/en/legals/" v-translate>Legal notices</a>

      <a target="_blank" rel="noopener noreferrer" href="https://contact.framasoft.org" v-translate>Contact</a>

      <a target="_blank" rel="noopener noreferrer" href="https://framalistes.org/sympa/subscribe/peertube-newsletter" v-translate>Newsletter</a>

      <a target="_blank" rel="noopener noreferrer" href="https://framacolibri.org/c/peertube" v-translate>Forum</a>
    </div>

    <div>
      <a target="_blank" rel="noopener noreferrer" href="https://framagit.org/framasoft/peertube/joinpeertube" v-translate>JoinPeerTube Git</a>

      <a target="_blank" rel="noopener noreferrer" href="https://github.com/Chocobozzz/PeerTube" v-translate>PeerTube Git</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  @import '../scss/_variables.scss';
  @import '../scss/_mixins.scss';

  footer {
    margin-top: 30px;
    background-color: #fff;
    padding: 30px 200px;
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

  @media screen and (max-width: $responsive-screen) {
    footer {
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
