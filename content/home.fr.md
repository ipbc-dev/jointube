+++

date = "2018-02-28T14:41:00+01:00"
title = "Accueil"
author = "Framasoft"
draft = false
type = "page"
id = "-home"
+++

{{% grid class="row intro" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12 text-center" %}}
# Reprenez le contrôle de vos vidéos
## Une plateforme de vidéos web fédérée utilisant le P2P

[Pour commencer](#getting-started) [Comment ça fonctionne](#how-it-works)

![](/notebook.jpg)

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

### Trouvez votre parfait hébergeur de vidéos

PeerTube n'est pas une seule entité avec qu'un seul groupe de règles : 
c'est un réseau de dizaines d'hébergeurs interconnectés et uniques, composés
de personnes et d'administrateurs différents. Vous n'aimez pas certaines règles ? 
Vous êtes libre de rejoindre l'hébergeur de votre choix, ou mieux encore, 
être votre propre hébergeur avec vos propres règles !

{{% /grid %}}
{{% grid class="col-sm-4 text-center" %}}

<i class="fa fa-globe fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% grid class="col-sm-8 col-sm-push-4" %}}

### Prenez le contrôle de votre contenu

PeerTube vous permet de partager toutes vos vidéos.

{{% /grid %}}
{{% grid class="col-sm-4 col-sm-pull-8 text-center" %}}

<i class="fa fa-comment fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% grid class="col-sm-8" %}}

### Les utilisateurs et utilisatrices au premier plan

Vous êtes une personne, pas un produit. PeerTube est un logiciel libre gratuit
financé par une association française à but non lucratif: Framasoft.
Toutes les instances sont créées, animées, modérées et maintenues de façon 
indépendante. PeerTube n'est soumis au monopole d'aucune entreprise, ne dépend
d'aucune publicité et ne vous piste pas. Avec PeerTube vous n'êtes pas un produit :
c'est PeerTube qui est à votre service, et pas l'inverse. 

{{% /grid %}}
{{% grid class="col-sm-4" %}}

<i class="fa fa-group fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% grid class="col-sm-8 col-sm-push-4" %}}

### Devenez un acteur de la diffusion de vidéos

Lorsque vous regardez une vidéo avec PeerTube, la technologie WebTorrent
vous permet de participer à la diffusion de cette vidéo pour des futurs 
internautes.

{{% /grid %}}
{{% grid class="col-sm-4 col-sm-pull-8 text-center" %}}

<i class="fa fa-fire fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row getting-started" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12" %}}

## S'inscrire {#getting-started}

Liste des instances sur lesquelles vous pouvez vous inscrire :

<div id="instances-list" class="list-group"></div>

<div id="instances-list-error" class="alert alert-danger" style="display: none">Nous sommes désolé mais nous n'arrivons pas à récupérer la liste des instances. Merci de réessayer plus tard.</div>
<div class="alert alert-info">C'est comme choisir un fournisseur d'email : le nom de domaine fera partie de votre identifiant !</div>

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row install" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12" %}}

## Installez le votre

Intéressé par l'hébergement de votre propre instance, pour vos amis, votre famille 
ou organisation ? Vous pouvez commencer par lire la documentation qui concerne 
l'installation. 

Vous hébergerez seulement vos propres utilisateurs ainsi que
leurs propres vidéos et afficherez sur la page d'accueil seulement les vidéos
des instances que vous aurez **choisi** de suivre.

<a href="https://github.com/Chocobozzz/PeerTube/#production" target="_blank">Read the docs</a>

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row how-it-works" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-5" %}}

## Comment ça fonctionne {#how-it-works}

N'importe qui peut héberger un serveur PeerTube qu'on nomme **instance**. 
Chaque instance héberge ses propres utilisateurs et leurs vidéos. Il garde 
aussi une vision des vidéos présentes sur les instances suivies par l'administrateur
afin de pouvoir les proposer à ses utilisateurs. 

Chaque compte possède un identifiant global unique (comme par exemple 
@chocobozzz@framatube.org) qui est composé d'un pseudonyme (@chocobozzz)
et du nom de domaine du serveur sur lequel il se trouve (framatube.org).

Les administrateurs d'une instance PeerTube peuvent se suivre mutuellement.
Quand votre instance PeerTube suit une autre instance PeerTube, vous recevez
les vidéos uploadées sur cette instance. De cette manière, vous pouvez afficher
les vidéos présentes sur votre instance, et sur l'instance que avez décidé de suivre.
Vous gardez donc le contrôle des vidéos affichées sur votre serveur PeerTube !

{{% /grid %}}
{{% grid class="col-sm-7 text-center" %}}

![peertube federation schema](/pt-p2p.png)

{{% /grid %}}
{{% grid class="col-sm-12" %}}

### En quoi c'est génial ?

Chaque serveur fonctionne de manière indépendante et est géré par une personne 
ou organisation différente, pouvant donc appliquer des règles de modération
et de bonne conduite variées, vous permettant de trouver l'instance qui vous
conviendra le mieux.


En regardant une vidéo, vous aidez l'hébergeur à la diffuser en devant vous-même
un diffuseur de cette vidéo. Chaque instance n'a donc pas besoin d'énormément d'argent
pour diffuser les vidéos de ses utilisateurs !

[Get started](#getting-started)

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row footer" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12" %}}

Ce site web a été construit sur la base de <a href="https://joinmastodon.org" target="_blank">joinmastodon.org</a>. Merci !

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}

<p>
