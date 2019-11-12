<template>
  <div id="content-selection">

    <div class="left">
      <div class="title title-small-screens">
        <div class="icon">
          <icon-video v-if="type === 'video'"></icon-video>
          <icon-channel v-if="type === 'channel'"></icon-channel>
          <icon-instance v-if="type === 'instance'"></icon-instance>
        </div>

        {{ title }}
      </div>

      <img :src="buildImgUrl('content-selection-thumbnails/' + thumbnailName)" alt="thumbnail"/>

      <a target="_blank" rel="noopener noreferrer" :href="url" class="jpt-button jpt-button-medium">
        <template v-if="type === 'video'">
          <div class="icon">
            <icon-video></icon-video>
          </div>
          <div v-translate>Watch the video</div>
        </template>

        <template v-if="type === 'channel'">
          <div class="icon">
            <icon-channel></icon-channel>
          </div>
          <div v-translate>Discover the channel</div>
        </template>

        <template v-if="type === 'instance'">
          <div class="icon">
            <icon-instance></icon-instance>
          </div>
          <div v-translate>Go on the instance</div>
        </template>
      </a>
    </div>

    <div class="right">
      <div class="title title-normal-screens">
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
        <div class="tag" v-for="tag in tags" :key="tag">{{ tag }}</div>
      </div>
    </div>
  </div>

</template>

<style lang="scss">
  @import '../scss/_variables';

  #content-selection {
    display: flex;

    .title-small-screens {
      display: none;
    }

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

    .left {
      margin-right: 20px;

      img {
        display: block;
        width: 250px;
        height: 137px;
        border-radius: 3px;
      }

      a.jpt-button {
        display: flex;
        flex-direction: row !important;
        margin-top: 30px;
        width: 250px;
        height: 35px;

        .icon {
          margin-right: 10px;

          svg {
            vertical-align: sub;
            width: 20px;
            height: 20px;
          }
        }
      }
    }

    .right {
      min-height: 170px;

      .description {
        font-size: 16px;
      }

      .tags {
        display: flex;
        flex-wrap: wrap;

        @media screen and (max-width: $responsive-screen) {
          justify-content: center;
        }

        .tag {
          margin: 10px;
        }
      }
    }

    @media screen and (max-width: $small-screen) {
      flex-direction: column;

      .title-small-screens {
        display: inherit;
        margin-bottom: 5px;
      }

      .title-normal-screens {
        display: none;
      }

      .left {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
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
      thumbnailName: String,
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
