<template>
  <main id="news">
    <div class="blocks">
      <div class="title-block">
        <div class="title" v-translate>PeerTube news!</div>

        <p v-translate>Discover the latest PeerTube improvements</p>

        <div class="separator"></div>
      </div>

      <article class="news">
        <div class="title" v-translate>PeerTube 1.4 is out!</div>
        <div class="date" v-translate>September 25, 2019</div>

        <div class="body">
          <p v-translate>Hi everybody,</p>
          <p v-translate>Peertube 1.4 just came out! Here's a quick overview of what's new…</p>

          <h4 v-translate>Plug-in system</h4>
          <p v-translate>
            Since PeerTube's launch, we have been aware that every administrator and user wishes to see the software fulfill their needs.
            As Framasoft cannot and will not develop every feature that could be hoped for, we have from the start of the project planned
            on creating a plug-in system.
          </p>

          <p v-translate>
            We are pleased to announce that the foundation stones of this system have been laid in this 1.4 release! It might be very basic
            for now, but we plan on improving it bit by bit in Peertube's future releases.
          </p>

          <p v-translate>
            Now, this system allows each administrator to <b>create specific plug-ins</b> depending on their needs. They may install
            extensions created by other people on their instance as well. For example, it is now possible to install community created
            graphical themes to change the instance visual interface.
          </p>

          <h4 v-translate>A better interface</h4>
          <p v-translate>
            We strive to improve PeerTube's interface by collecting users' opinions so that we know what is causing them trouble
            (in terms of understanding and usability for example). Even though this is a time-consuming undertaking,
            this new release already offers you a few modifications.
          </p>

          <p v-translate>
            First of all, we realized that most people who discover PeerTube have a hard time understanding
            <b>the difference between a channel and an account</b>.
            Indeed, on others video broadcasting services (such as YouTube) these two things are pretty much the same.
          </p>

          <p v-translate>
            However, on PeerTube each account is linked to one or multiple channels that can be named as the users sees fit. You also have
            to create at least one channel when creating an account. Once the channels have been created, users can upload videos to each
            channel to organize their contents (for example, you could have a channel about cooking and another one about biking).
          </p>

          <figure>
            <img @click="openModal" :src="buildNewsImgUrl('release-1.4', 'channel.png')" alt="2 channels on Framasoft's account on FramaTube instance">
            <figcaption v-translate>2 channels on Framasoft's account on FramaTube instance</figcaption>
          </figure>

          <p v-translate>
            In order to make this channel idea more understandable, we have changed the sign-up form, which from now on consists of two
            steps:
          </p>

          <ul>
            <li v-translate>Step 1: account creation (choosing your username, password, email, etc.)</li>
            <li v-translate>Step 2: choosing your default channel name via a new form</li>
          </ul>

          <figure>
            <img @click="openModal" :src="buildNewsImgUrl('release-1.4', 'account-creation.png')" alt="the new sign-up form in 2 steps">
            <figcaption v-translate>the new sign-up form in 2 steps</figcaption>
          </figure>

          <ul>
            <li v-translate>
              We also aimed to differentiate a channel homepage from that of an account. These two pages used to list videos, whereas now
              the account homepage lists all the channel linked to the account by showing under each channel name the thumbnail from the
              last videos uploaded on it.
            </li>
            <li v-translate>
              Another unclear element was the <b>video sharing pop-up</b>. We have improved it, and it is now possible to share or embed a
              video by making it start and/or finish at a precise moment (time-code feature), to decide which subtitles will appear by
              default, and to loop the video. These new options will surely be greatly enjoyed.
            </li>
          </ul>

          <figure>
            <img @click="openModal" :src="buildNewsImgUrl('release-1.4', 'share-popup.png')" alt="customization options when video sharing">
            <figcaption v-translate>customization options when video sharing</figcaption>
          </figure>

          <h4 v-translate>More features</h4>

          <p v-translate>
            Our wonderful community of translators is once again to thank for their work, after they enriched PeerTube with
            <b>3 new languages</b>: Finnish, Greek and Scottish Gaelic, making PeerTube now available in 22 languages.
          </p>

          <p v-translate>
            We also added a new feature allowing you to <b>upload an audio file</b> directly to PeerTube: the software will automatically
            create a video from the audio file. This much awaited for feature should make life easier for music makers :)
          </p>

          <p v-translate>
            This new release includes many other improvements. You can see the complete list on
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Chocobozzz/PeerTube/releases/tag/v1.4.0">
              https://github.com/Chocobozzz/PeerTube/releases/tag/v1.4.0
            </a>.
          </p>

          <p>
            <translate>Thanks to all PeerTube contributors!</translate>
            <br />
            Framasoft
          </p>
        </div>
      </article>

      <article class="news">
        <div class="title" v-translate>PeerTube 1.3 is out!</div>
        <div class="date" v-translate>June 5, 2019</div>

        <div class="body">
          <p v-translate>Hello!</p>

          <p v-translate>We've just released PeerTube 1.3 and it brings a lot of new features.</p>

          <p v-translate>
            The most important of these new features is <strong>the playlist system</strong>. This feature allows any user to create a
            playlist in which it's possible to add videos and reorder them. Videos added to a playlist can be viewed entirely or partially:
            the creator of the playlist can decide when the video playback starts and/or ends (timecode system). This system is really
            useful to create all kinds of zappings or educational contents by selecting extracts from videos which interest you. In
            addition, a "Watch Later" playlist is created by default for each user. Thus, you can save videos in this playlist when you
            don't have time to watch them immediately.
          </p>

          <p v-translate>
            Another feature of this 1.3 version has been entirely developed by an external contributor:
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/joshmorel">Josh Morel</a> who add <strong>a quarantine system</strong> for videos on PeerTube. If the
            administrator of an instance enables this feature, any new video uploaded on his instance will automatically be hidden until a
            moderator approves it.
          </p>

          <p v-translate>
            PeerTube translation community have done a huge job. <strong>3 new languages</strong> are now available: Japanese, Dutch and
            European Portuguese (PeerTube already support Brazilian Portuguese). Amazing! PeerTube is now available in 19 languages!
          </p>

          <p v-translate>
            Now, administrators can <strong>manage more finely how other instances subscribe to their own instance</strong>. The
            administrator can decide whether or not to approve the subscription of another instance to its own. It is also possible to
            activate automatic rejection for any new subscription to its instance. Finally, a notification is created as soon as the
            administrator's instance receives a new subscription. These features help administrators control on which instances their
            content is displayed.
          </p>

          <p v-translate>
            We're also redesigning the <strong>PeerTube video player</strong> to offer better video playback and to correct a few bugs.
            With this new player, resolution changes should be smoother and the bandwidth management is optimized with a more efficient
            buffering system. Version 1.3 of PeerTube also adds ability for administrators to enable this new experimental player so we can
            get feedback on it. We hope to use this new player by default in the future.
          </p>

          <p v-translate>
            Finally, we have made some adjustments to the <strong>user interface</strong> so it easier and nicer to use. For instance,
            video thumbnails are becoming bigger so that they're more highlighted. Users now have a quick access to their library from the
            menu that includes their playlists, videos, video watching history and their subscriptions.
          </p>

          <p v-translate>
            Many other improvements have been made in this new version. You can see the complete list on
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Chocobozzz/PeerTube/releases/tag/v1.3.0">https://github.com/Chocobozzz/PeerTube/releases/tag/v1.3.0</a>.
          </p>

          <p>
            <translate>Thanks to all PeerTube contributors!</translate>
            <br />
            Framasoft
          </p>
        </div>
      </article>

      <article class="news">
        <div class="title" v-translate>PeerTube: retrospective, new features and more to come!</div>
        <div class="date" v-translate>February 26, 2019</div>

        <div class="body">
          <p v-translate>
            Since version 1.0 has been released last November, we went on improving PeerTube, day after day. These improvements on PeerTube
            go well beyond the objectives fixed during the crowdfunding. They have been funded by the
            <a target="_blank" rel="noopener noreferrer" href="https://framasoft.org">Framasoft non-profit</a>, which develops the software (and lives only
            through <a target="_blank" rel="noopener noreferrer" href="https://soutenir.framasoft.org">your donations</a>).
          </p>

          <p v-translate>Here is a small retrospective of the end of 2018/beginning of 2019:</p>

          <p>
            <translate>In December 2018, we released version 1.1 which contained some moderation tools requested by instance administrators.</translate>
            <br />
            <translate>We also took the opportunity to add a watched videos history feature and the automatic resuming of video playback.</translate>
          </p>

          <p v-translate>
            In January, we released version 1.2 that supports 3 new languages: Russian, Polish and Italian. Thanks to PeerTube's community
            of translators, PeerTube is now translated into 16 different languages!
          </p>

          <p v-translate>
            This version also includes a notification system that allows users to be informed (on the web interface or through email) when
            their video is commented, when someone mention them, when one of their subscriptions has published a new video, etc.
          </p>

          <p v-translate>
            In the meantime, the PeerTube federation has grown: today, more than 300 instances broadcast more than 70,000 videos, with
            nearly 2 million cumulated views. We remind you that the only official website we maintain around PeerTube is
            <a target="_blank" rel="noopener noreferrer" href="https://joinpeertube.org/en">https://joinpeertube.org/en</a> and that we bear no responsibility on any other site that
            may be published.
          </p>

          <p>
            <translate>As you can see, we have gone far beyond what the crowdfunding has funded. And we will continue!</translate>
            <br />
            <translate>
              For 2019, we plan to add a  plugin and theme management system (even though basic at first), playlist management,
              support for audio files upload and many other features.
            </translate>
          </p>

          <p v-translate>
            If you also to contribute to the growing of PeerTube, you can participate in its funding here:
            <a target="_blank" rel="noopener noreferrer" href="https://soutenir.framasoft.org/en">https://soutenir.framasoft.org/en</a>
          </p>

          <p v-translate>
            If you have any questions, feel free to use our forum:
            <a target="_blank" rel="noopener noreferrer" href="https://framacolibri.org/c/peertube">https://framacolibri.org/c/peertube</a>
          </p>

          <p>
            <translate>Thanks to all PeerTube contributors!</translate>
            <br />
            Framasoft
          </p>
        </div>

      </article>

      <article class="news">
        <div class="title" v-translate>PeerTube crowdfunding newsletter #4</div>
        <div class="date" v-translate>October 16, 2018</div>

        <div class="body">
          <p v-translate>Hello everyone!</p>

          <p v-translate>We are now in mid-October! As promised, we have just released the first stable version of PeerTube.</p>

          <p v-translate>It implements all stretch goals we planned in our crowdfunding:</p>
          <ul>
            <li v-translate>Localization support (as we write these lines, PeerTube is already available in 13 different languages!)</li>
            <li v-translate>Subtitles support</li>
            <li v-translate>Ability to import videos through an URL (YouTube, Vimeo, Dailymotion and many others!)</li>
            <li v-translate>Ability to import a video through a torrent file or a magnet URI</li>
            <li v-translate>
              RSS feeds, allowing you to track new videos published in all federated PeerTube instances, in a specific PeerTube instance
              or in a video channel you like. You can also subscribe to comment feeds!
            </li>
            <li v-translate>A more relevant search, with the ability to set advanced filters (duration, category, tags...)</li>
            <li v-translate>
              Subscriptions throughout the federation: you can follow your favorite video channels and see all the videos on a dedicated
              page
            </li>
            <li v-translate>Redundancy system: a PeerTube instance can help sharing some videos from another instance</li>
          </ul>

          <p v-translate>We know that feature descriptions are not very amusing, so we have published a few demonstration videos:</p>
          <ul>
            <li>
              <a v-translate target="_blank" rel="noopener noreferrer" href="https://framatube.org/videos/watch/f57da309-6b92-4fe0-9267-ff8188cc050c">RSS Feeds</a>
            </li>

            <li>
              <a v-translate target="_blank" rel="noopener noreferrer" href="https://framatube.org/videos/watch/dcad56d9-9fe6-45bc-96aa-3d778f6804c1">Torrent import</a>
            </li>

            <li>
              <a v-translate target="_blank" rel="noopener noreferrer" href="https://framatube.org/videos/watch/59d306c0-fc5b-493a-956a-43785693346b">YouTube video import</a>
            </li>

            <li>
              <a v-translate target="_blank" rel="noopener noreferrer" href="https://framatube.org/videos/watch/edd7a468-08d5-4877-b62b-61c5f3f83ceb">Adding subtitles</a>
            </li>

            <li>
              <a v-translate target="_blank" rel="noopener noreferrer" href="https://framatube.org/videos/watch/60c4bea4-6bb2-4fce-8d9f-8a522575419d">Advanced search</a>
            </li>

            <li>
              <a v-translate target="_blank" rel="noopener noreferrer" href="https://framatube.org/videos/watch/8968dbe1-a387-433b-a20f-37fe9f3ca8d5">Video channel subscriptions</a>
            </li>
          </ul>

          <p v-translate>
            This is the last newsletter regarding the PeerTube crowdfunding. We would like to thank you one more time, for allowing us
            to greatly improve PeerTube, and therefore to promote a more decentralized web. But the journey does not end here: we will
            continue to work on the software, and there is still a lot to do to fully free up video streaming. But before anything, we'll
            take a few days off ;)
          </p>

          <p v-translate>
            We remind you that you can ask questions on <a target="_blank" rel="noopener noreferrer" href="https://framacolibri.org/c/qualite/peertube">the PeerTube forum</a>. You
            can also contact us directly on <a target="_blank" rel="noopener noreferrer" href="https://contact.framasoft.org"> https://contact.framasoft.org</a>.
          </p>

          <p>
            <translate>Cheers,</translate>
            <br />
            Framasoft
          </p>
        </div>
      </article>

      <article class="news">
        <div class="title" v-translate>PeerTube crowdfunding newsletter #3</div>
        <div class="date" v-translate>September 12, 2018</div>

        <div class="body">
          <p v-translate>Hello everyone!</p>

          <p v-translate>A month before the version 1 of PeerTube, we would like to share some (good!) news with you.</p>

          <p v-translate>
            We just released PeerTube <em>beta 12</em>, that allows to subscribe to video channels, whether they are on your instance or
            even on remote instances. This way, you can browse videos of your subscribed channels in a dedicated page. Moreover, if your
            PeerTube administrator allows it, you can search a channel or a video directly by typing their web address in the PeerTube
            search bar.
          </p>

          <p v-translate>
            It was not included in the crowdfunding, but we created an "Overview" page, that displays videos of some
            categories/tags/channels picked randomly, to show the diversity of the videos uploaded on PeerTube. You can see
            <a target="_blank" rel="noopener noreferrer" href="https://peertube3.cpy.re/videos/overview">a demonstration here</a>.
          </p>

          <p v-translate>
            You can read the complete <em>beta 12</em> changelog <a
            href="https://github.com/Chocobozzz/PeerTube/blob/develop/CHANGELOG.md#v100-beta12">here</a>.
          </p>

          <p v-translate>
            Regarding the crowdfunding, most of the rewards are ready: <a target="_blank" rel="noopener noreferrer" href="https://github.com/Chocobozzz/PeerTube">the PeerTube
            README</a> and <a target="_blank" rel="noopener noreferrer" href="https://joinpeertube.org/hall-of-fame">the JoinPeerTube Hall of Fame</a> show off the names of the
            persons who have chosen the corresponding rewards. We will soon be able to send the personalized thank-you digital arts to
            people that gave 80€ (~93 USD) and more (and it's so beautiful that we are looking forward to it!).
          </p>

          <p v-translate>
            The last feature we have to implement is the videos redundancy between instances, which will further increase resilience on
            instance overload. If all goes well, we should finish it in about two weeks (end of september).
          </p>

          <p v-translate>
            We remind you that you can track the progress of the work directly <a target="_blank" rel="noopener noreferrer" href="https://github.com/Chocobozzz/PeerTube"> on the git
            repository</a>, and be part of the discussions/bug reports/feature requests in the "Issues" tab.
          </p>

          <p v-translate>
            Moreover, you can ask questions on <a target="_blank" rel="noopener noreferrer" href="https://framacolibri.org/c/qualite/peertube">the PeerTube forum</a>. You can also
            contact us directly on <a target="_blank" rel="noopener noreferrer" href="https://contact.framasoft.org">https://contact.framasoft.org.</a>
          </p>

          <p>
            <translate>Cheers,</translate>
            <br />
            Framasoft
          </p>
        </div>
      </article>

      <article class="news">
        <div class="title" v-translate>PeerTube crowdfunding newsletter #2</div>
        <div class="date" v-translate>August 20, 2018</div>

        <div class="body">
          <p v-translate>Hello everyone!</p>

          <p v-translate>The development of the crowdfunding features is going well.</p>

          <p v-translate>
            As a reminder, in the first newsletter (July 23rd, 2018), we announced that the localization system and RSS feeds were
            implemented, and that we were making progress on the subtitles support and the advanced search.
          </p>

          <p v-translate>
            These four features are all implemented, and can already be used on instances updated to version <em>v1.0.0-beta.10</em> (for
            example <a target="_blank" rel="noopener noreferrer" href="https://framatube.org">https://framatube.org</a>). Regarding the subtitles support, you can test them on the
            <a target="_blank" rel="noopener noreferrer" href="https://framatube.org/videos/watch/217eefeb-883d-45be-b7fc-a788ad8507d3"> the "What is PeerTube"</a> video.
          </p>

          <p>
            <translate>
              We are currently finishing the video import system, from a URL (YouTube, Vimeo etc) or a torrent file. This feature should be
              available in a few days, when we will release a new version (<em>v1.0.0-beta.11</em>).
            </translate>
            <br />
            <translate>
              The import system will complete the first crowdfunding goal. The next feature we will be working on will be the user subscriptions.
            </translate>
          </p>

          <p v-translate>
            We remind you that you can track the progress of the work directly <a target="_blank" rel="noopener noreferrer" href="https://github.com/Chocobozzz/PeerTube"> on the git
            repository</a>, and be part of the discussions/bug reports/feature requests in the "Issues" tab.
          </p>

          <p v-translate>
            Moreover, you can ask questions on <a target="_blank" rel="noopener noreferrer" href="https://framacolibri.org/c/qualite/peertube">the PeerTube forum</a>. You can also
            contact us directly on <a target="_blank" rel="noopener noreferrer" href="https://contact.framasoft.org">https://contact.framasoft.org.</a>
          </p>

          <p>
            <translate>Cheers,</translate>
            <br />
            Framasoft
          </p>
        </div>
      </article>

      <article class="news">
        <div class="title" v-translate>PeerTube crowdfunding newsletter #1</div>
        <div class="date" v-translate>July 23, 2018</div>

        <div class="body">
          <p v-translate>Hello everyone!</p>

          <p v-translate>First of all, thank you again for contributing to PeerTube! ❤️</p>

          <p v-translate>
            During the crowdfunding campaign, we continued to work on the localization system. And we are happy to announce it's
            finally completed: it will be available in the next beta (beta 10) of PeerTube. As of this writing, the web interface is
            already available in english, french, basque, catalan, czech and esperanto (huge thank you to all of the translators).
            If you too want to help translating PeerTube, do not hesitate to check out the documentation!
          </p>

          <p v-translate>
            Regarding the RSS feeds feature, it was already implemented by Rigelk and you can already use it in the beta 9.
            You can, for example, get the feed of the last local videos uploaded in a particular instance.
          </p>

          <p v-translate>
            Subtitles support is well under way, and we should have a first version available soon.
            When this work is finished, we will develop the advanced search.
          </p>

          <p v-translate>
            We remind you that you can track the progress of the work directly on the git repository, and be part of the discussions/bug
            reports/feature requests in the "Issues" tab.
          </p>

          <p v-translate>
            Moreover, you can ask questions on <a target="_blank" rel="noopener noreferrer" href="https://framacolibri.org/c/qualite/peertube">the PeerTube forum</a>. You can also
            contact us directly on <a target="_blank" rel="noopener noreferrer" href="https://contact.framasoft.org">https://contact.framasoft.org.</a>
          </p>

          <p>
            <translate>Cheers,</translate>
            <br />
            Framasoft
          </p>
        </div>
      </article>

    </div>

    <div id="modal" @click="closeModal()" v-bind:class="{ 'hide-modal': hideModal }">
      <img :src="modalImgSrc" />

      <div class="caption">{{ modalCaption }}</div>
    </div>
  </main>
</template>

<style lang="scss">
  @import '../scss/_variables.scss';

  #news {
    p {
      margin-bottom: 10px;
    }

    p + *:not(ul) {
      margin-top: 1em;
    }

    .blocks {
      margin: 60px auto;
    }

    .title-block {
      margin-bottom: 60px;
    }

    .news {
      max-width: 800px;
      padding: 40px 50px;
      border: solid 1px #d9d9d9;
      border-left: 6px solid $orange;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.35);
      margin-bottom: 60px;

      .title {
        font-size: 24px;
      }

      .date {
        font-size: 16px;
      }

      .body {
        margin-top: 40px;
      }

      a {
        word-break: break-word;
      }

      figure {
        margin: 30px 0;
        border: 10px solid #fff3ea;
        border-bottom: 0;

        img {
          cursor: pointer;
          max-width: 100%;
          height: auto;
          margin-bottom: 5px;
        }

        figcaption {
          font-size: 14px;
          background: #fff3ea;
          text-align: center;
          padding: 10px 0;
        }
      }

      @media screen and (max-width: $small-screen) {
        padding: 10px;
      }
    }

    #modal {
      &.hide-modal {
        display: none;
      }

      position: fixed;
      z-index: 1;
      padding-top: 5vh;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgb(0, 0, 0);
      background-color: rgba(0, 0, 0, 0.9);

      img {
        margin: auto;
        display: block;
        height: 90%;
        width: auto;
      }

      .caption {
        margin: auto;
        display: block;
        width: 80%;
        max-width: 700px;
        text-align: center;
        color: #ccc;
        padding: 10px;
      }

      img,
      .caption {
        animation-name: zoom;
        animation-duration: 0.6s;
      }
    }

    @keyframes zoom {
      from {
        transform: scale(0)
      }
      to {
        transform: scale(1)
      }
    }
  }
</style>

<script>
  export default {
    components: { },

    data: function () {
      return {
        imageLocales: {
          'release-1.4': {
            en: true,
            fr: true
          }
        },

        hideModal: true,
        modalImgSrc: '',
        modalCaption: ''
      }
    },

    methods: {
      buildNewsImgUrl: function (newsId, img) {
        let locale = 'en'

        const current = this.$language.current.toLowerCase().split('_')[0]
        if (this.imageLocales[newsId][current]) locale = current

        return this.buildImgUrl(`news/${newsId}/${locale}/${img}`)
      },

      openModal: function (event) {
        const img = event.target

        this.hideModal = false
        this.modalImgSrc = img.src
        this.modalCaption = img.alt
      },

      closeModal: function () {
        this.hideModal = true
        this.modalImgSrc = ''
        this.modalCaption = ''
      }
    },

    metaInfo: function () {
      return {
        title: this.$gettext('News')
      }
    }
  }
</script>
