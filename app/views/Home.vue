<template>
  <main>

    <section class="presentation">
      <div class="first-row">
        <div class="brand">Brand</div>

        <div class="description">A free software to take back control of your videos</div>
      </div>

      <div class="marketing">
        With more than 100 000 hosted videos, viewed more than 6 millions times and 20 000 users,
        PeerTube is the decentralized free software alternative to videos platforms developed by Framasoft
      </div>

      <div class="buttons">
        <button class="jpt-button what-is-peertube">
          <icon-instance></icon-instance>

          <span>What is PeerTube?</span>
        </button>

        <button class="jpt-button instances-list">
          <icon-instance></icon-instance>

          See the instances list
        </button>
      </div>
    </section>

    <section>
      <div class="section-title">
        <div>Discover our content selection</div>
        <div class="border-title"></div>
      </div>

      <div v-for="contentSelection in contentSelections">
        <content-selection :type="contentSelection.type" :title="contentSelection.title"
          :thumbnail-url="contentSelection.thumbnailUrl" :url="contentSelection.url" :tags="contentSelection.tags"
          :description="contentSelection.description"
        >
        </content-selection>
      </div>
    </section>

  </main>
</template>

<style scoped lang="scss">
  .presentation {

    .first-row {
      display: flex;
      padding: 70px;
      margin: auto;

      div {
        flex-basis: 100%;
      }

      .description {
        margin-left: 60px;
        font-size: 24px;
        font-weight: 600;
      }
    }

    .marketing {
      font-size: 16px;
      margin: 50px auto;
      width: 500px;
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;

      button {
        width: 330px;
        height: 50px;
      }
    }
  }
</style>

<script>
import IconInstance from '../components/icons/IconInstance.vue'
import ContentSelection from '../components/ContentSelection.vue'

export default {
  components: {
    ContentSelection,
    IconInstance
  },
  data: () => ({
    contentSelections: [
      {
        type: 'video',
        title: 'Nothing to hide',
        thumbnailUrl: 'https://peertube2.cpy.re/static/thumbnails/d2a5ec78-5f85-4090-8ec5-dc1102e022ea.jpg',
        url: 'https://peertube2.cpy.re/videos/watch/d2a5ec78-5f85-4090-8ec5-dc1102e022ea',
        tags: [ 'tag', 'tag2', 'tag3 '],
        description: 'Nothing to Hide (2017) est un film documentaire franco-allemand de Marc Meillassoux et Mihaela Gladovic, qui s\'intéresse aux effets de la surveillance de masse sur les individus et la société. Proposant un regard critique à propos des lois sur le renseignement mises en place par de nombreux États ces dernières années, le film nous rappelle à quel point le débat sur l’usage des données personnelles est actuel et questionne les fondements de nos démocraties.',
      }
    ]
  })
}
</script>
