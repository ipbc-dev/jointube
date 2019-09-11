import Vue from 'vue'
import VueMatomo from 'vue-matomo'
import VueRouter from 'vue-router'
import vueHeadful from 'vue-headful'
import GetTextPlugin from 'vue-gettext'

import App from './App.vue'
import Home from './views/Home.vue'

import './scss/bootstrap.scss'
import './scss/main.scss'

Vue.use(VueRouter)
Vue.use(GetTextPlugin, { translations: {} })
Vue.component('vue-headful', vueHeadful)

const router = new VueRouter({
  mode: 'history',
  base: `${__dirname}${process.env.BASE_URL}`,
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})

// Framanav
if (
  !window.vuefsPrerender &&
  document.querySelectorAll('script[src$="nav.js"]').length < 1 &&
  process.env.NODE_ENV !== 'development'
) {
  const navConfig = document.createElement('script')
  navConfig.innerHTML = 'l$ = { js: { j$: \'noConflict\' } }'
  document.getElementsByTagName('head')[0].appendChild(navConfig)

  const nav = document.createElement('script')
  nav.src = 'https://framasoft.org/nav/nav.js'
// document.getElementsByTagName('head')[0].appendChild(nav);
}

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
      const cookieTimeout = 33696000 // 13 mois en secondes
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
