<template>
  <section>
    <b-container
      id="more"
      class="ombre"
    >
      <b-row>
        <b-col cols="12">
          <h3 class="section-title mt-5">
            <div v-translate>
              Pourquoi une collecte perlée&nbsp;?
            </div>
            <div class="border-title"></div>
          </h3>
        </b-col>
        <b-col lg="4">

          <p v-translate>
            À l’heure ou personne ne sait de quoi l’avenir sera fait, il ne nous
            semblait pas décent de faire une campagne de crowdfunding menaçant
            de ne pas faire de notre mieux sur PeerTube si nous ne récoltions
            pas les sommes nécessaires.
          </p>

          <p v-translate>
            Nous croyons en l’utilité publique de PeerTube, à tel point que nous
            nous engageons à travailler six mois pour concrétiser cette v3,
            même si c’est sur nos fonds propres (ce que <a
            href="https://framablog.org/2019/11/12/peertube-met-les-bouchees-doubles-pour-emanciper-vos-videos-de-youtube/">
            nous avions déjà fait pour la v2</a>).
          </p>

          <p v-translate>
            Nous espérons malgré tout qu’en partageant le plus largement cette
            feuille de route, certain·es d’entre vous nous soutiendront dans
            notre démarche par un don qui nous permettra de financer ce travail.
          </p>
        </b-col>

        <b-col lg="8">
          <b-card
            v-for="(palier, i) in stepsContent" :key="i"
            v-show="i === activeStep"
            class="mt-0"
          >
            <b-card-body>
              <h4>
                <span
                  v-translate
                  class="right-space"
                >
                  Plus de détails sur
                </span>
                <b-dropdown
                  right
                  :text="`l’étape ${i+1}`"
                  variant="outline-secondary"
                >
                  <b-dropdown-item
                    v-for="(step, j) in steps"
                    :key="j"
                    @click="activeStep = j"
                  >
                    l’étape {{ j+1 }}
                  </b-dropdown-item>
                </b-dropdown>
              </h4>

              <p v-html="stepsContent[i]"></p>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style lang="scss">
  @import '../../scss/_variables.scss';

  #more {
    padding-top: 0;

    .card {
      border: 3px solid transparent;
      border-image: linear-gradient(to left bottom, $one, #fff 15%, #fff 85%, $one) 1;
      margin: 30px auto;
      background: linear-gradient(to bottom right, #fff, lighten($one, 15%));

      h4:after {
        content: " ";
        border-bottom: 5px solid $one;
        display: block;
        max-width: 60px;
        margin: 10px 0 20px;
      }

      &:nth-of-type(2) {
        border-image: linear-gradient(to left bottom, $two, #fff 15%, #fff 85%, $two) 1;
        background: linear-gradient(to bottom right, #fff, lighten($two, 15%));

        h4:after {
          border-bottom: 5px solid $two;
        }
      }

      &:nth-of-type(3) {
        border-image: linear-gradient(to left bottom, $three, #fff 15%, #fff 85%, $three) 1;
        background: linear-gradient(to bottom right, #fff, lighten($three, 15%));

        h4:after {
          border-bottom: 5px solid $three;
        }
      }

      &:nth-of-type(4) {
        border-image: linear-gradient(to left bottom, $four, #fff 15%, #fff 85%, $four) 1;
        background: linear-gradient(to bottom right, #fff, lighten($four, 15%));

        h4:after {
          border-bottom: 5px solid $four;
        }
      }
    }

    .donut > div,
    .legend > ul {
      margin: 0 auto;
      display: inline-block;
    }
  }
</style>

<script>
  import {
    BDropdown,
    BCard,
    BCardBody,
    BRow,
    BContainer,
    BCol,
    BDropdownItem
  } from 'bootstrap-vue'

  export default {
    components: {
      BDropdown,
      BDropdownItem,
      BCard,
      BCardBody,
      BRow,
      BContainer,
      BCol
    },
    props: {
      steps: {
        type: Array,
        required: true
      },
      active: {
        type: Number,
        required: true
      }
    },
    data: function () {
      return {
        activeStep: this.active,
        stepsContent: [
          this.$gettext(`
            <p>Lorsqu’on recherche des vidéos sur une instance PeerTube aujourd’hui,
            il est difficile d’y <strong>trouver du contenu qui n’est pas dans
            la bulle de fédération</strong> de cette instance.
            Nous allons créer <strong>un serveur indexant la globalité des
            vidéos</strong> et des chaînes de toutes les instances PeerTube qui
            sont inscrites sur <a href="https://instances.joinpeertube.org/">l’annuaire
            public</a>.</p>
            <p>Le code de ce moteur d’indexation sera libre, afin que quiconque
            puisse héberger le sien en fixant ses propres règles d’admissibilité.
            Chaque administrateur d’instance PeerTube pourra choisir
            d’<strong>utiliser un de ces moteurs d’indexation pour la barre de
            recherche</strong> de son instance.</p>
            <p>Par ailleurs, <strong>les messages d’information</strong>
            permettront aux administrateurs d’une instance d’afficher une
            information aux personnes qui la visitent.</p>
          `),
          this.$gettext(`
            <p>Bien que chaque nouvelle version de PeerTube ait apporté <a
            href="https://joinpeertube.org/faq#peertube-developers-did-not-add-moderation-tools">de
            nouvelles fonctionnalités de modération</a>,
            il reste encore beaucoup à faire pour <strong>faciliter la modération</strong> des
            contenus et des comptes dans la fédiverse.
            Voilà pourquoi nous voulons <strong>consacrer un mois de développement à
            de nouveaux outils de modération</strong>.</p>
            <p>La liste des fonctionnalités à développer ou à améliorer est longue :
            suivi des signalements, historique de modération, modération des
            commentaires, rapports de modération lié à un compte, retour des
            actions engagées (ou non) suite à un signalement, <strong>lutte contre les
            spams</strong>, partage de listes noires d’instances, de comptes, de contenus…</p>
            <p>Cette liste se construit <a href="https://github.com/Chocobozzz/PeerTube/labels/Component%3A%20Moderation%20%3Agodmode%3A">
            <strong>en collaboration avec la communauté</strong></a>,
            et c’est à l’écoute de ces besoins que nous essaierons de prioriser
            les outils de modération développés durant ce mois.</p>
          `),
          this.$gettext(`
            <p>S’il est facile d’intégrer une vidéo PeerTube sur un site web ou dans des médias sociaux,
            on ne peut pas en dire autant des listes de lectures.
            Nous voulons <strong>retravailler l’intégration et l’affichage des
            playlists</strong> sur les sites tiers.</p>
            <p>Nous souhaitons aussi permettre l’<strong>affichage de deux extraits d’une
            même vidéo dans une liste de lecture</strong>. Associée à la possibilité d’extraire
            un bout de vidéo précis dans une liste de lecture, <strong>les playlists
            pourront ainsi devenir des outils de remix</strong> très utiles, par exemple
            pour des usages pédagogiques.</p>
            <p>Les plugins permettent à quiconque de contribuer, en codant de
            nouvelles fonctionnalités à PeerTube, pour les proposer aux
            administrateurs d’instances.
            Nous voulons <strong>améliorer le système de plugins</strong> pour offrir plus de
            possibilités d’interaction.</p>
            <p>Afin de se mettre à leur place, nous allons nous-mêmes en créer
            quelques-uns, et par exemple <strong>développer un plugin permettant
            d’afficher des infos par dessus une vidéo</strong> pour l’annoter à un moment
            précis du visionnage.</p>
            <p>Nous voulons enfin travailler à <strong>sélectionner un ensemble de plugins
            pour les mettre en valeur</strong> sur joinpeertube.org.</p>
          `),
          this.$gettext(`
            <p>Le plus gros défi du direct sur PeerTube, c’est de <strong>faire en sorte
            que le live soit diffusé en pair-à-pair</strong>. Après de nombreux tests,
            nous pensons que c’est possible.</p>
            <p>En utilisant la technologie HLS intégrée au lecteur vidéo de PeerTube
            depuis la version 1.3, nous pensons pouvoir <strong>créer un direct avec
            une minute de décalage entre vidéastes et spectateurs</strong>.
            Nous voulons poser les fondations technologiques de cette diffusion
            en direct : <strong>cette première version de PeerTube Live sera
            donc minimaliste</strong>.
            Il n’y aura pas d’outils de captation de flux, ni de tchat intégré,
            ni d’émoticônes pour réagir…</p>
            <p>Cependant, nous voulons faire en sorte qu’<strong>une fois le live fini,
            la vidéo sera traitée et ajoutée à la chaîne du vidéaste</strong>, ce en
            respectant les impératifs pour que tout soit correctement fédéré.</p>
          `)
        ]
      }
    }
  }
</script>
