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

Enkele vragen om kennis te maken met PeerTube …

</h2>
<p><i class="text-center">

(klik op de vragen om het antwoord te onthullen)

</i></p>
<h3>

Over PeerTube

</h3>

<!-- début accordéon -->

<div id="accordion-presentation" class="panel-group" role="tablist" aria-multiselectable="true">
<!-- what -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#what" aria-controls="what" aria-expanded="true">

Wat is PeerTube?

    </a>
  </h4>
</div>

<div id="what" class="panel-collapse collapse in">

  <div class="panel-body">
    <p>

PeerTube is software die je kan installeren op een webserver.

Het geeft je de mogelijkheid een videowebsite te maken, zodat je je "eigen YouTube" kan hebben.

    </p>
    <p>

Het verschil met YouTube is dat het niet de bedoeling is een groot platform te bouwen waar alle video's ter wereld gecentraliseerd worden op een paar grote serverparken (dat is ongelofelijk duur).

    </p>
    <p>

Integendeel, PeerTubes concept is een netwerk van kleine, met elkaar verbonden video-servers te maken.

    </p>
  </div>
</div>
</div>

<!-- pros -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#pros" aria-controls="pros" aria-expanded="false">

De drie voordelen van PeerTube

    </a>
  </h4>
</div>

<div id="pros" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

PeerTube is uniek omdat het (voor zover we weten) de enige videowebapplicatie is die deze drie zaken combineert:

    </p>
    <ol>
      <li>

Open code (transparantie) onder een vrije licentie (ethisch verantwoord, respect en ontwikkeling in gemeenschapsverband);

      </li>
      <li>

Een federatie van met elkaar verbonden hostingproviders (dus meer keuze van op welke site je video's wil bekijken);

      </li>
      <li>

Peer-to-peer overdragen van video's (dus servers worden niet overbelast als een video viraal gaat).

      </li>
    </ol>
    <p>

Samen zorgen deze eigenschappen ervoor dat video's hosten gemakkelijk is, en video's bekijken praktisch, ethisch verantwoord en aangenaam is.

    </p>
  </div>
</div>
</div>

<!-- libre -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#libre" aria-controls="libre" aria-expanded="false">

Waarom is vrije software beter?

    </a>
  </h4>
</div>

<div id="libre" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Omdat zulke software onze fundamentele vrijheden respecteert, en die ook vastlegt in <a href="https://github.com/Chocobozzz/PeerTube/blob/develop/LICENSE">een licentiedocument</a>, een wettelijk afdwingbaar contract.

    </p>
    <p>

Concreet betekent dat in ons geval:

    </p>
    <ul>
      <li>

PeerTube is gratis om te installeren;

      </li>
      <li>

Je kan onder de motorkap van PeerTube kijken (de broncode): het is controleerbaar en transparant;

      </li>
      <li>

De ontwikkeling gebeurt in gemeenschappelijk verband, iedereen kan PeerTube verbeteren.

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

Wat is het voordeel aan federatie van videohostproviders?

    </a>
  </h4>
</div>

<div id="federated" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Het voordeel van YouTube (en andere gecentraliseerde platformen) is het gevarieerde aanbod: van brei-instructievideo's over Minecraftconstructies tot kittenvideo's … je kan er haast alles vinden.

    </p>
    <p>

Hoe gevarieerder het aanbod is, hoe meer mensen er geïnteresseerd zijn in het platform, en hoe meer video's er geüpload worden. Maar zoveel video's van over heel de wereld hosten is (heel, heel erg) duur!

    </p>
    <p>

Als de hostingprovider Brei-PeerTube vrienden wordt met KittensTube en Framatube, zijn ook de video's van die andere instanties beschikbaar op Brei-PeerTube. Zo worden hosting-kosten verminderd maar blijft de ervaring volledig en praktisch voor internetgebruikers.

    </p>
    <p>

PeerTube's federatieprotocol is dynamisch (iedereen kan zijn "bevriende" hosts kiezen), en gebaseerd op <a href="https://activitypub.rocks/">ActivityPub</a>. Dit opent de mogelijkheid te verbinden met Mastodon of MediaGoblin.

    </p>
  </div>
</div>
</div>

<!-- p2p -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#p2p" aria-controls="p2p" aria-expanded="false">

Waarom peer-to-peer?

    </a>
  </h4>
</div>

<div id="p2p" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Als je een groot bestand host, zoals een video, is succes je grootste vijand. Als een video viraal gaat en veel mensen het tegelijkertijd bekijken, riskeert de server overbelast te raken!

    </p>
    <p>

Peer-to-peer laat toe, dankzij het <a href="https://nl.wikipedia.org/wiki/WebRTC">WebRTC</a>-protocol, dat internetgebruikers die tegelijk dezelfde video bekijken, delen ervan onderling uitwisselen. Dat neemt een deel van de belasting van de server weg.

    </p>
    <p>

Als gebruiker hoef je hier niets voor te doen: je browser doet het vanzelf.

Als je op een mobiel apparaat kijkt, of als je netwerk het niet toelaat (router-, firewallbeperkingen, enz.), is deze functionaliteit uitgeschakeld en wordt overgegaan op een klassieke video-overdracht.

    </p>
  </div>
</div>
</div>

<!-- admin -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#admin" aria-controls="admin" aria-expanded="false">

Voor mensen die weten hoe je een server beheert, biedt PeerTube …

    </a>
  </h4>
</div>

<div id="admin" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

<strong>Het is software die je installeert op je server</strong> om een website te maken waar je video's kan hosten …

Kort gezegd heb je dan je "eigen YouTube"!

    </p>
    <p>

Er bestaat al andere vrije software die dit mogelijk maakt.

Maar met PeerTube kan je jouw PeerTube-instantie verbinden met die van Zaïd (waar hij opnames van lezingen aan zijn universiteit op zet), die van Katrien (waar ze haar video-experimenten host) en die van Solar (die de video's van een community van vloggers staan heeft).

    </p>
    <p>

      <strong>

Maar PeerTube centraliseert niet: het federeert.

      </strong>

Dankzij het <a href="https://activitypub.rocks/">ActivityPub</a>-protocol (ook gebruikt door <a href="https://joinmastodon.org/">de Mastodon-federatie</a>, een vrij alternatief voor Twitter), kan PeerTube verschillende kleine hosters laten federeren zodat ze niet elk duizenden harde schijven moeten kopen om alle video's van de hele wereld te moeten opslaan.

    </p>
    <p>

Bijgevolg kunnen mensen op jouw PeerTube-website niet alleen video's van op jouw server, maar ook die op die van Zaïd, Catherin of Solar bekijken, zonder dat jij hun video's moet hosten.

Zo'n diversiteit is een groot voordeel.

De grote keuze van video's is wat gecentraliseerde platformen zoals YouTube succesvol heeft gemaakt.

    </p>
    <p>

Federatie brengt nog een ander voordeel: <strong>iedereen wordt onafhankelijk</strong>.

Zaïd, Catherin, Solar en jij kunnen elk jullie eigen regels maken, jullie eigen Gebruiksvoorwaarden (je kan je bijvoorbeeld een MiauwTube voorstellen waar video's van honden verboden zijn &#x1F642;).

    </p>
  </div>
</div>
</div>

<!-- video-maker -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#video-maker" aria-controls="video-maker" aria-expanded="false">

Voor zij die video's willen uploaden, biedt PeerTube …

    </a>
  </h4>
</div>

<div id="video-maker" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Het laat je toe een hoster te kiezen waar je je goed bij voelt.

YouTube's praktijken zijn een goed voorbeeld: het bedrijf erachter, Google/Alphabet, onderwerpt video's aan een "Robocopyright"-systeem (ContentID), indexeert video's, beveelt ze aan, zet ze in de schijnwerper … En die systemen zijn al even oneerlijk als vaag.

Bovendien verplichten ze je <a href="https://tosdr.org/#youtube">gratis een groot aantal rechten op je video's af te staan</a>!

    </p>
    <p>

Met PeerTube <strong>kan je een hoster kiezen op basis van zijn gebruiksvoorwaarden</strong>, moderatiebeleid en federatie-keuzes.

Aangezien je geen technologiereus tegenover je hebt, kan je waarschijnlijk met je hoster in overleg gaan als je een probleem of verzoek hebt.

    </p>
    <p>

Het andere grote voordeel aan PeerTube is dat je hoster niet bang moet zijn dat een van je video's plots een groot succes kent.

PeerTube wisselt namelijk video's uit tussen kijkers met het <a href="https://en.wikipedia.org/wiki/BitTorrent">WebTorrent</a>-protocol.

Als honderden mensen je video tegelijkertijd bekijken, zenden hun browsers automatisch delen van de video door naar andere kijkers.

    </p>
    <p>

Zonder deze peer-to-peer-uitwisseling zijn succesvolle videomakers (of video's die in het nieuws komen) gedoemd om gehost te worden door een webgigant die miljoenen kijkers tegelijk aankan…

Of een heel dure onafhankelijke host te betalen die de belasting aankan.

    </p>
  </div>
</div>
</div>

<!-- audience -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#audience" aria-controls="audience" aria-expanded="false">

Voor mensen die video's willen bekijken, biedt PeerTube &hellip;

    </a>
  </h4>
</div>

<div id="audience" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Een van de voordelen is dat <strong>je meehelpt aan het uitzenden van de video die je aan het bekijken bent</strong>.

Als andere mensen een PeerTube-video bekijken op hetzelfde moment als jij, deelt je browser delen van die video, en neem je deel aan een beter gebruik van het internet.

    </p>
    <p>

Natuurlijk past PeerTubes videospeler zich aan aan je situatie: als je installatie peer-to-peer-afspelen niet ondersteunt (bedrijfsnetwerk, terughoudende browser-instellingen, enz.), zal de video afgespeeld worden op de klassieke manier.

    </p>
    <p>

Maar bovenal <strong>behandelt PeerTube jou als een persoon en niet als een product</strong> dat gevolgd, geprofileerd en uitgemelkt moet worden om je aandacht te verkopen.

Daarom is de <a href="https://github.com/Chocobozzz/PeerTube">broncode</a> (het recept) van de PeerTube-software is open, zodat de werking ervan transparent is.

    </p>
    <p>

      <strong>

PeerTube is niet alleen open-source, het is ook vrij (als in vrije meningsuiting).

      </strong>

De licentie garandeert gebruikers enkele fundamentele rechten.

Dit respect voor vrijheid laat Framasoft toe iedereen uit te nodigen om bij te dragen aan deze software, en dat is alvast goed gelukt.

    </p>
  </div>
</div>
</div>

<!-- remplace-yt -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#remplace-yt" aria-controls="remplace-yt" aria-expanded="false">

Is PeerTubes doel YouTube te vervangen?

    </a>
  </h4>
</div>

<div id="remplace-yt" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

We kunnen hier stellig "nee" op antwoorden!

    </p>
    <p>

In maart 2018 kwam de openbare bètaversie van PeerTube uit.

Verschillende collectieven zetten de eerste instanties op, en legden zo de basis voor de federatie.

    </p>
    <p>

Maar dit is nog maar het begin, PeerTube is (nog) niet perfect, en er ontbreken nog heel wat functies.

We willen eraan blijven werken om versie 1 klaar te hebben aan het eind van 2018.

    </p>
    <p>

Maart 2018 markeert dus het begin van de PeerTube-federaties: hoe meer de software gebruikt en ondersteund wordt, hoe meer mensen het zullen gebruiken en verbeteren, en hoe sneller het zal evolueren tot een concreet alternatief voor platformen zoals YouTube.

    </p>
    <p>

Desalniettemin blijft de ambitie <strong> een vrij en gedecentraliseerd alternatief</strong> te zijn: het doel is niet videosites te vervangen maar om iets anders aan te bieden, met andere waarden, parallel aan wat al bestaat.

    </p>
  </div>
</div>
</div>
<!-- fin questions -->
</div>

<!-- fin accordéon -->

<h3>

Creatie en inhoud

</h3>

<!--début accordéon -->

<div id="accordion-creation" class="panel-group" role="tablist" aria-multiselectable="true">
<!-- law -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#law" aria-controls="law" aria-expanded="false">

Als het zo vrij is, kunnen we er dan illegale inhoud op plaatsen?

  </a>
  </h4>
</div>

<div id="law" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Vrij betekent niet boven de wet!

Elke PeerTube-administrator kan zijn eigen gebruiksvoorwaarden bepalen, afgestemd op de lokale wetten.

    </p>
    <p>

In Frankrijk is discriminerende inhoud bijvoorbeeld <a href="https://fr.wikipedia.org/wiki/Lois_contre_le_racisme_et_les_discours_de_haine">verboden</a>, en kan die <a href="http://stop-discrimination.gouv.fr/agir/ne-pas-laisser-faire-les-recours">gemeld worden aan de autoriteiten</a>.

PeerTube laat gebruikers toe problematische video's te rapporteren, en elke administrator moet dan zijn moderatiebeleid toepassen om te beslissen.

    </p>
    <p>

Het federatiesysteem laat hosts toe te kiezen met wie ze connecties willen leggen, op basis van de doelgroep en het moderatiebeleid van andere instanties.

    </p>
  </div>
</div>
</div>

<!-- responsible -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#responsible" aria-controls="responsible" aria-expanded="false">

Wie is verantwoordelijk voor inhoud op PeerTube?

    </a>
  </h4>
</div>

<div id="responsible" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

PeerTube is geen website: het is software die een webhost (bijvoorbeeld Dorien) een videowebsite op te zetten (laten we dat DorienTube noemen).

    </p>
    <p>

Stel je nu voor dat Kamiel een account gemaakt heeft op DorienTube en een video uploadt die zonder toestemming muziek gebruikt van Peter.

    </p>
    <p>

Peter kijkt op Framatube, een instantie die federeert met DorienTube.

Dus Peter kan vanaf Framatube de video's zien die op DorienTube gepubliceerd zijn.

    </p>
    <p>

Peter ziet Kamiels video die inbreuk maakt op zijn copyright, en meld dat met de rapporteringsknop.

Hoewel de melding vanaf Framatube verzonden is, wordt ze direct naar de persoon gestuurd bij wie de illegale inhoud gehost is, Dominique.

    </p>
    <p>

Vanaf dan is Dorien verantwoordelijk, omdat ze gewaarschuwd is dat ze een illegale video host.

Zij moet dan actie ondernemen om niet verantwoordelijk gehouden te worden door de wet.

    </p>
    <p>

Dorien en Peter kunnen Kamiel confronteren, die de inbreuk gemaakt heeft.

    </p>
  </div>
</div>
</div>

<!-- money -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#money" aria-controls="money" aria-expanded="false">

Wat is PeerTubes vergoedingsbeleid?

    </a>
  </h4>
</div>

<div id="money" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Op dit moment zijn er geen vergoedingssystemen voorzien: we willen PeerTube neutraal houden op dat vlak.

    </p>
    <p>

Op dit moment is de oplossing de "Support"-knop onder de video te gebruiken. Die opent een kader waarin de uploader van de video tekst, afbeeldingen en links kan plaatsen. Zo kan je daar bijvoorbeeld een link naar Patreon, Tipeee, PayPal of Liberapay plaatsen. Of nog: een adres waar je postkaartjes als bedanking wil ontvangen, een logo van je onderneming, een link naar een donatiepagina van een non-profit-organisatie …

    </p>
    <p>

Andere opties zijn er nog niet omdat voor één bepaald platform kiezen zou willen zeggen dat we een politieke visie van cultuur delen en de financiering ervan opleggen. Elke mogelijke financieringsmethode is mogelijk op PeerTube, en wordt op dezelfde manier behandeld.

    </p>
    <p>

Maar je mag nog veel verbeteringen aan PeerTube verwachten &hellip;

Onder andere een systeem dat je vergoedingssystemen die je interesseren laat toevoegen en kiezen voor video's!

    </p>
    <p>

Onthou wel dat het merendeel van de video's die op het internet gepubliceerd worden (en zelfs op YouTube) niet gedeeld worden om winst te maken: vergoeding is een boost, maar is niet essentieel.

    </p>
  </div>
</div>
</div>

<!-- instances -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#instances" aria-controls="instances" aria-expanded="false">

Waar kan ik mijn video's zetten?

    </a>
  </h4>
</div>

<div id="instances" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Je moet een PeerTube-instantie vinden die jij kan vertrouwen.

    </p>
    <p>

Er is een <a href="https://instances.joinpeertube.org/">lijst van alle instanties</a>, en een <a href="https://joinpeertube.org/fr/#getting-started">lijst van instanties waar nieuwe accounts aanmaken mogelijk is</a>.

    </p>
    <p>

We raden aan naar de instanties te gaan, hun "over"-pagina te lezen om hun gebruiksvoorwaarden te vinden (zoals opslagquotum per gebruiker, inhoudsbeleid, enz.).

    </p>
    <p>

Het is best rechtstreeks contact op te nemen met de hostingproviders en met hen te overleggen om hun businessmodel en visie te begrijpen,

Want alleen jij kan beslissen wat ervoor zorgt dat je een host vertrouwt met je video's.

    </p>
  </div>
</div>
</div>
<!-- fin questions -->
</div>

<!-- fin accordéon -->

<a href="https://framacolibri.org/c/peertube">Overleg op ons forum</a>

<h3>

Technische vragen

</h3>

<!--début accordéon -->

<div id="accordion-tech" class="panel-group" role="tablist" aria-multiselectable="true">
<!-- install -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-tech" href="#install" aria-controls="install" aria-expanded="false">

Hoe installeer ik PeerTube?

    </a>
  </h4>
</div>

<div id="install" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Daarvoor kan je de <a href="https://github.com/Chocobozzz/PeerTube/blob/develop/support/doc/production.md">installatiehandleiding</a> lezen (enkel beschikbaar in het Engels op dit moment).

    </p>
    <p>

We raden aan PeerTube niet op zwakke hardware of met een slechte internetverbinding te installeren (zoals op een Raspberry Pi met een ADSL-connectie): dit kan federaties vertragen.

    </p>
    <p>

Val de ontwikkelaars niet lastig met vragen tijdens de installatie: we hebben daar een <a href="https://framacolibri.org/c/peertube">ondersteuningsforum</a> voor.

    </p>
  </div>
</div>
</div>

<!-- code -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-tech" href="#code" aria-controls="code" aria-expanded="false">

Hoe draag ik bij aan PeerTubes code?

    </a>
  </h4>
</div>

<div id="code" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Kijk even in de <a href="https://github.com/Chocobozzz/PeerTube">Git-repo van PeerTube</a>.

    </p>
    <p>

Je kan <a href="https://github.com/Chocobozzz/PeerTube/issues">een issue openen</a>, meer informatie geven bij bestaande issues die je ook ondervindt, of ze helpen oplossen. Er is een lijst van <a href="https://github.com/Chocobozzz/PeerTube/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22">gemakkelijke problemen</a> voor mensen die nieuw zijn in het project.

    </p>
    <p>

Als je op een andere manier wil bijdragen, of als je een functie wil verzoeken, ben je welkom op ons <a href="https://framacolibri.org/c/peertube">bijdragersforum</a>.

    </p>
  </div>
</div>
</div>

<!-- protocol -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-tech" href="#protocol" aria-controls="protocol" aria-expanded="false">

Waarom gebruikt PeerTube het ActivityPub-federatieprotocol? Waarom niet IPFS / d.tube / Steemit?

    </a>
  </h4>
</div>

<div id="protocol" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

PeerTube gebruikt ActivityPub omdat dit federatieprotocol aangeraden wordt door het W3C en al gebruikt wordt door het gefedereerd sociaal netwerk Mastodon.

    </p>
    <p>

IPFS is veelbelovende technologie, maar het ziet er nog heel jong (te jong) uit voor het streamen van grote bestanden.

    </p>
    <p>

Na overleg op ons forum hebben we besloten dat d.tube niet strookt met onze filosofie van vrije software, want enkel de gecompileerde code publiceren belemmert vrijheid van aanpassing.

    </p>
    <p>

D.tube is gebaseerd op Steem voor vergoedingen. Dat is een keuze, maar Steem is <a href="https://en.wikipedia.org/wiki/Steemit#Criticism">controversieel</a> en <a href="https://steemit.com/steemit/@docdelux/30-days-of-steemit-here-is-my-criticism">erg gecentraliseerd</a>, en lijkt ook verdacht veel <a href="https://steemit.com/steemit/@thecryptonews/psa-constructive-criticism-the-ugly-truth-behind-steemit">op een Ponzifraudesysteem</a>.

    </p>
    <p>

PeerTube is vrij, gedecentraliseerd, gedistribueerd, en legt geen vergoedingsmodel op.

Dit is de keuze die we gemaakt hebben, het is geen harde waarheid, en anderen (zoals d.tube) hebben andere keuzes gemaakt, die ook hun voordelen hebben.

Het is aan jou om te kiezen wat bij je past.

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
