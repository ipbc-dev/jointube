<template>
  <main id="home">

    <section class="presentation">
      <div class="first-row">
        <img class="brand" :src="buildImgUrl('brand.png')" alt="PeerTube"/>

        <div class="description" v-translate>A free software to take back control of your videos</div>
      </div>

      <!-- <img class="peertube-mascot" :src="buildImgUrl(mascotPaths[currentMascot])" @click="switchMascot()" alt=""> -->

      <div
        id="roadmapInfo"
        :class="`card mx-auto mt-4 ${['one', 'two', 'three', 'four'][Math.random() * 4 | 0]}`"
      >
        <div class="row no-gutters">
          <div class="col-sm-5 d-flex">
            <img
              v-for="file in ['one', 'two', 'three', 'four']"
              :key="file"
              alt=""
              class="card-img align-self-center"
              :src="buildImgUrl(`roadmap/step-${file}.png`)"
            />
          </div>
          <div class="col-sm-7">
            <div class="card-body">
              <p
                class="h4 card-title"
                v-translate
              >
                Let’s pave the way towards PeerTube's v3!
              </p>
              <p
                class="card-text"
                v-translate
              >
                Check out PeerTube’s new roadmap for the development of many features
                including live and peer-to-peer video streaming.
                Support this v3 scheduled for late 2020.
              </p>
              <p class="card-text text-right">
                <router-link to="roadmap" class="bottom-link">
                  <translate>More information</translate>
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="marketing" v-translate>
        PeerTube, developed by Framasoft, is the free and decentralized alternative to video platforms,
        providing you over 200,000 videos published by 30,000 users and viewed over 10 million times
      </div>

      <div class="buttons-row">
        <a href="#what-is-peertube" class="jpt-button jpt-big-button-icon">
          <icon-logo></icon-logo>

          <span v-translate>What is PeerTube?</span>
        </a>

        <router-link :to="{ path: '/instances', hash: 'instances-list' }" class="jpt-button jpt-big-button-icon instances-list">
          <icon-instance></icon-instance>

          <translate>See the instances list</translate>
        </router-link>
      </div>
    </section>

    <section class="content-selections">
      <div class="section-title">
        <div v-translate>Discover our content selection</div>
        <div class="border-title"></div>
      </div>

      <content-selections :sample-size-each="1"></content-selections>

      <div class="bottom-link-wrapper">
        <router-link :to="{ path: '/instances', hash: 'instances-list' }" class="bottom-link">
          <span class="text" v-translate>Discover PeerTube instances</span>
          <icon-right></icon-right>
        </router-link>
      </div>
    </section>

    <section id="what-is-peertube">
      <div class="section-title">
        <div>
          <!-- FIXME: add v-translate to the div, but it does not work with vue-gettext because of the bind src attribute -->
          <translate>What is</translate>
          <img class="brand-title" :src="buildImgUrl('brand.png')" alt="PeerTube"/>
          <translate>?</translate>
        </div>
        <div class="border-title"></div>
      </div>

      <div class="one-column">
        <div class="iframe-responsive">
          <iframe sandbox="allow-same-origin allow-scripts" v-bind:src="getIframeUrl()" frameborder="0" allowfullscreen></iframe>
        </div>

        <div>
          <div class="citation">
            <div class="left-bar"></div>

            <div class="text" v-translate>
              PeerTube aspires to be a <strong>decentralized and free/libre alternative</strong> to video broadcasting services.
            </div>
          </div>

          <p v-translate>
            Our aim is not to replace them, but rather to simultaneously offer something else, with different values.
          </p>
        </div>

        <img :src="buildImgUrl('peertube-screenshot.jpg')" alt=""/>
      </div>

      <div class="federation">
        <div class="subtitle">
          <translate>A federation of interconnected hosting services</translate>
          <div class="border-title"></div>
        </div>

        <div class="one-column">
          <img :src="buildImgUrl('peertube-federation-multiplicity.jpg')" alt=""/>

          <div>
            <div v-translate>PeerTube is not meant to become a huge platform that would centralize videos from all around the world.</div>

            <div class="citation">
              <div class="left-bar"></div>

              <div class="text" v-translate>
                Rather, it is <strong>a network of inter-connected small videos hosters</strong>.
              </div>
            </div>
          </div>

          <p v-translate>
            Anyone with a modicum of technical skills can host a PeerTube server, aka an instance.
            Each instance hosts its users and their videos.
            In this way, <strong>every instance is created, moderated and maintained independently by various administrators.</strong>
          </p>

          <div class="bottom-link-wrapper">
            <router-link :to="{ path: '/instances', hash: 'instances-list' }" class="bottom-link">
              <span class="text" v-translate>Discover PeerTube instances</span>
              <icon-right></icon-right>
            </router-link>
          </div>
        </div>

        <div class="one-column">
          <p v-translate>
            You can still watch from your account videos hosted by other instances though
            if the administrator of your instance had previously connected it with other instances.
          </p>

          <div class="citation">
            <div class="left-bar"></div>

            <div class="text" v-translate>This is just how a <strong>federation</strong> works!</div>
          </div>
        </div>

        <div class="one-column">
          <img :src="buildImgUrl('peertube-federation-2-instances.jpg')" alt=""/>

          <p v-translate>
            And there's more! PeerTube uses Activity Pub, a federating protocol that <strong>allows you to interact with other
            software</strong>, provided they also use this protocol. For example, PeerTube and Mastodon -a Twitter alternative- are connected:
            <strong>you can follow a PeerTube user from Mastodon</strong> (the latest videos from the PeerTube account you follow will appear
            in your feed), <strong>and even comment on a PeerTube-hosted video directly from your Mastodon's account.</strong>
          </p>
        </div>

        <!--        TODO: find interesting resource regarding federation-->
        <!--        <div class="bottom-link-wrapper">-->
        <!--          <a href="#" class="bottom-link">-->
        <!--            <span class="text" v-translate>Learn more about the federation</span>-->
        <!--            <icon-right></icon-right>-->
        <!--          </a>-->
        <!--        </div>-->
      </div>

      <div class="free-software">
        <div class="subtitle">
          <translate>An open-source, free/libre licence code</translate>
          <div class="border-title"></div>
        </div>

        <div class="one-column">
          <img :src="buildImgUrl('peertube-free-software.jpg')" alt=""/>

          <p v-translate>
            Mainstream online video broadcasting services make money off of your data by analyzing your interactions
            so that they can then bombard your with targeted advertising.
          </p>

          <div class="citation">
            <div class="left-bar"></div>

            <div class="text" v-translate>
              Peertube is not subject to any corporate monopoly, does not rely on ads and <strong>does not track you.</strong>
            </div>
          </div>

          <p v-translate>
            Most importantly, <strong>you are a person to PeerTube, not a product in need of profiling so as to be stuck in video
            loops.</strong>
            For example, PeerTube doesn't use any biased recommendation algorithms to keep you online for hours on end.
          </p>

          <p v-translate>
            All of this is made possible by Peertube's free/libre license (GNU-AGPL).
            Its code is a digital "common", that belongs to everybody, instead of a secret formula that belongs to Google
            (in the case of Youtube) or to Vivendi/Bolloré (Dailymotion).
            This free/libre license <strong>guarantees our fundamental freedoms as users and allows many contributors to offer evolutions
            and new features.</strong>
          </p>
        </div>

        <!--        TODO: find interesting resource regarding free softwares -->
        <!--        <div class="bottom-link-wrapper">-->
        <!--          <a href="#" class="bottom-link">-->
        <!--            <span class="text" v-translate>Learn more about free/libre software </span>-->
        <!--            <icon-right></icon-right>-->
        <!--          </a>-->
        <!--        </div>-->
      </div>

      <div id="you-are-a-video-maker">
        <div class="subtitle">
          <translate>Are you a video maker?</translate>
          <div class="border-title"></div>
        </div>

        <div class="one-column">
          <img :src="buildImgUrl('peertube-upload.jpg')" alt=""/>

          <div class="citation">
            <div class="left-bar"></div>

            <div class="text" v-translate>
              With PeerTube, choose <strong>your hosting company and the rules you believe in.</strong>
            </div>
          </div>

          <div v-translate>
            YouTube has clearly gone astray: its hoster, Google-Alphabet, can enforce its ContentID system (the infamous "Robocopyright")
            or its videos recommendation system, all of which appear to be as obscure as unfair.
          </div>

          <div class="citation">
            <div class="left-bar"></div>

            <div class="text" v-translate>
              Direct contact with a human-scale hoster allows for two things: you no longer are the client of a huge tech company,
              and <strong>you can nurture a special relationship with your hoster, who distributes your data.</strong>
            </div>
          </div>

          <div v-translate>
            With PeerTube, you get to choose your hosting provider according to their terms of use, such as their disk space limit per user,
            their moderation policy, who they chose to federate with... You are not speaking with a huge tech company, so you can
            talk it out in case of any issue, need, desire...
          </div>
        </div>

        <router-link :to="{ path: '/instances', hash: 'instances-list' }" class="jpt-button discover-instances">
          <translate>Browse/discover PeerTube instances</translate>
        </router-link>
      </div>

      <div class="p2p">
        <div class="subtitle">
          <translate>About peer-to-peer broadcasting and watching</translate>
          <div class="border-title"></div>
        </div>

        <div class="one-column">
          <img :src="buildImgUrl('peertube-p2p.jpg')" alt=""/>

          <div class="citation">
            <div class="left-bar"></div>

            <div class="text" v-translate>
              The PeerTube software can, whenever necessary, use a peer-to-peer protocol (P2P) to broadcast viral videos,
              <strong>lowering the load of their hosts.</strong>
            </div>
          </div>

          <p v-translate>
            In this way, when you watch a video, your computer contributes to its broadcast.
            If a lot of people are watching the same video at the same time, their browser automatically send smalls pieces of the
            video to the other viewers.
            <strong>The server resources are not over-exploited</strong>: the stream is split, the network optimized.
          </p>

          <p v-translate>
            It might not look like it, but thanks to peer-to-peer broadcasting, popular video makers and their videos are no longer
            forced to be hosted by big companies, whose infrastructure can stand thousands of views at the same time... or to pay for a
            robust but extremely expensive independent video host.
          </p>
        </div>
      </div>

      <div id="your-move">
        <div class="subtitle">
          <translate>Your move!</translate>
          <div class="border-title"></div>
        </div>

        <div class="one-column">
          <img :src="buildImgUrl('your-move.jpg')" alt=""/>
        </div>

        <div class="buttons-row explore-create-account">
          <router-link to="/content-selections" class="jpt-button">
            <span v-translate>Browse contents</span>
          </router-link>

          <div class="create-account-block">
            <router-link to="/instances" class="jpt-button">
              <span v-translate>Sign up</span>
            </router-link>
            <div class="jpt-button-legend" v-translate>
              Enjoy every feature: history, subscriptions, playlists, notifications...
            </div>
          </div>

        </div>
      </div>
    </section>

    <section id="behind-peertube">
      <div class="section-title">
        <div>
          <!-- FIXME: add v-translate to the div, but it does not work with vue-gettext because of the bind src attribute -->
          <translate>Who is behind</translate>
          <img class="brand-title" :src="buildImgUrl('brand.png')" alt="PeerTube"/>
          <translate>?</translate>
        </div>

        <div class="border-title"></div>
      </div>

      <div class="two-columns">
        <img class="framasoft-logo" :src="buildImgUrl('framasoft-big-logo.png')" alt=""/>

        <div>
          <p v-translate>
            Peertube is a <strong>free/libre software funded by a French non-profit organization</strong>: Framasoft
          </p>

          <p v-translate>
            Our organization started in 2004, and now devotes itself <strong>to popular education about digital technology issues.</strong>
            We are a small structure of less than 40 members and under 10 employees, well-known for the De-google-ify Internet project,
            when we offered 34 ethical and alternative online tools. As a public interest organization, <strong>over 90% of our funding
            comes from donations</strong> (tax deductible for French taxpayers).
          </p>

          <p v-translate>
            Thanks to our <a href="/hall-of-fame" target="_blank">crowdfunding (from March to July 2018)</a>,
            <strong>Framasoft were able to employ PeerTube's main developer.</strong>
            After a beta release in March 2018, release 1 came out in November 2018.
            Since then, several intermediary releases have brought many features along.
            Several collectives have already created PeerTube hosts, laying the foundation for the federation.
          </p>

          <p>
            <strong v-translate>
              The more people use, support, and contribute to PeerTube, the quicker it will become a concrete alternative to platforms like
              YouTube.
            </strong>
          </p>
        </div>
      </div>

      <a href="https://framasoft.org/#soutenir" target="_blank" rel="noopener noreferrer" class="jpt-button">
        <span v-translate>Donate to Framasoft</span>
      </a>
    </section>
  </main>
</template>

<style lang="scss">
  @import '../scss/_variables.scss';
  @import '../scss/_mixins.scss';

  #home {
    .buttons-row {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;

      .jpt-button {
        width: 330px;
        min-height: 50px;
        height: fit-content;
      }

      @media screen and (max-width: $responsive-screen) {
        padding: 0;

        .jpt-button {
          margin: 0 3px 0 0;
        }

        &.explore-create-account {
          flex-direction: column;

          .create-account-block {
            margin-top: 50px;
          }
        }
      }

      @media screen and (max-width: $small-screen) {
        .jpt-button {
          width: 100%;
        }
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
        flex-direction: column;
        align-items: center;
        padding-top: 70px;
        margin: auto;

        .brand {
          height: 47px;
          margin-bottom: 20px;
          margin-left: -10px;
        }

        div {
          flex-basis: 100%;
        }

        .description {
          font-size: 24px;
          font-weight: 600;
          text-align: center;
        }

        @media screen and (max-width: $small-screen) {
          padding: 40px 0 0 0;

          .brand {
            height: 50px !important
          }

          .description {
            font-size: 20px;
          }
        }
      }

      .peertube-mascot {
        display: block;
        margin: 30px auto 0;
      }

      .marketing {
        font-size: 16px;
        margin: 30px auto;
        width: 535px;
        text-align: center;

        @media screen and (max-width: $small-screen) {
          width: 100%;
        }
      }
    }

    #you-are-a-video-maker {
      .discover-instances {
        min-width: 420px;
        width: fit-content;
        min-height: 50px;
        margin: 50px auto;
        font-size: 20px;
      }
    }

    #your-move {
      .one-column {
        margin-top: 50px;
      }

      .buttons-row {
        margin-top: 60px;

        .jpt-button {
          font-size: 20px;
        }
      }
    }

    #behind-peertube {
      .framasoft-logo {
        flex-basis: 264px;
        min-width: 264px;
        height: 241px;
      }

      .jpt-button {
        height: 50px;
        min-width: 420px;
        width: fit-content;
        margin: 60px auto;
        font-size: 20px;
      }
    }
    #roadmapInfo {
      max-width: 540px;
      border-width: 2px;
      border-radius: 0;

      img {
        display: none;
        padding-left: 20px;
      }

      $one:        #dab19d; // #ff7061;
      $two:       #f7ca8f;
      $three:       #acbe82; // #78cc8a;
      $four:          #9dc2d4; // #36bcd4;

      &.one {
        border-image: linear-gradient(to left bottom, $one, #fff 15%, #fff 85%, $one) 1;
        background: linear-gradient(to bottom right, #fff, lighten($one, 15%));

        img:nth-of-type(1) {
          display: block;
        }
      }

      &.two {
        border-image: linear-gradient(to left bottom, $two, #fff 15%, #fff 85%, $two) 1;
        background: linear-gradient(to bottom right, #fff, lighten($two, 15%));

        img:nth-of-type(2) {
          display: block;
        }
      }

      &.three {
        border-image: linear-gradient(to left bottom, $three, #fff 15%, #fff 85%, $three) 1;
        background: linear-gradient(to bottom right, #fff, lighten($three, 15%));

        img:nth-of-type(3) {
          display: block;
        }
      }

      &.four {
        border-image: linear-gradient(to left bottom, $four, #fff 15%, #fff 85%, $four) 1;
        background: linear-gradient(to bottom right, #fff, lighten($four, 15%));

        img:nth-of-type(4) {
          display: block;
        }
      }
    }
  }
</style>

<script>
  import IconInstance from '../components/icons/IconInstance.vue'
  import IconRight from '../components/icons/IconRight.vue'
  import ContentSelections from '../components/ContentSelections'
  import IconLogo from '../components/icons/IconLogo'

  export default {
    components: {
      ContentSelections,
      IconInstance,
      IconRight,
      IconLogo
    },

    metaInfo: {
      title: 'JoinPeerTube',
      titleTemplate: null
    },

    data () {
      return {
        mascotPaths: [
          'mascot/default.png',
          'mascot/arguing.png',
          'mascot/oh.png',
          'mascot/happy.png'
        ],
        currentMascot: 0
      }
    },

    methods: {
      switchMascot () {
        this.currentMascot++
        this.currentMascot %= this.mascotPaths.length
      },

      getIframeUrl () {
        const currentLanguage = this.$language.current.split('_')[0]
        const params = '?subtitle=' + currentLanguage

        return 'https://framatube.org/videos/embed/9c9de5e8-0a1e-484a-b099-e80766180a6d' + params
      }
    }
  }
</script>
