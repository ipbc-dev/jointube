<template>
  <div class="i18n">
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
  .i18n .dropdown {
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
</style>

<style scoped>
  .text {
    font-size: 11px;
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
        return window.location.origin + `/${locale}/`
      }
    }
  }
</script>
