<template>
  <main>
    <div class="blocks">

      <div class="title-block">
        <div class="title" v-translate>FAQ</div>

        <p v-translate>A few questions to discover PeerTube</p>

        <div class="separator"></div>
      </div>

      <div class="block" role="tablist">
        <div class="title" v-translate>PeerTube Presentation</div>

        <accordion-element accordion="a" id="What is PeerTube?" :title="$gettext('What is PeerTube')">
          <div>
            <p v-translate>
              PeerTube is software that you install on a web server. It allows you to create a video hosting website, so create your
              "homemade YouTube".
            </p>

            <p v-translate>
              The difference to YouTube is that it's not intended to create a huge platform centralizing videos from the whole world on a
              single server farm (which is horribly expensive).
            </p>

            <p v-translate>
              On the contrary, PeerTube's concept is to create a network of multiple small interconnected video hosting providers.
            </p>
          </div>
        </accordion-element>

        <accordion-element accordion="a" id="The three main advantages of PeerTube."
                           :title="$gettext('The three main advantages of PeerTube.')">
          <div>
            <p v-translate>
              PeerTube is unique because (as far as we know) it's the only video hosting web application which combines three
              advantages:
            </p>

            <ol>
              <li v-translate>An open code (transparency) under a free/libre license (ethic, respect and community-driven development);</li>
              <li v-translate>A federation of interconnected hosting providers (so more video choices wherever you go to see them);</li>
              <li v-translate>Peer-to-peer broadcasting – and therefore viewing – (so no slowing down when a video becomes viral).</li>
            </ol>

            <p v-translate>
              Linked together, these three features makes it easy to host videos on the server side, while remaining practical, ethical and
              fun for the internet users.
            </p>
          </div>
        </accordion-element>

        <accordion-element accordion="a" id="Why is it better as free/libre software?"
                           :title="$gettext('Why is it better as free/libre software?')">
          <div>
            <p v-translate>
              Because by design free/libre software respects our fundamental freedoms, and guarantees them by
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/Chocobozzz/PeerTube/blob/develop/LICENSE">a license</a>,
              so a legally enforceable contract.
            </p>

            <p v-translate>Concretely here, it means that:</p>
            <ul>
              <li v-translate>PeerTube is freely provided, no need to pay to install it on your server;</li>
              <li v-translate>We can look under the hood of PeerTube (its source code): it's auditable, transparent;</li>
              <li v-translate>Its development is community-based, it can be enhanced by everyone's contributions.</li>
            </ul>
          </div>
        </accordion-element>

        <accordion-element accordion="a" id="What's the interest to federate the video hosting providers?"
                           :title="$gettext('What\'s the interest to federate the video hosting providers?')">
          <div>
            <p v-translate>
              The advantage of YouTube (and other platforms) is its video catalog: from knitting tutorials to Minecraft constructions
              through videos of kittens or holidays... you can find everything!
            </p>
            <p v-translate>
              The more the video catalogue is varied, the more people are interested, the more videos are uploaded... but hosting videos from
              all over the world is (very, very) expensive!
            </p>
            <p v-translate>
              If the hosting provider Knitting-PeerTube becomes friends with Kittens-Tube and Framatube, it will display the videos of
              others on its site, thus diluting hosting costs while remaining practical and complete for Internet users.
            </p>
            <p v-translate>
              PeerTube's federation protocol is fluid (everyone can choose who they want to follow), and based on
              <a target="_blank" rel="noopener noreferrer" href="https://activitypub.rocks">ActivityPub</a>: this opens the possibility
              to connect with tools like Mastodon for example.
            </p>
          </div>
        </accordion-element>

        <accordion-element accordion="a" id="Why broadcast PeerTube videos through peer-to-peer?"
                           :title="$gettext('Why broadcast PeerTube videos through peer-to-peer?')">
          <div>
            <p v-translate>When you host a large file like a video, the biggest thing to fear is success: if a video becomes viral and many people watch
              it at the same time, the server has a big risk of getting overloaded!</p>
            <p v-translate>
              Peer-to-peer broadcasting allows, thanks to the
              <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/WebRTC">WebRTC</a>
              protocol, that Internet users who watch the same video at the same time exchange bits of files, which relieves the server.
            </p>
            <p v-translate>
              There is nothing to do: your web browser does it automatically. If you are on a mobile phone or if your network does not
              allow it (router, firewall, etc.), this function is disabled and switches back to an "old-style" video broadcast 😉.
            </p>
          </div>
        </accordion-element>

        <accordion-element accordion="a" id="For those who know how to administer a server, PeerTube is..."
                           :title="$gettext('For those who know how to administer a server, PeerTube is...')">
          <div>
            <p v-translate>
              <strong>It's software you install on your server</strong> to create a website where videos are hosted and broadcast...
              Basically: you create your own "homemade YouTube"!
            </p>
            <p v-translate>
              There already exists free/libre software that enables you to do this. But with PeerTube, you can link your instance (your
              video website) to Zaïd's PeerTube instance (where he hosts videos of the lectures for his people's university), to Catherin's
              (who hosts her webmedia videos) or even to Solar's PeerTube instance (who manages a vloggers collective).
            </p>
            <p v-translate>
              <strong>But PeerTube doesn't centralize: it federates.</strong> Thanks to the
              <a target="_blank" rel="noopener noreferrer" href="https://activitypub.rocks">ActivityPub</a>
              protocol (also used by
              <a target="_blank" rel="noopener noreferrer" href="https://joinmastodon.org">the Mastodon federation</a>,
              a free/libre Twitter alternative), PeerTube can federate several small hosters so they don't have to buy thousands of hard
              disks to host videos for the whole world.
            </p>
            <p v-translate>
              As a result, on your PeerTube website, the audience will be able to watch not only your videos, but also videos hosted by
              Zaïd, Catherin or Solar... without having to host their videos on your PeerTube-powered website. Such diversity in a
              video-catalog makes it very attractive. Such a large choice and diversity of videos is what made centralized platforms such as
              YouTube succesful.
            </p>
            <p v-translate>
              Federation offers another benefit: <strong>everyone becomes independent</strong>. Zaïd, Catherin, Solar and yourself can make
              your own rules, your own Terms of Services (for example, one can imagine a MeowTube where dogs videos are strictly forbidden
              😉).
            </p>
          </div>
        </accordion-element>

        <accordion-element accordion="a" id="For those who wants to upload their videos, PeerTube allows..."
                           :title="$gettext('For those who wants to upload their videos, PeerTube allows...')">
          <div>
            <p v-translate>
              It allows you to choose a hoster that fits you. YouTube's excesses are a good exemple: its hoster, Google/Alphabet, can
              impose its "Robocopyright" (the ContentID system) or its tools to index, recommend and spotlight videos; and those tools seem
              as unfair as they are obscure. Even though, it already forces you
              <a target="_blank" rel="noopener noreferrer" href="https://tosdr.org/#youtube"> to give it extended copyrights on your videos,
                for free</a>!
            </p>
            <p v-translate>
              With PeerTube, <strong>you can choose the hoster of your videos according to his terms of services</strong>, his moderation
              policy, his federation choices... As you don't have a tech giant facing you, you might be able to talk with you hoster if you
              ever have a problem, a need, or something you want.
            </p>
            <p v-translate>
              The other big advantage of PeerTube is that your hoster doesn't have to fear the sudden success of one of your videos.
              Indeed, PeerTube broadcasts videos with the protocol
              <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/BitTorrent">WebTorrent</a>.
              If hundreds of people are watching your video at the same time, their browsers automatically send bits of your video to other
              viewers.
            </p>
            <p v-translate>
              Before this peer-to-peer broadcast, successful videographers (or videos that make the buzz) were doomed to be hosted by a web
              giant whose infrastructure can handle millions of simultaneous views... Or to pay for a very expensive independent video host so
              that it can hold the load.
            </p>
          </div>
        </accordion-element>

        <accordion-element accordion="a" id="For those who want to watch videos, PeerTube can offer..."
                           :title="$gettext('For those who want to watch videos, PeerTube can offer...')">
          <div>
            <p v-translate>
              One of the benefits is that <strong>you become a part of the broadcasting of the videos you are watching</strong>. If other
              people are watching a PeerTube video at the same time as you, as long as your tab remains open, your browser shares bits of
              that video and you participate in a healthier use of the Internet.
            </p>
            <p v-translate>Of course, PeerTube's video player adapts to your situation: if your installation does not allow peer-to-peer playback
              (corporate network, recalcitrant browser, etc.) video playback will be done in the classic way.
            </p>
            <p v-translate>
              But above all, <strong>PeerTube treats you like a person, not as a product</strong> that it has to track, profile, and lock
              in video loops to better sell your available brain time. Thus, the
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/Chocobozzz/PeerTube">source code</a>
              (the recipe) of the PeerTube software is open, making its operation transparent.
            </p>
            <p v-translate>
              <strong>PeerTube is not only open-source: it's free (as in free speech).</strong> Its free license guarantees our fundamental
              freedoms as users. It is this respect for our freedoms that allows Framasoft to invite you to contribute to this software, and
              many evolutions (innovative comment system, etc.) have already been suggested by some of you.
            </p>
          </div>
        </accordion-element>

        <accordion-element accordion="a" id="Is PeerTube's purpose to replace YouTube?"
                           :title="$gettext('Is PeerTube\'s purpose to replace YouTube?')">
          <div>
            <p v-translate>We can answer with certainty: no!</p>
            <p v-translate>
              In March 2018, PeerTube released its publicly usable beta version. Several collectives set up the first instances, thus
              creating the bases of the federation.
            </p>
            <p v-translate>
              But this is just the beginning, PeerTube is not (yet) perfect, and many features are missing. But we intend to keep improving
              it day after day.
            </p>
            <p v-translate>
              March 2018 thus represents the birth of the PeerTube federations: the more this software will be used and supported, the more
              people will use it and contribute to it, and the faster it will evolve towards a concrete alternative to platforms such as
              YouTube.
            </p>
            <p v-translate>
              Nevertheless, the ambition remains to be <strong>a free and decentralized alternative</strong>: the goal of an alternative is
              not to replace, but to propose something else, with different values, in parallel to what already exists.
            </p>
          </div>
        </accordion-element>
      </div>

      <div class="block" role="tablist">
        <div class="title" v-translate>Creation and content</div>

        <accordion-element accordion="a" id="If it's free, can we upload illegal stuff on it?"
                           :title="$gettext('If it\'s free, can we upload illegal stuff on it?')">
          <div>
            <p v-translate>
              Being free doesn't mean being above the law! Each PeerTube hosting provider can decide on its own general conditions of use,
              abiding by their local laws.
            </p>
            <p v-translate>
              For example, in France, discriminatory content
              <a target="_blank" rel="noopener noreferrer" href="https://fr.wikipedia.org/wiki/Lois_contre_le_racisme_et_les_discours_de_haine">is prohibited</a>
              and may be reported to the authorities. PeerTube allows users to report problematic videos, and each administrator must then
              apply its moderation in accordance with its terms and conditions and the law.
            </p>
            <p v-translate>
              The federation system, for its part, allows hosts to decide with whom they want to connect, depending on the types of content
              or the moderation policies of others.
            </p>
          </div>
        </accordion-element>

        <accordion-element accordion="a" id="Who is responsible for content published on PeerTube?"
                           :title="$gettext('Who is responsible for content published on PeerTube?')">
          <div>
            <p v-translate>
              PeerTube is not a website: it is software that allows a web hoster (for example, Dominique) to create a video website (let's
              call it DominiqueTube).
            </p>
            <p v-translate>
              Now imagine that Camille has created an account on DominiqueTube and uploads an illegal video, because this video uses music
              created by Solal.
            </p>
            <p v-translate>
              Solal goes on Framatube, an instance which follows DominiqueTube. So, Solal can see, from Framatube, the videos published on
              DominiqueTube.
            </p>
            <p v-translate>
              Solal sees Camille's illegal video, and signals it with the button provided for that purpose. Although the report is made
              from Framatube, it is sent directly to the person hosting the illegal content, Dominique.
            </p>
            <p v-translate>
              From that moment on, Dominique is responsible, because they are warned that they're hosting an illegal video. It is therefore
              up to them to act if they don't want to be held accountable before the law.
            </p>
            <p v-translate>Then Dominique and Solal can turn against Camille, who uploaded the video.</p>
          </div>
        </accordion-element>

        <accordion-element accordion="a" id="What is PeerTube's remuneration policy?"
                           :title="$gettext('What is PeerTube\'s remuneration policy?')">
          <div>
            <p v-translate>There are none, not at the moment, PeerTube is a tool that we wanted neutral in terms of remuneration.</p>
            <p v-translate>
              For now, the solution proposed to people who upload videos is to use the "support" button under the video. This button
              displays a frame in which people who upload videos can display text, images, and links freely. For example, it's possible to
              put a link to Patreon, Tipeee, Paypal, Liberapay (or any other solution) there. Other examples: put a postal address if you'd
              like to receive physical thank-you cards, put a logo of your enterprise, a link to support a non-profit organisation...
            </p>
            <p v-translate>
              We did not go any further because to favour one technical solution would be to impose, in the code, a political vision of
              cultural sharing and its financing. All financial solutions are possible and treated equally in PeerTube.
            </p>
            <p v-translate>
              However, many improvements of PeerTube are to be expected... Including those that would allow you to create (and choose) the
              monetization tools that interest you!
            </p>
            <p v-translate>
              Nevertheless, it is worth remembering that the vast majority of videos published on the Internet (and even on YouTube) are
              shared for non-market purposes: remuneration is a tool, but not necessarily a main or essential purpose.
            </p>
          </div>
        </accordion-element>

        <accordion-element accordion="a" id="Where can I put my videos?" :title="$gettext('Where can I put my videos?')">
          <div>
            <p v-translate>You need to find a PeerTube hosting instance you trust.</p>
            <p v-translate>
              There's a complete <a target="_blank" rel="noopener noreferrer" href="https://instances.joinpeertube.org">list of instances
              here</a>,
              and a list of those that are <a target="_blank" rel="noopener noreferrer" href="/instances">open to registration here</a>.
            </p>
            <p v-translate>
              Then, we recommend you go to the instances, read their "about" page to discover their terms of use (disk space limit per
              user, content policy, etc.).
            </p>
            <p v-translate>
              It's best to contact and talk directly with hosting providers, to understand their business model, vision, etc. Because only
              you can determine what makes you trust such or such host, and thus entrust your videos to them.
            </p>
          </div>
        </accordion-element>

        <accordion-element accordion="a" id="There are many porn videos on PeerTube!"
                           :title="$gettext('There are many porn videos on PeerTube!')">
          <div>
            <p v-translate>
              No. In October 2018, on an average instance federating with ~200 instances and indexing ~16000 videos, only ~200 videos are
              tagged as NSFW (i. e. the content is sensitive, which could be something else than pornography). Therefore, they represent
              only ~1% of all the videos.
            </p>
            <p v-translate>
              Moreover, each administrator decides with which instances he wants to federate: he has the full control of the content he
              wants to display on his instance. It's up to him to choose the policy regarding this kind of videos. He can decide to:
            </p>
            <ul>
              <li v-translate>Display them</li>
              <li v-translate>Blur the title and thumbnail</li>
              <li v-translate>Hide them</li>
            </ul>
            <p v-translate>
              By default, this configuration is set to "Hide them". If some administrators decide to display them with a blur filter
              for example, it's <strong>their</strong> choice.
            </p>
            <p v-translate>
              Finally, any user can override this configuration, and decides if he want to display, blur or hide these videos for
              himself.
            </p>
            <p v-translate>
              PeerTube is just a software: it's not Framasoft (non-profit that develops PeerTube) that's responsible for the content
              published on some instances.
            </p>
            <p v-translate>
              It's up to everyone to be responsible: parents, visitors, uploaders, PeerTube administrators to respect the law and avoid any
              problematic situations.
            </p>
          </div>
        </accordion-element>
      </div>

      <div class="block" role="tablist">
        <div class="title" v-translate>Technical questions</div>

        <accordion-element accordion="a" id="How do I install PeerTube?" :title="$gettext('How do I install PeerTube?')">
          <div>
            <p v-translate>
              The <a target="_blank" rel="noopener noreferrer" href="https://docs.joinpeertube.org/#/install-any-os">installation guide is here</a>
              (only in English).
            </p>
            <p v-translate>
              We recommend not to install PeerTube on low-end hardware or behind a weak connection (for example, on a RaspberryPi with an
              ADSL connection): this could slow down all federations.
            </p>
            <p v-translate>
              Don't bother the developer to help you install your instance: we have a
              <a target="_blank" rel="noopener noreferrer" href="https://framacolibri.org/c/peertube">support forum</a> for that.
            </p>
          </div>
        </accordion-element>

        <accordion-element accordion="a"
                           id="PeerTube v1.0 does not seem to me to contain all the tools necessary for a good management of my instance."
                           :title="$gettext('PeerTube v1.0 does not seem to me to contain all the tools necessary for a good management of my instance.')">
          <div>
            <blockquote v-translate>
              "It's outrageous and unconscious: you're releasing PeerTube's version 1 when it doesn't contain the necessary tools
              to effectively manage videos claimed by rights holders, or to effectively manage the issue of online harassment in comments,
              or to effectively manage monetization through advertising, or to (insert here your request to PeerTube). It will never work!
              What do you intend to do about it?"
            </blockquote>

            <p v-translate>
              You're right. PeerTube 1.0 is not the perfect tool, far from it. And we never promised that this version 1.0 would be a
              tool that would include all the features corresponding to all cases.
            </p>
            <p v-translate>
              PeerTube 1.0 is the realization of the commitment we made in October 2017 to take PeerTube from an alpha version (personal
              project and proof of concept that a federated video platform could work) to a 1.0 version in October 2018 (which does not mean
              "final version", but "version considered stable and distributable").
            </p>
            <p v-translate>
              Remember that PeerTube has only one (almost) full time developer and a small handful of very involved volunteers. It is not a
              product developed by a start-up with a full time team (dev, design, UX, marketing, support, etc.) and significant financial
              support. It is a Community free software, the development of which will continue over the months and, we hope, in the years to
              come.
            </p>
            <p v-translate>
              We are well aware of the shortcomings of PeerTube 1.0, especially in the moderation tools area (videos, comments, etc.). And
              we intend to work on these weaknesses.
            </p>
            <p v-translate>
              We have chosen to do so as follows: on the one hand we will work primarily in the coming months to improve these tools within
              PeerTube itself (in the <i>core</i> of the software). On the other hand, we will also focus, in parallel, a large part of
              PeerTube's development effort during 2019 on the integration of a plugin system, which can be developed by the communities.
            </p>
            <p v-translate>
              Indeed, we do not claim to have the science behind it and know how best to manage each of the tools according to each of the
              needs. For example: with regard to the question of DMCA requests, cases vary according to geographical jurisdictions (European
              law is different from French law, itself different from Canadian law, itself different from American law, etc.). Concerning
              the tools for moderating comments, here again, we cannot decree ourselves experts of the subject, because this is simply not
              the case.
            </p>
            <p v-translate>
              By acting both on the <i>core</i>, but also by allowing the development of plugins, we believe that PeerTube will, in the
              long term, be able to respond much better to these issues and allow different communities to adapt PeerTube to their needs.
            </p>
            <p v-translate>
              We are working as quickly as possible to improve PeerTube, but we are doing so with the resources we have, which means
              <strong>very</strong> limited.
            </p>
            <p v-translate>
              In the meantime, as an user if you feel that PeerTube 1.0 does not currently meet your needs, it's simple: don't use it right
              now :) (we remind you that we don't make money developing PeerTube, and that if we obviously hope for its success, the
              survival of our association doesn't depend on it).
            </p>
          </div>
        </accordion-element>

        <accordion-element accordion="a" id="How do I contribute to PeerTube’s code?"
                           :title="$gettext('How do I contribute to PeerTube’s code?')">
          <div>
            <p v-translate>
              The <a target="_blank" rel="noopener noreferrer" href="https://github.com/Chocobozzz/PeerTube">Git repository of PeerTube is
              here</a>.
            </p>

            <p v-translate>
              You can <a target="_blank" rel="noopener noreferrer" href="https://github.com/Chocobozzz/PeerTube/issues">create an issue</a>,
              contribute to it, or even start contributing by choosing the
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/Chocobozzz/PeerTube/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue+%3Abeginner%3A%22">
                easy problems for those who begin
              </a>.
              See <a target="_blank" rel="noopener noreferrer" href="https://docs.joinpeertube.org/#/contribute-getting-started">contributing guide</a>
              for more information.
            </p>

            <p v-translate>
              If you want to help out in another way, or if you want to request a feature, come discuss it on our
              <a target="_blank" rel="noopener noreferrer" href="https://framacolibri.org/c/peertube">contribution forum</a>.
            </p>
          </div>
        </accordion-element>

        <accordion-element accordion="a" id="Why does PeerTube use the ActivityPub federation protocol? Why not IPFS / d.tube / Steemit?"
                           :title="$gettext('Why does PeerTube use the ActivityPub federation protocol? Why not IPFS / d.tube / Steemit?')">
          <div>
            <p v-translate>
              PeerTube uses ActivityPub because this federation protocol is recommended by the W3C and is already used by the federated
              social network Mastodon.
            </p>

            <p v-translate>IPFS is a great technology, but it still seems very (too!) young for large scale streaming of large files.</p>

            <p v-translate>
              After discussing it on our forum, we feel that d.tube is not free or open source, because publishing only compiled code
              hinders freedom of modification.
            </p>

            <p v-translate>
              PeerTube is free, decentralized, distributed, and does not impose any remuneration model. This is the choice we have made,
              which is debatable, and others (like d.tube) have made other choices, which have their advantages. So it’s up to you to see
              what suits you.
            </p>
          </div>
        </accordion-element>

        <div class="bottom-link-wrapper">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Chocobozzz/PeerTube/blob/develop/FAQ.md"
             class="bottom-link">
            <span class="text" v-translate>More technical questions</span>
            <icon-right></icon-right>
          </a>
        </div>
      </div>

    </div>
  </main>
</template>

<style lang="scss">
  header a {
    color: #000;
  }
</style>

<style scoped lang="scss">
  @import '../scss/_variables.scss';

  .block .title {
    font-size: 22px;
    margin-top: 30px;
    margin-bottom: 15px;
  }

  .card {
    margin: 5px 0;
  }

  .blocks {
    margin: 60px auto;
  }

  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }
</style>

<script>
  import AccordionElement from '../components/AccordionElement'
  import IconRight from '../components/icons/IconRight'

  export default {
    components: {
      AccordionElement,
      IconRight
    },

    metaInfo: function () {
      return {
        title: this.$gettext('FAQ')
      }
    }
  }
</script>
