import Vue from 'vue'
import VueMatomo from 'vue-matomo'
import VueRouter from 'vue-router'
import GetTextPlugin from 'vue-gettext'
import VueMeta from 'vue-meta'

import App from './App.vue'
import Home from './views/Home.vue'
import Help from './views/Help'
import News from './views/News'
import Instances from './views/Instances'
import HallOfFame from './views/Hall-Of-Fame'
import FAQ from './views/FAQ'

import './scss/main.scss'
import CommonMixins from './mixins/CommonMixins'

const translations = require('./translations.json')

Vue.use(VueRouter)

// ############# I18N ##############

const availableLanguages = {
  'en_US': 'English',
  'fr_FR': 'Français'
}
const aliasesLanguages = {
  'en': 'en_US',
  'fr': 'fr_FR'
}
const allLocales = Object.keys(availableLanguages).concat(Object.keys(aliasesLanguages))

Vue.use(GetTextPlugin, {
  translations,
  availableLanguages,
  defaultLanguage: 'en_US',
  silent: true
})

const localePath = window.location.pathname
  .replace(/^\//, '')
  .replace(/\/$/, '')

if (allLocales.includes(localePath)) {
  Vue.config.language = aliasesLanguages[localePath] ? aliasesLanguages[localePath] : localePath
} else {
  const navigatorLanguage = window.navigator.userLanguage || window.navigator.language
  const snakeCaseLanguage = navigatorLanguage.replace('-', '_')
  Vue.config.language = aliasesLanguages[snakeCaseLanguage] ? aliasesLanguages[snakeCaseLanguage] : snakeCaseLanguage
}

// ###########################

Vue.use(VueMeta)

Vue.mixin(CommonMixins)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/help',
    component: Help
  },
  {
    path: '/news',
    component: News
  },
  {
    path: '/instances',
    component: Instances
  },
  {
    path: '/hall-of-fame',
    component: HallOfFame
  },
  {
    path: '/faq',
    component: FAQ
  }
]

for (const locale of allLocales) {
  routes.push({
    path: '/' + locale,
    component: Home
  })
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Stats Matomo
if (!(navigator.doNotTrack === 'yes' ||
  navigator.doNotTrack === '1' ||
  navigator.msDoNotTrack === '1' ||
  window.doNotTrack === '1')
) {
  Vue.use(VueMatomo, {
    // Configure your matomo server and site
    host: 'https://stats.framasoft.org/',
    siteId: 68,

    // Enables automatically registering pageviews on the router
    router,

    // Require consent before sending tracking information to matomo
    // Default: false
    requireConsent: false,

    // Whether to track the initial page view
    // Default: true
    trackInitialView: true,

    // Changes the default .js and .php endpoint's filename
    // Default: 'piwik'
    trackerFileName: 'p',

    enableLinkTracking: true
  })

  const _paq = _paq || [] // eslint-disable-line

  // CNIL conformity
  _paq.push([function piwikCNIL () {
    const self = this

    function getOriginalVisitorCookieTimeout () {
      const now = new Date()
      const nowTs = Math.round(now.getTime() / 1000)
      const visitorInfo = self.getVisitorInfo()
      const createTs = parseInt(visitorInfo[2], 10)
      const cookieTimeout = 33696000 // 13 months in seconds
      return (createTs + cookieTimeout) - nowTs
    }

    this.setVisitorCookieTimeout(getOriginalVisitorCookieTimeout())
  }])
}

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  },
  render: h => h(App)
})
