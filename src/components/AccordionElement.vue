<template>
  <b-card no-body :id="accordionId">

    <b-card-header header-tag="header" role="tab">
      <a :href="href" v-b-toggle="accordionBodyId">
        <slot name="title"></slot>
      </a>
    </b-card-header>

    <b-collapse :accordion="accordion" :id="accordionBodyId" role="tabpanel">
      <b-card-body>

        <b-card-text>
          <slot></slot>
        </b-card-text>

      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
  import { BCollapse, BCard, BCardHeader, BCardBody, BCardText, VBToggle } from 'bootstrap-vue'

  export default {
    components: {
      BCollapse,
      BCard,
      BCardHeader,
      BCardBody,
      BCardText
    },

    directives: {
      'b-toggle': VBToggle
    },

    props: {
      title: String,
      id: String,
      accordion: String
    },

    computed: {
      accordionId: function () {
        return this.id.toLowerCase()
          .replace(/[ /'’]/g, '-')
          .replace(/[?!.,]/g, '')
      },

      href: function () {
        return '#' + this.accordionId
      },

      accordionBodyId: function () {
        return this.accordionId + '-body'
      }
    }
  }
</script>
