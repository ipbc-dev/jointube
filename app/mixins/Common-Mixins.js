export default {
  methods: {
    buildImgUrl: function (imageName) {
      console.log(this)

      return this.$root['/'] + 'img/' + imageName
    }
  }
}
