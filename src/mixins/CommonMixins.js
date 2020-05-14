import Vue from 'vue'

export default {
  methods: {
    buildImgUrl: function (imageName) {
      return process.env.BASE_URL + 'img/' + imageName
    },

    buildPublicUrl: function (name) {
      return process.env.BASE_URL + name
    },

    buildRoute: function (route) {
      if (Vue.config.localePath) return '/' + Vue.config.localePath + route

      return route
    },

    hasHashInURL (hash) {
      return window.location.hash === `#${hash}`
    },

    formatCurrency (amount) {
      const options = { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 }
      return new Intl.NumberFormat(this.getShortLocale(), options).format(amount)
    },

    getShortLocale () {
      return this.$language.current.split('_')[0]
    },

    fromNow (dateArg) {
      const date = new Date(dateArg)
      const seconds = Math.floor((Date.now() - date.getTime()) / 1000)

      let interval = Math.floor(seconds / 31536000)
      if (interval > 1) {
        return this.$gettextInterpolate('%{ interval } years ago', { interval })
      }

      interval = Math.floor(seconds / 2592000)
      if (interval > 1) return this.$gettextInterpolate('%{ interval } months ago', { interval })
      if (interval === 1) return this.$gettextInterpolate('%{ interval } month ago', { interval })

      interval = Math.floor(seconds / 604800)
      if (interval > 1) return this.$gettextInterpolate('%{ interval } weeks ago', { interval })
      if (interval === 1) return this.$gettextInterpolate('%{ interval } week ago', { interval })

      interval = Math.floor(seconds / 86400)
      if (interval > 1) return this.$gettextInterpolate('%{ interval } days ago', { interval })
      if (interval === 1) return this.$gettextInterpolate('%{ interval } day ago', { interval })

      interval = Math.floor(seconds / 3600)
      if (interval > 1) return this.$gettextInterpolate('%{ interval } hours ago', { interval })
      if (interval === 1) return this.$gettextInterpolate('%{ interval } hour ago', { interval })

      interval = Math.floor(seconds / 60)
      if (interval >= 1) return this.$gettextInterpolate('%{ interval } min ago', { interval })

      return this.$gettextInterpolate('%{ interval } sec ago', { interval: Math.max(0, seconds) })
    }
  }
}
