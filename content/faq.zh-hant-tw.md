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

發現 PeerTube 的幾個問題&hellip;

</h2>
<p><i class="text-center">

（在問題上點選以探索答案）

</i></p>
<h3>

PeerTube 投影片

</h3>

<!-- début accordéon -->

<div id="accordion-presentation" class="panel-group" role="tablist" aria-multiselectable="true">
<!-- what -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#what" aria-controls="what" aria-expanded="true">

PeerTube 是什麼？

    </a>
  </h4>
</div>

<div id="what" class="panel-collapse collapse in">

  <div class="panel-body">
    <p>

PeerTube 是您可以安裝在網路伺服器上的軟體。

其讓您可以建立影片託管網頁，建立您「自製的 YouTube」。

    </p>
    <p>

與 YouTube 的不同之處是它並未試圖建立從全世界而來的影片都放在上面的巨型平臺，全部都在單一個伺服器農場上（這非常貴）。

    </p>
    <p>

相反的，PeerTube 的目標是建立許多較小但互相連結的影片託管提供者的網路。

    </p>
  </div>
</div>
</div>

<!-- pros -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#pros" aria-controls="pros" aria-expanded="false">

PeerTube 的三個主要優點。

    </a>
  </h4>
</div>

<div id="pros" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

PeerTube 非常獨特（至少就我們知道的），它是唯一一個結合了三個優點的影片託管網路應用程式：

    </p>
    <ol>
      <li>

以自由的授權條款（道德、尊重與社群驅動的開發）授權的開放的（透明）程式碼；

      </li>
      <li>

聯盟式的互相連結主機提供者（所以您可以看到更多的影片選擇）；

      </li>
      <li>

P2P 的散佈與檢視（所以當影片以病毒式的傳播時就不會變慢）。

      </li>
    </ol>
    <p>

這三個功能相互連結，讓伺服器端可以更輕鬆地託管影片，同時對網際網路使用者保持實用、道德與樂趣。

    </p>
  </div>
</div>
</div>

<!-- libre -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#libre" aria-controls="libre" aria-expanded="false">

為什麼自由軟體比較好？

    </a>
  </h4>
</div>

<div id="libre" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

因為其設計，自由軟體尊重我們的基礎自由，並以<a href="https://github.com/Chocobozzz/PeerTube/blob/develop/LICENSE">授權條款</a>來擔保，所以是有法律效力的契約。

    </p>
    <p>

具體來說，這代表了：

    </p>
    <ul>
      <li>

PeerTube 免費提供，在您的伺服器上安裝它不需要付費；

      </li>
      <li>

我們可以深入了解 PeerTube（其原始碼）：它是可以被審閱且透明的；

      </li>
      <li>

其開發為社群驅動，它因每個人的貢獻而不斷強化。

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

聯盟式的影片託管對服務提供者有什麼好處？

    </a>
  </h4>
</div>

<div id="federated" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

YouTube（與其他平臺）的優勢在於其影片目錄：從編織教學到 Minecraft 建築或是假期類的影片，您可以找到您能想到的任何東西！

    </p>
    <p>

影片目錄的種類愈多，感興趣的人愈多，上傳的影片也會愈多，但託管來自世界各地的影片是非常（非常、非常，因為很重要所以要說三次！）昂貴的事情。

    </p>
    <p>

如果主機提供者 Knitting-PeerTube 成為 Kittens-Tube 與 Framatube 的朋友，其將會顯示從他們的網頁上而來的影片，從而稀釋了託管成本，並保持網際網路的實用與完整。

    </p>
    <p>

PeerTube 的聯盟式協定是可以變動的（每個人都可以選擇他們的「朋友」主機），基於 <a href="https://activitypub.rocks/">ActivityPub</a>：這將會開啟與其他工具，如 Mastodon 或 MediaGoblin 互相連結的可能性。

    </p>
  </div>
</div>
</div>

<!-- p2p -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#p2p" aria-controls="p2p" aria-expanded="false">

為什麼透過 P2P 來散播 PeerTube 的影片？

    </a>
  </h4>
</div>

<div id="p2p" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

當您託管如影片等大型檔案時，最大的恐懼就是成功：如果影片經過了病毒式的傳播，且許多人同時觀看的話，伺服器很容易就會有超載的風險！

    </p>
    <p>

P2P 的散播方法讓網際網路上在同一時間觀看同一部影片的使用者可以交換檔案的一部份，如此可以讓伺服器的負載變小，感謝 <a href="https://zh.wikipedia.org/wiki/WebRTC">WebRTC</a> 協定。

    </p>
    <p>

您不需要做任何事：您的網路瀏覽器會自動做好。

如果您在手機上或是您的網路不支援此協定（路由器、防火牆等等），這個功能會被停用，並切換回「舊式」的影片傳播方式&#x1F609;。

    </p>
  </div>
</div>
</div>

<!-- admin -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#admin" aria-controls="admin" aria-expanded="false">

對於那些知道如何管理伺服器的人來說，PeerTube 是……

    </a>
  </h4>
</div>

<div id="admin" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

<strong>它是可以安裝在您伺服器上的軟體</strong>，用來建立影片託管與散播的網頁&hellip;

基本上：您可以建立您自己的「自製 YouTube」！

    </p>
    <p>

已經有自由軟體可以讓您做到這件事了。

但使用 PeerTube，您可以連結您的實體（您的影片網頁）到 Zaid 的實體（他在那裡上傳了他的社區大學的講座錄影），到 Catherin 的（上傳她的網路媒體影片）或甚至是到 Solar 的 PeerTube（管理影音部落客收藏）。

    </p>
    <p>

      <strong>

但 PeerTube 並非中心化：它是聯盟式的。

      </strong>

感謝 <a href="https://activitypub.rocks/">ActivityPub</a> 協定（其也用於 <a href="https://joinmastodon.org/">Mastodon</a>，自由的 Twitter 替代品），PeerTube 可以將許多小型主機提供者串連在一起，而不用為全世界的影片買許多的硬碟來託管。

    </p>
    <p>

因此，在您的 PeerTube 網頁上，觀眾不僅可以觀看您的影片，也可以觀看從 Zaïd、Catherin 或 Solar 而來的影片，而不必將這些影片託管在您自己架設的 PeerTube 網頁上。

影片目錄中的多樣性使其非常具有吸引力。

如此大量且多樣化的影片在 YouTube 等集中式平臺取得成功。

    </p>
    <p>

聯盟式的運作方式提供了其他好處：<strong>每個人都變得獨立</strong>。

Zaïd、Catherin、Solar 與您自己都可以有自己的規則
、服務條款（舉例來說，您可以想像某個稱為 MeowTube 的實體強烈禁止包含狗的影片）。

    </p>
  </div>
</div>
</div>

<!-- video-maker -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#video-maker" aria-controls="video-maker" aria-expanded="false">

想要上傳他們的影片的人，PeerTube 允許&hellip;

    </a>
  </h4>
</div>

<div id="video-maker" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

其讓您可以選擇適合自己的服務提供者。

YouTube 的越權行為是一個很好的例子：它的主機提供者 Google/Alphabet 可以強加「Robocopyright」（ContentID 系統）或它的工具到索引中，建議並突顯影片；而這些工具似乎並不工平，因為它們並不透明。

儘管如此，它已將強制您<a href="https://tosdr.org/#youtube">免費將影片的延伸版權免費提供給他們</a>！

    </p>
    <p>

使用 PeerTube，<strong>您可以根據他們的服務條款來選擇您的影片託管服務提供者</strong>，或是根據他們的審核政策、他們的聯盟選擇等等&hellip;

由於沒有面對您的科技巨頭，如果您遇到問題，或是有什麼需求或想要的東西，可以與年的服務提供者聯絡。

    </p>
    <p>

PeerTube 的另一個大優點是您的主機提供者不必擔心您的某部影片突然有許多人觀看導致他的伺服器無法負荷。

實際上，PeerTube 使用 <a href="https://zh.wikipedia.org/wiki/BitTorrent_(%E5%8D%8F%E8%AE%AE)">WebTorrent</a> 協定來傳播影片。

如果同時有數百人觀看您的影片，他們的瀏覽器會自動傳送您的影片的片段給其他觀看者。

    </p>
    <p>

在此 P2P 散播之前，成功的攝影師（或僅是製造噪音的影片）註定要由網路巨頭所託管，其基礎設施可以同時處理數百萬名觀眾……

或是付費租用非常昂貴的獨立影片主機，使其足以負載如此大量的觀看人數。

    </p>
  </div>
</div>
</div>

<!-- audience -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#audience" aria-controls="audience" aria-expanded="false">

想要觀看影片的人，PeerTube 可以提供&hellip;

    </a>
  </h4>
</div>

<div id="audience" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

其中一個好處就是<strong>您也會成為您正在觀看的影片的散播者的其中一員</strong>。

如果其他人正在與您同時觀看 PeerTube 影片，只要您的分頁保持開啟，您的瀏覽器就會分享影片的一部份，您就可以更健康地使用網際網路。

    </p>
    <p>

當然，PeerTube 的視訊播放器可以適應您的情況：如果您的安裝不允許使用點對點的播放（公司網路、不遵守標準的瀏覽器等），視訊播放將會以傳統的方式進行。

    </p>
    <p>

但最重要的是，<strong>PeerTube 不會把您視為產品</strong>，把您視為產品的組織會追蹤、設定並鎖定不斷播放的影片，以便榨乾您的時間。

因此，PeerTube 軟體的<a href="https://github.com/Chocobozzz/PeerTube">原始碼</a>是公開的，讓整個操作都很透明。

    </p>
    <p>

      <strong>

PeerTube 不僅是開放原始碼：它還是自由軟體。

      </strong>

它的自由授權條款保證了使用者的基本自由。

正是這種對自由的尊重讓 Framesoft 能夠邀請您對這個軟體做出貢獻，其中一些人也已經做出了許多改進（創新的評論系統等等）。

    </p>
  </div>
</div>
</div>

<!-- remplace-yt -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-presentation" href="#remplace-yt" aria-controls="remplace-yt" aria-expanded="false">

PeerTube 的目的是取代 YouTube 嗎？

    </a>
  </h4>
</div>

<div id="remplace-yt" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

我們可以很明確地回答：不是的！

    </p>
    <p>

2018年3月，PeerTube 釋出了它的第一個可用的公開測試版本。

幾個收藏家建立了第一批實體，從而建立了聯盟的基礎。

    </p>
    <p>

但這只是剛開始，PeerTube（還）不夠完美，仍有許多功能還沒加入。

我們傾向於繼序改進它並於2018年底釋出第一個正式版。

    </p>
    <p>

因此，2018年3月代表了 PeerTube 聯盟的誕生：這個軟體愈多人使用與支援，就會有愈多人來使用並貢獻，然後它就可以更快地發展成 YouTube 等平臺的替代品。

    </p>
    <p>

不過，我們的抱負是成為<strong>自由且去中心化的替代品</strong>：替代品的目標不是要取代，而是提出具有不同價值的其他東西，並與現有的東西並行。

    </p>
  </div>
</div>
</div>
<!-- fin questions -->
</div>

<!-- fin accordéon -->

<h3>

創作與內容

</h3>

<!--début accordéon -->

<div id="accordion-creation" class="panel-group" role="tablist" aria-multiselectable="true">
<!-- law -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#law" aria-controls="law" aria-expanded="false">

如果這是自由的，那我們可以上傳違法的東西上去嗎？

  </a>
  </h4>
</div>

<div id="law" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

自由不代表可以凌駕於法律之上！

每個 PeerTube 的主機提供者都可以根據當地法律來決定一般使用條件。

    </p>
    <p>

舉例來說，在法國，歧視性的內容<a href="https://fr.wikipedia.org/wiki/Lois_contre_le_racisme_et_les_discours_de_haine">是被禁止的</a>，而且可能會被<a href="http://stop-discrimination.gouv.fr/agir/ne-pas-laisser-faire-les-recours">向主管機關回報</a>。

PeerTube 讓使用者可以回報有問題的影片，每個管理員都必須根據其條款與條件以及法律來進行審核。

    </p>
    <p>

聯盟系統本身允許主機提供者根據內容的類型或其他人的審核策略來決定他們想要與誰相連。

    </p>
  </div>
</div>
</div>

<!-- responsible -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#responsible" aria-controls="responsible" aria-expanded="false">

誰要對在 PeerTube 上發佈的內容負責？

    </a>
  </h4>
</div>

<div id="responsible" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

PeerTube 不是網頁，它是一套讓網頁主機提供者（如 Dominique）可以建立視訊網頁的軟體（就讓我們將其稱為 DominiqueTube 吧）。

    </p>
    <p>

現在想像 Camille 在 DominiqueTube 上建立了一個帳號，並上傳了違法的影片，因為該影片使用了由 Solal 創作的音樂。

    </p>
    <p>

Solal 到了 Framatube，一個追蹤 DominiqueTube 的實體。

所以 Solal 可以從 Framatube 看到在 DominiqueTube 上發佈的影片。

    </p>
    <p>

Solal 看到了 Camille 的違法影片，並使用了為此目的提供的按鈕發出訊號。

雖然是從 Framatube 做出的回報，但它會直接傳送到托管違法內容的個人，也就是 Dominique。

    </p>
    <p>

從這一刻開始，Dominique 必須負責，因為他們已被警告托管了違法的影片。

因此，如果他們不想要被追究法律責任，他們就應該盡快採取行動。

    </p>
    <p>

然後 Dominique 與 Solal 就可以轉而向上傳影片的 Camille 究責。

    </p>
  </div>
</div>
</div>

<!-- money -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#money" aria-controls="money" aria-expanded="false">

PeerTube 的酬勞政策是？

    </a>
  </h4>
</div>

<div id="money" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

沒有，現在沒有：PeerTube 是一個我們希望在報酬方面保持中立的工具。

    </p>
    <p>

目前，想要捐款給上傳影片的人的其中一個解決方案是使用影片下方的「支援」按鈕。這個按鈕會顯示上傳影片的人想要顯示的文字、圖片與連結。舉例來說，它可以放 Patreon、Tipeee、Paypal、Librepay（或是任何其他類似的解決方案）。其他例子：放一個郵政地址，如果您想要收到實體感謝卡的話，或是放置您的企業的 logo、一個支援非營利組織的連結等……

    </p>
    <p>

我們並沒有再進一步，因為明顯支持任何一種技術解決方案都是在守則中強家文化共享與其融資的政治願景。所有的財務解決方案都是可行的，並在 PeerTube 中會被同等對待。

    </p>
    <p>

然而，PeerTube 的許多改進都是可預期的……

包含那些允許您建立（和選擇）您感興趣的獲利工具！

    </p>
    <p>

然而，值得記住的是，網際網路上發佈的大多數內容（甚至是在 YouTube 上）都不是為了獲利而發佈：報酬是一種工具，但不一定是主要或必要的目的。

    </p>
  </div>
</div>
</div>

<!-- instances -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-creation" href="#instances" aria-controls="instances" aria-expanded="false">

我可以把我的影片放在哪裡？

    </a>
  </h4>
</div>

<div id="instances" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

您需要找到您信任的 PeerTube 托管實體。

    </p>
    <p>

這裡有一份完整的<a href="https://instances.joinpeertube.org/">實體清單</a>，另一份是<a href="https://joinpeertube.org/en/#getting-started">開放註冊的</a>。

    </p>
    <p>

然後，我們建議您到實體中，閱讀其「關於」頁面以檢視其使用條款（每個使用者的空間限制，內容政策等）。

    </p>
    <p>

最好與托管服務提供者直接對話以了解其營運模式、願景等。

因為只有您可以確定您為什麼要信任該實體或提供者，然後將您的影片委託給他們。

    </p>
  </div>
</div>
</div>
<!-- fin questions -->
</div>

<!-- fin accordéon -->

<a href="https://framacolibri.org/c/peertube">在我們的論壇上討論</a>

<h3>

技術問題

</h3>

<!--début accordéon -->

<div id="accordion-tech" class="panel-group" role="tablist" aria-multiselectable="true">
<!-- install -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-tech" href="#install" aria-controls="install" aria-expanded="false">

我要如何安裝 PeerTube？

    </a>
  </h4>
</div>

<div id="install" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

<a href="https://github.com/Chocobozzz/PeerTube/blob/develop/support/doc/production.md">安裝指南在此</a>（目前僅提供英文版）。

    </p>
    <p>

我們建議不要將 PeerTube 安裝在低階硬體或是不穩定的連線後面（舉例來說，在以 ADSL 連線的樹莓派上面）：這可能會拖慢所有聯盟的速度。

    </p>
    <p>

不要騷擾開發者要求他們協助您安裝您的實體：我們有為此而設立的<a href="https://framacolibri.org/c/peertube">支援論壇</a>。

    </p>
  </div>
</div>
</div>

<!-- code -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-tech" href="#code" aria-controls="code" aria-expanded="false">

我要如何貢獻程式碼給 PeerTube？

    </a>
  </h4>
</div>

<div id="code" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

<a href="https://github.com/Chocobozzz/PeerTube">PeerTube 的 Git 倉庫在此</a>。

    </p>
    <p>

您可以<a href="https://github.com/Chocobozzz/PeerTube/issues">建立議題</a>、貢獻給它，或是選擇<a href="https://github.com/Chocobozzz/PeerTube/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22">給新手的簡易議題</a>開始貢獻。

    </p>
    <p>

如果您想要以其他方式協助，或是如果您想要請求功能，請到我們的<a href="https://framacolibri.org/c/peertube">貢獻論壇</a>一起討論。

    </p>
  </div>
</div>
</div>

<!-- protocol -->

<div class="panel panel-default">
<div class="panel-heading" role="tab">
  <h4 class="panel-title">

    <a data-toggle="collapse" data-parent="#accordion-tech" href="#protocol" aria-controls="protocol" aria-expanded="false">

為什麼 PeerTube 要使用 ActivityPub 聯盟協定？為什麼不是 IPFS / d.tube / Steemit？

    </a>
  </h4>
</div>

<div id="protocol" class="panel-collapse collapse">

  <div class="panel-body">
    <p>

PeerTube 使用 ActivityPub 是因為這個聯盟式協定是由 W3C 推薦，並已由聯盟式的社交網路 Mastodon 所使用。

    </p>
    <p>

IPFS 是很好的技術，但面對大型檔案的大規模串流傳輸，它似乎還是太年輕了。

    </p>
    <p>

在我們的論壇上討論之後，我們覺得 d.tube 並不自由或開放原始碼，因為僅發佈編譯過的程式碼會妨礙修改的自由。

    </p>
    <p>

D.tube 建基於 Steem 以用來「獲利」，這是一個選擇，但 Steem <a href="https://en.wikipedia.org/wiki/Steemit#Criticism">飽受批評</a>，因為它<a href="https://steemit.com/steemit/@docdelux/30-days-of-steemit-here-is-my-criticism">高度集中</a>，並被懷疑<a href="https://steemit.com/steemit/@thecryptonews/psa-constructive-criticism-the-ugly-truth-behind-steemit">類似於龐氏騙局</a>。

    </p>
    <p>

PeerTube 自由、去中心化、分散式，而且沒有強加任何獲利模式。

這是我們做出的選擇，這是值得商榷的，而其他人（如 d.tube）做出來其他選擇，這些選擇都有其優點。

所以您可以看看哪個適合您。

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
