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
    }
  }
}
