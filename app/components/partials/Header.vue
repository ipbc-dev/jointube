<template>
  <header id="main-header">
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link
            :to="'/' + $t('lang') + '/'"
            class="navbar-brand-img">
            <img alt="PeerTube" :src="`${$root['/']}img/brand.png`">
          </router-link>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link
                :to="'/' + $t('lang') + '/faq'"
                v-html="$t('menu.faq')">
              </router-link>
            </li>
            <li>
              <a :href="$t('link.forumPT')"
                v-html="$t('menu.help')">
              </a>
            </li>
            <li>
              <a :href="$root.link.docsPT"
                v-html="$t('menu.docs')">
              </a>
            </li>
            <li>
              <a :href="$root.link.gitPT"
                v-html="$t('menu.code')">
              </a>
            </li>
            <li>
              <a href="#register"
                v-html="$t('menu.instances')">
              </a>
            </li>
            <li>
            <router-link
                :to="'/' + $t('lang') + '/hall-of-fame'"
                v-html="$t('menu.hall-of-fame')">
              </router-link>
            </li>
            <li>
              <div class="pull-right">
                <I18n/>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import I18n from './I18n.vue'
export default {
  name: 'framaheader',
  components: {
    I18n,
  },
}
</script>

