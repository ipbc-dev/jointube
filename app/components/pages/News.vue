<template>
    <main>
        <vue-headful
                :title="$t('meta.title') + ' - ' + $t('hof.title')"
        />
        <section class="clearfix faq">
            <div class="container">
                <h1>{{ $t('news.title') }}</h1>
                <span>{{ $t('news.subtitle') }}</span>
                <div v-for="(bloc, key) in $t('news.blocs')" :id="key">
                    <a :href="`#${key}`"><h2>{{ bloc.title }}</h2></a>
                    <time v-if="bloc.date" :datetime="bloc.date.data">{{ bloc.date.text }}</time>
                    <p v-for="p in bloc.text" v-html="p"></p>
                    <hr />
                </div>
            </div>
        </section>
    </main>
</template>

