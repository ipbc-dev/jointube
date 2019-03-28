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
                    <p v-for="p in bloc.text" v-html="p"></p>
                </div>
            </div>
        </section>
    </main>
</template>

