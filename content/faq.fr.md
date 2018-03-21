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
<h2 class="text-center">10 questions pour découvrir Framatube…</h2>

<!--début accordéon-->
<div id="accordion" class="panel-group">
<!-- question 01-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse01">1. C'est quoi, PeerTube ?</a>
    </h4>
  </div>
  <div id="collapse01" class="panel-collapse collapse in">
    <div class="panel-body">
      <p>PeerTube est un logiciel qui s'intalle sur un serveur. Il permet de créer un site web d'hébergement et de diffusion de vidéos, un peu comme YouTube.</p>
      <p>La différence avec YouTube, c'est qu'il n'est pas pensé pour créer une énorme plateforme centralisant les vidéos du monde entier sur une ferme de serveurs (qui coûte horriblement cher).</p>
      <p>Au contraire, le concept de PeerTube est de créer un réseau de nombreux petits hébergeurs de vidéos, interconnectés.</p>
    </div>
  </div>
</div>
<!-- question 02-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse02">2. Pourquoi créer un nouveau logiciel pour héberger des vidéos ?</a>
    </h4>
  </div>
  <div id="collapse02" class="panel-collapse collapse">
    <div class="panel-body">
      <p>PeerTube est unique car (à notre connaissance), c'est la seule application web d'hébergement vidéo qui allie trois avantages :</p>
      <ol>
        <li>Un code ouvert (transparence) sous licence libre (éthique, respect & developpement communautaire) ;</li>
        <li>Une fédération d'hébergements interconnectés (donc plus de choix de vidéos où qu'on aille les voir) ;</li>
        <li>De la diffusion -et donc du visionnage- en pair-à-pair (donc pas de ralentissement quand une vidéo devient virale).</li>
      </ol>
      <p>Liées ensemble, ces trois caractéristiques permettent de faciliter l'hébergement de vidéos côté serveur, tout en restant pratique et amusant côté internautes.</p>
    </div>
  </div>
</div>
<!-- question 03-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse03">3. Pourquoi c'est mieux que ce soit un logiciel libre ?</a>
    </h4>
  </div>
  <div id="collapse03" class="panel-collapse collapse">
    <div class="panel-body">
      <p>Parce que c'est un logiciel qui respecte nos libertés fondamentales, et les garantit par <a href="https://github.com/Chocobozzz/PeerTube/blob/develop/LICENSE">une licence</a>, donc un contrat légalement opposable.</p>
      <p>Concrètement, ici, cela signifie que :</p>
      <ul>
        <li>PeerTube est diffusé gratuitement, pas besoin de payer pour l'installer sur son serveur ;</li>
        <li>On peut regarder sous le capot de PeerTube (son code source) : il est auditable, transparent ;</li>
        <li>Son développement est communautaire, il peut s'enrichir des contributions de chacun·e.</li>
      </ul>
    </div>
  </div>
</div>
<!-- question 04-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse04">4. Quel est l'intérêt de fédérer les hébergements de vidéos ?</a>
    </h4>
  </div>
  <div id="collapse04" class="panel-collapse collapse">
    <div class="panel-body">
      <p>L'avantage de YouTube (et autres plateformes), c'est son catalogue vidéo : du tuto tricot aux constructions minecraft en passant par les vidéos de chatons ou de vacances… on y trouve de tout !</p>
      <p>Plus le catalogue vidéo est varié, plus il y a de public intéressé, plus on y poste de vidéos… mais héberger les vidéos du monde entier coûte (très, très) cher !</p>
      <p>Si l'hébergeur Tricot-PeerTube devient ami avec Chatons-Tube et Framatube, il affichera les vidéos des autres sur son site : on dilue ainsi les coûts d'hébergement tout en restant pratique et complet pour les internautes.</p>
      <p>Le protocole de fédération de PeerTube sera fluide (chacun peut choisir ses hébergeurs "amis"), et basé sur <a href="https://activitypub.rocks/">ActivityPub</a> : cela ouvrira la possibilité de se connecter avec des outils comme Mastodon ou MediaGoblin.</p>
    </div>
  </div>
</div>
<!-- question 05-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse05">5. Pourquoi diffuser les vidéos en pair-à-pair ?</a>
    </h4>
  </div>
  <div id="collapse05" class="panel-collapse collapse">
    <div class="panel-body">
      <p>Lorsque l'on héberge un fichier lourd comme une vidéo, la plus grosse chose à craindre, c'est le succès : si une vidéo devient virale et que plein de personnes la regardent en même temps, le serveur a de gros risque de tomber !</p>
      <p>La diffusion en pair-à-pair permet, grâce au protocole <a href="https://fr.wikipedia.org/wiki/WebRTC">WebRTC</a>, que les internautes qui regardent la même vidéo en même temps s'échangent des bouts de fichiers, ce qui soulage le serveur.</p>
      <p>Il n'y a rien à faire : votre navigateur web le fait automatiquement. Si vous êtes sur mobile ou si votre réseau ne le permet pas (routeur, pare-feu, etc.), cette fonction est désactivée pour repasser à une diffusion vidéo "à l'ancienne" ;).</p>
    </div>
  </div>
</div>
<!-- question 06-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse06">6. Donc en mars, PeerTube va détrôner YouTube ?</a>
    </h4>
  </div>
  <div id="collapse06" class="panel-collapse collapse">
    <div class="panel-body">
      <p>On peut répondre avec certitude : non !</p>
      <p>En mars 2018, PeerTube sortira sa version bêta, utilisable publiquement. Nous travaillons déjà avec plusieurs collectifs pour que des premiers hébergements fédérés s'ouvrent à cette date, dont le nôtre.</p>
      <p>Mais PeerTube ne sera pas encore parfait, et de nombreuses fonctionnalités manqueront à l'appel : si nous dépassons nos objectifs de collectes, notre priorité sera de nous investir encore plus dans son développement.</p>
      <p>Mars 2018 représentera la naissance des fédérations PeerTube : plus ce logiciel sera utilisé et soutenu, plus des personnes l'utiliseront et y contriburont, et plus vite il évolura vers une alternative concrète aux plateformes telles que YouTube.</p>
    </div>
  </div>
</div>
<!-- question 07-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse07">7. Mais si c'est libre, on verra tout et n'importe quoi, comme vidéos ?</a>
    </h4>
  </div>
  <div id="collapse07" class="panel-collapse collapse">
    <div class="panel-body">
      <p>Être libre ne signifie pas être au dessus de la loi ! Chaque hébergement PeerTube pourra décider de ses propres conditions générales d'utilisation, dans le cadre de la loi dont ils dépendent.</p>
      <p>Par exemple, en France, les contenus discriminants <a href="https://fr.wikipedia.org/wiki/Lois_contre_le_racisme_et_les_discours_de_haine">sont interdits</a> et peuvent être <a href="http://stop-discrimination.gouv.fr/agir/ne-pas-laisser-faire-les-recours">signalés aux autorités</a>. PeerTube permettra aux internautes de signaler une vidéo problématique, et chaque hébergeur devra alors appliquer sa modération conformément à ses conditions générales et à la loi.</p>
      <p>Le système de fédération, quant à lui, permettra aux hébergeurs de décider avec qui ils veulent se mettre en réseau, ou pas, selon les types de contenus ou les politiques de modération des autres.</p>
    </div>
  </div>
</div>
<!-- question 08-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse08">8. Mais ce PeerTube, pourquoi vous l'appellez Framatube ?</a>
    </h4>
  </div>
  <div id="collapse08" class="panel-collapse collapse">
    <div class="panel-body">
      <p>Framatube est le nom que nous avons donné au projet de financement participatif, pour promouvoir le développement de PeerTube.</p>
      <p>Dès mars 2018, lorsque PeerTube aura une version bêta utilisée publiquement, Framatube ne deviendra qu'un des hébergements PeerTube, qu'une des portes d'entrées vers ce réseau fédéré.</p>
      <p>Le futur hébergment Framatube n'hébergera que des vidéos sous licences libres, traitant du logiciel libre et de sa culture. Mais il sera en relation avec d'autres hébergements qui pourront, peut-être, héberger vos vidéos.</p>
      <p>Le nom Framatube vient du nom de notre association, <a href="https://fr.wikipedia.org/wiki/Framasoft">Framasoft</a> : nous avons voulu mettre nos moyens et notre réputation au service de ce projet car nous croyons qu'il peut radicalement changer le paysage numérique.</p>
    </div>
  </div>
</div>
<!-- question 09-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse09">9. Et vous êtes qui, Framasoft ?</a>
    </h4>
  </div>
  <div id="collapse09" class="panel-collapse collapse">
    <div class="panel-body">
      <p>Framasoft est une petite associaiton loi 1901 basée en France, qui existe depuis 2004. Notre but est de promouvoir les libertés numériques auprès du grand public, à l'aide de projets concrets.</p>
      <p>D'octobre 2014 à octobre 2017, nous avons fait campagne pour "<a href="https://degooglisons-internet.org">Dégoogliser Internet</a>", afin de démontrer que le logiciel libre peut être une alternative éthique aux services des géants du web.</p>
      <p>Nous hébergons aujourd'hui plus de <a href="http://degooglisons-internet.org/liste/">30 services alternatifs</a> qui permettent à des centaines de milliers de personnes de changer leurs habitudes numériques, le tout étant principalement financé par les dons.</p>
      <p>Nous nous sommes investis dans le financement de PeerTube dans le cadre de notre nouvelle campagne <a href="https://contributopia.org">Contributopia</a>, qui vise à concrétiser les outils numériques d'une socité de la contribution.</p>
    </div>
  </div>
</div>
<!-- question 10-->
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse10">10. Si je vous soutiens, où ira mon argent ?</a>
    </h4>
  </div>
  <div id="collapse10" class="panel-collapse collapse">
    <div class="panel-body">
      <p>Il ira dans le budget 2018 de l'association Framasoft, comme tous les dons que nous recevons.</p>
      <p>Selon la loi française dont dépend Framasoft, un don ne peut pas engager de contrepartie ni être attribué à un poste spécifique des dépenses d'une association.</p>
      <p>Nous avons donc décidé d'être transparents :</p>
      <ul>
        <li>Framasoft engage 30 000 € dans le développement de PeerTube ;</li>
        <li>Il nous manque 90 000 € pour boucler notre budget pour 2018 (qui inclut PeerTube, le maintien des services <a href="https://degooglisons-internet.org">Dégooglisons Internet</a>, et les futurs projets de <a href="https://contributopia.org">Contributopia</a>) ;</li>
        <li>Si nous dépassons cet objectif avant le 31/12/2017, notre priorité sera de s'investir dans le développement de PeerTube après la sortie de la bêta (avec des fonctionnalités supplémentaires).</li>
      </ul>
      <p>Notre comptabilité est vérifiée et validée par un commissaire aux comptes indépendant dont nous publions les rapports annuels <a href="https://soutenir.framasoft.org/association">sur cette page</a> (voir <a href="https://soutenir.framasoft.org/sites/default/files/rapport_financier_2016.pdf">le rapport 2016</a>).</p>
    </div>
  </div>
</div>
</div>
<!-- fin accordéon--><p>
{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
