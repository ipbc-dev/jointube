<template>
  <main>
    <vue-headful
      :title="$t('meta.title') + ' - ' + $t('hof.title')"
    />
    <div class="container">
      <section class="col-lg-8 faq">
        <h1>{{ $t('news.title') }}</h1>
        <span>{{ $t('news.subtitle') }}</span>
        <div v-for="key in Object.keys($t('news.blocs'))" :key="key"
          :id="key" class="article">
          <!-- <img class="img-fluid" :src="`${$root['/']}img/news/${key}.jpg`" alt=""> -->
          <div class="content-wrapper">
            <h3>
              <a :href="`#${key}`" v-html="$t(`news.blocs.${key}.title`)"></a>
            </h3>
            <p class="text-muted small">
              <i class="fa fa-calendar" aria-hidden="true"></i>
              <time :datetime="`20${key}`">{{ $t(`news.blocs.${key}.date`) }}</time>
            </p>
            <v-text :section="`news.blocs.${key}.text`" />
            <hr />
          </div>
        </div>
      </section>
      <aside class="col-lg-4">
        <div class="sticky-top">
          <div class="bloc">
            <nav>
              <h3>{{ $t('news.latest-articles') }}</h3>
              <ul>
                <li v-for="key in Object.keys($t('news.blocs'))" :key="key">
                  <a :href="`#${key}`" v-html="$t(`news.blocs.${key}.title`)"></a>
                  <time v-if="$t(`news.blocs.${key}.date`)"
                    :datetime="`20${key}`"
                    class="text-muted small">
                    {{ $t(`news.blocs.${key}.date`) }}
                  </time>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </aside>
    </div>
  </main>
</template>

<script>
import VText from '../partials/V-Text.vue';

export default {
  components: {
    VText,
  },
}
</script>