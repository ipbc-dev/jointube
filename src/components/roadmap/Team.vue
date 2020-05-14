<template>
  <section>
    <b-container class="ombre">
      <b-row id="team">
        <b-col cols="12">
          <h3 class="section-title mt-5">
            <div v-translate>
              Qui sommes nous ?
            </div>
            <div class="border-title"></div>
          </h3>
        </b-col>
        <b-col lg="8">
          <p class="text-center">
            <img
              :src="buildImgUrl('roadmap/biglogo-notxt.png')"
              class="rounded-circle border w-50"
            />
          </p>

          <p v-translate>
            Framasoft (c’est nous&nbsp;!) est une association à but non lucratif créée
            en 2004, qui se consacre à <b>l’éducation populaire aux enjeux du numérique</b>.
            Notre petite association (moins de 40 membres, moins de 10 salarié·e·s) est
            connue pour avoir réalisé le projet <a href="https://degooglisons-internet.org">Dégooglisons Internet</a>,
            proposant 34 outils en ligne éthiques et alternatifs.
          </p>

          <p v-translate>
            Notre association crée de nombreux outils numériques (services, cours et
            ressources, logiciels) pour équiper les personnes qui font la société de contribution.
            Parmi ces outils, nous portons le développement des logiciels fédérés
            PeerTube et Mobilizon (une future alternative aux événements, pages et
            groupes Facebook).
          </p>

          <p v-translate>
            Reconnue d’intérêt général, notre association est financée à plus de 95&nbsp;%
            par les dons des personnes qui nous soutiennent et nous font confiance.
          </p>

          <p>
            <a href="https://framasoft.org" v-translate>
              En savoir plus sur Framasoft
            </a>
          </p>
        </b-col>
        <b-col lg="4">
          <h4 v-translate>Designer invitée</h4>
          <p v-translate>
            Tout au long de ce développement, nous travaillerons à améliorer l'expérience
            d’utilisation et l'interface de PeerTube pour offrir plus de clarté et
            de pouvoir à chaque niveau d'utilisation.
          </p>

          <b-card>
            <b-card-body>
              <h4>Marie-Cécile Godwin Paccard</h4>

              <img
                :src="buildImgUrl('roadmap/mcgp.jpg')"
                class="rounded-circle d-block mx-auto"
                alt=""
              />
              <p v-translate>
                « Designer indépendante, chercheuse UX pour comprendre les usages en
                profondeur et concevoir des outils utilisables, éthiques et inclusifs. »
              </p>
              <p>
                <a href="https://mcgodwin.com">mcgodwin.com</a>
              </p>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style lang="scss">
  #team {
    .card {
      margin-bottom: 30px;
      border-radius: 0;

      img {
        max-width: 128px;
        margin-right: 20px;
      }
    }

    .card-body > .card-body {
      padding: 10px;
    }
  }
</style>

<script>
  import {
    BCard,
    BCardBody,
    BContainer,
    BCol,
    BRow
  } from 'bootstrap-vue'

  export default {
    components: {
      BCard,
      BCardBody,
      BContainer,
      BCol,
      BRow
    }
  }
</script>
