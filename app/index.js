import Vue from 'vue';
import VueMatomo from 'vue-matomo';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import vueHeadful from 'vue-headful';

import App from './App.vue';
import Home from './views/Home.vue';

import './assets/scss/bootstrap.scss';
import '../node_modules/fork-awesome/css/fork-awesome.css';
import './assets/scss/main.scss';

Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.component('vue-headful', vueHeadful);

const defaultLocale = 'fr';
const locales = [];
const pages = [];

// Import locales list
let req = require.context('./locales/', false, /\.yml$/);
req.keys().forEach((key) => {
  locales.push(key.replace(/\.\/(.*)\.yml/, '$1'));
});
// Import pages list
req = require.context('./views', false, /\.vue$/);
req.keys().forEach((key) => {
  pages.push(key.replace(/\.\/(.*)\.vue/, '$1'));
});

const lang = window.location.href
  .split('/')[(process.env.BASE_URL === '' || (window.location.href.match(/\//g)).length === 3) ? 3 : 4]
  .substr(0, 2)
  .toLowerCase() || defaultLocale;
document.getElementsByTagName('html')[0].setAttribute('lang', lang);
const userLang = navigator.languages
  || [navigator.language || navigator.userLanguage];
let defaultRouteLang = '';

const messages = {};
messages.locales = require('./lang.yml'); // eslint-disable-line
messages.locales.avalaible = Object.keys(messages.locales).filter(n => locales.indexOf(n) > -1);

// Data import
let data = {};
data = require('./data.yml'); // eslint-disable-line
data['/'] = `/${process.env.BASE_URL.replace(/(.+)/, '$1/')}`;
data.hash = window.location.hash.replace('#', '');
data.txt = data.txt || {};
data.html = data.html || {};
Object.keys(data.color).forEach((k) => {
  if (data.txt[k] === undefined) {
    const tmp = document.createElement('div');
    tmp.innerHTML = data.color[k];
    data.txt[k] = tmp.textContent || tmp.innerText;
  }
});

Object.keys(data.link).forEach((k) => {
  if (data.html[k] === undefined) {
    if (data.color[k] !== undefined) {
      data.html[k] = `<a href="${data.link[k]}">${data.color[k]}</a>`;
    } else if (data.txt[k] !== undefined) {
      data.html[k] = `<a href="${data.link[k]}">${data.txt[k]}</a>`;
    }
  }
});

const routes = [
  { path: '/', component: Home, meta: { id: 'home', lang: defaultLocale } },
];

for (let i = 0; i < locales.length; i += 1) {
  messages[locales[i]] = {};
  // Locales import
  /* eslint-disable */
  import(/* webpackChunkName: "lang-[request]" */`./locales/${locales[i]}.yml`).then((locale) => {
    messages[locales[i]] = locale;
    messages[locales[i]].data = data;
    messages[locales[i]].lang = locales[i];
  }).catch((err) => {
    console.error(err);
  });
  /* eslint-enable */

  // Localized routes
  for (let j = 0; j < pages.length; j += 1) {
    const component = require(`./views/${pages[j]}.vue`); // eslint-disable-line
    routes.push({
      path: `/${locales[i]}${pages[j].toLowerCase().replace(/^/, '/').replace('/home', '')}`,
      component: component.default,
      meta: { id: pages[j].toLowerCase(), lang: locales[i] },
    });
  }
}

// define defaultRouteLang
for (let j = 0; j < userLang.length; j += 1) { // check if user locales
  for (let i = 0; i < locales.length; i += 1) { // matches with app locales
    if (defaultRouteLang === '' && userLang[j].substring(0, 2).toLowerCase() === locales[i]) {
      defaultRouteLang = locales[i];
    }
  }
}

// Home redirection
const currentURL = window.location.href.replace(/\/+$/, '');
if ((currentURL.split('/')[3] === undefined || currentURL.split('/')[3] === process.env.BASE_URL)
  && (currentURL.split('/')[4] === undefined)) {
  if (defaultRouteLang === '') {
    defaultRouteLang = defaultLocale;
  }
  window.location.href = `${currentURL}/${defaultRouteLang}/`;
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: lang,
  fallbackLocale: defaultLocale,
  messages,
  silentTranslationWarn: true,
});

// Framanav
if (!window.vuefsPrerender
  && document.querySelectorAll('script[src$="nav.js"]').length < 1
  && process.env.NODE_ENV !== 'development') {
  const navConfig = document.createElement('script');
  navConfig.innerHTML = 'l$ = { js: { j$: \'noConflict\' } }';
  document.getElementsByTagName('head')[0].appendChild(navConfig);
  const nav = document.createElement('script');
  nav.src = 'https://framasoft.org/nav/nav.js';
// document.getElementsByTagName('head')[0].appendChild(nav);
}

// Routes
const router = new VueRouter({
  routes,
  mode: 'history',
  base: `${__dirname}${process.env.BASE_URL}`,
});

// Stats Matomo
if (!(navigator.doNotTrack === 'yes'
  || navigator.doNotTrack === '1'
  || navigator.msDoNotTrack === '1'
  || window.doNotTrack === '1')
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

    enableLinkTracking: true,
  });

  const _paq = _paq || []; // eslint-disable-line

  // Conformité CNIL
  _paq.push([function piwikCNIL() {
    const self = this;
    function getOriginalVisitorCookieTimeout() {
      const now = new Date();
      const nowTs = Math.round(now.getTime() / 1000);
      const visitorInfo = self.getVisitorInfo();
      const createTs = parseInt(visitorInfo[2], 10);
      const cookieTimeout = 33696000; // 13 mois en secondes
      const originalTimeout = (createTs + cookieTimeout) - nowTs;
      return originalTimeout;
    }
    this.setVisitorCookieTimeout(getOriginalVisitorCookieTimeout());
  }]);
}

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  i18n,
  data,
  mounted() {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'));
  },
  render: h => h(App),
});
