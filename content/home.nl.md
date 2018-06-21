+++

date = "2018-02-28T14:41:00+01:00"
title = "Neem de controle over video-streaming terug! #JoinPeertube"
description = "PeerTube is een vrij, gefedereerd videonetwork. Video's worden gehost door het volk, met het volk, voor het volk."
author = "Framasoft"
draft = false
type = "page"
+++

{{% grid class="row intro" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12 text-center" %}}

# Neem de controle over je video's terug
## Een gedecentraliseerd videonetwork, gebaseerd op vrije/libre software

<div class="col-md-6 well col-md-push-6">
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" allowfullscreen
      src="https://framatube.org/videos/embed/217eefeb-883d-45be-b7fc-a788ad8507d3"></iframe>
  </div>
  <p class="text-left">Help ons PeerTube klaar te maken voor zijn v1!<br>
  Nog maar <b><span id="kkbbDays">45</span> dagen</b> over om bij te dragen aan onze crowdfunding!</p>
  <p><a class="button" href="https://www.kisskissbankbank.com/en/projects/peertube-a-free-and-federated-video-platform">Ondersteun PeerTube</a></p>
</div>
<div class="col-md-6 col-md-pull-6">
  <img src="/notebook.jpg" class="img-responsive" alt="" />
  <p><a href="#getting-started">Start hier</a> <a href="#how-it-works">Hoe het werkt</a></p>
</div>

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row medias" %}}

<!---
{{% grid class="container" %}}
{{% grid class="col-sm-12 text-center" %}}

### Gezien in

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

### Eis het zeggenschap op!

PeerTube is geen individueel videohostingplatform met een vast reglement:
het is een netwerk van veel, met elkaar verbonden hostingproviders, en elke provider bestaat
uit andere mensen en beheerders. Kan je niet leven met een paar regels?
Wijk dan eenvoudig uit naar een andere hostingprovider, of beter nog,
word je eigen hostingprovider en kies je eigen regels!

{{% /grid %}}
{{% grid class="col-sm-4 text-center" %}}

<i class="fa fa-globe fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% grid class="col-sm-8 col-sm-push-4" %}}

### Behoud controle over je content

PeerTube laat toe al je video's te delen. Doordat je in rechtstreeks contact staat met de mensen die je video's hosten (of door je eigen provider te worden), kan je kiezen hoe jouw video's uitgezonden worden.
Je hebt de mogelijkheid video's een beschrijving te geven, in categorieën in te delen, een thumbnail te kiezen, als "not safe for work" te markeren…
Je kan tekst kiezen die getoond wordt als je op de **Ondersteun**-knop klikt, zodat je je publiek kan tonen hoe ze je werk (bv. financieel) kunnen ondersteunen.

{{% /grid %}}
{{% grid class="col-sm-4 col-sm-pull-8 text-center" %}}

<i class="fa fa-comment fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% grid class="col-sm-8" %}}

### De gebruikers op de eerste plaats

Je bent een persoon, geen product.
PeerTube is vrije software
gefinancierd door een Franse non-profit: [Framasoft](https://soutenir.framasoft.org/association).
Alle instanties worden gemaakt, beheerd en gemodereerd op onafhankelijke basis.
PeerTube kan nooit een bedrijfsmonopolie worden, berust niet op advertentie-inkomsten, en volgt je niet.
Voor PeerTube ben jij geen product:
PeerTube staat tot jouw dienst, niet andersom.

{{% /grid %}}
{{% grid class="col-sm-4" %}}

<i class="fa fa-group fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% grid class="col-sm-8 col-sm-push-4" %}}

### Doe mee met video's verspreiden

Als je een video bekijkt met PeerTube, laat de WebTorrent-technologie
je die video uitzenden naar mensen die
op hetzelfde moment er ook naar kijken.
Dit systeem creëert een gezonder gebruik van het netwerk.
Bovendien laat het gebruikte federatieprotocol (ActivityPub) het mogelijk video's en reacties te delen op andere platformen, zoals [Mastodon](https://joinmastodon.org)! (experimenteel)

{{% /grid %}}
{{% grid class="col-sm-4 col-sm-pull-8 text-center" %}}

<i class="fa fa-fire fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row getting-started" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12" %}}

## Begin hier {#getting-started}

### Kijken

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://framatube.org/videos/embed/a8ea95b8-0396-49a6-8f30-e25e25fb2828" allowfullscreen></iframe>
</div>

[Bekijk video's on Framatube](https://framatube.org)

### Maak een account

Lijst van instanties waar je je kan registreren:

<div id="instances-list" class="list-group"></div>

<div id="instances-list-error" class="alert alert-danger" style="display: none">Sorry, de lijst van beschikbare instanties kon niet opgehaald worden. Controleer dat JavaScript ingeschakeld is en probeer later opnieuw.</div>

<div class="alert alert-info">Dit is zoals het kiezen van een e-mail-provider: de domeinnaam wordt deel van je gebruikersnaam!</div>

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row install" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12" %}}

## Zet je eigen server op

Als je geïnteresseerd bent in een eigen instantie opzetten — voor je vrienden, familie of organisatie — begin je best [bij de installatiehandleiding](https://github.com/Chocobozzz/PeerTube/blob/develop/support/doc/production.md).

Je host alleen je eigen gebruikers en hun video's.
Je kan een limiet op het aantal registraties zetten, een opslagquotum per gebruiker instellen. Alleen video's van instanties die je **hebt gekozen** te volgen, zullen op je homepage verschijnen.

<a href="https://github.com/Chocobozzz/PeerTube/#production" target="_blank">Lees de documentatie</a>

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row how-it-works" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-5" %}}

## Hoe het werkt {#how-it-works}

Een PeerTube-server noemen we een **instantie**. Iedereen kan er zo een opzetten. 
Elke instantie host zijn eigen gebruikers en hun video's.
Het houdt ook een lijst bij van beschikbare video's op instanties die
die de administrator gekozen heeft te volgen, om die voor te stellen aan de gebruikers.

Elk account heeft een globaal unieke identificatie (bv. @chocobozzz@framatube.org) die bestaat uit de lokale gebruikersnaam (@chocobozzz) en de domeinnaam van de server (framatube.org).

De administrators van PeerTube-instanties kunnen elkaar volgen.
Als je PeerTube-instantie een andere volgt, ontvang je er
video-preview-informatie van. Op die manier kunnen video's van
jouw instantie en van gevolgde instanties getoond worden.
Jij behoudt dus de controle over wat er getoond wordt op je PeerTube-instantie!

[Vragen?](/nl/faq)

{{% /grid %}}
{{% grid class="col-sm-7 text-center" %}}

![PeerTube-federatieschema](/pt-p2p.png)

{{% /grid %}}
{{% grid class="col-sm-12" %}}

### Waarom is dat cool?

Servers worden onafhankelijk uitgebaat door verschillende mensen en organisaties.
Ze kunnen een sterk verschillend moderatiebeleid voeren, dus je kan er eentje vinden
of maken die perfect aan je voorkeuren voldoet.

Door een video te bekijken, help je de hostingprovider door
hem zelf ook uit te zenden. Een instantie moet dus niet veel geld
investeren om een video naar veel mensen uit te sturen.

[Begin hier](#getting-started)

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row footer" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12" %}}

Gebouwd bovenop <a href="https://joinmastodon.org" target="_blank">joinmastodon.org</a>. Bedankt!

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
<p>
