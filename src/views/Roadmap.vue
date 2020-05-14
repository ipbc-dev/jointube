<template>
  <div>
    <main id="roadmap">
      <section class="presentation d-none d-sm-flex">
        <b-container>
          <b-row
            align-v="center"
            align-h="around"
          >
            <b-col md="4" >
              <h2
                v-translate
                class="text-secondary"
              >
                Pavons la route de PeerTube pour avoir du Live dès la v3&nbsp;!
              </h2>
            </b-col>

            <!-- Right column -->
            <b-col
              id="funding"
              md="5"
            >
              <p v-translate>
                Soutenez le développement de PeerTube !
                Dons, partages, contributions : nous aurons besoin de toute
                l’aide disponible pour remplir cette feuille de route.
              </p>

              <div v-if="hours >= 0">
                <p>
                  <span
                    id="donations"
                    class="h2"
                    v-text="formatCurrency(progress.total)"
                  ></span>
                  <br />
                  <span
                    class="text-muted"
                    v-translate
                  >
                    raised on the way to {{ formatCurrency(progress.max) }}
                  </span>
                </p>
              </div>

              <div v-else>
                <h2 v-translate>
                  The fund raising is over!<br />Thank you :)
                </h2>
              </div>

              <div>
                <b-progress :max="100"
                  variant="info"
                  class="h2"
                >
                  <b-progress-bar :value="Math.round(this.progress.total * 100 / steps[2])">
                    <b>{{ Math.round(this.progress.total * 100 / steps[2]) }}%</b>
                  </b-progress-bar>
                </b-progress>
                <div class="progress-meter">
                  <div
                    class="meter meter-right"
                    style="width: 33.33%;"
                  >
                    <span class="meter-text">{{ formatCurrency(steps[3]) }}</span>
                  </div>
                  <div
                    class="meter meter-right"
                    style="width: 33.33%;"
                  >
                    <!--<span class="meter-text">{{ formatCurrency(steps[2]) }}</span>-->
                  </div>
                  <div
                    class="meter meter-right"
                    style="width: 16.66%;"
                  >
                    <!--<span class="meter-text">{{ formatCurrency(steps[1]) }}</span>-->
                  </div>
                  <div
                    class="meter meter-right"
                    style="width: 16.66%;"
                  >
                    <!--<span class="meter-text">{{ formatCurrency(steps[0]) }}</span>-->
                  </div>
                </div>
              </div>

              <b-row>
                <div class="col-sm-5">
                  <h3 id="donators">{{ count }}</h3>
                  <span
                    class="text-muted"
                    v-translate
                  >
                    contributors
                  </span>
                </div>

                <div
                  v-if="hours >= 0"
                  class="col-sm-7"
                >
                  <h3
                    v-if="days > 1"
                    id="days"
                    v-translate
                  >
                    {{ days }} days
                  </h3>

                  <h3
                    v-else
                    id="days"
                    v-translate
                  >
                    {{ hours }} hours
                  </h3>

                  <span
                    class="text-muted"
                    v-translate
                  >
                    to go
                  </span>
                </div>
                <div v-else>
                  <h3 id="donations">
                    {{ formatCurrency(progress.total) }}
                  </h3>
                  <br />
                  <span
                    class="text-muted"
                    v-translate
                  >
                    raised in 60 days
                  </span>
                </div>
              </b-row>

              <p
                v-if="hours < 0"
                class="text-muted"
                v-translate
              >
                The fund raising for Mobilizon is complete, but you can still support
                this project as well as all other Framasoft’s projects in making a donation
                to the association.
              </p>

              <b-button
                block size="lg"
                variant="primary mb-0"
                href="#support"
                rel="noopener noreferrer"
                v-translate
              >
                Contribute
              </b-button>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <section>
        <b-container class="ombre">
          <b-row align-h="around">
            <!-- Main column -->
            <!-- Story -->
            <b-col
              id="story"
              lg="9"
            >
              <div id="step">
                <h3 class="section-title mt-5">
                  <div v-translate>
                    Une feuille de route en 4 étapes
                  </div>
                  <div class="border-title"></div>
                </h3>
                <p v-translate>
                  De juin à novembre 2020, Framasoft va développer de nombreuses
                  améliorations et fonctionnalités pour PeerTube.
                  Nous avons découpé cette route en 4 étapes principales,
                  chacune avec son planning et son coût, qui mènent vers l’ajout
                  de la diffusion de vidéos en direct et en pair-à-pair pour la
                  v3 de PeerTube.
                </p>
                <p v-translate>
                  Ces développements sont financés grâce aux dons reçus par Framasoft&nbsp;:
                  nous ouvrons donc une collecte perlée sur ces six prochains
                  mois de développement, pour que vous puissiez nous soutenir
                  dans nos efforts.
                </p>

                <div
                  v-for="(file, index) in ['one', 'two', 'three', 'four']"
                  :key="index"
                >
                  <b-card
                    no-body
                    class="overflow-hidden"
                  >
                    <b-row no-gutters>
                      <b-col
                        md="6"
                        :order-md="(index % 2) * 12"
                      >
                        <h4 class="text-center font-weight-bolder">
                          <span v-html="milestonesContent[file].title"></span>
                          <br />
                          <i v-if="index < 3">{{ formatCurrency(steps[index]) }}</i>
                        </h4>

                        <b-card-img
                          :src="buildImgUrl(`roadmap/step-${file}.png`)"
                          class="rounded-0"
                        ></b-card-img>
                      </b-col>
                      <b-col md="6">
                        <b-card-body>
                          <b-card-text>
                            <h5>
                              <img
                                :src="buildImgUrl(`brand-small.png`)"
                                alt="Peertube"
                              />
                              <br />
                              <span
                                class="font-weight-bolder text-secondary"
                                v-html="milestonesContent[file].subtitle"
                              ></span>
                            </h5>
                            <ul>
                              <li
                                v-for="(content, index) in milestonesContent[file].ul"
                                :key="index"
                                v-html="content"
                              ></li>
                            </ul>
                          </b-card-text>
                        </b-card-body>
                      </b-col>
                    </b-row>
                  </b-card>
                </div>
                <!-- <p class="text-italic text-center">
                  <router-link to="/news">
                    <span v-translate>Learn more about those milestones</span>
                  </router-link>
                </p> -->
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <section class="quote">
        <b-container>
          <b-row>
            <b-col>
              <blockquote class="blockquote text-right">
                <span v-translate>
                  Un « autre » monde ne pourra pas se construire avec les outils
                  du capitalisme de surveillance.
                  <br />
                  [Clarté dans la fédération - pas clair ;) ], partage des pouvoirs
                  et responsabilités, ouverture aux contributions,
                  diffusion en direct et en pair-à-pair…
                  La v3 de PeerTube vise à consolider cet outil comme une
                  alternative de plus en plus conviviale aux Google-YouTube et
                  autres Facebook-Live.
                </span>

                <footer class="blockquote-footer">
                  <a
                    href="https://framablog.org/#2020/05/26"
                    v-translate
                  >
                    Lire la note d’intention de Framasoft sur le Framablog
                  </a>
                </footer>
              </blockquote>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <team />

      <allocation
        :steps="steps"
        :active="activeStep"
      />

      <section id="action">
        <b-container class="ombre">
          <b-row align-h="center">
            <b-col
              id="support"
              lg="9"
            >
              <h3 class="section-title mt-5">
                <div v-translate>
                  Contribute
                </div>
                <div class="border-title"></div>
              </h3>
              <donate-form />
            </b-col>
            <b-col lg="9">
              <!-- Share & follow -->
              <h3 class="section-title mt-5 mb-4">
                <div v-translate>
                  Suivre et relayer
                </div>
                <div class="border-title"></div>
              </h3>
              <ShareAndFollow/>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </main>
  </div>
</template>

<style lang="scss">
  @import '../scss/_variables.scss';
  @import '../../node_modules/fork-awesome/css/fork-awesome.min.css';

  /* Sections background */
  body.in-roadmap {

    #app.container {
      width: 100%;
      max-width: 100%;
      padding: 0;

      main {
        box-shadow: none;
        border: none;
      }
    }

    #main-header {
      background: #fff;

      .container {
        max-width: 1024px;

        nav {
          box-shadow: none;
        }
      }
    }

    p {
      margin-bottom: 15px;
      font-size: 18px;
    }
  }

  #roadmap {
    padding: 0;
    background: transparent;

    .container{
      &.ombre { /* = main on other pages */
        margin: 30px auto;
        padding: 0px 70px 30px;
        background-color: #fff;
        -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.35);
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.35);
        border: solid 1px #d9d9d9;
      }
      max-width: 1024px;
    }

    #story {
      padding: 30px;
    }

    #step {
      h4 {
        color: #413f43;
        margin-bottom: 0;
        margin-top: 1.3rem;
        font-size: 1.8rem;
        line-height: 2.5rem;
      }

      h5 {
        line-height: 2.5rem;
        padding-left: 25px;
      }

      > div {
        .card {
          border: 2px solid transparent;
          margin: 20px auto;
          min-height: 290px;

          ul {
            list-style-type: "\25B8";
            margin-top: 1rem;
            padding-left: 15px;
            margin-left: auto;
            margin-right: auto;
            max-width: 220px;
            li {
              padding-left: 5px;
            }
          }
        }

        .col-md-6 > img {
          padding: 15px 20px;
        }

        @media (max-width: 768px) {
          .card {
            border: 2px solid transparent;
            margin: 20px auto;
            background: #fff !important;

            h5 {
              text-align: left !important;
            }
          }
        }

        /* Colored cards  */
        &:nth-of-type(1) {
          .card {
            border-image: linear-gradient(to left bottom, #fff 85%, $one) 1;
            background: repeating-linear-gradient(-85deg,
              $one, $one calc(50% - 1px), #fff 50%, #fff 100%);

            @media (max-width: 768px) {
              background: #fff !important;
              border-image: linear-gradient(to top, #fff 85%, $one) 1 !important;
              .row > div:last-child { background: $one; }
            }
          }
        }

        &:nth-of-type(2) {
          .card {
            border-image: linear-gradient(to right bottom, #fff 85%, $two) 1;
            background: repeating-linear-gradient(85deg,
              $two, $two calc(50% - 1px), #fff 50%, #fff 100%);

            @media (max-width: 768px) {
              background: #fff !important;
              border-image: linear-gradient(to top, #fff 85%, $two) 1 !important;
              .row > div:last-child { background: $two; }
            }
          }
        }

        &:nth-of-type(3) {
          .card {
            border-image: linear-gradient(to left bottom, #fff 85%, $three) 1;
            background: repeating-linear-gradient(-85deg,
              $three, $three calc(50% - 1px), #fff 50%, #fff 100%);

            @media (max-width: 768px) {
              background: #fff !important;
              border-image: linear-gradient(to top, #fff 85%, $three) 1 !important;
              .row > div:last-child { background: $three; }
            }
          }
        }

        &:nth-of-type(4) {
          .card {
            border-image: linear-gradient(to right bottom, #fff 85%, $four) 1;
            background: repeating-linear-gradient(85deg,
              $four, $four calc(50% - 1px), #fff 50%, #fff 100%);

            @media (max-width: 768px) {
              background: #fff !important;
              border-image: linear-gradient(to top, #fff 85%, $four) 1 !important;
              .row > div:last-child { background: $four; }
            }
          }
        }
      }
    }

    .quote {
      &, .container {
        background: #70b9c2;
        color: #454542;
      }

      .container {
        padding: 30px 70px;
      }

      span.text-center {
        display: block;
      }

      blockquote {
        margin: 0;
      }
    }

    .contribute {
      .list-group-item {
        p {
          font-size: 0.9em;
        }
      }
    }

    .faq h2 {
      margin: 40px 0px;
    }

    .thumbnail img {
      margin: 0;
    }

    .btn {
      border-radius: 0;
    }

    .presentation {
      background: url('../../public/img/roadmap/presentation.jpg') top center;
      background-size: cover;
      min-height: 40em;
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      justify-content: center;

      .container {
        align-self: center;
        background: transparent;

        .col-md-4 {
          background: rgba($color: #fff, $alpha: 0.8);
          border-radius: 4px;
          padding: 20px 30px;
          @supports ( (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)) ) {
            backdrop-filter: blur(5px);
          }
          top: -100px;
        }

        h2 {
          padding: 0 5px;
          font-size: 1.7rem;
        }
      }
    }

    #funding {
      padding: 30px;
      border-top: 5px solid #f67e08;
      background: #fff;

      .progress {
        border-radius: 0;
      }

      .progress-bar {
        color: rgba(0, 0, 0, 0.7);
      }

      .progress-meter {
        min-height: 27px;
        margin-bottom: 15px;
        margin-top: -24px;
      }

      .progress-meter > .meter {
        position: relative;
        float: left;
        min-height: 27px;
        border-width: 0px;
        border-style: solid;
        border-color: rgba(221, 221, 221, 0.5);
      }

      .progress-meter > .meter-right {
        float: right;
        border-right-width: 2px;
      }

      .progress-meter > .meter-right:last-child {
        border-left-width: 0px;
      }

      .progress-meter > .meter > .meter-text {
        position: absolute;
        display: inline-block;
        bottom: -5px;
        width: 100%;
        font-size: 0.8em;
        color: #aaa;
        text-align: right;
        padding-right: 2px;
        line-height: 16px;
      }

      .btn {
        border-radius: 1px;
      }

      .btn-lg {
        padding: 1rem;
        margin: 20px 0 30px;
      }

      .input-group {
        margin-bottom: 20px;

        .input-group-text,
        .form-control {
          border: 2px solid #eee;
          border-radius: 0;
          height: 50px;
        }

        .input-group-text {
          background: #fff;
        }

        .input-group-prepend {
          margin-right: -2px;
        }
      }

      .alert a {
        color: #3f3d56;
        font-weight: bold;
      }
    }

    /* @media (max-width: 992px) {
      #funding {
        margin-bottom: -520px;
      }
    }

    @media (max-width: 576px) {
      #funding {
        margin-top: -20px;
        border-top: none;
        top: auto;
        margin-bottom: 0px;
      }
    } */

    .quote {
      p {
        padding-top: 10px;
        text-align: left;
      }

      a {
        color: #454542;
      }

      text-align: center;

      button.btn {
        font-size: 1.3em;
        width: 14em;
        word-break: break-word;
        white-space: normal;

        &::first-line {
          font-size: 1.5em;
        }
      }

      blockquote {
        padding: 0px 15px;

        span {
          border-right: 0.2em solid #333;
          position: relative;
          display: block;
          padding-right: 1em;

          &:before, &:after {
            content: '« ';
            font-family: 'Sanchez';
            color: #333;
          }

          &:after {
            content: ' »';
          }
        }
      }
    }
  }
</style>

<script>
  import {
    BButton,
    BCard,
    BCardBody,
    BCardImg,
    BCardText,
    BCol,
    BContainer,
    BProgress,
    BProgressBar,
    BRow
  } from 'bootstrap-vue'

  import ShareAndFollow from '../components/roadmap/ShareAndFollow.vue'
  import Allocation from '../components/roadmap/Allocation.vue'
  import DonateForm from '../components/roadmap/DonateForm.vue'
  import Team from '../components/roadmap/Team.vue'

  export default {
    components: {
      ShareAndFollow,
      Allocation,
      DonateForm,
      Team,
      BContainer,
      BRow,
      BCol,
      BCardImg,
      BCard,
      BCardBody,
      BCardText,
      BButton,
      BProgress,
      BProgressBar
    },
    created () {
      fetch('https://joinmobilizon.org/2019-mbz.json')
        .then(response => response.json())
        .then((data) => {
          this.list = data.list
          this.updateData()
        }).catch((err) => console.error('Unable to load donations', err))
    },
    mounted () {
      document.body.classList.add('in-roadmap')
    },
    destroyed () {
      document.body.classList.remove('in-roadmap')
    },
    data () {
      return {
        start: '2020-05-26',
        end: '2020-11-26',
        days: 0,
        hours: 0,
        progress: {
          total: 0,
          max: 60000
        },
        steps: [ 10000, 20000, 40000, 60000 ],
        activeStep: 0,
        list: [],
        count: 0,
        amount: 10,
        milestonesContent: {
          one: {
            title: this.$gettext('Étape 1'),
            subtitle: this.$gettext('Recherche globale'),
            ul: [
              this.$gettext('Recherche dans le fédiverse'),
              this.$gettext('Possibilité de créer des index'),
              this.$gettext('Message d’information'),
              this.$gettext('Travail de fond UX/UI')
            ]
          },
          two: {
            title: this.$gettext('Étape 2'),
            subtitle: this.$gettext('Outils de modération'),
            ul: [
              this.$gettext('Suivi des signalements'),
              this.$gettext('Faciliter la modération'),
              this.$gettext('Partage de listes noires / blanches (spams)'),
              this.$gettext('Travail de fond UX/UI')
            ]
          },
          three: {
            title: this.$gettext('Étape 3'),
            subtitle: this.$gettext('Playlist et Plugins'),
            ul: [
              this.$gettext('Partage des playlists sur le web'),
              this.$gettext('Plugins (annotations, etc.)'),
              this.$gettext('Mise en valeur des plugins'),
              this.$gettext('Travail de fond UX/UI')
            ]
          },
          four: {
            title: this.$gettext('Étape 4'),
            subtitle: this.$gettext('Live streaming'),
            ul: [
              this.$gettext('En pair à pair (30s - 1mn lag)'),
              this.$gettext('Sans tchat, ni gif, ni 💖 😠 👍'),
              this.$gettext('Publication après le live'),
              this.$gettext('Travail de fond UX/UI')
            ]
          }
        }
      }
    },

    methods: {
      isBefore (date) {
        return new Date(new Date().toDateString()) < new Date(date)
      },

      isAfter (date) {
        return new Date(new Date().toDateString()) > new Date(date)
      },

      formatDate (value) {
        const options = {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }

        return new Intl.DateTimeFormat(this.getShortLocale(), options).format(new Date(value))
      },

      updateData () {
        this.days = Math.round(((new Date(this.end)).getTime() - (new Date()).getTime()) / (1000 * 60 * 60 * 24))
        this.hours = Math.round(((new Date(this.end)).getTime() - (new Date()).getTime()) / (1000 * 60 * 60))
        // Fill donators

        this.count = this.list.length

        for (let i = 0; i < this.list.length; i += 1) {
          if (!this.list[i].monthly && new Date(this.start) < new Date(this.list[i].date.replace(/ /g, 'T'))) {
            this.progress.total += this.list[i].don
          }
        }
      }
    }
  }
</script>
