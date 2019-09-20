<template>
  <main>
    <div class="blocks">
      <div class="title-block">
        <div class="title">PeerTube news!</div>

        <p>Discover the latest PeerTube improvements</p>

        <div class="separator"></div>
      </div>

      <div class="news">
        <div class="title">PeerTube 1.3 is out!</div>
        <div class="date">June 5, 2019</div>

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
            <a href="https://github.com/joshmorel">Josh Morel</a> who add <strong>a quarantine system</strong> for videos on PeerTube. If the
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
            <a href="https://github.com/Chocobozzz/PeerTube/releases/tag/v1.3.0">https://github.com/Chocobozzz/PeerTube/releases/tag/v1.3.0</a>.
          </p>

          <p v-translate>Thanks to all PeerTube contributors!</p>

          <p v-translate>Framasoft.</p>
        </div>
      </div>

      <div class="news">
        <div class="title">PeerTube: retrospective, new features and more to come!</div>
        <div class="date">February 26, 2019</div>

        <div class="body">
          <p v-translate>
            Since version 1.0 has been released last November, we went on improving PeerTube, day after day. These improvements on PeerTube
            go well beyond the objectives fixed during the crowdfunding. They have been funded by the
            <a href="https://framasoft.org/en/">Framasoft non-profit</a>, which develops the software (and lives only
            through <a href="https://soutenir.framasoft.org/en/">your donations</a>).
          </p>

          <p v-translate>Here is a small retrospective of the end of 2018/beginning of 2019:</p>

          <p v-translate>
            In December 2018, we released version 1.1 which contained some moderation tools requested by instance administrators.<br> We
            also took the opportunity to add a watched videos history feature and the automatic resuming of video playback.
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
            <a href="https://joinpeertube.org/en">https://joinpeertube.org/en</a> and that we bear no responsibility on any other site that
            may be published.
          </p>

          <p v-translate>
            As you can see, we have gone far beyond what the crowdfunding has funded. And we will continue!<br> For 2019, we plan to add a
            plugin and theme management system (even though basic at first), playlist management, support for audio files upload and many
            other features.
          </p>

          <p v-translate>
            If you also to contribute to the growing of PeerTube, you can participate in its funding here:
            <a href="https://soutenir.framasoft.org/en">https://soutenir.framasoft.org/en</a>
          </p>

          <p v-translate>
            If you have any questions, feel free to use our forum:
            <a href="https://framacolibri.org/c/peertube">https://framacolibri.org/c/peertube</a>
          </p>

          <p v-translate>
            Thank you and with our best regards,<br />
            Framasoft
          </p>
        </div>

      </div>

      <div class="news">
        <div class="title">PeerTube crowdfunding newsletter #4</div>
        <div class="date">October 16, 2018</div>

        <div class="body">
          <p v-translate>Hello everyone!</p>

          <p v-translate>We are now in mid-October! As promised, we have just released the first stable version of PeerTube.</p>

          <p v-translate>It implements all stretch goals we planned in our crowdfunding:</p>
          <ul>
            <li>Localization support (as we write these lines, PeerTube is already available in 13 different languages!)</li>
            <li>Subtitles support</li>
            <li>Ability to import videos through an URL (YouTube, Vimeo, Dailymotion and many others!)</li>
            <li>Ability to import a video through a torrent file or a magnet URI</li>
            <li>
              RSS feeds, allowing you to track new videos published in all federated PeerTube instances, in a specific PeerTube instance
              or in a video channel you like. You can also subscribe to comment feeds!
            </li>
            <li>A more relevant search, with the ability to set advanced filters (duration, category, tags...)</li>
            <li>
              Subscriptions throughout the federation: you can follow your favorite video channels and see all the videos on a dedicated
              page
            </li>
            <li>Redundancy system: a PeerTube instance can help sharing some videos from another instance</li>
          </ul>

          <p v-translate>We know that feature descriptions are not very amusing, so we have published a few demonstration videos:</p>
          <ul>
            <li><a href="https://framatube.org/videos/watch/f57da309-6b92-4fe0-9267-ff8188cc050c">RSS Feeds</a></li>
            <li><a href="https://framatube.org/videos/watch/dcad56d9-9fe6-45bc-96aa-3d778f6804c1">Torrent import</a></li>
            <li><a href="https://framatube.org/videos/watch/59d306c0-fc5b-493a-956a-43785693346b">YouTube video import</a></li>
            <li><a href="https://framatube.org/videos/watch/edd7a468-08d5-4877-b62b-61c5f3f83ceb">Adding subtitles</a></li>
            <li><a href="https://framatube.org/videos/watch/60c4bea4-6bb2-4fce-8d9f-8a522575419d">Advanced search</a></li>
            <li><a href="https://framatube.org/videos/watch/8968dbe1-a387-433b-a20f-37fe9f3ca8d5">Video channel subscriptions</a></li>
          </ul>

          <p v-translate>
            This is the last newsletter regarding the PeerTube crowdfunding. We would like to thank you one more time, for allowing us
            to greatly improve PeerTube, and therefore to promote a more decentralized web. But the journey does not end here: we will
            continue to work on the software, and there is still a lot to do to fully free up video streaming. But before anything, we'll
            take a few days off ;)
          </p>

          <p v-translate>
            We remind you that you can ask questions on <a href="https://framacolibri.org/c/qualite/peertube">the PeerTube forum</a>. You
            can also contact us directly on <a href="https://contact.framasoft.org"> https://contact.framasoft.org</a>.
          </p>

          <p v-translate>
            Cheers,<br>
            Framasoft
          </p>
        </div>
      </div>

      <div class="news">
        <div class="title">PeerTube crowdfunding newsletter #3</div>
        <div class="date">September 12, 2018</div>

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
            <a href="https://peertube3.cpy.re/videos/overview">a demonstration here</a>.
          </p>

          <p v-translate>
            You can read the complete <em>beta 12</em> changelog <a
            href="https://github.com/Chocobozzz/PeerTube/blob/develop/CHANGELOG.md#v100-beta12">here</a>.
          </p>

          <p v-translate>
            Regarding the crowdfunding, most of the rewards are ready: <a href="https://github.com/Chocobozzz/PeerTube">the PeerTube
            README</a> and <a href="https://joinpeertube.org/fr/hall-of-fame/">the JoinPeerTube Hall of Fame</a> show off the names of the
            persons who have chosen the corresponding rewards. We will soon be able to send the personalized thank-you digital arts to
            people that gave 80€ (~93 USD) and more (and it's so beautiful that we are looking forward to it!)
          </p>

          <p v-translate>
            The last feature we have to implement is the videos redundancy between instances, which will further increase resilience on
            instance overload. If all goes well, we should finish it in about two weeks (end of september).
          </p>

          <p v-translate>
            We remind you that you can track the progress of the work directly <a href="https://github.com/Chocobozzz/PeerTube"> on the git
            repository</a>, and be part of the discussions/bug reports/feature requests in the "Issues" tab.
          </p>

          <p v-translate>
            Moreover, you can ask questions on <a href="https://framacolibri.org/c/qualite/peertube">the PeerTube forum</a>. You can also
            contact us directly on <a href="https://contact.framasoft.org">https://contact.framasoft.org.</a>
          </p>

          <p v-translate>
            Cheers,<br>
            Framasoft
          </p>
        </div>
      </div>

      <div class="news">
        <div class="title">PeerTube crowdfunding newsletter #2</div>
        <div class="date">August 20, 2018</div>

        <div class="body">
          <p v-translate>Hello everyone!</p>

          <p v-translate>The development of the crowdfunding features is going well.</p>

          <p v-translate>
            As a reminder, in the first newsletter (July 23rd, 2018), we announced that the localization system and RSS feeds were
            implemented, and that we were making progress on the subtitles support and the advanced search.
          </p>

          <p v-translate>
            These four features are all implemented, and can already be used on instances updated to version <em>v1.0.0-beta.10</em> (for
            example <a href="https://framatube.org">https://framatube.org</a>). Regarding the subtitles support, you can test them on the
            <a href="https://framatube.org/videos/watch/217eefeb-883d-45be-b7fc-a788ad8507d3"> the "What is PeerTube"</a> video.
          </p>

          <p v-translate>
            We are currently finishing the video import system, from a URL (YouTube, Vimeo etc) or a torrent file. This feature should be
            available in a few days, when we will release a new version (<em>v1.0.0-beta.11</em>).<br> The import system will complete the
            first crowdfunding goal. The next feature we will be working on will be the user subscriptions.
          </p>

          <p v-translate>
            We remind you that you can track the progress of the work directly <a href="https://github.com/Chocobozzz/PeerTube"> on the git
            repository</a>, and be part of the discussions/bug reports/feature requests in the "Issues" tab.
          </p>

          <p v-translate>
            Moreover, you can ask questions on <a href="https://framacolibri.org/c/qualite/peertube">the PeerTube forum</a>. You can also
            contact us directly on <a href="https://contact.framasoft.org">https://contact.framasoft.org.</a>
          </p>

          <p v-translate>
            Cheers,<br>
            Framasoft
          </p>
        </div>
      </div>

      <div class="news">
        <div class="title">PeerTube crowdfunding newsletter #1</div>
        <div class="date">July 23, 2018</div>

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
            Moreover, you can ask questions on the PeerTube forum. You can also contact us directly on https://contact.framasoft.org.
          </p>

          <p v-translate>
            Cheers,<br />
            Framasoft
          </p>
        </div>
      </div>

    </div>

  </main>
</template>

<style scoped lang="scss">
  @import '../scss/_variables.scss';

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
  }
</style>

<script>
  export default {
    components: { },

    metaInfo: function () {
      return {
        title: this.$gettext('News')
      }
    }
  }
</script>
