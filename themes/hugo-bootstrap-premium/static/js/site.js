$(
  function(){
    $("table").addClass("table table-condensed table-bordered table-striped");
  }
);
  $('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

const end = new Date('07/05/2018 11:59 PM');
const now = new Date();
const days = (end - now < 0) ? 0 : Math.floor((end - now) / 86400000); // 24*60*60*1000
document.getElementById('kkbbDays').innerHTML = days;


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