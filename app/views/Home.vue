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

    <section class="content-selections">
      <div class="section-title">
        <div>Discover our content selection</div>
        <div class="border-title"></div>
      </div>

      <div class="content-selection" v-for="contentSelection in contentSelections">
        <content-selection :type="contentSelection.type" :title="contentSelection.title"
          :thumbnail-url="contentSelection.thumbnailUrl" :url="contentSelection.url" :tags="contentSelection.tags"
          :description="contentSelection.description"
        >
        </content-selection>
      </div>

      <div class="bottom-link-wrapper">
        <a href="#" class="bottom-link">
          <span class="text">Discover PeerTube instances</span>
          <icon-right></icon-right>
        </a>
      </div>
    </section>

    <section class="what-is-peertube">
      <div class="section-title">
        <div>What is PeerTube?</div>
        <div class="border-title"></div>
      </div>

      <div class="ambition">
        <img :src="buildImgUrl('peertube-interface.png')" alt="PeerTube screen" />

        <div>
          <div class="citation">
            <div class="text">
              L’ambition de PeerTube, c'est d’être <strong>une alternative libre et décentralisée</strong> aux services de diffusion de vidéos.
            </div>
          </div>

          <div>
            Le but n’est pas de remplacer, mais de proposer quelque chose d’autre, avec des valeurs différentes, en parallèle de ce qui existe déjà.
          </div>
        </div>
      </div>

      <div class="federation one-column">
        <div class="subtitle">Une fédération d'hébergements interconnectés</div>

        <img :src="buildImgUrl('peertube-federation-multiplicity.png')" alt="Funny federation schema" />

        <div class="citation">
          <div class="left-bar"></div>

          <div class="text">
            PeerTube n’est pas pensé pour créer une énorme plateforme centralisant les vidéos du monde entier. Il s’agit plutôt
            <strong>d'un réseau de nombreux petits hébergeurs de vidéos, connectés les uns aux autres.</strong>
          </div>
        </div>

        <div>
          N’importe qui ayant un minimum de compétences techniques peut héberger un serveur PeerTube qu’on nomme instance.
          Chaque instance héberge ses propres utilisateur⋅ices et leurs vidéos.
          Ainsi, <strong>toutes les instances sont créées, animées, modérées et maintenues de façon indépendante par des administrateur⋅ices différent⋅e⋅s.</strong>
        </div>

        <div class="bottom-link-wrapper">
          <a href="#" class="bottom-link">
            <span class="text">Discover PeerTube instances</span>
            <icon-right></icon-right>
          </a>
        </div>

        <img :src="buildImgUrl('peertube-federation-2-instances.png')" alt="Funny 2 instances communication schema" />

        <div>
          Mais vous avez tout de même la possibilité de regarder depuis l'instance sur laquelle vous êtes inscrit·e des vidéos qui se trouvent ailleurs ;
          il suffit que l'administrateur·ice l'ai autorisé !
        </div>

        <div class="citation">
          <div class="left-bar"></div>

          <div class="text">C'est le principe de<strong> la fédération !</strong></div>
        </div>

        <img src="" alt="Another funny federation schema" />
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

  .content-selections {
    .content-selection {
      margin-bottom: 80px;
    }

    .discover-instances {
      display: flex;
      justify-content: flex-end;
    }
  }

  .what-is-peertube {
    .ambition {
      display: flex;
      margin-bottom: 100px;

      img {
        margin-right: 30px;
      }

      .citation {
        margin-bottom: 20px;
      }
    }

    .federation {
      .citation {
        margin-bottom: 30px;
      }
    }
  }
</style>

<script>
import IconInstance from '../components/icons/IconInstance.vue'
import ContentSelection from '../components/ContentSelection.vue'
import IconRight from '../components/icons/IconRight.vue'

export default {
  components: {
    ContentSelection,
    IconInstance,
    IconRight
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
  }),

  methods: {
    buildImgUrl (imageName) {
      return this.$root['/'] + 'img/' + imageName
    }
  }
}
</script>
