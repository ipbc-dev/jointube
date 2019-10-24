<template>
  <div id="i18n">
    <b-dropdown>
      <template slot="button-content">
        <img :src="buildImgUrl('language.png')" alt="Change languages logo"/>

        <div class="text">
          <translate>Languages</translate>
          <span class="caret"></span>
        </div>
      </template>

      <b-dropdown-item v-for="(lang, locale) in $language.available" :href="buildLocaleLink(locale)">
        {{ lang }}
      </b-dropdown-item>

      <b-dropdown-divider></b-dropdown-divider>

      <b-dropdown-item>
        <a class="translate">
          <icon-add></icon-add>
          <span v-translate>Translate</span>
        </a>
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<style lang="scss">
  #i18n {
    .text {
      font-size: 11px;
    }

    .dropdown {
      button {
        height: 60px;
        color: #000;
        background-color: #fff;
        border: none;
      }

      .dropdown-toggle::after {
        display: none;
      }

      .translate svg {
        width: 20px;
        margin-right: 5px;
        vertical-align: top;
      }
    }
  }
</style>

<script>
  import { BDropdown, BDropdownDivider, BDropdownItem } from 'bootstrap-vue'
  import IconAdd from './icons/IconAdd'

  export default {
    components: {
      BDropdown,
      BDropdownDivider,
      BDropdownItem,

      IconAdd
    },

    methods: {
      buildLocaleLink (locale) {
        return process.env.BASE_URL + `${locale}/`
      }
    }
  }
</script>
