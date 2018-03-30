+++

date = "2018-02-28T14:41:00+01:00"
title = "FAQ"
author = "Framasoft"
draft = false
type = "page"
+++

{{% grid class="row faq" %}}
{{% grid class="container" %}}
{{< grid class="col-sm-12" >}}
<h2 class="text-center">A few questions to discover PeerTube…</h2>

<!--début accordéon-->
<div id="accordion" class="panel-group">
<!-- question 01-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse01">

1. What's PeerTube?

      </a>
    </h4>
  </div>
  <div id="collapse01" class="panel-collapse collapse in">
    <div class="panel-body">
      <p>

PeerTube is a software that you install on a web server. It allows you to create a video hosting website, a bit like YouTube.

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
<!-- question 02-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse02">

2. Why create a new software to host videos?

      </a>
    </h4>
  </div>
  <div id="collapse02" class="panel-collapse collapse">
    <div class="panel-body">
      <p>

PeerTube is unique because (as far as we know) it's the only video hosting web application which combines three advantages:

      </p>
      <ol>
        <li>

An open code (transparency) under a free/libre license (ethic, respect and community development) ;

        </li>
        <li>

A federation of interconnected hosting providers (so more video choices wherever you go to see them) ;

        </li>
        <li>

Broadcasting - and therefore viewing - peer-to-peer (so no slowing down when a video becomes viral).

        </li>
      </ol>
      <p>

Linked together, these three features makes it easy to host videos on the server side, while remaining practical, ethical and fun for the internet users.

      </p>
    </div>
  </div>
</div>
<!-- question 03-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse03">

3. Why is it better as a free/libre software?

      </a>
    </h4>
  </div>
  <div id="collapse03" class="panel-collapse collapse">
    <div class="panel-body">
      <p>

Because it's software that respects our fundamental freedoms, and guarantees them by <a href="https://github.com/Chocobozzz/PeerTube/blob/develop/LICENSE">a license</a>, so a legally enforceable contract.

      </p>
      <p>

Concretely here, it means that:

      </p>
      <ul>
        <li>

PeerTube is freely provided, no need to pay to install it on your server ;

        </li>
        <li>

We can look under the hood of PeerTube (it's source code): it's auditable, transparent;

        </li>
        <li>

It's development is community-based, it can be enhanced by everyone's contributions.

        </li>
      </ul>
    </div>
  </div>
</div>
<!-- question 04-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse04">

4. What's the interest to federate the video hosting providers

      </a>
    </h4>
  </div>
  <div id="collapse04" class="panel-collapse collapse">
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
<!-- question 05-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse05">

5. Why broadcast PeerTube videos through peer-to-peer?

      </a>
    </h4>
  </div>
  <div id="collapse05" class="panel-collapse collapse">
    <div class="panel-body">
      <p>

When you host a large file like a video, the biggest thing to fear is success: if a video becomes viral and many people watch it at the same time, the server has a big risk of falling!

      </p>
      <p>

Peer-to-peer broadcasting allows, thanks to the <a href="https://fr.wikipedia.org/wiki/WebRTC">WebRTC</a> protocol, that Internet users who watch the same video at the same time exchange bits of files, which relieves the server.

      </p>
      <p>

There is nothing to do: your web browser does it automatically. If you are on a mobile phone or if your network does not allow it (router, firewall, etc.), this function is disabled and switches back to an "old-style" video broadcast ;).

      </p>
    </div>
  </div>
</div>
<!-- question 06-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse06">

6. From March 2018, PeerTube will dethrone YouTube?

      </a>
    </h4>
  </div>
  <div id="collapse06" class="panel-collapse collapse">
    <div class="panel-body">
      <p>

We can answer with certainty: no!

      </p>
      <p>

In March 2018, PeerTube released its publicly usable beta version. Several collectives set up the first instances, thus creating the bases of the federation.

      </p>
      <p>

But PeerTube is not (yet) perfect, and many features are missing. We intend to continue to improve it to release a version 1 by the end of 2018.

      </p>
      <p>

March 2018 thus represents the birth of the PeerTube federations: the more this software will be used and supported, the more people will use it and contribute to it, and the faster it will evolve towards a concrete alternative to platforms such as YouTube.

      </p>
    </div>
  </div>
</div>
<!-- question 07-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse07">

7. But if it's free, we'll see videos about anything and everything?

    </a>
    </h4>
  </div>
  <div id="collapse07" class="panel-collapse collapse">
    <div class="panel-body">
      <p>

Being free doesn't mean being above the law! Each PeerTube hosting provider can decide its own general conditions of use, within the law on which they depend.

      </p>
      <p>

For example, in France, discriminatory content <a href="https://fr.wikipedia.org/wiki/Lois_contre_le_racisme_et_les_discours_de_haine">is prohibited</a> and may be <a href="http://stop-discrimination.gouv.fr/agir/ne-pas-laisser-faire-les-recours">reported to the authorities</a>. PeerTube allows users to report a problematic video, and each administrator must then apply its moderation in accordance with its terms and conditions and the law.

      </p>
      <p>

The federation system, for its part, allows hosts to decide with whom they want to connect with, or not, depending on the types of content or the moderation policies of others.

      </p>
    </div>
  </div>
</div>
<!-- question 08 à effacer !!!
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse08">8. Mais ce PeerTube, pourquoi vous l’appellez Framatube ?</a>
    </h4>
  </div>
  <div id="collapse08" class="panel-collapse collapse">
    <div class="panel-body">
      <p>Framatube est le nom que nous avons donné au projet de financement participatif, pour promouvoir le développement de PeerTube.</p>
      <p>Dès mars 2018, lorsque PeerTube aura une version bêta utilisée publiquement, Framatube ne deviendra qu’un des hébergements PeerTube, qu’une des portes d’entrées vers ce réseau fédéré.</p>
      <p>Le futur hébergment Framatube n’hébergera que des vidéos sous licences libres, traitant du logiciel libre et de sa culture. Mais il sera en relation avec d’autres hébergements qui pourront, peut-être, héberger vos vidéos.</p>
      <p>Le nom Framatube vient du nom de notre association, <a href="https://fr.wikipedia.org/wiki/Framasoft">Framasoft</a> : nous avons voulu mettre nos moyens et notre réputation au service de ce projet car nous croyons qu’il peut radicalement changer le paysage numérique.</p>
    </div>
  </div>
</div>
-->
<!-- question 09-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse09">

8. Who is this "Framasoft" that organizes the development of PeerTube?

      </a>
    </h4>
  </div>
  <div id="collapse09" class="panel-collapse collapse">
    <div class="panel-body">
      <p>

Framasoft is a small association based in France, which exists since 2004. Our aim is to promote digital freedoms to the general public through concrete projects.

      </p>
      <p>

From October 2014 to October 2017, we campaigned for "<a href="https://degooglisons-internet.org/?l=en">De-google-ify Internet</a>", to demonstrate that free software can be an ethical alternative to the services of web giants.

      </p>
      <p>

We now host over <a href="https://degooglisons-internet.org/liste?l=en">30 alternative services</a> that enable hundreds of thousands of people to change their digital habits, all funded primarily by donations.

      </p>
      <p>

We have invested in the financing of PeerTube as part of our new campaign <a href="https://contributopia.org">Contributopia</a>, which aims to realise the digital tools for a contribution-based society.

      </p>
    </div>
  </div>
</div>
<!-- question 10-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse10">

9. If I support Framasoft, where will my money go?

      </a>
    </h4>
  </div>
  <div id="collapse10" class="panel-collapse collapse">
    <div class="panel-body">
      <p>

It will go into the budget of the Framasoft association, like all the donations we receive.

      </p>
      <p>

According to the French law to which Framasoft is subject, a donation cannot commit a counterpart or be allocated to a specific item of an association's expenses.

      </p>
      <p>

We seek to be transparent and regularly report on all the actions we take, whether in our <a href="https://framablog.org">blog</a>, our <a href="https://contact.framasoft.org/newsletter/">newsletter</a>, or on our social media accounts.

      </p>
      <p>

Our accounts are audited and validated by an independent auditor whose annual reports we publish <a href="https://soutenir.framasoft.org/association">on this page</a> (see <a href="https://soutenir.framasoft.org/sites/default/files/rapport_financier_2016.pdf">the 2016</a> report).

      </p>
    </div>
  </div>
</div>
</div>
<!-- fin accordéon--><p>

<a href="https://framacolibri.org/c/qualite/peertube">Exchange on our forum</a>

{{< /grid >}}
{{% /grid %}}
{{% /grid %}}