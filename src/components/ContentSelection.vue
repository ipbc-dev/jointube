<template>
  <div class="root">

    <div class="left">
      <img :src="thumbnailUrl" alt="thumbnail"/>

      <button class="jpt-button jpt-button-medium">
        <span class="span-wrapper" v-if="type === 'video'">
          <icon-video></icon-video>
          Watch the video
        </span>

        <span class="span-wrapper" v-if="type === 'channel'">
          <icon-channel></icon-channel>
          Discover the channel
        </span>

        <span class="span-wrapper" v-if="type === 'instance'">
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

    @media screen and (max-width: $small-screen) {
      flex-direction: column;

      .left {
        align-items: center !important;
        display: flex !important;
        flex-direction: column !important;
        margin-bottom: 20px !important;
      }
    }
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

      .span-wrapper {
        display: block;
        width: 100%;
        position: relative;
      }

      svg {
        width: 20px;
        height: 20px;
        position: absolute;
        left: 24px;
        top: 0;
        bottom: 0;
        margin: auto;
      }
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
      flex-wrap: wrap;


      @media screen and (max-width: $responsive-screen) {
        justify-content: center;
      }

      .tag {
        margin-top: 10px;
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
