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
        <a href="#what-is-peertube" class="jpt-button jpt-big-button-icon">
          <icon-instance></icon-instance>

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

      <content-selections :sample-size-each="2"></content-selections>

      <div class="bottom-link-wrapper">
        <router-link :to="{ path: '/instances', hash: 'instances-list' }" class="bottom-link">
          <span class="text" v-translate>Discover PeerTube instances</span>
          <icon-right></icon-right>
        </router-link>
      </div>
    </section>

    <section id="what-is-peertube">
      <div class="section-title">
        <div v-translate>
          What is
          <img class="brand-title" :src="buildImgUrl('brand.png')" alt="PeerTube"/>
          ?
        </div>
        <div class="border-title"></div>
      </div>

      <div class="two-columns">
        <img :src="buildImgUrl('peertube-interface.png')" alt="PeerTube screen"/>

        <div>
          <div class="citation">
            <div class="text" v-translate>
              PeerTube aspire to be a <strong>decentralized and free/libre alternative</strong> to video broadcasting services.
            </div>
          </div>

          <p v-translate>
            Our aim is not to replace them, but rather to simultaneously offer something else, with different values.
          </p>
        </div>
      </div>

      <div class="federation">
        <div class="subtitle" v-translate>
          A federation of interconnected hosting services
          <div class="border-title"></div>
        </div>

        <div class="two-columns">
          <img :src="buildImgUrl('peertube-federation-multiplicity.png')" alt="Funny federation schema"/>

          <div>
            <div class="citation">
              <div class="left-bar"></div>

              <div class="text" v-translate>
                PeerTube is not meant to become a huge platform that would centralize videos from all around the world.
                Rather, it is <strong>a network of inter-connected small videos hosters</strong>.
              </div>
            </div>

            <p v-translate>
              Anyone with a modicum of technical skills can host a PeerTube server, aka an instance.
              Each instance hosts its users and their videos.
              In this way, <strong>every instance is created, moderated and maintained independently by various administrators.</strong>
            </p>
          </div>
        </div>

        <div class="bottom-link-wrapper">
          <router-link :to="{ path: '/instances', hash: 'instances-list' }" class="bottom-link">
            <span class="text" v-translate>Discover PeerTube instances</span>
            <icon-right></icon-right>
          </router-link>
        </div>

        <div class="two-columns">
          <div>
            <p v-translate>
              You can still watch from your account videos hosted by other instances though
              if the administrator of your instance had previously connected it with other instances.
            </p>

            <div class="citation">
              <div class="left-bar"></div>

              <div class="text v-translate">This is just how a <strong>federation</strong> works!</div>
            </div>

            <p v-translate>
              And there's more! PeerTube uses Activity Pub, a federating protocol that <strong>allows you to interact with other software</strong>,
              provided they also use this protocol. For example, PeerTube and Mastodon -a Twitter alternative- are connected:
              <strong>you can follow a PeerTube user from Mastodon</strong> (the latest videos from the PeerTube account you follow will appear in your feed),
              <strong>and even comment on a PeerTube-hosted video directly from your Mastodon's account.</strong>
            </p>
          </div>

          <img :src="buildImgUrl('peertube-federation-2-instances.png')" alt="Funny 2 instances communication schema"/>
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
        <div class="subtitle" v-translate>
          An open-source, free/libre licence code
          <div class="border-title"></div>
        </div>

        <div class="two-columns">
          <img :src="buildImgUrl('peertube-free-software.png')" alt="PeerTube is a free software funny schema"/>

          <div>
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
        <div class="subtitle" v-translate>
          Are you a video maker?
          <div class="border-title"></div>
        </div>

        <div class="two-columns">
          <img :src="buildImgUrl('peertube-upload.png')" alt="PeerTube upload illustration"/>

          <div>
            <div class="citation">
              <div class="left-bar"></div>

              <div class="text" v-translate>
                With PeerTube, chose <strong>your hosting company and the rules you believe in.</strong>
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
        </div>

        <router-link :to="{ path: '/instances', hash: 'instances-list' }" class="jpt-button discover-instances">
          <translate>Browse/discover PeerTube instances</translate>
        </router-link>
      </div>

      <div class="p2p">
        <div class="subtitle" v-translate>
          About peer-to-peer broadcasting and watching
          <div class="border-title"></div>
        </div>

        <div class="two-columns">
          <img :src="buildImgUrl('peertube-p2p.png')" alt="PeerTube P2P illustration"/>

          <div>
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
      </div>

      <div id="your-move">
        <div class="subtitle" v-translate>
          Your move!
          <div class="border-title"></div>
        </div>

        <div class="one-column">
          <img :src="buildImgUrl('peertube-federation-multiplicity.png')" alt="PeerTube you play illustration"/>
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
        <div v-translate>
          Who is behind
          <img class="brand-title" :src="buildImgUrl('brand.png')" alt="PeerTube"/>
          ?
        </div>

        <div class="border-title"></div>
      </div>

      <div class="two-columns">
        <img class="framasoft-logo" :src="buildImgUrl('framasoft-big-logo.png')" alt="Framasoft logo"/>

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
              The more people use, support, and contribute to PeerTube, the quicker it will become a concrete alternative to platforms like YouTube.
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

<style scoped lang="scss">
  @import '../scss/_variables.scss';
  @import '../scss/_mixins.scss';

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
        margin-left: -30px;
      }

      div {
        flex-basis: 100%;
      }

      .description {
        font-size: 24px;
        font-weight: 600;
      }

      @media screen and (max-width: $small-screen) {
        padding: 15px 0;

        .brand {
          height: 25px !important
        }

        .description {
          font-size: 20px;
          margin-left: 20px;
        }
      }
    }

    .marketing {
      font-size: 16px;
      margin: 50px auto;
      width: 500px;
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
      height: 50px;
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
      flex-basis: auto;
      width: 264px;
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
</style>

<script>
  import IconInstance from '../components/icons/IconInstance.vue'
  import IconRight from '../components/icons/IconRight.vue'
  import ContentSelections from '../components/ContentSelections'

  export default {
    components: {
      ContentSelections,
      IconInstance,
      IconRight
    },

    metaInfo: {
      title: 'JoinPeerTube',
      titleTemplate: null
    }
  }
</script>
