+++

date = "2018-02-28T14:41:00+01:00"
title = "PeerTube"
author = "Framasoft"
draft = false
type = "page"
+++

{{% grid class="row intro" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12 text-center" %}}

# Reprenez le contrôle de vos vidéos
## L’hébergement de vidéos décentralisé, en réseau, basé sur du logiciel libre

[Pour commencer](#getting-started) [Comment ça fonctionne](#how-it-works)

<div class="col-md-5 well col-md-push-7">
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" allowfullscreen
      src="https://framatube.org/videos/embed/f78a97f8-a142-4ce1-a5bd-154bf9386504"></iframe>
  </div>
  <p class="text-left">PeerTube est actuellement en campagne de financement participatif.
  Ensemble, participons à aller vers une version 1.</p>
  <p><a class="button" href="#kisskissbankbank">Soutenir Peertube</a></p>
</div>
<div class="col-md-7 col-md-pull-5">
  <img src="/notebook.jpg" class="img-responsive" alt="" />
</div>

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row medias" %}}

<!---
{{% grid class="container" %}}
{{% grid class="col-sm-12 text-center" %}}

### As seen on

- [![Le Figaro](/le_figaro_nb.png)](#media1)
- [![L’Humanité](/l_humanite_nb.png)](#media2)
- [![Libération](/liberation_nb.png)](#media3)
- [![NextInpact](/next_inpact_nb.png)](#media4)

{{% /grid %}}
{{% /grid %}}
-->

{{% /grid %}}
{{% grid class="row why" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-8" %}}

### Reprenez le pouvoir&hellip; et les responsabilités&nbsp;!

PeerTube n’est pas une seule plateforme d’hébergement vidéo avec un unique groupe de règles&nbsp;:
c’est un réseau de dizaines d’hébergeurs interconnectés, et chaque hébergeur est composé de personnes et d’administrateurs différents.
Vous n’aimez pas certaines règles&nbsp;?
Vous êtes libre de rejoindre l’hébergeur de votre choix, ou mieux encore, être votre propre hébergeur avec vos propres règles&nbsp;!

{{% /grid %}}
{{% grid class="col-sm-4 text-center" %}}

<i class="fa fa-globe fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% grid class="col-sm-8 col-sm-push-4" %}}

### Prenez le contrôle de votre contenu

PeerTube vous permet de partager toutes vos vidéos. Être en contact direct avec un hébergeur à taille humaine (ou devenir votre propre hébergeur) vous permet d’influer sur les conditions de leur diffusion.
Vos vidéos bénéficieront des outils de description, catégorisation, personnalisation des miniatures, marquage des contenus pour public matures.
Personnaliser le bouton **Soutenir** vous permettra d’indiquer librement à votre audience comment soutenir votre démarche.

{{% /grid %}}
{{% grid class="col-sm-4 col-sm-pull-8 text-center" %}}

<i class="fa fa-comment fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% grid class="col-sm-8" %}}

### Les utilisateurs et utilisatrices au premier plan

Vous êtes une personne, pas un produit.
PeerTube est un logiciel libre gratuit financé par une association française à but non lucratif&nbsp;: [Framasoft](https://soutenir.framasoft.org/association).
Toutes les instances sont créées, animées, modérées et maintenues de façon indépendante.
PeerTube n’est soumis au monopole d’aucune entreprise, ne dépend d’aucune publicité et ne vous piste pas.
Avec PeerTube vous n’êtes pas un produit&nbsp;:
c’est PeerTube qui est à votre service, et pas l’inverse.

{{% /grid %}}
{{% grid class="col-sm-4" %}}

<i class="fa fa-group fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% grid class="col-sm-8 col-sm-push-4" %}}

### Devenez un acteur de la diffusion de vidéos

Lorsque vous regardez une vidéo avec PeerTube, la technologie WebTorrent vous permet de participer à la diffusion de cette vidéo avec les internautes qui la regardent en même temps que vous.
Ce partage des flux vidéos permet une répartition saine des échanges sur la toile.
De plus, le protocole de fédération (ActivityPub) permet de publier les vidéos et commentaires sur d’autres outils qui l’utilisent, comme [Mastodon](https://joinmastodon.org)&nbsp;! (expérimental)

{{% /grid %}}
{{% grid class="col-sm-4 col-sm-pull-8 text-center" %}}

<i class="fa fa-fire fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row getting-started" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12" %}}

## Pour commencer {#getting-started}

### Regarder

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://framatube.org/videos/embed/0900bd2e-7306-4c39-b48b-2d0cd611742e" allowfullscreen></iframe>
</div>

[Voir des vidéos sur Framatube](https://framatube.org)

### S’inscrire

Liste des instances sur lesquelles vous pouvez vous inscrire&nbsp;:

<div id="instances-list" class="list-group"></div>

<div id="instances-list-error" class="alert alert-danger" style="display: none">Nous sommes désolés mais nous n’arrivons pas à récupérer la liste des instances. Merci de réessayer plus tard.</div>

<div class="alert alert-info">C’est comme choisir un fournisseur d’email&nbsp;: le nom de domaine fera partie de votre identifiant&nbsp;!</div>

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row install" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12" %}}

## Installez la vôtre

Intéressé par l’hébergement de votre propre instance, pour vos amis, votre famille ou organisation&nbsp;?
Vous pouvez commencer par [lire la documentation qui concerne l’installation](https://github.com/Chocobozzz/PeerTube/blob/develop/support/doc/production.md).

Vous hébergerez seulement vos propres utilisateurs ainsi que leurs propres vidéos.
Vous pouvez définir le nombre d’inscriptions disponibles et un quota d’espace-disque par utilisateur.
Sur votre page d’accueil ne s’afficheront que les vidéos des instances que vous aurez **choisi** de suivre.

<a href="https://github.com/Chocobozzz/PeerTube/#production" target="_blank">Lire la documentation</a>

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row how-it-works" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-5" %}}

## Comment ça fonctionne {#how-it-works}

N’importe qui peut héberger un serveur PeerTube qu’on nomme **instance**.
Chaque instance héberge ses propres utilisateurs et leurs vidéos.
Il garde aussi une vision des vidéos présentes sur les instances suivies par l’administrateur afin de pouvoir les proposer à ses utilisateurs.

Chaque compte possède un identifiant global unique (comme @chocobozzz@framatube.org) qui est composé d’un pseudonyme (@chocobozzz) et du nom de domaine du serveur sur lequel il se trouve (framatube.org).

Les administrateurs d’une instance PeerTube peuvent se suivre mutuellement.
Quand votre instance PeerTube suit une autre instance PeerTube, vous recevez les informations d’affichage des vidéos de cette instance.
De cette manière, vous pouvez afficher les vidéos présentes sur votre instance, et sur l’instance que avez décidé de suivre.
Vous gardez donc le contrôle des vidéos affichées sur votre serveur PeerTube&nbsp;!

[Des questions&nbsp;?](/fr/faq/)

{{% /grid %}}
{{% grid class="col-sm-7 text-center" %}}

![peertube federation schema](/pt-p2p.png)

{{% /grid %}}
{{% grid class="col-sm-12" %}}

### En quoi c’est génial&nbsp;?

Chaque serveur fonctionne de manière indépendante et est géré par une personne ou organisation différente, pouvant donc appliquer des règles de modération et de bonne conduite variées, vous permettant de trouver l’instance qui vous conviendra le mieux.

En regardant une vidéo, vous aidez l’hébergeur à la diffuser en devenant vous-même un diffuseur de cette vidéo.
Chaque instance n’a donc pas besoin d’énormément d’argent pour diffuser les vidéos de ses utilisateurs&nbsp;!

[Se lancer](#getting-started)

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row footer" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12" %}}

Ce site web a été construit sur la base de <a href="https://joinmastodon.org" target="_blank">joinmastodon.org</a>. Merci&nbsp;!

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
<p>
