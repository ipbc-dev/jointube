<template>
  <div id="project">
    <h3>
      <span v-for="(tag, index) in tags" :key="index">
        {{ tag }}
        <span v-if="index < tags.length - 1"> ⋅ </span>
      </span>
    </h3>
    <div>

      <div>
      <img :src="buildImgUrl('crowdfunding/process.svg')" height="200" alt="" class="pull-right">

        <p v-translate>
          From a birthday party with friends and family to a march for climate change,
          right now, our gatherings are trapped inside the tech giants’ platforms. How
          can we organize, how can we click “Attend,” without providing private data to
          Facebook or locking ourselves up inside MeetUp?
        </p>
      </div>

      <div>
        <p v-translate>
          Framasoft wants to create <b>Mobilizon</b>: free/libre software that will allow
          communities to create their own spaces to publish events, in order to better
          emancipate themselves from tech giants. We want to develop a <b>digital common</b>,
          that everyone can make their own, which <b>respects privacy and activism</b>
          by design.
        </p>

        <figure class="figure">
          <img :src="buildImgUrl('crowdfunding/event.gif')" alt="" style="width:100%;" />

          <figcaption class="figure-caption text-center" v-translate>
            Layout of an event page – G. Dorne and M.-C. Paccard
          </figcaption>
        </figure>
      </div>

      <div>
        <p v-translate>
          We asked professional designers to help us develop our vision for Mobilizon.
          We took time to study the digital habits of activists in order to understand
          the features they need to gather, organize, and mobilize.
        </p>

        <figure class="figure">
          <img :src="buildImgUrl('crowdfunding/group.gif')" alt="" style="width:100%;" />

          <figcaption class="figure-caption text-center" v-translate>
            Layout of a group page – G. Dorne and M.-C. Paccard
          </figcaption>
        </figure>
      </div>

      <div>
        <p v-translate>
          We want to make Mobilizon a user-friendly, emancipatory and ethical tool. Whether
          you want to create an event in one of the Mobilizon instances or to set up your
          own Mobilizon site… the features of this tool will depend on the means you give
          us to develop it.
        </p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        tags: [
          this.$gettext('Gather'),
          this.$gettext('Organize'),
          this.$gettext('Mobilize')
        ]
      }
    }
  }
</script>
