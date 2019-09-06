<template>
  <div class="i18n">
    <b-dropdown>
      <template slot="button-content">
        <i class="fa fa-lg fa-language" aria-hidden="true"></i>

        <div class="text">
          Language
          <span class="caret"></span>
        </div>
      </template>

      <template slot="dropdown">
        <b-dropdown-item v-for="lang in locales.avalaible" @click="changeLanguage(lang)">
          <router-link :to="'/' + lang + '/' + ($route.path.split('/')[2] || '')">{{ locales[lang] }}</router-link>
        </b-dropdown-item>

        <b-dropdown-divider v-if="$root.meta.i18n"></b-dropdown-divider>

        <b-dropdown-item v-if="$root.meta.i18n">
          <a :href="$root.meta.i18n">
            <i class="fa fa-fw fa-plus" aria-hidden="true"></i>
            <span v-html="$t('nav.translate')"></span>
          </a>
        </b-dropdown-item>
      </template>
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
  }
</style>

<style scoped>
  .text {
    font-size: 11px;
  }
</style>

<script>
  import { BDropdown, BDropdownDivider, BDropdownItem } from 'bootstrap-vue'

  export default {
    components: {
      BDropdown, BDropdownDivider, BDropdownItem
    },
    data () {
      return {
        currentComponent: '',
        switchLanguage: 'en',
        locales: this.$i18n.messages.locales,
      }
    },
    methods: {
      changeLanguage (lang) {
        this.switchLanguage = lang
        this.$i18n.locale = lang
        this.currentComponent = this.$route.path.split('/')[2] // eslint-disable-line prefer-destructuring
      },
    },
  }
</script>
