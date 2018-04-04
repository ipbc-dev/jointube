+++

date = "2018-02-28T14:41:00+01:00"
title = "Home"
author = "Framasoft"
draft = false
type = "page"
+++

{{% grid class="row intro" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12 text-center" %}}

# Take back the control of your videos
## A decentralized video hosting network, based on free/libre software

[Get started](#getting-started) [How it works](#how-it-works)

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

### Take back the power… and the responsibilities!

PeerTube isn't a single video hosting platform with a single group of rules:
it's a network of dozens of interconnected hosting providers, and each provider is composed
of different people and administrators. You don't like some of the rules?
You're free to join the hosting provider of your choice, or even better,
be your own hosting provider with your own rules!

{{% /grid %}}
{{% grid class="col-sm-4 text-center" %}}

<i class="fa fa-globe fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% grid class="col-sm-8 col-sm-push-4" %}}

### Take control of your content

PeerTube allows you to share all your videos. Being in direct contact with a human hosting provider (or becoming your own) allows you to choose how their broadcasting is done.
Your videos will benefit from tools to fill description, categorization, choosing a preview image and marking videos as not safe for work.
Tweaking the **Support** button will allow you to show your audience how you want them to support your work.

{{% /grid %}}
{{% grid class="col-sm-4 col-sm-pull-8 text-center" %}}

<i class="fa fa-comment fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% grid class="col-sm-8" %}}

### Putting the users first

You're a person, not a product. PeerTube is a free/libre software
financed by a French non-profit organization: [Framasoft](https://soutenir.framasoft.org/association).
All instances are created, animated, moderated and maintained independently.
PeerTube isn't submitted by any company monopole, doesn't depend on ads and doesn't track you.
With PeerTube you're not a product:
PeerTube is at your service, not the other way around.

{{% /grid %}}
{{% grid class="col-sm-4" %}}

<i class="fa fa-group fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% grid class="col-sm-8 col-sm-push-4" %}}

### Become an actor of your videos broadcasting

When you watch a video with PeerTube, the WebTorrent technology
allows you to be part of the broadcasting of this video with the viewers who
are watching it at the same time.
This video stream sharing allows a healthier distribution of exchanges on the network.
Moreover, the federation protocol (ActivityPub) allows to publish the videos and comments on other platforms that support it, such as [Mastodon](https://joinmastodon.org)! (experimental)

{{% /grid %}}
{{% grid class="col-sm-4 col-sm-pull-8 text-center" %}}

<i class="fa fa-fire fa-5x" aria-hidden="true"></i>

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row getting-started" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12" %}}

## Get started {#getting-started}

### Watch

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://framatube.org/videos/embed/0900bd2e-7306-4c39-b48b-2d0cd611742e" allowfullscreen></iframe>
</div>

[Watch videos on Framatube](https://framatube.org)

### Register

List of instances on which you can register:

<div id="instances-list" class="list-group"></div>

<div id="instances-list-error" class="alert alert-danger" style="display: none">We are sorry, but we failed to fetch the list of available instances. Please try again later.</div>

<div class="alert alert-info">This is like picking an e-mail hosting provider: the domain will be part of your username!</div>

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row install" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12" %}}

## Install your own

If you are interested in running your own instance — for your friends,
family or organization — you can get started by [reading the installation
documentation](https://github.com/Chocobozzz/PeerTube/blob/develop/support/doc/production.md).

You'll only host your own users and their own videos.
Your can define the number of available registrations and a disk quota per user. Only videos from instances you **have chosen** to follow will show up on your homepage.

<a href="https://github.com/Chocobozzz/PeerTube/#production" target="_blank">Read the docs</a>

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row how-it-works" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-5" %}}

## How it works {#how-it-works}

Everybody can host a PeerTube server we call **instance**.
Every instance hosts its own users and their videos.
It also keeps a list of the videos available of the instances
the administrator chooses to follow in order to suggest them to its users.

Every account has a globally unique identifier (e.g. @chocobozzz@framatube.org) consisting of the local username (@chocobozzz) and the domain name of the server it is on (framatube.org).

The administrators of a PeerTube instance can follow each other.
When your PeerTube instance follows another PeerTube instance, you receive
the videos preview informations from this instance. This way, you can display 
the videos available on your instance and on the instances you decided to follow.
So you keep control of the videos displayed on your PeerTube instance!

[Questions?](/en/faq)

{{% /grid %}}
{{% grid class="col-sm-7 text-center" %}}

![peertube federation schema](/pt-p2p.png)

{{% /grid %}}
{{% grid class="col-sm-12" %}}

### Why is that cool?

Servers are run independently by different people and organizations.
They can apply wildly different moderation policies, so you can find or
make one that fits your taste perfectly.

By watching a video, you help the hosting provider to broadcast it by becoming
a broadcaster of the video yourself. Each instance doesn't need much money to broadcast
the videos of its users.

[Get started](#getting-started)

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
{{% grid class="row footer" %}}
{{% grid class="container" %}}
{{% grid class="col-sm-12" %}}

Built on top of <a href="https://joinmastodon.org" target="_blank">joinmastodon.org</a>. Thanks!

{{% /grid %}}
{{% /grid %}}
{{% /grid %}}
<p>
