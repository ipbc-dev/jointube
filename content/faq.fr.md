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

Quelques questions pour découvrir PeerTube…

</h2>
<p><i class="text-center">

(cliquez sur les questions pour découvrir les réponses)

</i></p>
<h3>

Présentation de PeerTube

</h3>

<!-- début accordéon -->

<div id="accordion-presentation" class="panel-group" role="tablist" aria-multiselectable="true">
<!-- what -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#what" aria-controls="what" aria-expanded="true">

C’est quoi, PeerTube&nbsp;?

    </a>
  </h4>
</div>

<div id="what" class="panel-collapse collapse in">

  <div class="panel-body">
    <p>

PeerTube est un logiciel qui s’installe sur un serveur.

Il permet de créer un site web d’hébergement et de diffusion de vidéos, donc de faire son «&nbsp;YouTube maison&nbsp;».

    </p>
    <p>

La différence avec YouTube, c’est qu’il n’est pas pensé pour créer une énorme plateforme centralisant les vidéos du monde entier sur une ferme de serveurs (qui coûte horriblement cher).

    </p>
    <p>

Au contraire, le concept de PeerTube est de créer un réseau de nombreux petits hébergeurs de vidéos, interconnectés.

    </p>
  </div>
</div>
</div>

<!-- pros -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#pros" aria-controls="pros" aria-expanded="false">

Les trois avantages clés de PeerTube.

    </a>
  </h4>
</div>

<div id="pros" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

PeerTube est unique car (à notre connaissance), c’est la seule application web d’hébergement vidéo qui allie trois avantages&nbsp;:

    </p>
    <ol>
      <li>

Un code ouvert (transparence) sous licence libre (éthique, respect et développement communautaire)&nbsp;;

      </li>
      <li>

Une fédération d’hébergements interconnectés (donc plus de choix de vidéos où qu’on aille les voir)&nbsp;;

      </li>
      <li>

De la diffusion – et donc du visionnage – en pair-à-pair (donc pas de ralentissement quand une vidéo devient virale).

      </li>
    </ol>
    <p>

Liées ensemble, ces trois caractéristiques permettent de faciliter l’hébergement de vidéos côté serveur, tout en restant pratique, éthique et amusant côté internautes.

    </p>
  </div>
</div>
</div>

<!-- libre -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#libre" aria-controls="libre" aria-expanded="false">

Pourquoi c’est mieux que ce soit un logiciel libre&nbsp;?

    </a>
  </h4>
</div>

<div id="libre" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Parce que c’est un logiciel qui respecte nos libertés fondamentales, et les garantit par <a href="https://github.com/Chocobozzz/PeerTube/blob/develop/LICENSE">une licence</a>, donc un contrat légalement opposable.

    </p>
    <p>

Concrètement, ici, cela signifie que&nbsp;:

    </p>
    <ul>
      <li>

PeerTube est diffusé gratuitement, pas besoin de payer pour l’installer sur son serveur&nbsp;;

      </li>
      <li>

On peut regarder sous le capot de PeerTube (son code source)&nbsp;: il est auditable, transparent&nbsp;;

      </li>
      <li>

Son développement est communautaire, il peut s’enrichir des contributions de chacun·e.

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

Quel est l’intérêt de fédérer les hébergements de vidéos&nbsp;?

    </a>
  </h4>
</div>

<div id="federated" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

L’avantage de YouTube (et autres plateformes), c’est son catalogue vidéo&nbsp;: du tuto tricot aux constructions minecraft en passant par les vidéos de chatons ou de vacances… on y trouve de tout&nbsp;!

    </p>
    <p>

Plus le catalogue vidéo est varié, plus il y a de public intéressé, plus on y poste de vidéos… mais héberger les vidéos du monde entier coûte (très, très) cher&nbsp;!

    </p>
    <p>

Si l’hébergeur Tricot-PeerTube devient ami avec Chatons-Tube et Framatube, il affichera les vidéos des autres sur son site&nbsp;: on dilue ainsi les coûts d’hébergement tout en restant pratique et complet pour les internautes.

    </p>
    <p>

Le protocole de fédération de PeerTube sera fluide (chacun peut choisir ses hébergeurs «&nbsp;amis&nbsp;»), et basé sur <a href="https://activitypub.rocks/">ActivityPub</a>&nbsp;: cela ouvrira la possibilité de se connecter avec des outils comme Mastodon ou MediaGoblin.

    </p>
  </div>
</div>
</div>

<!-- p2p -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#p2p" aria-controls="p2p" aria-expanded="false">

Pourquoi diffuser les vidéos en pair-à-pair&nbsp;?

    </a>
  </h4>
</div>

<div id="p2p" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Lorsque l’on héberge un fichier lourd comme une vidéo, la plus grosse chose à craindre, c’est le succès&nbsp;: si une vidéo devient virale et que plein de personnes la regardent en même temps, le serveur a de gros risques de tomber&nbsp;!

    </p>
    <p>

La diffusion en pair-à-pair permet, grâce au protocole <a href="https://fr.wikipedia.org/wiki/WebRTC">WebRTC</a>, que les internautes qui regardent la même vidéo en même temps s’échangent des bouts de fichiers, ce qui soulage le serveur.

    </p>
    <p>

Il n’y a rien à faire&nbsp;: votre navigateur web le fait automatiquement.

Si vous êtes sur mobile ou si votre réseau ne le permet pas (routeur, pare-feu, etc.), cette fonction est désactivée pour repasser à une diffusion vidéo «&nbsp;à l’ancienne&nbsp;» &#x1F609;.

    </p>
  </div>
</div>
</div>

<!-- admin -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#admin" aria-controls="admin" aria-expanded="false">

Pour qui sait administrer un serveur, PeerTube, c’est&hellip;

    </a>
  </h4>
</div>

<div id="admin" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

<strong>C’est un logiciel que vous installez sur votre serveur</strong> pour créer votre site web d’hébergement et de diffusion de vidéos&hellip;

En gros&nbsp;: vous vous créez votre propre «&nbsp;YouTube maison&nbsp;»&nbsp;!

    </p>
    <p>

Il existe déjà des logiciels libres qui vous permettent de faire cela.

L’avantage ici, c’est que vous pouvez choisir de relier votre instance PeerTube (votre site web de vidéos), à l’instance PeerTube de Zaïd (où se trouvent les vidéos des conférences de son université populaire), à celle de Catherine (qui héberge les vidéos de son Webmédia), ou encore à l’instance PeerTube de Solar (qui gère le serveur de son collectif de vidéastes).

    </p>
    <p>

      <strong>

Mais PeerTube ne centralise pas&nbsp;: il fédère.

      </strong>

Grâce au protocole <a href="https://fr.wikipedia.org/wiki/ActivityPub">ActivityPub</a> (utilisé aussi par <a href="https://joinmastodon.org/">la fédération Mastodon</a>, une alternative libre à Twitter) PeerTube fédère plein de petits hébergeurs pour ne pas les obliger à acheter des milliers de disques durs afin d’héberger les vidéos du monde entier.

    </p>
    <p>

Du coup, sur votre site web PeerTube, le public pourra voir vos vidéos, mais aussi celles hébergées par Zaïd, Catherine ou Solar&hellip; sans que votre site web n’ait à héberger les vidéos des autres&nbsp;!

Cette diversité dans le catalogue de vidéos devient très attractive.

C’est ce qui a fait le succès des plateformes centralisatrices à la YouTube&nbsp;: le choix et la variété des vidéos.

    </p>
    <p>

Un autre avantage de cette fédération, c’est que <strong>chacun·e est indépendant·e</strong>.

Zaïd, Catherine, Solar et vous-même pouvez avoir vos propres règles du jeu, et créer vos propres Conditions Générales d’Utilisation (on peut, par exemple, imaginer un MiaouTube où les vidéos de chiens seraient strictement interdites &#x1F642;).

    </p>
  </div>
</div>
</div>

<!-- video-maker -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#video-maker" aria-controls="video-maker" aria-expanded="false">

Pour qui veut diffuser ses vidéos en ligne PeerTube permet&hellip;

    </a>
  </h4>
</div>

<div id="video-maker" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Il vous permet de choisir un hébergement qui vous correspond.

On l’a vu avec les dérives de YouTube&nbsp;: son hébergeur, Google-Alphabet, peut imposer son système <a href="https://scinfolex.com/2016/07/05/ce-que-le-filtrage-automatise-des-contenus-sur-youtube-fait-a-la-creation/">ContentID (le fameux «&nbsp;Robocopyright&nbsp;»)</a> ou ses outils de mise en valeur des vidéos, qui semblent aussi obscurs qu’injustes.

Quoi qu’il arrive, il vous impose déjà <a href="https://tosdr.org/#youtube">de lui céder – gracieusement – des droits sur vos vidéos</a>.

    </p>
    <p>

Avec PeerTube, <strong>vous choisissez l’hébergeur de vos vidéos selon ses conditions d’utilisation</strong>, sa politique de modération, ses choix de fédération&hellip;

Comme vous n’avez pas un géant du web en face de vous, vous pourrez probablement discuter ensemble si vous avez un souci, un besoin, une envie&hellip;

    </p>
    <p>

L’autre gros avantage de PeerTube, c’est que votre hébergeur n’a pas à craindre le succès soudain d’une de vos vidéos.

En effet, PeerTube diffuse les vidéos avec le protocole <a href="https://fr.wikipedia.org/wiki/BitTorrent">WebTorrent</a>.

Si des centaines de personnes regardent votre vidéo au même moment, leur navigateur envoie automatiquement des bouts de votre vidéo aux autres spectateurs.

    </p>
    <p>

Mine de rien, avant cette diffusion en pair-à-pair, les vidéastes à succès (ou les vidéos qui font le buzz) étaient condamnés à s’héberger chez un géant du web dont l’infrastructure peut encaisser des millions de vues simultanées&hellip;

Ou à payer très cher un hébergement de vidéo indépendant afin qu’il tienne la charge.

    </p>
  </div>
</div>
</div>

<!-- audience -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#audience" aria-controls="audience" aria-expanded="false">

Pour qui veut voir des vidéos, PeerTube a pour avantages&hellip;

    </a>
  </h4>
</div>

<div id="audience" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Un des avantages, c’est que <strong>vous devenez partie prenante de la diffusion des vidéos que vous êtes en train de regarder</strong>.

Si d’autres personnes regardent une vidéo PeerTube en même temps que vous, tant que votre onglet reste ouvert, votre navigateur partage des bouts de cette vidéo et vous participez ainsi à une utilisation plus saine d’Internet.

    </p>
    <p>

Bien sûr, le lecteur vidéo de PeerTube s’adapte à votre situation&nbsp;: si votre installation ne permet pas la diffusion en pair-à-pair (réseau d’entreprise, navigateur récalcitrant, etc.) la lecture de la vidéo se fera de manière classique.

    </p>
    <p>

Mais surtout, <strong>PeerTube vous considère comme une personne, et non pas comme un produit</strong> qu’il faut pister, profiler, et enfermer dans des boucles vidéos pour mieux vendre votre temps de cerveau disponible.

Ainsi, <a href="https://github.com/Chocobozzz/PeerTube">le code source</a> (la recette de cuisine) du logiciel PeerTube est ouvert, ce qui fait que son fonctionnement est transparent.

    </p>
    <p>

      <strong>

PeerTube n’est pas juste open-source&nbsp;: il est libre.

      </strong>

Sa licence libre garantit nos libertés fondamentales d’utilisateurs ou d’utilisatrices.

C’est ce respect de nos libertés qui permet à Framasoft de vous inviter à contribuer à ce logiciel, et de nombreuses évolutions (système de commentaires innovant, etc.) nous ont déjà été soufflées par certain·e·s d’entre vous.

    </p>
  </div>
</div>
</div>

<!-- remplace-yt -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#remplace-yt" aria-controls="remplace-yt" aria-expanded="false">

Le but de PeerTube, c’est de remplacer YouTube&nbsp;?

    </a>
  </h4>
</div>

<div id="remplace-yt" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

On peut répondre avec certitude&nbsp;: non&nbsp;!

    </p>
    <p>

En mars 2018, PeerTube a sorti sa version bêta, utilisable publiquement.

Plusieurs collectifs ont monté des premiers hébergements, créant ainsi les bases de la fédération.

    </p>
    <p>

Mais ceci n’est qu’un début, PeerTube n’est pas (encore) parfait, et de nombreuses fonctionnalités manquent à l’appel.

Nous comptons bien continuer de l’améliorer pour sortir une version 1 d’ici fin 2018.

    </p>
    <p>

Mars 2018 représente donc la naissance des fédérations PeerTube&nbsp;: plus ce logiciel sera utilisé et soutenu, plus des personnes l’utiliseront et y contribueront, et plus vite il évolura vers une alternative concrète aux plateformes telles que YouTube.

    </p>
    <p>

Néanmoins, l’ambition reste d’être <strong>une alternative libre et décentralisée</strong>&nbsp;: le but d’une alternative n’est pas de remplacer, mais de proposer quelque chose d’autre, avec des valeurs différentes, en parallèle de ce qui existe déjà.

    </p>
  </div>
</div>
</div>
<!-- fin questions -->
</div>

<!-- fin accordéon -->

<h3>

Création et contenus

</h3>

<!--début accordéon -->

<div id="accordion-creation" class="panel-group" role="tablist" aria-multiselectable="true">
<!-- law -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#law" aria-controls="law" aria-expanded="false">

Si c’est libre, on peut y mettre des contenus illicites&nbsp;?

  </a>
  </h4>
</div>

<div id="law" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Être libre ne signifie pas être au-dessus de la loi&nbsp;!

Chaque hébergement PeerTube peut décider de ses propres conditions générales d’utilisation, dans le cadre de la loi dont ils dépendent.

    </p>
    <p>

Par exemple, en France, les contenus discriminants <a href="https://fr.wikipedia.org/wiki/Lois_contre_le_racisme_et_les_discours_de_haine">sont interdits</a> et peuvent être <a href="http://stop-discrimination.gouv.fr/agir/ne-pas-laisser-faire-les-recours">signalés aux autorités</a>.

PeerTube permet aux internautes de signaler une vidéo problématique, et chaque hébergeur doit alors appliquer sa modération conformément à ses conditions générales et à la loi.

    </p>
    <p>

Le système de fédération, quant à lui, permet aux hébergeurs de décider avec qui ils veulent se mettre en réseau, ou pas, selon les types de contenus ou les politiques de modération des autres.

    </p>
  </div>
</div>
</div>

<!-- responsible -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#responsible" aria-controls="responsible" aria-expanded="false">

Qui est responsable du contenu publié sur PeerTube&nbsp;?

    </a>
  </h4>
</div>

<div id="responsible" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

PeerTube n’est pas un site web&nbsp;: c’est un logiciel qui permet à un hébergeur (par exemple, Dominique) de créer un site web de vidéos (appelons-le DominiqueTube).

    </p>
    <p>

Imaginons maintenant que Camille s’est créé un compte sur DominiqueTube et y téléverse une vidéo illégale, car cette vidéo utilise la musique crée par Solal.

    </p>
    <p>

Solal va sur Framatube, une instance qui suit l’instance DominiqueTube.

Donc Solal peut voir depuis Framatube les vidéos publiées sur DominiqueTube.

    </p>
    <p>

Solal aperçoit la vidéo illégale de Camille, et la signale avec le bouton prévu à cet effet.

Le signalement a beau être fait depuis Framatube, il est envoyé directement à la personne qui héberge le contenu illicite, donc Dominique.

    </p>
    <p>

Dès cet instant, Dominique est responsable, parce que prévenue du fait qu’elle héberge une vidéo illicite.

C’est donc à elle d’agir si elle ne veut pas se retrouver responsable devant la loi.

    </p>
    <p>

Ensuite, Dominique et Solal pourront se retourner contre Camille, qui a commis le méfait.

    </p>
  </div>
</div>
</div>

<!-- money -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#money" aria-controls="money" aria-expanded="false">

Quelle est la politique de rémunération de PeerTube&nbsp;?

    </a>
  </h4>
</div>

<div id="money" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Il n’y en a pas, pas pour l’instant&nbsp;: PeerTube est un outil que nous avons voulu neutre au niveau de la rémunération.

    </p>
    <p>

Pour l’instant, la seule solution proposée aux personnes qui mettent en ligne des vidéos est de mettre un texte et un lien qui apparaîtront dans le bouton soutenir («&nbsp;<i lang="en">Support</i>&nbsp;») sous la vidéo.

    </p>
    <p>

Nous ne sommes pas allé·e·s plus loin car favoriser une solution technique serait imposer, dans le code, une vision politique des partages culturels et de leurs financements.

    </p>
    <p>

Or de nombreuses améliorations de PeerTube sont à prévoir…

Dont celles qui vous permettraient de créer (et choisir) vous-même les outils de monétisation qui vous intéressent&nbsp;!

    </p>
    <p>

Néanmoins, il est bon de rappeler que l’immense majorité des vidéos publiées sur internet (et même sur YouTube) sont partagées dans un but non-marchand&nbsp;: la rémunération est un outil, mais pas forcément un but principal ni essentiel.

    </p>
  </div>
</div>
</div>

<!-- instances -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#instances" aria-controls="instances" aria-expanded="false">

Où puis-je mettre mes vidéos&nbsp;?

    </a>
  </h4>
</div>

<div id="instances" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Il vous faut trouver une instance d’hébergement PeerTube en laquelle vous avez confiance.

    </p>
    <p>

La liste complète des instances <a href="https://instances.joinpeertube.org/">se trouve là</a>, et nous faisons apparaître <a href="https://joinpeertube.org/fr/#getting-started">ici celles qui sont ouvertes aux inscriptions</a>.

    </p>
    <p>

Ensuite, nous vous recommandons d’aller voir les instances, d’aller lire leur page «&nbsp;about&nbsp;» pour découvrir leurs conditions d’utilisation (limite d’espace disque par utilisateur, politique sur les contenus, etc.).

    </p>
    <p>

Le mieux est de contacter et de discuter directement avec les hébergeurs, de comprendre leur modèle économique, leur vision, etc.

Car seul vous pouvez déterminer ce qui fait que vous pouvez faire confiance à tel ou tel hébergeur, et donc lui confier vos vidéos.

    </p>
  </div>
</div>
</div>
<!-- fin questions -->
</div>

<!-- fin accordéon -->

<a href="https://framacolibri.org/c/qualite/peertube">Échanger sur notre forum</a>

<h3>

Questions techniques

</h3>

<!--début accordéon -->

<div id="accordion-tech" class="panel-group" role="tablist" aria-multiselectable="true">
<!-- install -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-tech" href="#install" aria-controls="install" aria-expanded="false">

Comment installer PeerTube&nbsp;?

    </a>
  </h4>
</div>

<div id="install" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Le <a href="https://github.com/Chocobozzz/PeerTube/blob/develop/support/doc/production.md">guide d’installation est ici</a> (uniquement en anglais, pour l’instant).

    </p>
    <p>

Nous recommandons de ne pas installer PeerTube sur un matériel peu puissant ni derrière une connexion faible (par exemple, sur un RaspberryPi avec une connexion ADSL)&nbsp;: cela pourrait ralentir l’ensemble des fédérations.

    </p>
    <p>

Ne dérangez pas le développeur pour vous aider à installer votre instance&nbsp;: notre <a href="https://framacolibri.org/c/qualite/peertube">forum d’entraide</a> est là pour ça.

    </p>
  </div>
</div>
</div>

<!-- code -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-tech" href="#code" aria-controls="code" aria-expanded="false">

Comment participer au code de PeerTube ?

    </a>
  </h4>
</div>

<div id="code" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Le <a href="https://github.com/Chocobozzz/PeerTube">dépôt Git du code de PeerTube est ici</a>.

    </p>
    <p>

Vous pouvez y <a href="https://github.com/Chocobozzz/PeerTube/issues">créer une issue</a>, y contribuer, voire commencer à contribuer en choisissant les <a href="https://github.com/Chocobozzz/PeerTube/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22">problèmes faciles à régler pour qui débute</a>.

    </p>
    <p>

Si vous souhaitez apporter un autre type d’aide, ou que vous désirez une fonctionnalité qui n’est pas disponible, venez en discuter sur notre <a href="https://framacolibri.org/c/qualite/peertube">forum des contributions</a>.

    </p>
  </div>
</div>
</div>

<!-- protocol -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-tech" href="#protocol" aria-controls="protocol" aria-expanded="false">

Pourquoi PeerTube utilise-t-il le protocole de fédération ActivityPub&nbsp;? Pourquoi pas IPFS / d.tube / Steemit&nbsp;?

    </a>
  </h4>
</div>

<div id="protocol" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

PeerTube utilise ActivityPub car ce protocole de fédération est recommandé par le W3C et est déjà utilisé par le réseau social fédéré Mastodon.

    </p>
    <p>

IPFS est une super technologie, mais elle nous semble encore très (trop !) fraiche pour de la diffusion de gros fichiers à large échelle en streaming.

    </p>
    <p>

Après en avoir discuté sur notre forum, nous estimons que d.tube n’est pas libre ni open source, car publier uniquement le code compilé entrave la liberté de modification.

    </p>
    <p>

D.tube est basé sur Steem pour la « rémunération », c’est un choix, mais Steem est <a href="https://en.wikipedia.org/wiki/Steemit#Criticism">largement critiqué</a> comme étant <a href="https://steemit.com/steemit/@docdelux/30-days-of-steemit-here-is-my-criticism">hautement centralisé</a>, et surtout <a href="https://steemit.com/steemit/@thecryptonews/psa-constructive-criticism-the-ugly-truth-behind-steemit">proche d’un système de Ponzi</a>.

    </p>
    <p>

PeerTube est libre, décentralisé, distribué, et n’impose aucun modèle de rémunération.

C’est le choix que nous avons fait, qui est discutable, et d’autres (comme d.tube) ont fait d’autres choix, qui ont leurs avantages.

C’est donc à vous de voir ce qui vous correspond.

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
