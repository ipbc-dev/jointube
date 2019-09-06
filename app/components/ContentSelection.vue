<template>
  <div class="root">

    <div class="left">
      <img :src="thumbnailUrl" alt="thumbnail"/>

      <button class="jpt-button jpt-button-light">
        <span v-if="type === 'video'">
          <icon-video></icon-video>
          Watch the video
        </span>

        <span v-if="type === 'channel'">
          <icon-channel></icon-channel>
          Discover the channel
        </span>

        <span v-if="type === 'instance'">
          <icon-instance></icon-instance>

          Go on the instance
        </span>
      </button>
    </div>

    <div class="right">
      <div class="title">
        <icon-video v-if="type === 'video'"></icon-video>
        <icon-channel v-if="type === 'channel'"></icon-channel>
        <icon-instance v-if="type === 'instance'"></icon-instance>

        {{ title }}
      </div>

      <div class="description">
        {{ description }}
      </div>

      <div class="tags">
        <div class="tag" v-for="tag in tags">{{ tag }}</div>
      </div>
    </div>
  </div>


</template>

<style lang="scss" scoped>
  @import '../assets/scss/_variables';

  .left {
    img {
      display: block;
      width: 250px;
      height: 137px;
      border-radius: 3px;
    }

    button {
      margin-top: 30px;
      width: 250px;
      height: 35px;
    }
  }

  .right {
    .title {
      font-size: 24px;
      font-weight: $font-semibold;
    }

    .description {
      font-size: 16px;
    }

    .tags {
      display: flex;

      .tag {
        border: 1px solid $orange;
        margin-right: 20px;
      }
    }
  }
</style>

<script>
  import IconVideo from './icons/IconVideo.vue'
  import IconInstance from './icons/IconInstance.vue'
  import IconChannel from './icons/IconChannel.vue'

  export default {
    props: {
      type: String,
      title: String,
      thumbnailUrl: String,
      url: String,
      tags: Array,
      description: String,
    },
    components: {
      IconVideo,
      IconInstance,
      IconChannel
    }
  }
</script>
