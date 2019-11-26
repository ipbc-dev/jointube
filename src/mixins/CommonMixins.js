export default {
  methods: {
    buildImgUrl: function (imageName) {
      return process.env.BASE_URL + 'img/' + imageName
    },

    buildPublicUrl: function (name) {
      return process.env.BASE_URL + name
    }
  }
}
