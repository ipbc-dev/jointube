<template>
  <main>

    <section class="presentation">
      <div class="first-row">
        <img class="brand" :src="buildImgUrl('brand.png')" alt="PeerTube logo"/>

        <div class="description" v-translate>A free software to take back control of your videos</div>
      </div>

      <div class="marketing" v-translate>
        With more than 100 000 hosted videos, viewed more than 6 millions times and 20 000 users,
        PeerTube is the decentralized free software alternative to videos platforms developed by Framasoft
      </div>

      <div class="buttons-row">
        <button class="jpt-button jpt-big-button-icon what-is-peertube">
          <icon-instance></icon-instance>

          <span v-translate>What is PeerTube?</span>
        </button>

        <button class="jpt-button jpt-big-button-icon instances-list">
          <icon-instance></icon-instance>

          <translate>See the instances list</translate>
        </button>
      </div>
    </section>

    <section class="content-selections">
      <div class="section-title">
        <div v-translate>Discover our content selection</div>
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
          <span class="text" v-translate>Discover PeerTube instances</span>
          <icon-right></icon-right>
        </a>
      </div>
    </section>

    <section class="what-is-peertube">
      <div class="section-title">
        <div v-translate>
          What is
          <img class="brand-title" :src="buildImgUrl('brand.png')" alt="PeerTube"/>
          ?
        </div>
        <div class="border-title"></div>
      </div>

      <div class="ambition">
        <img :src="buildImgUrl('peertube-interface.png')" alt="PeerTube screen"/>

        <div>
          <div class="citation">
            <div class="text" v-translate>
              L’ambition de PeerTube, c'est d’être <strong>une alternative libre et décentralisée</strong> aux services de diffusion de
              vidéos.
            </div>
          </div>

          <p v-translate>
            Le but n’est pas de remplacer, mais de proposer quelque chose d’autre, avec des valeurs différentes, en parallèle de ce qui
            existe déjà.
          </p>
        </div>
      </div>

      <div class="federation one-column">
        <div class="subtitle" v-translate>Une fédération d'hébergements interconnectés</div>

        <img :src="buildImgUrl('peertube-federation-multiplicity.png')" alt="Funny federation schema"/>

        <div class="citation">
          <div class="left-bar"></div>

          <div class="text" v-translate>
            PeerTube n’est pas pensé pour créer une énorme plateforme centralisant les vidéos du monde entier. Il s’agit plutôt
            <strong>d'un réseau de nombreux petits hébergeurs de vidéos, connectés les uns aux autres.</strong>
          </div>
        </div>

        <p v-translate>
          N’importe qui ayant un minimum de compétences techniques peut héberger un serveur PeerTube qu’on nomme instance.
          Chaque instance héberge ses propres utilisateur⋅ices et leurs vidéos.
          Ainsi, <strong>toutes les instances sont créées, animées, modérées et maintenues de façon indépendante par des administrateur⋅ices
          différent⋅e⋅s.</strong>
        </p>

        <div class="bottom-link-wrapper">
          <a href="#" class="bottom-link">
            <span class="text" v-translate>Discover PeerTube instances</span>
            <icon-right></icon-right>
          </a>
        </div>

        <img :src="buildImgUrl('peertube-federation-2-instances.png')" alt="Funny 2 instances communication schema"/>

        <p v-translate>
          Mais vous avez tout de même la possibilité de regarder depuis l'instance sur laquelle vous êtes inscrit·e des vidéos qui se
          trouvent ailleurs ;
          il suffit que l'administrateur·ice l'ai autorisé !
        </p>

        <div class="citation">
          <div class="left-bar"></div>

          <div class="text v-translate">C'est le principe de<strong> la fédération !</strong></div>
        </div>

        <img :src="buildImgUrl('peertube-mastodon-federation.png')" alt="Federation with Mastodon funny schema"/>

        <p v-translate>
          Mais ce n’est pas tout ! Le protocole de fédération ActivityPub (qu’utilise PeerTube)
          <strong>permet aussi d’interagir avec d’autres logiciels</strong> utilisant ce même protocole. Par exemple, PeerTube et le
          réseau social Mastodon, alternative à Twitter, sont liés : <strong>il est possible de « suivre » un utilisateur PeerTube depuis
          Mastodon</strong>
          (en affichant dans son fil d'actualités les dernières vidéos postées par le compte suivi),
          <strong>ou même de commenter une vidéo hébergée sur PeerTube directement depuis Mastodon.</strong>
        </p>

        <div class="bottom-link-wrapper">
          <a href="#" class="bottom-link">
            <span class="text" v-translate>En savoir plus sur la fédération</span>
            <icon-right></icon-right>
          </a>
        </div>
      </div>

      <div class="free-software one-column">
        <div class="subtitle" v-translate>Un code ouvert sous licence libre</div>

        <img :src="buildImgUrl('peertube-free-software.png')" alt="PeerTube is a free software funny schema"/>

        <p v-translate>
          Les principaux services de diffusion de vidéo en ligne utilisent vos données pour gagner
          de l'argent en analysant vos interactions et en utilisant ces informations pour vous matraquer en publicités ciblées.
        </p>

        <div class="citation">
          <div class="left-bar"></div>

          <div class="text" v-translate>
            PeerTube n’est soumis au monopole d’aucune entreprise, ne dépend d’aucune publicité
            <strong>et ne vous piste pas.</strong>
          </div>
        </div>

        <p v-translate>
          Mais surtout, PeerTube <strong>vous considère comme une personne, et non pas comme un produit qu’il faut
          profiler et enfermer dans des boucles vidéos.</strong> PeerTube n’utilise par exemple aucun algorithme de recommandation biaisé
          pour vous faire rester indéfiniment en ligne.
        </p>

        <p v-translate>
          Tout cela est possible car PeerTube est un logiciel libre (licence GNU-AGPL pour les connaisseur⋅euses).
          Son code est un « commun » numérique, partagé avec tous et toutes, et non une recette secrète appartenant à Google (pour YouTube)
          ou à Vivendi/Bolloré (pour Dailymotion). Cette licence libre <strong>garantit nos libertés fondamentales d’utilisateur⋅ices et
          permet à de nombreux contributeur⋅ices de proposer des évolutions et de nouvelles fonctionnalités.</strong>
        </p>

        <div class="bottom-link-wrapper">
          <a href="#" class="bottom-link">
            <span class="text" v-translate>En savoir plus sur les logiciels libres</span>
            <icon-right></icon-right>
          </a>
        </div>
      </div>

      <div class="you-are-a-video-maker one-column">
        <div class="subtitle" v-translate>Vous êtes vidéaste ?</div>

        <img :src="buildImgUrl('peertube-upload.png')" alt="PeerTube upload illustration"/>

        <div class="citation">
          <div class="left-bar"></div>

          <div class="text" v-translate>
            PeerTube vous permet de choisir <strong>un hébergement et des règles qui vous correspondent.</strong>
          </div>
        </div>

        <div v-translate>
          On l’a vu avec les dérives de YouTube : son hébergeur, Google-Alphabet, peut imposer son système ContentID
          (le fameux « Robocopyright ») ou ses outils de mise en valeur des vidéos, qui semblent aussi obscurs qu’injustes.
        </div>

        <div class="citation">
          <div class="left-bar"></div>

          <div class="text" v-translate>
            Être en contact direct avec un hébergeur à taille humaine vous permet, non seulement de ne plus être le client d'une grande
            entreprise du numérique, mais surtout <strong>d'avoir des rapports privilégiés avec les personnes qui hébergent et diffusent vos
            données.</strong>
          </div>
        </div>

        <div v-translate>
          Avec PeerTube, vous choisissez l’hébergeur de vos vidéos selon ses conditions d’utilisation, telles que la limite d’espace disque
          par utilisateur⋅ice,
          la politique de modération, les choix de fédération...
          Comme vous n’avez pas un géant du web en face de vous, vous pourrez probablement discuter ensemble si vous avez un souci, un
          besoin, une envie...
        </div>

        <button class="jpt-button discover-instances">
          <icon-instance></icon-instance>

          <translate>Découvrir les instances PeerTube</translate>
        </button>
      </div>

      <div class="p2p one-column">
        <div class="subtitle" v-translate>De la diffusion – et donc du visionnage – en pair-à-pair</div>

        <img :src="buildImgUrl('peertube-p2p.png')" alt="PeerTube P2P illustration"/>

        <div class="citation">
          <div class="left-bar"></div>

          <div class="text" v-translate>
            Le logiciel PeerTube peut au besoin utiliser un protocole pair-à-pair (P2P) pour diffuser des vidéos très regardées par
            les internautes (vidéos virales), ce qui permet d'<strong>alléger la charge des sites web qui les hébergent.</strong>
          </div>
        </div>

        <p v-translate>
          Ainsi, quand vous visionnez une vidéo, votre ordinateur participe à sa diffusion. Si beaucoup de personnes regardent la même vidéo
          au même moment, leur navigateur envoie automatiquement des bouts de la vidéo aux autres spectateur⋅ices.
          Cela permet de <strong>ne pas surexploiter les ressources du serveur</strong> : les flux se répartissent, le réseau est optimisé.
        </p>

        <p v-translate>
          Mine de rien, avant cette diffusion en pair-à-pair, les vidéastes à succès (ou les vidéos qui font le buzz) étaient condamnés
          à s’héberger chez un géant du web dont l’infrastructure peut encaisser des milliers de vues simultanées… Ou à payer très cher un
          hébergement de vidéo indépendant afin qu’il tienne la charge.
        </p>
      </div>

      <div class="you-play">
        <div class="one-column">
          <div class="subtitle" v-translate>À vous de jouer !</div>

          <img :src="buildImgUrl('peertube-you-play.png')" alt="PeerTube you play illustration"/>
        </div>

        <div class="buttons-row">
          <button class="jpt-button">
            <span v-translate>Explorer les contenus</span>
          </button>

          <div>
            <button class="jpt-button">
              <span v-translate>Créer un compte</span>
            </button>
            <div class="jpt-button-legend" v-translate>
              Pour profiter de toutes les fonctionnalités : historique, abonnements, listes de lectures, notifications...
            </div>
          </div>

        </div>
      </div>

      <div class="behind-peertube one-column">
        <div class="subtitle" v-translate>Qui est derrière PeerTube ?</div>

        <img class="framasoft-logo" :src="buildImgUrl('framasoft-big-logo.png')" alt="Framasoft logo"/>

        <p v-translate>
          PeerTube est <strong>un logiciel libre gratuit financé par une association</strong> française à but non lucratif : Framasoft.
        </p>

        <p v-translate>
          Créée en 2004, l'association se consacre désormais à <strong>l’éducation populaire aux enjeux du numérique.</strong>
          Notre petite structure (moins de 40 membres, moins de 10 salarié·e·s) est connue pour avoir réalisé le projet Dégooglisons
          Internet,
          proposant 34 outils en ligne éthiques et alternatifs. Reconnue d’intérêt général, notre association est
          <strong>financée à plus de 90% par vos dons</strong>, déductibles des impôts pour les contribuables français·es.
        </p>

        <p v-translate>
          Suite au financement participatif lancé entre mars et juillet 2018, <strong>Framasoft a pu financer l'emploi du développeur
          principal de PeerTube.</strong> Ainsi, après une version bêta en mars 2018, la version 1 est sortie en novembre 2018.
          Depuis, plusieurs versions intermédiaires ont apporté de nombreuses fonctionnalités. Plusieurs collectifs ont déjà monté
          des hébergements PeerTube, créant ainsi les bases de la fédération.
        </p>

        <p>
          <strong v-translate>
            Plus ce logiciel sera utilisé et soutenu, plus des personnes l’utiliseront et y contribueront, et plus vite il évoluera
            vers une alternative concrète aux plateformes telles que YouTube.
          </strong>
        </p>

        <button class="jpt-button">
          <span v-translate>Soutenir Framasoft</span>
        </button>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
  .buttons-row {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    button {
      width: 330px;
      height: 50px;
    }
  }

  .jpt-button-legend {
    margin-top: 5px;
    max-width: 330px;
    font-size: 13px;
    text-align: center;
  }

  .presentation {
    .first-row {
      display: flex;
      align-items: center;
      padding: 70px;
      margin: auto;

      .brand {
        height: 47px;
      }

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

      & > img,
      & > div {
        flex-basis: 100%;
      }

      img {
        margin-right: 30px;
      }
    }
  }

  .you-are-a-video-maker {
    .discover-instances {
      min-width: 420px;
      height: 50px;
      margin: 50px 0;
    }
  }

  .you-play {
    .buttons-row {
      margin-top: 60px;
    }
  }

  .behind-peertube {
    .framasoft-logo {
      margin: 100px 0;
    }

    .jpt-button {
      height: 50px;
      min-width: 420px;
      margin: 60px 0;
      font-size: 22px;
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
          tags: ['tag', 'tag2', 'tag3'],
          description: 'Nothing to Hide (2017) est un film documentaire franco-allemand de Marc Meillassoux et Mihaela Gladovic, qui s\'intéresse aux effets de la surveillance de masse sur les individus et la société. Proposant un regard critique à propos des lois sur le renseignement mises en place par de nombreux États ces dernières années, le film nous rappelle à quel point le débat sur l’usage des données personnelles est actuel et questionne les fondements de nos démocraties.'
        }
      ]
    })
  }
</script>
