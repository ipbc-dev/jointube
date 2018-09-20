+++

date = "2018-02-28T14:41:00+01:00"
title = "PeerTube – FAQ"
description = ""
author = "Framasoft"
draft = false
type = "page"
+++

{{% grid class="row faq" %}}
{{% grid class="container" %}}
{{< grid class="col-sm-12" >}}

<h2 class="text-center">

Kilka pytań, aby poznać PeerTube…

</h2>
<p><i class="text-center">

(naciśnij na pytania aby poznać odpowiedzi)

</i></p>
<h3>

Prezentacja PeerTube

</h3>

<!-- début accordéon -->

<div id="accordion-presentation" class="panel-group" role="tablist" aria-multiselectable="true">
<!-- what -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#what" aria-controls="what" aria-expanded="true">

Czym jest PeerTube?

    </a>
  </h4>
</div>

<div id="what" class="panel-collapse collapse in">

  <div class="panel-body">
    <p>

PeerTube jest oprogramowaniem, które możesz zainstalować na serwerze.

Pozwala na utworzenie strony hostującej filmy, więc możesz utworzyć „własnego YouTube”.

    </p>
    <p>

Różnicą w porównaniu z YouTube jest to, że nie próbujemy utworzyć ogromnej platformy zbierającej filmy z całego świata na jednej serwerowni (co byłoby strasznie drogie).

    </p>
    <p>

Zamiast tego, założeniem PeerTube jest utworzenie sieci małych, połączonych ze sobą dostawców hostingu wideo.

    </p>
  </div>
</div>
</div>

<!-- pros -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#pros" aria-controls="pros" aria-expanded="false">

Trzy główne zalety PeerTube.

    </a>
  </h4>
</div>

<div id="pros" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

PeerTube jest wyjątkowy, ponieważ (z tego co wiemy) jest jedyną aplikacją do hostingu filmów łączącą trzy zalety:

    </p>
    <ol>
      <li>

Otwarty kod źródłowy (transparentność) na wolnej licencji (etycznie rozwijany przez społeczność);

      </li>
      <li>

Federacja połączonych wzajemnie dostawców (więcej filmów do wyboru, gdziekolwiek chcesz je zobaczyć);

      </li>
      <li>

Transmitowanie peer-to-peer w trakcie oglądania (serwer nie spowolni się, gdy film stanie się viralem).

      </li>
    </ol>
    <p>

Razem, te trzy funkcje czynią hostowanie filmów prostym po stronie serwera, pozostając praktycznym, etycznym i przyjemnym dla użytkowników.

    </p>
  </div>
</div>
</div>

<!-- libre -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#libre" aria-controls="libre" aria-expanded="false">

Dlaczego bycie wolnym czyni oprogramowanie lepszym?

    </a>
  </h4>
</div>

<div id="libre" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Because by design free/libre software respects our fundamental freedoms, and guarantees them by <a href="https://github.com/Chocobozzz/PeerTube/blob/develop/LICENSE">a license</a>, so a legally enforceable contract.

    </p>
    <p>

Konkretnie, oznacza to że:

    </p>
    <ul>
      <li>

PeerTube jest dostępny za darmo, nie musisz płacić, aby zainstalować go na serwerze;

      </li>
      <li>

Możesz zajrzeć do kodu źródłowego PeerTube i dokonać jego audytu;

      </li>
      <li>

Jest rozwijany przez społeczność, każdy może go usprawnić.

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

Jaki cel ma tworzenie federacji dostawców hostingu wideo?

    </a>
  </h4>
</div>

<div id="federated" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Zaletą YouTube (i innych platform) jest jego katalog filmów: od poradników jak robić na drutach, przez poradniki budowania w Minecrafcie, do filmików z wakacji i słodkich kotków&hellip;  Możesz znaleźć wszystko!

    </p>
    <p>

Im bardziej zróżnicowany jest katalog filmów, tym bardziej ludzie są nim zainteresowani i więcej filmów jest wysyłanych&hellip; ale hosting filmów z całego świata jest (bardzo, bardzo) drogi!

    </p>
    <p>

Jeżeli dostawca instancji PeerTube-na-drutach zaprzyjaźni się z PeerTube-Koty i Framatube, będą wyświetlać się na nich filmy z tych instancji, dzięki czemu koszty hostingu staną się osiągalne, a katalog będzie kompletny dla użytkowników Internetu.

    </p>
    <p>

PeerTube's federation protocol will be fluid (everyone can choose their "friends" hosts), and based on <a href="https://activitypub.rocks/">ActivityPub</a>: this will open the possibility to connect with tools like Mastodon or MediaGoblin.

    </p>
  </div>
</div>
</div>

<!-- p2p -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#p2p" aria-controls="p2p" aria-expanded="false">

Dlaczego transmitować filmy technologią peer-to-peer?

    </a>
  </h4>
</div>

<div id="p2p" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Kiedy udostępniasz większy plik (np. film), najwięszkym powodem do obawy jest osiągnięcie sukcesu – jeżeli film zdobędzie popularność i dużo osób zacznie oglądać go w tym samym czasie, bardzo prawdopodobne, że serwer ulegnie przeciążeniu!

    </p>
    <p>

Transmisja peer-to-peer pozwala (dzięki protokołowi <a href="https://en.wikipedia.org/wiki/WebRTC">WebRTC</a>) na to, aby osoby oglądające film jednocześnie udostępniały ten film innym, odciążając serwer.

    </p>
    <p>

Nie musisz nic robić: Twoja przeglądarka robi to za Ciebie.

Jeżeli korzystasz z telefonu komórkowego, lub Twoja sieć na to nie pozwala (ograniczania routera, zapora sieciowa itp.), ta funkcja jest wyłączana, a Ty wracasz do transmisji w „starym stylu” &#x1F609;.

    </p>
  </div>
</div>
</div>

<!-- admin -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#admin" aria-controls="admin" aria-expanded="false">

Dla tych, którzy umieją administrować serwerem, PeerTube jest…

    </a>
  </h4>
</div>

<div id="admin" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

<strong>Jest to oprogramowanie, które możesz zainstalować na serwerze</strong>, aby utworzyć stronę pozwalającą na przechowywanie i transmisję&hellip;

Uogólniając: możesz utworzyć „własnego YouTube-a”!

    </p>
    <p>

Już wcześniej instało wolne oprogramowanie pozwalające na zrobienie tego.

Ale Peer

    </p>
    <p>

      <strong>

PeerTube nie centralizuje niczego – federuje się.

      </strong>

Dzięki protokołowi <a href="https://activitypub.rocks/">ActivityPub</a> (używanego też przez<a href="https://joinmastodon.org/">Mastodon</a>, wolną alternatywę Twittera), PeerTube pozwala na federację małych serwerów, dzięki czemu ich właściciele nie muszą kupować tysięcy dysków, aby przechowywać filmy z całego świata.

    </p>
    <p>

W wyniku tego, na Twoim PeerTube możemy obejrzeć nie tylko Twoje filmy, ale i filmy Zaïda, Catherin lub Solar&hellip; bez konieczności hostowania ich na własnej stronie.

Taka różnorodność czyni katalog filmów bardzo atrakcyjnym.

Ogromny katalog filmów i różnorodność jest tym, co przyczyniło się do sukcesu scentralizowanych platform takich jak YouTube.

    </p>
    <p>

Federacja ma też inną zaletę – <strong>każdy staje się niezależnym</strong>.

Zaid, Catherin, Solar i Ty możecie ustalić własne zasady (dla przykładu, wyobraż sobie instancję MeowTube, gdzie filmy z psami są surowo zabronione &#x1F642;).

    </p>
  </div>
</div>
</div>

<!-- video-maker -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#video-maker" aria-controls="video-maker" aria-expanded="false">

Tym, którzy chcą wstawiać swoje filmy, PeerTube pozwala na&hellip;

    </a>
  </h4>
</div>

<div id="video-maker" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Pozwala na wybór dostawcy hostingu, który Ci odpowiada.

YouTube's excesses are a good exemple: its hoster, Google/Alphabet, can impose its "Robocopyright" (the ContentID system) or its tools to index, recommend and spotlight videos; and those tools seem as unfair as they are obscure.

Poza tym, zmusza Cię <a href="https://tosdr.org/#youtube">do oddania im rozszerzonych praw autorskich do Twoich filmów, nie wynagradzając Cię</a>!

    </p>
    <p>

With PeerTube, <strong>you can choose the hoster of your videos according to his terms of services</strong>, his moderation policy, his federation choices&hellip;

As you don't have a tech giant facing you, you might be able to talk with you hoster if you ever have a problem, a need, or something you want.

    </p>
    <p>

The other big advantage of PeerTube is that your hoster doesn't have to fear the sudden success of one of your videos.

Indeed, PeerTube broadcasts videos with the protocol <a href="https://en.wikipedia.org/wiki/BitTorrent">WebTorrent</a>.

If hundreds of people are watching your video at the same time, their browsers automatically send bits of your video to other viewers.

    </p>
    <p>

Before this peer-to-peer broadcast, successful videographers (or videos that make the buzz) were doomed to be hosted by a web giant whose infrastructure can handle millions of simultaneous views…

Or to pay for a very expensive independent video host so that it can hold the load.

    </p>
  </div>
</div>
</div>

<!-- audience -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#audience" aria-controls="audience" aria-expanded="false">

Dla tych którzy chcą oglądać filmy, PeerTube oferuje&hellip;

    </a>
  </h4>
</div>

<div id="audience" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

One of the benefits is that <strong>you become a part of the broadcasting of the videos you are watching</strong>.

If other people are watching a PeerTube video at the same time as you, as long as your tab remains open, your browser shares bits of that video and you participate in a healthier use of the Internet.

    </p>
    <p>

Of course, PeerTube's video player adapts to your situation: if your installation does not allow peer-to-peer playback (corporate network, recalcitrant browser, etc.) video playback will be done in the classic way.

    </p>
    <p>

But above all, <strong>PeerTube treats you like a person, not as a product</strong> that it has to track, profile, and lock in video loops to better sell your available brain time.

Thus, the <a href="https://github.com/Chocobozzz/PeerTube">source code</a> (the recipe) of the PeerTube software is open, making its operation transparent.

    </p>
    <p>

      <strong>

PeerTube jest nie tylko otwartoźródłowy – jest wolny (jak w „wolność słowa”).

      </strong>

Jego licencja gwarantuje użytkowniką podstawową wolność.

It is this respect for our freedoms that allows Framasoft to invite you to contribute to this software, and many evolutions (innovative comment system, etc.) have already been suggested by some of you.

    </p>
  </div>
</div>
</div>

<!-- remplace-yt -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#remplace-yt" aria-controls="remplace-yt" aria-expanded="false">

Czy celem PeerTube jest zastąpienie YouTube?

    </a>
  </h4>
</div>

<div id="remplace-yt" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Możemy z pewnością odpowiedzieć – nie!

    </p>
    <p>

W marcu 2018, PeerTube opublikowało nadającą się do użytku wersję beta.

Several collectives set up the first instances, thus creating the bases of the federation.

    </p>
    <p>

Ale to tylko początek, PeerTube nie jest (jeszcze) idealne, brakuje mu wielu funkcji.

Staramy się nieustannie usprawniać go do wydania wersji 1 pod koniec 2018 roku.

    </p>
    <p>

March 2018 thus represents the birth of the PeerTube federations: the more this software will be used and supported, the more people will use it and contribute to it, and the faster it will evolve towards a concrete alternative to platforms such as YouTube.

    </p>
    <p>

Niemniej jednak, ambicją jest pozostanie <strong>wolną i zdecentralizowaną alternatywą</strong> – celem alternatywy nie jest zastąpienie, ale utworzenie czegoś innego, z innymi wartościami, działającego niezależnie od istniejących rozwiązań.

    </p>
  </div>
</div>
</div>
<!-- fin questions -->
</div>

<!-- fin accordéon -->

<h3>

Tworzenie i zawartość

</h3>

<!--début accordéon -->

<div id="accordion-creation" class="panel-group" role="tablist" aria-multiselectable="true">
<!-- law -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#law" aria-controls="law" aria-expanded="false">

Jeżeli PeerTube jest wolny, możemy publikować tu nielegalne treści?

  </a>
  </h4>
</div>

<div id="law" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Bycie wolnym nie oznacza działania ponad prawem!

Każdy dostawca hostingu PeerTube tworzy własne, ogólne zasady użytkowania, dostosowując je do lokalnego prawa.

    </p>
    <p>

Na przykład, we Francji zawartość promująca dyskryminację <a href="https://fr.wikipedia.org/wiki/Lois_contre_le_racisme_et_les_discours_de_haine">jest niedozwolona</a> i może zostać <a href="http://stop-discrimination.gouv.fr/agir/ne-pas-laisser-faire-les-recours">zgłoszona lokalnym władzom</a>. 

PeerTube pozwala użytkownikom na zgłaszanie problematycznej treści, a administratorzy muszą zareagować na nie zgodnie z zasadami instancji i prawem.

    </p>
    <p>

System federacji pozwala między innymi na decydowanie o tym, z kim chcesz się połączyć, kierując się zasadami innych serwerów.

    </p>
  </div>
</div>
</div>

<!-- responsible -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#responsible" aria-controls="responsible" aria-expanded="false">

Kto jest odpowiedzialny za treści publikowane na PeerTube?

    </a>
  </h4>
</div>

<div id="responsible" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

PeerTube nie jest stroną – jest oprogramowaniem pozwalającym osobie hostującej (np. Dominique) na utworzenie własnej strony (nazwijmy ją DominiqueTube).

    </p>
    <p>

Załóżmy, że Camille utworzyła konto na DominiqueTube i umieściła film nielegalnie, ponieważ zawiera on muzykę utworzoną przez Solal.

    </p>
    <p>

Solal odwiedza Framatube, instancję śledzącą DominiqueTube.

Solal możę zobaczyć (z poziomu Framatube) filmy umieszczone na DominiqueTube.

    </p>
    <p>

Solal, widząc nielegalnie umieszczony film Camille, używa przycisku służącego do podjęcia odpowiedniego działania.

Choć zgłoszenie zostało wykonane z Framatube, jest ono wysyłane bezpośrednio do osoby, na której serwerze znajduje się nielegalna treść, do Dominique.

    </p>
    <p>

Od tego momentu, Dominique jest odpowiedzialna, ponieważ przechowuje ona nielegalny film.

To od niej zależy, czy chce ponieść odpowiedzialność prawną.

    </p>
    <p>

Następnie Dominique i Solal mogą zwrócić się do Camille, która umieściła ten film.

    </p>
  </div>
</div>
</div>

<!-- money -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#money" aria-controls="money" aria-expanded="false">

Jak wygląda polityka dot. wynagrodzeń na PeerTube?

    </a>
  </h4>
</div>

<div id="money" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Nie ma ich, nie tylko w tym momencie – PeerTube jest narzędziem, które zostanie neutralne pod tym względem.

    </p>
    <p>

For now, the solution proposed to people who upload videos is to use the "support" button under the video. This button displays a frame in which people who upload videos can display text, images, and links freely. For example, it's possible to put a link to Patreon, Tipeee, Paypal, Liberapay (or any other solution) there. Other examples: put a postal address if you'd like to receive physical thank-you cards, put a logo of your enterprise, a link to support a non-profit organisation…

    </p>
    <p>

We did not go any further because to favour one technical solution would be to impose, in the code, a political vision of cultural sharing and its financing. All financial solutions are possible and treated equally in PeerTube.

    </p>
    <p>

However, many improvements of PeerTube are to be expected…

Including those that would allow you to create (and choose) the monetization tools that interest you!

    </p>
    <p>

Nevertheless, it is worth remembering that the vast majority of videos published on the Internet (and even on YouTube) are shared for non-market purposes: remuneration is a tool, but not necessarily a main or essential purpose.

    </p>
  </div>
</div>
</div>

<!-- instances -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#instances" aria-controls="instances" aria-expanded="false">

Gdzie mogę umieszczać swoje filmy?

    </a>
  </h4>
</div>

<div id="instances" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

Musisz znaleźć instancję PeerTube, której ufasz.

    </p>
    <p>

There's a complete <a href="https://instances.joinpeertube.org/">list of instances here</a>, and a list of those that are <a href="https://joinpeertube.org/en/#getting-started">open to registration here</a>.

    </p>
    <p>

Then, we recommend you go to the instances, read their "about" page to discover their terms of use (disk space limit per user, content policy, etc.).

    </p>
    <p>

It's best to contact and talk directly with hosting providers, to understand their business model, vision, etc.

Because only you can determine what makes you trust such or such host, and thus entrust your videos to them.

    </p>
  </div>
</div>
</div>
<!-- fin questions -->
</div>

<!-- fin accordéon -->

<a href="https://framacolibri.org/c/peertube">Dyskutuj na naszym forum</a>

<h3>

Pytania techniczne

</h3>

<!--début accordéon -->

<div id="accordion-tech" class="panel-group" role="tablist" aria-multiselectable="true">
<!-- install -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-tech" href="#install" aria-controls="install" aria-expanded="false">

Jak zainstalować PeerTube?

    </a>
  </h4>
</div>

<div id="install" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

The <a href="https://github.com/Chocobozzz/PeerTube/blob/develop/support/doc/production.md">installation guide is here</a> (only in English, for the moment).

    </p>
    <p>

We recommend not to install PeerTube on low-end hardware or behind a weak connection (for example, on a RaspberryPi with an ADSL connection): this could slow down all federations.

    </p>
    <p>

Don't bother the developer to help you install your instance: we have a <a href="https://framacolibri.org/c/peertube">support forum</a> for that.

    </p>
  </div>
</div>
</div>

<!-- code -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-tech" href="#code" aria-controls="code" aria-expanded="false">

Jak wziąć udział w tworzeniu kodu PeerTube?

    </a>
  </h4>
</div>

<div id="code" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

The <a href="https://github.com/Chocobozzz/PeerTube">Git repository of PeerTube is here</a>.

    </p>
    <p>

You can <a href="https://github.com/Chocobozzz/PeerTube/issues">create an issue</a>, contribute to it, or even start contributing by choosing the <a href="https://github.com/Chocobozzz/PeerTube/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22">easy problems for those who begin</a>.

    </p>
    <p>

If you want to help out in another way, or if you want to request a feature, come discuss it on our <a href="https://framacolibri.org/c/peertube">contribution forum</a>.

    </p>
  </div>
</div>
</div>

<!-- protocol -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-tech" href="#protocol" aria-controls="protocol" aria-expanded="false">

Why does PeerTube use the ActivityPub federation protocol? Why not IPFS / d.tube / Steemit?

    </a>
  </h4>
</div>

<div id="protocol" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

PeerTube uses ActivityPub because this federation protocol is recommended by the W3C and is already used by the federated social network Mastodon.

    </p>
    <p>

 IPFS is a great technology, but it still seems very (too!) young for large scale streaming of large files.

    </p>
    <p>

After discussing it on our forum, we feel that d.tube is not free or open source, because publishing only compiled code hinders freedom of modification.

    </p>
    <p>

D.tube is based on Steem for "remuneration", it is a choice, but Steem is <a href="https://en.wikipedia.org/wiki/Steemit#Criticism">widely criticized</a> as <a href="https://steemit.com/steemit/@docdelux/30-days-of-steemit-here-is-my-criticism">highly centralized</a>, and suspiciously <a href="https://steemit.com/steemit/@thecryptonews/psa-constructive-criticism-the-ugly-truth-behind-steemit">resembles a Ponzi system</a>.

    </p>
    <p>

PeerTube is free, decentralized, distributed, and does not impose any remuneration model.

This is the choice we have made, which is debatable, and others (like d.tube) have made other choices, which have their advantages.

So it's up to you to see what suits you.

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
