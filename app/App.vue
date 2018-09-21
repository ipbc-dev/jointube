<template>
  <div id="app">
    <vue-headful
      :title="$t('meta.title')"
      :html="{ body: {id: $route.meta.id } }"
      :lang="$route.meta.lang"
    />
    <header-component></header-component>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from './components/partials/Header.vue'
export default {
  name: 'app',
  components: {
    HeaderComponent,
  },
  mounted() {
    // Stats Matomo
    if (!(navigator.doNotTrack === 'yes'
        || navigator.doNotTrack === '1'
        || navigator.msDoNotTrack === '1'
        || window.doNotTrack === '1')) {

      var _paq = _paq || []; // eslint-disable-line

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

      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      // Code Piwik JS
      (function piwikJS() {
        const u = 'https://stats.framasoft.org/';
        _paq.push(['setTrackerUrl', [u, 'p.php'].join('')]);
        _paq.push(['setSiteId', 68]);
        const d = document;
        const g = d.createElement('script');
        const s = d.getElementsByTagName('script')[0];
        g.type = 'text/javascript'; g.defer = true; g.async = true;
        g.src = [u, 'p.js'].join(''); s.parentNode.insertBefore(g, s);
      }());
    }
  },
}
</script>
