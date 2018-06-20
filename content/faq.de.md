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

Einige Fragen zu PeerTube...

</h2>
<p><i class="text-center">

(Klicken Sie auf die Fragen, um die Antworten zu entdecken)

</i></p>
<h3>

PeerTube Vorstellung

</h3>

<!-- début accordéon -->

<div id="accordion-presentation" class="panel-group" role="tablist" aria-multiselectable="true">
<!-- what -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#what" aria-controls="what" aria-expanded="true">

Was ist PeerTube?

    </a>
  </h4>
</div>

<div id="what" class="panel-collapse collapse in">

  <div class="panel-body">
    <p>

PeerTube ist eine Software, die auf einem Server installiert wird.

Es erlaubt Ihnen, eine Website für das Hosten und Verteilen von Videos zu erstellen und so Ihr „hausgemacht YouTube” zu machen.

    </p>
    <p>

Der Unterschied zu YouTube ist, dass es nicht darauf ausgelegt ist, eine riesige Plattform zu schaffen, die Videos aus der ganzen Welt auf einer Serverfarm zentralisiert (was schrecklich teuer ist).

    </p>
    <p>

Im Gegenteil, das Konzept von PeerTube besteht darin, ein Netzwerk aus vielen kleinen, miteinander verbundenen Video-Hosts zu schaffen.

    </p>
  </div>
</div>
</div>

<!-- pros -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#pros" aria-controls="pros" aria-expanded="false">

Die drei wichtigsten Vorteile von PeerTube.

    </a>
  </h4>
</div>

<div id="pros" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

PeerTube ist einzigartig, weil es (nach unserem Wissen) die einzige Web-Video-Hosting-Anwendung ist, die drei Vorteile vereint:

    </p>
    <ol>
      <li>

Ein offener Code (Transparenz) unter freier Lizenz (Ethik, Respekt und Community-Entwicklung);

      </li>
      <li>

Eine Föderation von miteinander verbundenen Hosts (also mehr Videomöglichkeiten, wo immer Sie auch hingehen, um sie zu sehen);

      </li>
      <li>

Peer-to-Peer-Übertragung - und damit das Betrachten - (also keine Verlangsamung, wenn ein Video viral wird).

      </li>
    </ol>
    <p>

Diese drei Funktionen machen es einfach, Videos auf der Serverseite zu hosten und gleichzeitig praktisch, ethisch und unterhaltsam im Internet zu bleiben.

    </p>
  </div>
</div>
</div>

<!-- libre -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#libre" aria-controls="libre" aria-expanded="false">

Warum ist es besser, dass es freie Software ist?

    </a>
  </h4>
</div>

<div id="libre" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Denn es ist Software, die unsere Grundfreiheiten respektiert und durch <a href="https://github.com/Chocobozzz/PeerTube/blob/develop/LICENSE">eine Lizenz</a> garantiert, also einen rechtlich durchsetzbaren Vertrag.

    </p>
    <p>

Konkret bedeutet dies hier, dass&nbsp;:

    </p>
    <ul>
      <li>

PeerTube wird kostenlos vertrieben, es muss nicht bezahlt werden, um es auf seinem Server zu installieren;

      </li>
      <li>

Wir können unter der Haube von PeerTube (dem Quellcode) nachsehen: es ist prüfbar, transparent&nbsp;

      </li>
      <li>

Ihre Entwicklung ist gemeinschaftlich, sie kann durch die Beiträge jedes Einzelnen bereichert werden.

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

Was ist der Sinn der Föderation von Video-Hosting?

    </a>
  </h4>
</div>

<div id="federated" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Der Vorteil von YouTube (und anderen Plattformen) ist sein Videokatalog: vom Tuto-Stricken über Minenbau bis hin zu Videos von Kätzchen oder Urlaub.... Sie finden alles!

    </p>
    <p>

Je vielfältiger der Videokatalog ist, desto mehr Leute sind interessiert, desto mehr Videos werden gepostet.... aber Videos aus aller Welt zu hosten ist (sehr, sehr) teuer!

    </p>
    <p>

Wenn sich der Stricker-Tube mit Kätze-Tube und Framatube anfreundet, zeigt er die Videos von anderen auf seiner Seite an: Das verwässert die Hostingkosten und bleibt für Internetnutzer praktisch und vollständig.

    </p>
    <p>

Das Föderationsprotokoll von PeerTube wird flüssig sein (jeder kann seine "Freunde" als Hosting-Provider auswählen), und auf Basis von <a href="https://activitypub.rocks/">ActivityPub</a> : dies eröffnet die Möglichkeit, sich mit Tools wie Mastodon oder MediaGoblin zu verbinden.

    </p>
  </div>
</div>
</div>

<!-- p2p -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#p2p" aria-controls="p2p" aria-expanded="false">

Warum Peer-to-Peer-Videos ausstrahlen?

    </a>
  </h4>
</div>

<div id="p2p" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Wenn Sie eine große Datei wie ein Video hosten, ist das größte Problem der Erfolg: Wenn ein Video viral wird und viele Leute es gleichzeitig sehen, hat der Server große Überlastungsrisiken!

    </p>
    <p>

Die Peer-to-Peer-Verteilung ermöglicht dank des Protokolls <a href="https://fr.wikipedia.org/wiki/WebRTC">WebRTC</a>, dass Internetnutzer, die das gleiche Video gleichzeitig ansehen, Bits von Dateien austauschen, was den Server entlastet.

    </p>
    <p>

Es gibt nichts zu tun: Ihr Webbrowser macht das automatisch.

Wenn Sie sich auf einem Mobiltelefon befinden oder Ihr Netzwerk dies nicht zulässt (Router, Firewall, etc.), ist diese Funktion deaktiviert, um zu einer "alten" Videoübertragung zurückzukehren.

    </p>
  </div>
</div>
</div>

<!-- admin -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#admin" aria-controls="admin" aria-expanded="false">

Für alle, die wissen, wie man einen Server verwaltet, ist PeerTube&hellip;

    </a>
  </h4>
</div>

<div id="admin" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

<strong>Es ist eine Software, die Sie auf Ihrem Server installieren</strong>, um Ihre Website-Hosting und Video-Distribution zu erstellen&hellip;

Grundsätzlich: Sie erstellen Ihr eigenes „hausgemacht YouTube”! 

    </p>
    <p>

Es gibt bereits freie Softwareprogramme, die dies ermöglichen.

Der Vorteil dabei ist, dass Sie Ihre PeerTube-Instanz (Ihre Video-Website) mit Zaïds PeerTube-Instanz (wo Sie die Videos der Konferenzen seiner beliebten Universität finden können), Catherines Instanz (die die Videos seiner Webmédia hostet) oder Solars PeerTube-Instanz (die den Server seines Kollektivs von Videoproduzenten verwaltet) verbinden können.

    </p>
    <p>

      <strong>

Aber PeerTube zentralisiert sich nicht: Es föderiert.

      </strong>

Dank des Protokolls <a href="https://en.wikipedia.org/wiki/ActivityPub">ActivityPub</a> (wird auch von <a href="https://joinmastodon.org/">Mastodon Föderation</a>, einer kostenlosen Alternative zu Twitter, verwendet) führt PeerTube viele kleine Hosts zusammen, um sie nicht zu zwingen, Tausende von Festplatten zu kaufen, um Videos aus aller Welt zu hosten.

    </p>
    <p>

Auf Ihrer PeerTube-Website kann die Internet-Publikums Ihre Videos sehen, aber auch die von Zaïd, Catherine oder Solar&hellip;, ohne dass Ihre Website die Videos von anderen hosten muss&nbsp;!

Diese Vielfalt im Videokatalog wird sehr attraktiv.

Das hat die zentralen Plattformen von YouTube so erfolgreich gemacht: die Auswahl und Vielfalt der Videos.

    </p>
    <p>

Ein weiterer Vorteil dieser Föderation ist, dass <strong>jeder unabhängig</strong> ist.

Zaïd, Catherine, Solar und Sie selbst können Ihre eigenen Spielregeln haben und Ihre eigenen Nutzungsbedingungen erstellen (wir können uns zum Beispiel ein KätzeTube vorstellen, bei dem Videos von Hunden strengstens verboten wären &#x1F642;).

    </p>
  </div>
</div>
</div>

<!-- video-maker -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#video-maker" aria-controls="video-maker" aria-expanded="false">

Für diejenigen, die ihre Videos online ausstrahlen wollen, bietet PeerTube die Möglichkeit&hellip;

    </a>
  </h4>
</div>

<div id="video-maker" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Es erlaubt Ihnen, die Unterkunft zu wählen, die zu Ihnen passt.

Wir haben es bei YouTube gesehen: Sein Host, Google-Alphabet, kann sein System <a href="https://scinfolex.com/2016/07/05/ce-que-le-filtrage-automatise-des-contenus-sur-youtube-fait-a-la-creation/">ContentID (die berühmte"&nbsp;Robocopyright&nbsp;")</a> oder seine Videoverbesserungs-Tools, die ebenso obskur wie unfair erscheinen.

Was auch immer passiert, er verhängt bereits <a href="https://tosdr.org/#youtube">um ihm - kostenlos - Rechte an Ihren Videos zu geben </a>.

    </p>
    <p>

Mit PeerTube, <strong>wählen Sie den Host Ihrer Videos entsprechend den Nutzungsbedingungen</strong>, seiner Moderationspolitik, seiner Verbandswahlen&hellip;

Da Sie keinen Giganten des Internets vor sich haben, können Sie wahrscheinlich gemeinsam diskutieren, wenn Sie ein Problem, ein Bedürfnis, einen Wunsch&hellip; haben.

    </p>
    <p>

Der andere große Vorteil von PeerTube ist, dass Ihr Gastgeber den plötzlichen Erfolg eines Ihrer Videos nicht befürchten muss.

Tatsächlich sendet PeerTube Videos mit dem Protokoll <a href="https://de.wikipedia.org/wiki/BitTorrent">WebTorrent</a>.

Wenn Hunderte von Personen gleichzeitig Ihr Video ansehen, senden ihre Browser automatisch Bits Ihres Videos an andere Betrachter.

    </p>
    <p>

Vor dieser Peer-to-Peer-Übertragung waren erfolgreiche Videofilmer (oder Videos, die den Buzz machen) dazu verdammt, von einem Web-Riesen gehostet zu werden, dessen Infrastruktur Millionen von gleichzeitigen Ansichten verarbeiten kann&hellip;

Oder sehr teuer ein unabhängiges Video-Hosting zu bezahlen, damit es die Last hält.

    </p>
  </div>
</div>
</div>

<!-- audience -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#audience" aria-controls="audience" aria-expanded="false">

Für diejenigen, die Videos sehen wollen, hat PeerTube Vorteile&hellip;

    </a>
  </h4>
</div>

<div id="audience" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Einer der Vorteile ist, dass <strong>Sie ein Teil der Ausstrahlung der Videos werden, die Sie sich ansehen</strong>.

Wenn andere Leute ein PeerTube-Video zur gleichen Zeit wie Sie ansehen, solange Ihr Tab geöffnet bleibt, teilt Ihr Browser Bits dieses Videos und Sie nehmen an einer gesünderen Nutzung des Internets teil.

    </p>
    <p>

Natürlich passt sich der Videoplayer von PeerTube Ihrer Situation an: Wenn Ihre Installation keine Peer-to-Peer-Wiedergabe erlaubt (Firmennetzwerk, widerspenstiger Browser, etc.), wird die Videowiedergabe auf klassische Weise durchgeführt.

    </p>
    <p>

Aber vor allem, <strong>PeerTube betrachtet Sie als eine Person, und nicht als ein Produkt</strong>, dass Sie zu verfolgen, Profil, und sperren Sie in Video-Loops, um besser verkaufen Ihre verfügbare Zeit Gehirn.

Damit ist <a href="https://github.com/Chocobozzz/PeerTube">der Quellcode</a> (das Rezept) der PeerTube-Software geöffnet und macht deren Betrieb transparent.

    </p>
    <p>

      <strong>

PeerTube ist nicht nur Open-Source: es ist befreiend.

      </strong>

Seine kostenlose Lizenz garantiert unsere Grundfreiheiten als Nutzer.

Es ist dieser Respekt vor unseren Freiheiten, der es Framasoft erlaubt, Sie einzuladen, zu dieser Software beizutragen, und viele Entwicklungen (innovatives Kommentarsystem, etc.) wurden uns bereits von einigen von Ihnen vorgeschlagen.

    </p>
  </div>
</div>
</div>

<!-- remplace-yt -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#remplace-yt" aria-controls="remplace-yt" aria-expanded="false">

Soll PeerTube YouTube ersetzen?

    </a>
  </h4>
</div>

<div id="remplace-yt" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Man kann mit Sicherheit antworten: nein!

    </p>
    <p>

Im März 2018 veröffentlichte PeerTube seine öffentlich einsetzbare Beta-Version.

Mehrere Kollektive errichteten die ersten Unterkünfte und schufen damit die Grundlagen des Verbandes.

    </p>
    <p>

Aber das ist erst der Anfang, PeerTube ist (noch) nicht perfekt und viele Features fehlen.

Wir beabsichtigen, sie weiter zu verbessern, um eine Version 1 bis Ende 2018 zu veröffentlichen.

    </p>
    <p>

März 2018 ist somit die Geburtsstunde der PeerTube-Verbände: Je mehr diese Software genutzt und unterstützt wird, desto mehr Menschen werden sie nutzen und dazu beitragen, und desto schneller wird sie sich zu einer konkreten Alternative zu Plattformen wie YouTube entwickeln.

    </p>
    <p>

Dennoch bleibt das Ziel, <strong>eine freie und dezentrale Alternative</strong> zu sein: Das Ziel einer Alternative ist nicht, etwas anderes, mit anderen Werten, parallel zu dem, was bereits existiert, vorzuschlagen.

    </p>
  </div>
</div>
</div>
<!-- fin questions -->
</div>

<!-- fin accordéon -->

<h3>

Kreation und Inhalt

</h3>

<!--début accordéon -->

<div id="accordion-creation" class="panel-group" role="tablist" aria-multiselectable="true">
<!-- law -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#law" aria-controls="law" aria-expanded="false">

Wenn es kostenlos ist, können Sie dann illegale Inhalte einfügen?

  </a>
  </h4>
</div>

<div id="law" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Frei zu sein bedeutet nicht, über dem Gesetz zu stehen!

Jedes PeerTube-Hosting kann im Rahmen des Gesetzes, von dem es abhängt, seine eigenen allgemeinen Nutzungsbedingungen festlegen.

    </p>
    <p>

In Frankreich beispielsweise ist diskriminierender Inhalt <a href="https://fr.wikipedia.org/wiki/Lois_contre_le_racisme_et_discours_de_haine"> verboten</a> und kann <a href="http://stop-discrimination.gouv.fr/agir/ne-pas-laisser-faire-les-recours">an die Behörden gemeldet werden.

PeerTube ermöglicht es Benutzern, ein Problem-Video zu melden, und jeder Host muss dann seine Moderation in Übereinstimmung mit seinen Bedingungen und dem Gesetz anwenden.

    </p>
    <p>

Das Föderationssystem seinerseits erlaubt es den Gastgebern zu entscheiden, mit wem sie sich vernetzen wollen oder nicht, je nach Art der Inhalte oder der Moderationsrichtlinien anderer.

    </p>
  </div>
</div>
</div>

<!-- responsible -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#responsible" aria-controls="responsible" aria-expanded="false">

Wer ist für die auf PeerTube veröffentlichten Inhalte verantwortlich?

    </a>
  </h4>
</div>

<div id="responsible" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

PeerTube ist keine Website : es ist eine Software, die es einem Webhoster (z.B. Franz) erlaubt, eine Video-Website zu erstellen (nennen wir es FranzTube).

    </p>
    <p>

Nun stellen Sie sich vor, dass Olga einen Account auf FranzTube erstellt hat und ein illegales Video hochlädt, weil dieses Video Musik von Solal verwendet.

    </p>
    <p>

Solal geht zu Framatube, einer Instanz, die der FranzTube-Instanz folgt.

So kann Solal von Framatube die auf FranzTube veröffentlichten Videos sehen.

    </p>
    <p>

Solal sieht Olgas illegales Video und signalisiert es mit dem dafür vorgesehenen Button.

Der Bericht kann von Framatube erstellt werden, wird aber direkt an den Betreiber des illegalen Inhalts, Franz, geschickt.

    </p>
    <p>

Von diesem Moment an ist Franz verantwortlich, denn er warnte davor, dass er ein illegales Video moderiert.

Es liegt also an ihm zu handeln, wenn er nicht vor dem Gesetz Rechenschaft ablegen will.

    </p>
    <p>

Dann können sich Franz und Solal gegen Olga wenden, die das Unrecht begangen hat.

    </p>
  </div>
</div>
</div>

<!-- money -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#money" aria-controls="money" aria-expanded="false">

Wie sieht die Vergütungspolitik von PeerTube aus?

    </a>
  </h4>
</div>

<div id="money" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

PeerTube ist ein Werkzeug, das wir kompensationsneutral gestalten wollten.

    </p>
    <p>
Die vorgeschlagene Lösung ist derzeit die Verwendung der Schaltfläche "Support" ("&nbsp;<i lang="en">Support</i>&nbsp;"). Diese Schaltfläche zeigt einen Rahmen an, in dem Personen, die Videos hochladen, Text, Bilder und Links frei anzeigen können. Zum Beispiel ist es möglich, einen Patreon, Tipeee, Paypal, Liberapay Button anzuzeigen (oder jede andere Lösung, da das Eingabefeld frei ist). Weitere mögliche Beispiele: Geben Sie eine Adresse für eine Postkarte an, verhandeln Sie mit einem Sponsor, um sein Firmenlogo zu zeigen, markieren Sie einen Link zur Unterstützung einer NGO, etc.

    </p>
    <p>

Eine technische Lösung zu favorisieren, würde bedeuten, im Kodex eine politische Vision der kulturellen Teilhabe und ihrer Finanzierung durchzusetzen. Alle Kompensationslösungen sind daher in PeerTube möglich.

    </p>
    <p>

Darüber hinaus sind viele Verbesserungen von PeerTube zu erwarten....

Einschließlich derjenigen, die es Ihnen ermöglichen würden, die für Sie interessanten Monetarisierungswerkzeuge selbst zu erstellen (und auszuwählen)!

    </p>
    <p>

Dennoch sollte man bedenken, dass die überwiegende Mehrheit der im Internet (und sogar auf YouTube) veröffentlichten Videos für nicht marktbestimmte Zwecke freigegeben werden: Die Vergütung ist ein Werkzeug, aber nicht unbedingt ein Haupt- oder wesentlicher Zweck.

    </p>
  </div>
</div>
</div>

<!-- instances -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#instances" aria-controls="instances" aria-expanded="false">

Wo kann ich meine Videos ablegen?

    </a>
  </h4>
</div>

<div id="instances" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Sie müssen eine PeerTube-Hosting-Autorität finden, der Sie vertrauen.

    </p>
    <p>

Die vollständige Liste der Instanzen <a href="https://instances.joinpeertube.org/">ist da</a>, und wir zeigen <a href="https://joinpeertube.org/de/#getting-started">hier diejenigen, die für die Registrierung offen sind</a>.

    </p>
    <p>

Dann empfehlen wir Ihnen, zu den Instanzen zu gehen und deren"&nbsp;about&nbsp;"-Seite zu lesen, um deren Nutzungsbedingungen (Speicherplatzbegrenzung pro Benutzer, Inhaltsrichtlinien usw.) zu erfahren.

    </p>
    <p>

Am besten ist es, direkt mit Hosting-Providern Kontakt aufzunehmen und zu diskutieren, um ihr Geschäftsmodell, ihre Vision usw. zu verstehen.

Denn nur Sie können bestimmen, was Sie diesem oder jenem Gastgeber anvertrauen und ihm Ihre Videos anvertrauen.

    </p>
  </div>
</div>
</div>
<!-- fin questions -->
</div>

<!-- fin accordéon -->

<a href="https://framacolibri.org/c/qualite/peertube">Talk in unserem Forum </a>

<h3>

Technische Fragen

</h3>

<!--début accordéon -->

<div id="accordion-tech" class="panel-group" role="tablist" aria-multiselectable="true">
<!-- install -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-tech" href="#install" aria-controls="install" aria-expanded="false">

Wie installiert man PeerTube?

    </a>
  </h4>
</div>

<div id="install" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Die <a href="https://github.com/Chocobozzz/PeerTube/blob/develop/support/doc/production.md">Installationsanleitung finden Sie hier</a> (momentan nur auf Englisch).

    </p>
    <p>

Wir empfehlen, PeerTube nicht auf einer schwachen Hardware oder hinter einer schwachen Verbindung zu installieren (z.B. auf einem RaspberryPi mit ADSL-Verbindung): dies könnte alle Verbände verlangsamen.

    </p>
    <p>

Stören Sie den Entwickler nicht, Ihnen bei der Installation Ihrer Instanz zu helfen: unser <a href="https://framacolibri.org/c/qualite/peertube">support forum</a> ist dafür da.

    </p>
  </div>
</div>
</div>

<!-- code -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-tech" href="#code" aria-controls="code" aria-expanded="false">

Wie kann man am PeerTube-Code teilnehmen?

    </a>
  </h4>
</div>

<div id="code" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Das <a href="https://github.com/Chocobozzz/PeerTube">Git-Repository von PeerTube-Code ist hier</a>.

    </p>
    <p>

Sie können <a href="https://github.com/Chocobozzz/PeerTube/issues">ein Problem erstellen</a>, dazu beitragen, oder sogar anfangen, indem Sie das <a href="https://github.com/Chocobozzz/PeerTube/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22">einfache Probleme für diejenigen, die beginnen</a>.

    </p>
    <p>

Wenn Sie eine andere Art von Hilfe anbieten möchten, oder wenn Sie eine Funktion wünschen, die nicht verfügbar ist, kommen Sie und diskutieren Sie sie auf unserem <a href="https://framacolibri.org/c/qualite/peertube">Beitragsforum</a>.

    </p>
  </div>
</div>
</div>

<!-- protocol -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-tech" href="#protocol" aria-controls="protocol" aria-expanded="false">

Warum verwendet PeerTube das ActivityPub-Föderationsprotokoll? Warum nicht IPFS / d.tube / Steemit?

    </a>
  </h4>
</div>

<div id="protocol" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

PeerTube verwendet ActivityPub, da dieses Föderationsprotokoll vom W3C empfohlen wird und bereits vom föderierten sozialen Netzwerk Mastodon verwendet wird.

    </p>
    <p>

IPFS ist eine großartige Technologie, aber sie scheint immer noch sehr (zu!) frisch für das Streaming großer Dateien.

    </p>
    <p>

Nach der Diskussion in unserem Forum sind wir der Meinung, dass d.tube nicht frei oder Open Source ist, da die Veröffentlichung von nur kompiliertem Code die Freiheit der Modifikation behindert.

    </p>
    <p>

D.tube basiert auf Steem für "Vergütung", es ist eine Wahl, aber Steem ist <a href="https://en.wikipedia.org/wiki/Steemit#Criticism">weit kritisiert</a> als <a href="https://steemit.com/steemit/@docdelux/30-days-of-steemit-here-is-my-criticism">highly centralized</a>, and especially <a href="https://steemit.com/steemit/@thecryptonews/psa-constructive-criticism-the-ugly-truth-behind-steemit">proche of a Ponzi</a> system.

    </p>
    <p>

PeerTube ist frei, dezentralisiert, verteilt und schreibt kein Vergütungsmodell vor.

Das ist die Wahl, die wir getroffen haben, die fragwürdig ist, und andere (wie d.tube) haben andere Entscheidungen getroffen, die ihre Vorteile haben.

Es liegt also an Ihnen zu sehen, was zu Ihnen passt.

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
