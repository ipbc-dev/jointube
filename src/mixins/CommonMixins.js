export default {
  methods: {
    buildImgUrl: function (imageName) {
      return process.env.BASE_URL + 'img/' + imageName
    }
  }
}
