<template>
  <div class="root">
    <div class="filters">
      <div v-translate class="title">Filter according to your preferences</div>

      <form>
        <div class="group">
          <label for="profile" v-translate>Your profile</label>

          <b-form-radio-group id="profile" buttons name="profile" v-model="profile">
            <b-form-radio value="viewer">
              <translate>Viewer</translate>
            </b-form-radio>

            <b-form-radio value="video-maker">
              <translate>Video maker</translate>
            </b-form-radio>
          </b-form-radio-group>
        </div>

        <div class="group">
          <label for="profile" v-translate>You want to</label>

          <b-form-radio-group id="wantTo" buttons name="wantTo" v-model="wantTo">
            <b-form-radio value="create-account">
              <translate>Create an account</translate>
            </b-form-radio>

            <b-form-radio value="discover-instances">
              <translate>Discover instances</translate>
            </b-form-radio>
          </b-form-radio-group>
        </div>

        <div class="group">
          <label for="themes" class="label-checkbox" v-translate>Themes</label>

          <b-form-checkbox-group
            v-model="themes"
            :options="availableThemes"
            name="themes"
            id="themes"
            size="lg"
          ></b-form-checkbox-group>
        </div>

        <div class="group">
          <label for="profile" v-translate>Sensitive videos</label>

          <b-form-radio-group id="nsfw" buttons name="nsfw" v-model="wantTo">
            <b-form-radio value="hide">
              <translate>Hide</translate>
            </b-form-radio>

            <b-form-radio value="blur">
              <translate>Blur</translate>
            </b-form-radio>

            <b-form-radio value="display">
              <translate>Display</translate>
            </b-form-radio>

            <b-form-radio value="no-opinion">
              <translate>No opinion</translate>
            </b-form-radio>
          </b-form-radio-group>
        </div>

        <div class="group">
          <label for="instance-languages" class="label-checkbox" v-translate>Instance languages</label>

          <b-form-checkbox-group
            v-model="languages"
            :options="availableLanguages"
            name="instance-languages"
            id="instance-languages"
            size="lg"
          ></b-form-checkbox-group>
        </div>

        <div class="group">
          <label for="quota" v-translate>Allowed video space</label>

          <b-form-select v-model="quota" id="quota" name="quota">
            <option value="1">
              <translate>At least 1GB</translate>
            </option>

            <option value="5">
              <translate>At least 5GB</translate>
            </option>

            <option value="20">
              <translate>At least 20GB</translate>
            </option>

            <option value="50">
              <translate>At least 50GB</translate>
            </option>
          </b-form-select>
        </div>
      </form>
    </div>

    <div>
      <div v-if="error" id="instances-list-error" class="alert alert-danger">
        Sorry, but we cannot fetch the instances list. Please retry later.
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import '../scss/_variables.scss';

  .filters {
    margin-bottom: 100px;

    .title {
      font-size: 24px;
      margin-bottom: 25px;
    }

    form {
      border-left: 6px solid $orange;
      padding-left: 24px;

      .group {
        margin-bottom: 30px;
        display: flex;
        align-items: center;

        & > label {
          min-width: 140px;
          margin: 0 10px 0 0;

          &.label-checkbox {
            align-self: flex-start;
          }
        }
      }

      select {
        width: 280px;
        height: 35px;
        line-height: 21px;
        border-radius: 0;
      }

      .btn-group-toggle {
        .btn {
          display: flex;
          align-items: center;
          color: #000;
          background-color: #fff;
          border-color: $orange;
          height: 30px;
          padding: 0 15px;
          cursor: pointer;

          &.active {
            color: #fff;
            font-weight: $font-semibold;
            background-color: $orange;
          }
        }
      }
    }
  }
</style>

<style lang="scss">
  @import '../scss/_variables.scss';

  .custom-checkbox {
    .custom-control-label > span {
      font-size: 16px;
    }

    .custom-control-input:checked + label {
      font-weight: $font-semibold;
    }
  }

  #themes {
    .custom-control {
      &:nth-child(4n) {
        width: 100px;
        margin-right: 0;
      }

      &:nth-child(4n-1) {
        width: 110px;
      }

      &:nth-child(4n-2) {
        width: 110px;
      }

      &:nth-child(4n-3) {
        width: 200px;
      }
    }
  }
</style>

<script>
  import { BFormRadio, BFormRadioGroup, BFormCheckboxGroup, BFormSelect } from 'bootstrap-vue'
  import axios from 'axios'

  export default {
    components: {
      'b-form-radio-group': BFormRadioGroup,
      'b-form-radio': BFormRadio,
      'b-form-checkbox-group': BFormCheckboxGroup,
      'b-form-select': BFormSelect
    },

    data () {
      return {
        error: false,

        instances: [],
        availableThemes: [
          { value: '11', text: this.$gettext('News & Politics') },
          { value: '1', text: this.$gettext('Music') },
          { value: '2', text: this.$gettext('Films') },
          { value: '3', text: this.$gettext('Vehicles') },

          { value: '10', text: this.$gettext('Entertainment') },
          { value: '4', text: this.$gettext('Art') },
          { value: '5', text: this.$gettext('Sports') },
          { value: '6', text: this.$gettext('Travels') },

          { value: '15', text: this.$gettext('Science & Technology') },
          { value: '8', text: this.$gettext('People') },
          { value: '9', text: this.$gettext('Comedy') },
          { value: '12', text: this.$gettext('How To') },

          { value: '7', text: this.$gettext('Gaming') },
          { value: '13', text: this.$gettext('Education') },
          { value: '14', text: this.$gettext('Activism') },
          { value: '16', text: this.$gettext('Animals') },

          { value: '17', text: this.$gettext('Kids') },
          { value: '18', text: this.$gettext('Food') },
        ],

        profile: 'viewer',
        wantTo: 'create-account',
        themes: [],
        nsfw: 'no-opinion',
        languages: [],
        quota: '5'
      }
    },

    computed: {
      availableLanguages: function () {
        const available = [
          {
            value: 'en',
            text: this.$gettext('English')
          }
        ]

        const all = {
          'fr': this.$gettext('Français'),
          'ja': this.$gettext('日本語'),
          'eu': this.$gettext('Euskara'),
          'ca': this.$gettext('Català'),
          'cs': this.$gettext('Čeština'),
          'eo': this.$gettext('Esperanto'),
          'el': this.$gettext('ελληνικά'),
          'de': this.$gettext('Deutsch'),
          'it': this.$gettext('Italiano'),
          'nl': this.$gettext('Nederlands'),
          'es': this.$gettext('Español'),
          'oc': this.$gettext('Occitan'),
          'gd': this.$gettext('Gàidhlig'),
          'zh': this.$gettext('简体中文（中国）'),
          'pt': this.$gettext('Português (Portugal)'),
          'sv': this.$gettext('svenska'),
          'pl': this.$gettext('Polski'),
          'fi': this.$gettext('suomi'),
          'ru': this.$gettext('русский')
        }

        const navigatorLanguage = window.navigator.userLanguage || window.navigator.language
        const smallLanguage = navigatorLanguage.split('-')[0]

        const found = all[smallLanguage]
        if (found && found !== 'en') {
          available.push({
            value: smallLanguage,
            text: found
          })
        }

        return available
      }
    },

    methods: {
      // Thanks https://stackoverflow.com/a/6274381
      shuffle (a) {
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]]
        }

        return a
      },

      bytes (value) {
        // https://github.com/danrevah/ngx-pipes/blob/master/src/pipes/math/bytes.ts
        const dictionaryBytes = [
          {max: 1024, type: 'B'},
          {max: 1048576, type: 'KB'},
          {max: 1073741824, type: 'MB'},
          {max: 1.0995116e12, type: 'GB'}
        ]

        if (value === -1) return 'No quota'

        const format = dictionaryBytes.find(function (d) { return value < d.max }) || dictionaryBytes[dictionaryBytes.length - 1]
        const calc = Math.floor(value / (format.max / 1024)).toString()

        return calc + format.type
      }
    },

    mounted () {
      const options = {
        method: 'GET',
        params: {
          start: 0,
          count: 100,
          signup: true,
          healthy: true,
          nsfwPolicy: ['do_not_list', 'blur']
        }
      }
      axios('https://instances.joinpeertube.org/api/v1/instances', options)
        .then(response => {
          this.instances = this.shuffle(response.data.data)

          this.instances.forEach(i => {
            i.url = 'https://' + i.host

            if (i.userVideoQuota) {
              i.userVideoQuotaBytes = this.bytes(i.userVideoQuota)
            }
          })
        })
        .catch(err => {
          console.error(err)
          this.error = true
        })
    }
  }
</script>
