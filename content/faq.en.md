+++

date = "2018-02-28T14:41:00+01:00"
title = "PeerTube - FAQ"
description = ""
author = "Framasoft"
draft = false
type = "page"
+++

{{% grid class="row faq" %}}
{{% grid class="container" %}}
{{< grid class="col-sm-12" >}}

<h2 class="text-center">

A few questions to discover PeerTube...

</h2>
<p><i class="text-center">

(click on the questions to discover the answers)

</i></p>
<h3>

PeerTube Presentation

</h3>

<!-- début accordéon -->

<div id="accordion-presentation" class="panel-group" role="tablist" aria-multiselectable="true">
<!-- what -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#what" aria-controls="what" aria-expanded="true">

What is PeerTube?

    </a>
  </h4>
</div>

<div id="what" class="panel-collapse collapse in">

  <div class="panel-body">
    <p>

PeerTube is a software that you install on a web server.

It allows you to create a video hosting website, so create your "homemade YouTube".

    </p>
    <p>

The difference to YouTube is that it's not intended to create a huge platform centralizing videos from the whole world on a single server farm (which is horribly expensive).

    </p>
    <p>

On the contrary, PeerTube's concept is to create a network of multiple small interconnected video hosting providers. 

    </p>
  </div>
</div>
</div>

<!-- pros -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#pros" aria-controls="pros" aria-expanded="false">

The three main advantages of PeerTube.

    </a>
  </h4>
</div>

<div id="pros" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

PeerTube is unique because (as far as we know) it's the only video hosting web application which combines three advantages:

    </p>
    <ol>
      <li>

An open code (transparency) under a free/libre license (ethic, respect and community-driven development);

      </li>
      <li>

A federation of interconnected hosting providers (so more video choices wherever you go to see them);

      </li>
      <li>

Broadcasting – and therefore viewing – peer-to-peer (so no slowing down when a video becomes viral).

      </li>
    </ol>
    <p>

Linked together, these three features makes it easy to host videos on the server side, while remaining practical, ethical and fun for the internet users.

    </p>
  </div>
</div>
</div>

<!-- libre -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#libre" aria-controls="libre" aria-expanded="false">

Why is it better as a free/libre software?

    </a>
  </h4>
</div>

<div id="libre" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Because it's software that respects our fundamental freedoms, and guarantees them by <a href="https://github.com/Chocobozzz/PeerTube/blob/develop/LICENSE">a license</a>, so a legally enforceable contract.

    </p>
    <p>

Concretely here, it means that:

    </p>
    <ul>
      <li>

PeerTube is freely provided, no need to pay to install it on your server;

      </li>
      <li>

We can look under the hood of PeerTube (its source code): it's auditable, transparent;

      </li>
      <li>

It's development is community-based, it can be enhanced by everyone's contributions.

      </li>
    </ul>
  </div>
</div>
</div>

<!-- federated -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#federated" aria-controls="federated" aria-expanded="false">

What's the interest to federate the video hosting providers?

    </a>
  </h4>
</div>

<div id="federated" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

The advantage of YouTube (and other platforms) is its video catalog: from knitting tutorials to minecraft constructions through videos of kittens or holidays... you can find everything! 

    </p>
    <p>

The more the video catalogue is varied, the more people are interested, the more videos are posted... but hosting videos from all over the world is (very, very) expensive!

    </p>
    <p>

If the hosting provider Knitting-PeerTube becomes friends with Kittens-Tube and Framatube, it will display the videos of others on its site: thus diluting hosting costs while remaining practical and complete for Internet users.

    </p>
    <p>

PeerTube's federation protocol will be fluid (everyone can choose their "friends" hosts), and based on <a href="https://activitypub.rocks/">ActivityPub</a>: this will open the possibility to connect with tools like Mastodon or MediaGoblin.

    </p>
  </div>
</div>
</div>

<!-- p2p -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#p2p" aria-controls="p2p" aria-expanded="false">

Why broadcast PeerTube videos through peer-to-peer?

    </a>
  </h4>
</div>

<div id="p2p" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

When you host a large file like a video, the biggest thing to fear is success: if a video becomes viral and many people watch it at the same time, the server has a big risk of falling!

    </p>
    <p>

Peer-to-peer broadcasting allows, thanks to the <a href="https://fr.wikipedia.org/wiki/WebRTC">WebRTC</a> protocol, that Internet users who watch the same video at the same time exchange bits of files, which relieves the server.

    </p>
    <p>

There is nothing to do: your web browser does it automatically.

If you are on a mobile phone or if your network does not allow it (router, firewall, etc.), this function is disabled and switches back to an "old-style" video broadcast &#x1F609;.

    </p>
  </div>
</div>
</div>

<!-- admin -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#admin" aria-controls="admin" aria-expanded="false">

For those who know how to administer a server, PeerTube is…

    </a>
  </h4>
</div>

<div id="admin" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

<strong>It's a software you install on your server</strong> to create a website hosting and broadcasting videos&hellip;

Basically: you create your own "homemade YouTube"!

    </p>
    <p>

There already are Free-libre softwares that enable you to do this.

But with PeerTube, you can link your PeerTube instance (your videos website) to Zaïd's PeerTube instance (where he hosts videos of the lectures for his people's university), to Catherin's (who hosts her webmedia's videos) or even to Solar's PeerTube instance (who manages a vlogers collective).

    </p>
    <p>

      <strong>

But PeerTube doesn't centralize: it federates.

      </strong>

Thanks to the <a href="https://activitypub.rocks/">ActivityPub</a> protocol (also used by <a href="https://joinmastodon.org/">the Mastodon federation</a>, a free-libre Twitter alternative), PeerTube can federates several small hosters so they don't have to buy thousands of hard disks to host videos for the whole world.

    </p>
    <p>

As a result, on your PeerTube website, the audience will be able to watch not only your videos, but also videos hosted by Zaïd, Catherin or Solar&hellip; without having to host their videos on you PeerTube-powered website.

Such diversity in a video-catalog makes it very attractive.

Such a large choice and diversity of videos made centralized platform such YouTube very succesfull.

    </p>
    <p>

Federation offers another benefit: <strong>everyone becomes independant</strong>.

Zaïd, Catherin, Solar and yourself can make your own rules, your own Terms of Services (for exemple, one can imagine a MeowTube where dogs videos are strictly forbidden&#x1F642;).

    </p>
  </div>
</div>
</div>

<!-- video-maker -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#video-maker" aria-controls="video-maker" aria-expanded="false">

For those who wants to upload their videos, PeerTube allows&hellip;

    </a>
  </h4>
</div>

<div id="video-maker" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

It allows you to choose a hoster that fits you.

YouTube's excesses are a good exemple: its hoster, Google-Alphabet, can impose its "Robocopyright" (the ContentID system) or its tools to index, recommand and spolight videos; and those tools seems as unfair as they are obscure.

Even though, it already forces you <a href="https://tosdr.org/#youtube">to give it extended copyrights on your videos, for free</a>!

    </p>
    <p>

With PeerTube, <strong>you can choose the hoster of your videos according to his terms of services</strong>, his moderation policy, his federation choices&hellip;

As you don't have a tech giant facing you, you might be able to talk with you hoster if you ever have a problem, a need, or something you want.

    </p>
    <p>

The other big advantage of PeerTube is that your hoster doesn't have to fear the sudden success of one of your videos.

Indeed, PeerTube broadcasts videos with the protocol <a href="https://en.wikipedia.org/wiki/BitTorrent">WebTorrent</a>.

If hundreds of people are watching your video at the same time, their browsers automatically send bits of your video to other viewers.

    </p>
    <p>

Before this peer-to-peer broadcast, successful videographers (or videos that make the buzz) were doomed to be hosted by a web giant whose infrastructure can handle millions of simultaneous views…

Or to pay very expensive an independent video hosting so that it holds the load.

    </p>
  </div>
</div>
</div>

<!-- audience -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#audience" aria-controls="audience" aria-expanded="false">

For those who wants to watch videos, PeerTube has the benefit of&hellip;

    </a>
  </h4>
</div>

<div id="audience" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

One of the benefits is that <strong>you become a part of the broadcasting of the videos you are watching</strong>.

If other people are watching a PeerTube video at the same time as you, as long as your tab remains open, your browser shares bits of that video and you participate in a healthier use of the Internet.

    </p>
    <p>

Of course, PeerTube's video player adapts to your situation : if your installation does not allow peer-to-peer playback (corporate network, recalcitrant browser, etc.) video playback will be done in the classic way.

    </p>
    <p>

But above all, <strong>PeerTube considers you as a person, and not as a product</strong> that you have to track, profile, and lock in video loops to better sell your available brain time.

Thus, the <a href="https://github.com/Chocobozzz/PeerTube">source code</a> (the recipe) of the PeerTube software is open, making its operation transparent.

    </p>
    <p>

      <strong>

PeerTube is not only open-source: it's free (as in free speech).

      </strong>

Its free license guarantees our fundamental freedoms as users.

It is this respect for our freedoms that allows Framasoft to invite you to contribute to this software, and many evolutions (innovative comment system, etc.) have already been blown away by some of you.

    </p>
  </div>
</div>
</div>

<!-- remplace-yt -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#remplace-yt" aria-controls="remplace-yt" aria-expanded="false">

Is PeerTube's purpose to replace YouTube?

    </a>
  </h4>
</div>

<div id="remplace-yt" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

We can answer with certainty: no!

    </p>
    <p>

In March 2018, PeerTube released its publicly usable beta version.

 Several collectives set up the first instances, thus creating the bases of the federation.

    </p>
    <p>

But this is just the beginning, PeerTube is not (yet) perfect, and many features are missing.

We intend to continue to improve it to release a version 1 by the end of 2018.

    </p>
    <p>

March 2018 thus represents the birth of the PeerTube federations: the more this software will be used and supported, the more people will use it and contribute to it, and the faster it will evolve towards a concrete alternative to platforms such as YouTube.

    </p>
    <p>

Nevertheless, the ambition remains to be <strong>a free and decentralized alternative</strong>: the goal of an alternative is not to replace, but to propose something else, with different values, in parallel to what already exists.

    </p>
  </div>
</div>
</div>
<!-- fin questions -->
</div>

<!-- fin accordéon -->

<h3>

Creation and contents

</h3>

<!--début accordéon -->

<div id="accordion-creation" class="panel-group" role="tablist" aria-multiselectable="true">
<!-- law -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#law" aria-controls="law" aria-expanded="false">

If it's free, can we put illegal contents on it?

  </a>
  </h4>
</div>

<div id="law" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Being free doesn't mean being above the law!

Each PeerTube hosting provider can decide its own general conditions of use, within the law on which they depend.

    </p>
    <p>

For example, in France, discriminatory content <a href="https://fr.wikipedia.org/wiki/Lois_contre_le_racisme_et_les_discours_de_haine">is prohibited</a> and may be <a href="http://stop-discrimination.gouv.fr/agir/ne-pas-laisser-faire-les-recours">reported to the authorities</a>.

PeerTube allows users to report a problematic video, and each administrator must then apply its moderation in accordance with its terms and conditions and the law.

    </p>
    <p>

The federation system, for its part, allows hosts to decide with whom they want to connect with, or not, depending on the types of content or the moderation policies of others.

    </p>
  </div>
</div>
</div>

<!-- responsible -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#responsible" aria-controls="responsible" aria-expanded="false">

Who is responsible for content published on PeerTube?

    </a>
  </h4>
</div>

<div id="responsible" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

PeerTube is not a website : it is software that allows a web hoster (for example, Dominique) to create a video website (let's call it DominiqueTube).

    </p>
    <p>

Now imagine that Camille has created an account on DominiqueTube and uploads an illegal video, because this video uses music created by Solal.

    </p>
    <p>

Solal goes on Framatube, an instance which follows DominiqueTube.

So, Solal can see, from Framatube, the videos published on DominiqueTube.

    </p>
    <p>

Solal sees Camille's illegal video, and signals it with the button provided for that purpose.

Although the report is made from Framatube, it is sent directly to the person hosting the illegal content, Dominique.

    </p>
    <p>

From that moment on, Dominique is responsible, because she's warned that she's hosting an illegal video.

It is therefore up to it to act if it does not want to be accountable before the law.

    </p>
    <p>

Then Dominique and Solal can turn against Camille, who committed the misdeed.

    </p>
  </div>
</div>
</div>

<!-- money -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#money" aria-controls="money" aria-expanded="false">

What is PeerTube's remuneration policy?

    </a>
  </h4>
</div>

<div id="money" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

There are none, not at the moment : PeerTube is a tool that we wanted neutral in terms of remuneration.

    </p>
    <p>

For now, the solution proposed to people who upload videos is to use the "support" button under the video. This button displays a frame in which people who upload videos can display text, images, and links freely. For example, it's possible to put a patreon, Tipeee, Paypal, Liberapay (or another solution) button. Other examples: put an adress for a postcard thanks, put a logo of your enterprise, a link for support an GNO,...

    </p>
    <p>

We did not go any further because to favour a technical solution would be to impose, in the code, a political vision of cultural sharing and its financing. Every financial solutions are possibles in PeerTube.

    </p>
    <p>

However many improvements of PeerTube are to be expected...

Including those that would allow you to create (and choose) the monetization tools that interest you!

    </p>
    <p>

Nevertheless, it is worth remembering that the vast majority of videos published on the Internet (and even on YouTube) are shared for non-market purposes: remuneration is a tool, but not necessarily a main or essential purpose.

    </p>
  </div>
</div>
</div>

<!-- instances -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#instances" aria-controls="instances" aria-expanded="false">

Where can I put my videos?

    </a>
  </h4>
</div>

<div id="instances" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

You need to find a PeerTube hosting instance you trust.

    </p>
    <p>

The complete list of instances <a href="https://instances.joinpeertube.org/">is there</a>, and we show <a href="https://joinpeertube.org/fr/#getting-started">here those that are open to registration</a>.

    </p>
    <p>

Then, we recommend you go to the instances, read their "about" page to discover their terms of use (disk space limit per user, content policy, etc.).

    </p>
    <p>

The best is to contact and discuss directly with hosting providers, to understand their business model, vision, etc.

Because only you can determine what makes you trust such or such host, and thus entrust your videos to him.

    </p>
  </div>
</div>
</div>
<!-- fin questions -->
</div>

<!-- fin accordéon -->

<a href="https://framacolibri.org/c/peertube">Exchange on our forum</a>

<h3>

Technical questions

</h3>

<!--début accordéon -->

<div id="accordion-tech" class="panel-group" role="tablist" aria-multiselectable="true">
<!-- install -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-tech" href="#install" aria-controls="install" aria-expanded="false">

How to install PeerTube?

    </a>
  </h4>
</div>

<div id="install" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

The <a href="https://github.com/Chocobozzz/PeerTube/blob/develop/support/doc/production.md">installation guide is here</a> (only in English, for the moment).

    </p>
    <p>

We recommend not to install PeerTube on a weak hardware or behind a weak connection (for example, on a RaspberryPi with an ADSL connection): this could slow down all federations.

    </p>
    <p>

Don't bother the developer to help you install your instance: our <a href="https://framacolibri.org/c/peertube">support forum</a> is there for that.

    </p>
  </div>
</div>
</div>

<!-- code -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-tech" href="#code" aria-controls="code" aria-expanded="false">

How to participate to PeerTube's  code?

    </a>
  </h4>
</div>

<div id="code" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

The <a href="https://github.com/Chocobozzz/PeerTube">git repository of PeerTube is here</a>.

    </p>
    <p>

You can <a href="https://github.com/Chocobozzz/PeerTube/issues">create an issue</a>, contribute to it, or even start contributing by choosing the <a href="https://github.com/Chocobozzz/PeerTube/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22">easy problems for those who begin</a>.

    </p>
    <p>

If you want to provide another type of help, or if you want a feature that is not available, come discuss it on our <a href="https://framacolibri.org/c/peertube">contribution forum</a>.

    </p>
  </div>
</div>
</div>

<!-- protocol -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-tech" href="#protocol" aria-controls="protocol" aria-expanded="false">

Why does PeerTube use the ActivityPub federation protocol? Why not IPFS / d.tube / Steemit?

    </a>
  </h4>
</div>

<div id="protocol" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

PeerTube uses ActivityPub because this federation protocol is recommended by the W3C and is already used by the federated social network Mastodon.

    </p>
    <p>

 IPFS is a great technology, but it still seems very (too!) young for large scale streaming of large files.

    </p>
    <p>

After discussing it on our forum, we feel that d.tube is not free or open source, because publishing only compiled code hinders freedom of modification.

    </p>
    <p>

D.tube is based on Steem for "remuneration", it is a choice, but Steem is <a href="https://en.wikipedia.org/wiki/Steemit#Criticism">widely criticized</a> as <a href="https://steemit.com/steemit/@docdelux/30-days-of-steemit-here-is-my-criticism">highly centralized</a>, and especially <a href="https://steemit.com/steemit/@thecryptonews/psa-constructive-criticism-the-ugly-truth-behind-steemit">close to a Ponzi system</a>.

    </p>
    <p>

PeerTube is free, decentralized, distributed, and does not impose any remuneration model.

This is the choice we have made, which is debatable, and others (like d.tube) have made other choices, which have their advantages.

So it's up to you to see what suits you.

    </p>
  </div>
</div>
</div>
<!-- fin questions -->
</div>
<!-- fin accordéon -->

{{< /grid >}}
{{% /grid %}}
{{% /grid %}}
