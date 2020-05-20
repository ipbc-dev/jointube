<template>
  <section>
    <b-container class="ombre">
      <b-row id="team">
        <b-col cols="12">
          <h3 class="section-title mt-5">
            <div v-translate>
              Who are we?
            </div>
            <div class="border-title"></div>
          </h3>
        </b-col>
        <b-col lg="8">
          <p class="text-center">
            <img
              :src="buildImgUrl('roadmap/biglogo-notxt.png')"
              class="rounded-circle border w-50"
            />
          </p>

          <p v-translate>
            Framasoft (that's us!) is a French non-for-profit created in 2004, dedicated to popular education on digital issues.
            Our small association (less than 40 members, less than 10 employees) is known to have realized the
            <a href="https://degooglisons-internet.org">"Degooglize the Internet" project</a>, proposing 34 ethical and alternative online tools.
          </p>

          <p v-translate>
            Our association creates many digital tools (services, courses and resources, softwares) to equip the people who participate
            to the contribution society. Among these tools, we carry the development of the federated softwares PeerTube and Mobilizon
            (a soon-to-be alternative to Facebook events, pages and groups).
          </p>

          <p v-translate>
            Recognised as being of general interest, our association is financed at more than 95% by donations
            from people who support and trust us.
          </p>

          <p>
            <a href="https://framasoft.org" v-translate>
              Learn more about Framasoft
            </a>
          </p>
        </b-col>
        <b-col lg="4">
          <h4 v-translate>Guest designer</h4>
          <p v-translate>
            Throughout this development we will be improving user experience
            and interface of PeerTube to provide more clarity and power at every level of use.
          </p>

          <b-card>
            <b-card-body>
              <h4>Marie-Cécile Godwin Paccard</h4>

              <img
                :src="buildImgUrl('roadmap/mcgp.jpg')"
                class="rounded-circle d-block mx-auto"
                alt=""
              />
              <p v-translate>
                « Independent designer, UX researcher who seeks to thoroughly understand usability and design user-friendly,
                ethical and inclusive tools. »
              </p>
              <p>
                <a href="https://mcgodwin.com">mcgodwin.com</a>
              </p>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style lang="scss">
  #team {
    .card {
      margin-bottom: 30px;
      border-radius: 0;

      img {
        max-width: 128px;
        margin-right: 20px;
      }
    }

    .card-body > .card-body {
      padding: 10px;
    }
  }
</style>

<script>
  import {
    BCard,
    BCardBody,
    BContainer,
    BCol,
    BRow
  } from 'bootstrap-vue'

  export default {
    components: {
      BCard,
      BCardBody,
      BContainer,
      BCol,
      BRow
    }
  }
</script>
