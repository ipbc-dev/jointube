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
        <div class="icon">
          <icon-video v-if="type === 'video'"></icon-video>
          <icon-channel v-if="type === 'channel'"></icon-channel>
          <icon-instance v-if="type === 'instance'"></icon-instance>
        </div>

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
  @import '../scss/_variables';

  .root {
    display: flex;
  }

  .left {
    margin-right: 20px;

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
      display: flex;
      align-items: center;
      font-family: 'Proza Libre', sans-serif;

      .icon {
        margin-right: 10px;
        position: relative;
        top: -2px;
      }
    }

    .description {
      font-size: 16px;
      min-height: 170px;
    }

    .tags {
      display: flex;

      .tag {
        border: 1px solid $orange;
        border-radius: 10px;
        margin-right: 20px;
        font-size: 14px;
        min-width: 140px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
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
      description: String
    },
    components: {
      IconVideo,
      IconInstance,
      IconChannel
    }
  }
</script>
