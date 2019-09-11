<template>
  <div>
    <div v-if="error" id="instances-list-error" class="alert alert-danger" v-html="$t('home.getting-started.register.error')"></div>

    <div id="instances-list" class="list-group" >
      <a v-for="instance of instances" v-bind:title="instance.host" v-bind:href="instance.url" class="list-group-item" target="_blank">
        <div class="left-div">
          <h4 class="list-group-item-heading">
            <span class="instance-name">{{ instance.name }}</span>
            <small class="instance-host">{{ instance.host }}</small>
          </h4>

          <p v-if="instance.shortDescription" class="list-group-item-text">
            {{ instance.shortDescription }}
          </p>
        </div>

        <div class="right-div">
          <li v-if="instance.totalInstanceFollowers">{{ instance.totalInstanceFollowers }} {{ $t('home.getting-started.register.instances.followers') }}</li>
          <li v-if="instance.totalInstanceFollowing">{{ $t('home.getting-started.register.instances.follows') }} {{ instance.totalInstanceFollowing }} {{ $t('home.getting-started.register.instances.instances') }}</li>
          <li v-if="instance.userVideoQuota">{{ instance.userVideoQuotaBytes }} {{ $t('home.getting-started.register.instances.per_user') }}</li>
        </div>
      </a>

      <!-- TODO: add link to instances list webpage -->
      <!--<a v-bind:href="$root.link.instancesPT" class="list-group-item" target="_blank">-->
        <!--{{ $t('home.getting-started.register.instances.see-more') }}-->
      <!--</a>-->
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'peertube-instances',

  data () {
    return {
      error: false,
      instances: []
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
        { max: 1024, type: this.$t('home.getting-started.register.instances.bytes.B') },
        { max: 1048576, type: this.$t('home.getting-started.register.instances.bytes.KB') },
        { max: 1073741824, type: this.$t('home.getting-started.register.instances.bytes.MB') },
        { max: 1.0995116e12, type: this.$t('home.getting-started.register.instances.bytes.GB') }
      ]

      if (value === -1) return this.$t('home.getting-started.register.instances.no_quota')

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
        nsfwPolicy: [ 'do_not_list', 'blur' ]
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
