+++

date = "2018-02-28T14:41:00+01:00"
title = "FAQ"
author = "Framasoft"
draft = false
type = "page"
id = "-faq"
+++

{{% grid class="row" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12" %}}
<h2 class="text-center">10 questions to discover Framatube...</h2>

<!--début accordéon-->
<div id="accordion" class="panel-group">
<!-- question 01-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse01">1. What's PeerTube?</a>
    </h4>
  </div>
  <div id="collapse01" class="panel-collapse collapse in">
    <div class="panel-body">
      <p>PeerTube is a software that you install on a server. It allows you to create a website for hosting and broadcasting videos, like your own YouTube.</p>
      <p>The difference with YouTube is that it is not designed to create a huge platform centralizing videos from all over the world on a server farm (which is horribly expensive).</p>
      <p>On the contrary, PeerTube's concept is to create a network of many small, interconnected video hosts.</p>
    </div>
  </div>
</div>
<!-- question 02-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse02">2. Why create new software to host videos?</a>
    </h4>
  </div>
  <div id="collapse02" class="panel-collapse collapse">
    <div class="panel-body">
      <p>PeerTube is unique because (to our knowledge) it's the only web-based video hosting application that combines three advantages:</p>
      <ol>
        <li>An open code (transparency) under a free-libre license (ethics, respect & community development);</li>
        <li>A federation of interconnected video web-hosts (each host present a bigger choice of videos than just its own);</li>
        <li>Broadcasting -and therefore peer-to-peer viewing (so no slowing down when a video becomes viral).</li>
      </ol>
      <p>Linked together, these three features make it easy to host videos on the server side, while still being convenient and fun for the audience.</p>
    </div>
  </div>
</div>
<!-- question 03-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse03">3. Why is it better to have free-libre software?</a>
    </h4>
  </div>
  <div id="collapse03" class="panel-collapse collapse">
    <div class="panel-body">
      <p>Because it is a software that respects our fundamental freedoms, and guarantees them by <a href="https://github.com/Chocobozzz/PeerTube/blob/develop/LICENSE">a license</a>, therefore a legally enforceable contract.</p>
      <p>Concretely, here, it means that:</p>
      <ul>
        <li>PeerTube is distributed free of charge, no need to pay to install it on one's server;</li>
        <li>You can look under the PeerTube hood (his source code): it is auditable, transparent;</li>
        <li>Its development is community-based, it can be enriched by the contributions of each individual.</li>
      </ul>
    </div>
  </div>
</div>
<!-- question 04-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse04">4. What is the interest of federating video hosting?</a>
    </h4>
  </div>
  <div id="collapse04" class="panel-collapse collapse">
    <div class="panel-body">
      <p>The advantage of YouTube (and other platforms) is its video catalog: from knitting tutorials to minecraft let's play and videos of kittens or holidays... you can find everything!</p>
      <p>The more varied is the video catalog, the wider is the audience, the more videos are posted... but hosting everyone's videos is (very, very) expensive!</p>
      <p>If video-host Knit-PeerTube sucribes to Kittens-Tube and to Framatube, it will display the videos of these tubes on its website: we dilute hosting costs while remaining convenient and complete for Internet users.</p>
      <p>The PeerTube federation protocol will be fluid (each video-host can choose to which other hosts he wants to suscribe), and based on <a href="https://activitypub.rocks/">ActivityPub</a>: this will open up the possibility of connecting with tools like Mastodon or MediaGoblin.</p>
    </div>
  </div>
</div>
<!-- question 05-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse05">5. Why use peer-to-peer broadcasting?</a>
    </h4>
  </div>
  <div id="collapse05" class="panel-collapse collapse">
    <div class="panel-body">
      <p>When you host a heavy file such as a video, your biggest threat is success: if a video becomes viral and lots of people are watching it at the same time, the server might shut down!</p>
      <p>Using the <a href="https://en.wikipedia.org/wiki/WebRTC">WebRTC</a> protocol, Peer-to-peer streaming means that users who watch the same video at the same time to exchange bits of files, which relieves the server.</p>
      <p>There's nothing to do: your web browser does it automatically. If your network doesn't allow it (routers, firewalls, etc.), this function is disabled to switch back to an “old fashioned” video streaming ;).</p>
    </div>
  </div>
</div>
<!-- question 06-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse06">6. So in March, PeerTube will dethrone YouTube?</a>
    </h4>
  </div>
  <div id="collapse06" class="panel-collapse collapse">
    <div class="panel-body">
      <p>We can answer with certainty: no!</p>
      <p>In March 2018, PeerTube will release its publicly usable beta version. We are already working with several collectives so that the first federated video-hosting websites will be opened on this date, including ours.</p>
      <p>But PeerTube won't be perfect yet, and many features will be missing: if we exceed our fundraising targets, our priority will be to invest even more in its development.</p>
      <p>March 2018 will represent the birth of the PeerTube federations: the more this software will be used and supported, the more people will use it and contribute to it, and the sooner it will evolve towards a concrete alternative to platforms such as YouTube.</p>
    </div>
  </div>
</div>
<!-- question 07-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse07">7. But if it's free, we'll see everything and anything in the videos?</a>
    </h4>
  </div>
  <div id="collapse07" class="panel-collapse collapse">
    <div class="panel-body">
      <p>To be free does not mean to be above the law! Each PeerTube hosting provider will be able to decide on its own terms and conditions of use, within the framework of the law on which they depend.</p>
      <p>For example, in France, discriminatory content <a href="https://en.wikipedia.org/wiki/Hate_speech">are prohibited</a> and may be <a href="http://stop-discrimination.gouv.fr/agir/ne-pas-laisser-faire-les-recours">reported to the authorities [fr]</a>. PeerTube will allow Internet users to report problematic video, and each host will have to apply its moderation in accordance with its terms and conditions and with the law.</p>
      <p>The federation system, on the other hand, will allow video-hosts to decide with whom they want to network, or not, depending on the types of content or moderation policies of others.</p>
    </div>
  </div>
</div>
<!-- question 08-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse08">8. But this PeerTube, why do you call it Framatube?</a>
    </h4>
  </div>
  <div id="collapse08" class="panel-collapse collapse">
    <div class="panel-body">
      <p>Framatube is the name we have given to the crowdfunding project, to promote the development of PeerTube.</p>
      <p>By March 2018, when PeerTube will have a publicly usable beta version, Framatube will become only one of the PeerTube video-hosting websites, only one of the gateways to this federated network.</p>
      <p>The future Framatube website will only host free licensed videos about free-libre software and its culture. But it will be federated with other video-hosters who might be able to host your videos.</p>
      <p>The name Framatube comes from the name of our association, <a href="https://en.wikipedia.org/wiki/Framasoft">Framasoft</a>: we wanted to put our resources and reputation at the service of this project because we believe that it can radically change the digital landscape.</p>
    </div>
  </div>
</div>
<!-- question 09-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse09">9. And who are you, Framasoft?</a>
    </h4>
  </div>
  <div id="collapse09" class="panel-collapse collapse">
    <div class="panel-body">
      <p>Framasoft is a small non-profit based in France, and exists since 2004. Our goal is to promote digital freedoms to the general public through pratical projects.</p>
      <p>From October 2014 to October 2017, we campaigned to <a href="https://degooglisons-internet.org/?l=en">De-googl-ify Internet</a>, in order to demonstrate that free software can be an ethical alternative to the services of the Big Data companies.</p>
      <p>We now host more than <a href="https://degooglisons-internet.org/list/?l=en">30 alternative services</a> that allow hundreds of thousands of people to change their digital habits, and we're funded mainly though donations.</p>
      <p>We have invested in the financing of PeerTube development as part of our new campaign <a href="https://contributopia.org/en/home">Contributopia</a>, which aims to make the digital tools of a contribution society a reality.</p>
    </div>
  </div>
</div>
<!-- question 10-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse10">10. If I support you, where will my money go?</a>
    </h4>
  </div>
  <div id="collapse10" class="panel-collapse collapse">
    <div class="panel-body">
      <p>It will go into the Framasoft 2018 budget, as will all the donations we receive.</p>
      <p>According to French law, on which Framasoft depends, a donation cannot be attributed to a specific item of an non-profit's expenses.</p>
      <p>So we decided to be transparent:</p>
      <ul>
        <li>Framasoft commits €30,000 to the development of PeerTube;</li>
        <li>We are 90,000 € short of our budget for 2018 (which includes PeerTube, maintaining the <a href="https://degooglisons-internet.org/?l=en">De-Google-ify Internet</a> services, and future projects of the <a href="https://contributopia.org/en/home">Contributopia</a> campaign)</li>
        <li>If we exceed this target by 31/12/2017, our priority will be to invest in the development of PeerTube after the release of the beta (with additional features).</li>
      </ul>
      <p>Our accounting records are audited and validated by an independent auditor whose annual reports we publish <a href="https://soutenir.framasoft.org/association">on this page [fr]</a> (see <a href="https://soutenir.framasoft.org/sites/default/files/rapport_financier_2016.pdf">report 2016 [fr]</a>).</p>
    </div>
  </div>
</div>
</div>
<!-- fin accordéon-->
{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
