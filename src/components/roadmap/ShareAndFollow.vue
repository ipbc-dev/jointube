<template>
  <ul class="list-inline share-follow d-flex justify-content-between">
    <li class="newsletter">
      <a rel="nofollow" class="btn"
         href="https://framalistes.org/sympa/info/peertube-newsletter"
         :title="$gettext('Stay up-to-date with PeerTube')"
      >
        <i class="fa fa-fw fa-lg fa-envelope" aria-hidden="true"></i>
        <span class="sr-only" v-translate>Newsletter</span>
      </a>
    </li>

    <li class="mastodon" v-if="mastodon !== ''">
      <a target="_blank" rel="noopener noreferrer nofollow" class="btn"
         :href="mastodon"
         :title="$gettext('Share on Mastodon')"
      >
        <i class="fa fa-fw fa-lg fa-mastodon" aria-hidden="true"></i>
        <span class="sr-only">Mastodon</span>
      </a>
    </li>

    <li class="diaspora">
      <a target="_blank" rel="noopener noreferrer nofollow" class="btn"
         :href="diaspora.join('')"
         :title="$gettext('Share on Diaspora')"
      >
        <i class="fa fa-fw fa-lg fa-diaspora" aria-hidden="true"></i>
        <span class="sr-only">Diaspora</span>
      </a>
    </li>

    <li class="twitter">
      <a target="_blank" rel="noopener noreferrer nofollow" class="btn"
         :href="twitter.join('')"
         :title="$gettext('Share on Twitter')"
      >
        <i class="fa fa-fw fa-lg fa-twitter" aria-hidden="true"></i>
        <span class="sr-only">Twitter</span>
      </a>
    </li>

    <li class="facebook">
      <a target="_blank" rel="noopener noreferrer nofollow" class="btn"
         :href="facebook.join('')"
         :title="$gettext('Share on Facebook')"
      >
        <i class="fa fa-fw fa-lg fa-facebook" aria-hidden="true"></i>
        <span class="sr-only">Facebook</span>
      </a>
    </li>
    <li class="reddit">
      <a target="_blank" rel="noopener noreferrer nofollow" class="btn"
         :href="reddit"
         :title="$gettext('Share on Reddit')"
      >
        <i class="fa fa-fw fa-lg fa-reddit" aria-hidden="true"></i>
        <span class="sr-only">Reddit</span>
      </a>
    </li>
  </ul>
</template>

<style lang="scss">
  .share-follow {
    display: inline-flex;
    margin: 0 auto 30px;

    a {
      margin-right: 5px;
      padding: 1rem;
      border-radius: 0;
      font-size: 1.5rem;
    }

    li {
      a {
        color: #fff;
        border: none;
        &:hover, &:focus {
          opacity: 0.8;
          color: #fff;
        }
      }
    }

    .newsletter a { background: transparent; color: #393C58 !important; }
    .mastodon a { background: #3088D4; }
    .diaspora a { background: #464646; }
    .twitter a { background: #6DABCE; }
    .facebook a { background: #405897; }
    .reddit a { background: #FF4500; }
    .instagram a { background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); }
  }
</style>

<script>
  export default {
    data () {
      const picture = this.buildImgUrl('card-opengraph.jpg')
      const link = process.env.BASE_URL
      const text = this.$gettext('Join me and support PeerTube, a free software to take back control of your videos!')
      const title = this.$gettext('Let’s support PeerTube')

      return {
        mastodon: '', // Todo add pouet link
        diaspora: [
          'https://share.diasporafoundation.org/',
          `?title=${encodeURIComponent(text)}`,
          `&amp;url=${link}`
        ],
        twitter: [
          'https://twitter.com/intent/tweet',
          `?text=${encodeURIComponent(text)} ${link}`
        ],
        facebook: [
          'https://www.facebook.com/sharer/sharer.php',
          `?u=${encodeURIComponent(link)}`,
          `&amp;picture=${encodeURIComponent(picture)}`,
          `&amp;title=${encodeURIComponent(title)}`,
          `&amp;description=${encodeURIComponent(text)}`
        ],
        reddit: 'https://www.reddit.com/r/Mobilizon'
      }
    }
  }
</script>
