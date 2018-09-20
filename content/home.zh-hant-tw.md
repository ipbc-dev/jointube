+++

date = "2018-02-28T14:41:00+01:00"
title = "奪回對串流影片的控制權！ #JoinPeertube"
description = "PeerTube 是一個開放原始碼的聯盟式影片網路。這些影片是所有人共有的。"
author = "Framasoft"
draft = false
type = "page"
+++

{{% grid class="row intro" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12 text-center" %}}

# 奪回對您的影片的控制權
## 去中心化的影片託管網路，基於自由軟體

<div class="col-md-6 well col-md-push-6">
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" allowfullscreen
      src="https://framatube.org/videos/embed/217eefeb-883d-45be-b7fc-a788ad8507d3"></iframe>
  </div>
  <p class="text-left">協助我們改進 PeerTube to its v1!<br>
  只剩 <b><span id="kkbbDays">45</span> 天</b> 可以貢獻群眾募資！</p>
  <p><a class="button" href="https://www.kisskissbankbank.com/en/projects/peertube-a-free-and-federated-video-platform">支援 PeerTube</a></p>
</div>
<div class="col-md-6 col-md-pull-6">
  <img src="/notebook.jpg" class="img-responsive" alt="" />
  <p><a href="#getting-started">入門</a> <a href="#how-it-works">如何運作</a></p>
</div>

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row medias" %}}

<!---
{{% grid class="container" %}}
{{% grid class="col-sm-12 text-center" %}}

### 如上所見

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

### 收回權力……與責任！

PeerTube 不是只有一組規則的單一影片託管平臺：
它是許多互相連結的主機提供者的網路，每個提供者都是由不同的人與管理員組成。您不喜歡某些規則？您可以按您的選擇自由加入主機提供者，也可以自己制訂規則並成為主機提供者！

{{% /grid %}}
{{% grid class="col-sm-4 text-center" %}}

<i class="fa fa-globe fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% grid class="col-sm-8 col-sm-push-4" %}}

### 奪回對您的內容的控制權

PeerTube 讓您可以分享您所有的影片。直接與人類主機提供者聯絡（或是自己成為主機提供者）讓您可以選擇他們的廣播要如何完成。
您的影片可以從填寫描述、分類、選擇預覽圖與標示NSFW的工具中得益。
微調**支援**按鈕讓您可以對您的觀眾展示他們要如何支援您的工作。

{{% /grid %}}
{{% grid class="col-sm-4 col-sm-pull-8 text-center" %}}

<i class="fa fa-comment fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% grid class="col-sm-8" %}}

### 將使用者放在第一位

您是人，不是產品。
PeerTube 是由法國的非營利組織 [Framasoft](https://soutenir.framasoft.org/association) 所資助的自由軟體。
所有實體都是獨立建立、驅動、審核與維護的。
PeerTube 並非由任何公司所建立，不依賴廣告也不會追蹤您。
使用 PeerTube 時，您不會被當成產品看待：
PeerTube 為您服務，而不是反過來。

{{% /grid %}}
{{% grid class="col-sm-4" %}}

<i class="fa fa-group fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% grid class="col-sm-8 col-sm-push-4" %}}

### 成為您影片的散佈者

當您使用 PeerTube 觀看影片時，WebTorrent 技術讓您可以變成傳播這部影片給同時觀看同一部影片的使用者的人。
這個影片串流分享允許在網路上更健康地散佈與交換。
此外，聯盟式的協定 (ActivityPub) 讓您可以在其他支援此協定的平臺上發佈影片並評論，如 [Mastodon](https://joinmastodon.org)！（實驗性）

{{% /grid %}}
{{% grid class="col-sm-4 col-sm-pull-8 text-center" %}}

<i class="fa fa-fire fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row getting-started" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12" %}}

## 入門 {#getting-started}

### 觀看

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://framatube.org/videos/embed/a8ea95b8-0396-49a6-8f30-e25e25fb2828" allowfullscreen></iframe>
</div>

[在 Framatube 上觀看影片](https://framatube.org)

### 註冊

您可以註冊的實體列表：

<div id="instances-list" class="list-group"></div>

<div id="instances-list-error" class="alert alert-danger" style="display: none">我們很抱歉，但我們擷取可用實體列表失敗。請稍後再試。</div>

<div class="alert alert-info">這就像是在挑選電子郵件服務提供者一樣：域名也是您使用者名稱的一部份！</div>

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row install" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12" %}}

## 安裝您自己的

若您有興趣為您的朋友、家人或組織執行您自己的實體，您可以從[閱讀安裝文件](https://github.com/Chocobozzz/PeerTube/blob/develop/support/doc/production.md)開始。

您只會託管您自己的使用者與他們的影片。您可以定義要提供註冊的數量，以及每個使用者的磁碟配額。只有您**選擇**追蹤的實體上的影片才會出現在您的首頁上。

<a href="https://github.com/Chocobozzz/PeerTube/#production" target="_blank">閱讀文件</a>

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row how-it-works" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-5" %}}

## 這是如何運作的 {#how-it-works}

每個人都可以託管一個我們稱之為**實體**的 PeerTube 伺服器。
每個實體都會託管它自己的使用者與他們的影片。
它也會保留管理員選擇要追蹤的實體上提供的影片列表，以便向其使用者建議可觀看的影片。

每個帳號都有獨特的全域識別符號（如 @chocobozzz@framatube.org），其中包含了本地使用者名稱 (@chocobozzz) 與伺服器的域名 (framatube.org)。

PeerTube 實體的管理員可以追蹤其他的實體。
當您的 PeerTube 實體追蹤了其他的 PeerTube 實體，您將會從這個實體收到影片預覽資訊。這樣，您就可以顯示您實體上的影片與您決定要追蹤的實體上的影片。
所以您對顯示在您的 PeerTube 實體上的影片有控制權！

[有其它問題嗎？](/en/faq)

{{% /grid %}}
{{% grid class="col-sm-7 text-center" %}}

![peertube 聯盟模式](/pt-p2p.png)

{{% /grid %}}
{{% grid class="col-sm-12" %}}

### 為什麼這麼酷？

伺服器由不同人與不同組織獨立運行。
它們可能會有截然不同的審核政策，所以您可以尋找或自己建立一個符合自己口味的實體。

透過觀看影片，您就在協助主機提供者散佈影片，因為如此您自己也是散佈者。每個實體都可以透過其使用者而不需要花太多錢就可以散佈影片。

[入門](#getting-started)

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row footer" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12" %}}

建基於 <a href="https://joinmastodon.org" target="_blank">joinmastodon.org</a>。謝謝！

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
<p>
