+++

date = "2018-02-28T14:41:00+01:00"
title = "Übernehmen Sie die Kontrolle über Ihre Videos! #JoinPeertube"
description = "PeerTube ist ein Open-Source-Video-Hosting-Netzwerk. Videos von Menschen, mit Menschen, für Menschen."
author = "Framasoft"
draft = false
type = "page"
+++

{{% grid class="row intro" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12 text-center" %}}

# Übernehmen Sie die Kontrolle über Ihre Videos
## Dezentrales, vernetztes, auf befreiend Software basierendes Video-Hosting

<div class="col-md-6 well col-md-push-6">
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" allowfullscreen
      src="https://framatube.org/videos/embed/217eefeb-883d-45be-b7fc-a788ad8507d3"></iframe>
  </div>
  <p class="text-left">Helfen Sie uns, PeerTube v1 zu entwickeln!<br>
  Nur noch <b><span id="kkbbDays">45</span> Tage</b> bis zur Teilnahme an unserer Beteiligungsfinanzierung!</p>
  <p><a class="button" href="https://www.kisskissbankbank.com/de/projects/peertube-a-free-and-federated-video-platform">PeerTube unterstützen</a></p>
</div>
<div class="col-md-6 col-md-pull-6">
  <img src="/notebook.jpg" class="img-responsive" alt="" />
  <p><a href="#getting-started">Zu Beginn</a> <a href="#how-it-works">Wie es funktioniert</a></p>
</div>

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row medias" %}}

<!---
{{% grid class="container" %}}
{{% grid class="col-sm-12 text-center" %}}

### In der Presse

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

### Macht zurückerobern&hellip; und Verantwortung!

PeerTube ist keine einzige Video-Hosting-Plattform mit einem einzigen Regelwerk.
ist ein Netzwerk von Dutzenden von miteinander verbundenen Hosts, und jeder Host besteht aus verschiedenen Personen und Administratoren.
Sie mögen bestimmte Regeln nicht?
Es steht Ihnen frei, dem Gastgeber Ihrer Wahl beizutreten, oder noch besser, Ihr eigener Gastgeber mit Ihren eigenen Regeln zu sein!

{{% /grid %}}
{{% grid class="col-sm-4 text-center" %}}

<i class="fa fa-globe fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% grid class="col-sm-8 col-sm-push-4" %}}

### Übernehmen Sie die Kontrolle über Ihre Content

Mit PeerTube können Sie alle Ihre Videos freigeben. Der direkte Kontakt mit einem Host in menschlicher Größe (oder das Werden Ihres eigenen Hosts) ermöglicht es Ihnen, die Bedingungen ihrer Verbreitung zu beeinflussen.
Ihre Videos profitieren von Beschreibungswerkzeugen, Kategorisierung, Anpassung der Thumbnails, Markierung von Inhalten für ein reifes Publikum.
Das Anpassen der Schaltfläche **Support** ermöglicht es Ihnen, Ihrem Publikum frei zu sagen, wie Sie Ihren Ansatz unterstützen sollen.

{{% /grid %}}
{{% grid class="col-sm-4 col-sm-pull-8 text-center" %}}

<i class="fa fa-comment fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% grid class="col-sm-8" %}}

### Benutzer im Vordergrund

Sie sind eine Person, kein Produkt.
PeerTube ist eine freie Software, die von einem französischen gemeinnützigen Verein finanziert wird: [Framasoft](https://soutenir.framasoft.org/association).
Alle Instanzen werden eigenständig erstellt, animiert, moderiert und gepflegt.
PeerTube wird von keinem Unternehmen monopolisiert, ist nicht auf Werbung angewiesen und verfolgt Sie nicht.
Mit PeerTube sind Sie kein Produkt:
PeerTube steht Ihnen zur Verfügung, nicht umgekehrt.

{{% /grid %}}
{{% grid class="col-sm-4" %}}

<i class="fa fa-group fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% grid class="col-sm-8 col-sm-push-4" %}}

### Werden Sie Videoverleiher

Wenn Sie ein Video mit PeerTube ansehen, können Sie mit der WebTorrent-Technologie an der Bereitstellung dieses Videos für Zuschauer teilnehmen, die es zur gleichen Zeit wie Sie sehen.
Diese gemeinsame Nutzung von Videostreams ermöglicht eine gesunde Verteilung des Austauschs im Web.
Darüber hinaus ermöglicht das Föderationsprotokoll (ActivityPub) die Veröffentlichung von Videos und Kommentaren zu anderen Tools, die es verwenden, wie z.B. [Mastodon](https://joinmastodon.org)! (experimentell)

{{% /grid %}}
{{% grid class="col-sm-4 col-sm-pull-8 text-center" %}}

<i class="fa fa-fire fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row getting-started" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12" %}}

## Los geht's! {#getting-started}

### Anschauen

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://framatube.org/videos/embed/a8ea95b8-0396-49a6-8f30-e25e25fb2828" allowfullscreen></iframe>
</div>

[Videos auf Framatube ansehen](https://framatube.org)

### Anmelden

Liste der Instanzen, für die Sie sich registrieren können:

<div id="instances-list" class="list-group"></div>

<div id="instances-list-error" class="alert alert-danger" style="display: none">Es tut uns leid, aber wir können die Liste der Fälle nicht abrufen. Bitte versuchen Sie es später noch einmal.</div>

<div class="alert alert-info">Es ist wie bei der Wahl eines E-Mail-Providers: Der Domainname wird Teil Ihres Logins sein!</div>

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row install" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12" %}}

## Installieren Sie Ihre eigenes Instanz

Sind Sie daran interessiert, Ihre eigene Instanz für Ihre Freunde, Familie oder Organisation zu hosten?
Sie können mit der [Installationsdokumentation](https://github.com/Chocobozzz/PeerTube/blob/develop/support/doc/production.md) beginnen.

Sie werden nur Ihre eigenen Benutzer und deren eigene Videos hosten.
Sie können die Anzahl der verfügbaren Registrierungen und ein Plattenplatz-Kontingent pro Benutzer festlegen.
Auf Ihrer Homepage erscheinen nur die Videos der Instanzen, die Sie **ausgewählt** haben.

<a href="https://github.com/Chocobozzz/PeerTube/#production" target="_blank">Dokumentation</a>

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row how-it-works" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-5" %}}

## Wie es funktioniert {#how-it-works}

Jeder kann einen PeerTube-Server namens **Instanz** hosten.
Jede Instanz hostet ihre eigenen Benutzer und deren Videos.
Es behält auch eine Vision der Videos, die auf den Instanzen vorhanden sind, gefolgt vom Administrator, um sie seinen Benutzern vorschlagen zu können.

Jedes Konto hat eine eindeutige globale Kennung (z.B. @chocobozzz@framatube.org), die sich aus einem Nicknamen (@chocobozzz) und dem Domänennamen des Servers (framatube.org), auf dem es sich befindet, zusammensetzt.

Die Administratoren einer PeerTube-Instanz können einander folgen.
Wenn Ihre PeerTube-Instanz einer anderen PeerTube-Instanz folgt, erhalten Sie Videoanzeigeinformationen von dieser Instanz.
Auf diese Weise können Sie die Videos anzeigen, die auf Ihrer Instanz vorhanden sind und auf der Instanz, der Sie folgen möchten.
So behalten Sie die Kontrolle über die auf Ihrem PeerTube-Server angezeigten Videos!

[Irgendwelche Fragen?](/de/faq/)

{{% /grid %}}
{{% grid class="col-sm-7 text-center" %}}

![peertube federation schema](/pt-p2p.png)

{{% /grid %}}
{{% grid class="col-sm-12" %}}

### Wieso ist das toll?

Jeder Server arbeitet unabhängig und wird von einer anderen Person oder Organisation verwaltet, die daher verschiedene Regeln der Mäßigung und des guten Benehmens anwenden kann, so dass Sie den Körper finden, der am besten zu Ihnen passt.

Indem Sie ein Video ansehen, helfen Sie dem Gastgeber, es zu senden, indem Sie selbst ein Sender dieses Videos werden.
So braucht jede Instanz nicht viel Geld, um die Videos ihrer Nutzer zu übertragen!

[Los geht's!](#getting-started)

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row footer" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12" %}}

Diese Website wurde auf der Basis von <a href="https://joinmastodon.org" target="_blank">joinmastodon.org</a>. Danke!

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
<p>
