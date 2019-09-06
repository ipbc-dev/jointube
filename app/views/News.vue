<template>
  <main>
    <vue-headful
      :title="$t('meta.title') + ' - ' + $t('hof.title')"
    />
    <div class="container">
      <section class="col-lg-8 faq">
        <h1>{{ $t('news.title') }}</h1>
        <span>{{ $t('news.subtitle') }}</span>
        <div v-for="(bloc, key) in $t('news.blocs')" :id="key">
          <a :href="`#${key}`"><h2>{{ bloc.title }}</h2></a>
          <p class="small">
            <i aria-hidden="true" class="fa fa-calendar"></i>
            <time v-if="bloc.date" :datetime="bloc.date.data">{{ bloc.date.text }}</time>
          </p>
          <p v-for="p in bloc.text" v-html="p"></p>
          <hr/>
        </div>
      </section>
      <aside class="col-lg-4">
        <div class="sticky-top">
          <div class="bloc">
            <nav>
              <h3>{{ $t('news.latest-articles') }}</h3>
              <ul>
                <li v-for="(bloc, key) in $t('news.blocs')">
                  <a :href="`#${key}`">{{ bloc.title }}</a>
                  <time v-if="bloc.date" :datetime="bloc.date.data" class="text-muted small">
                    {{ bloc.date.text }}
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

