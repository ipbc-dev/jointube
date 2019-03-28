<template>
    <main>
        <vue-headful
                :title="$t('meta.title') + ' - ' + $t('hof.title')"
        />
        <section class="clearfix faq">
            <div class="container">
                <h1>{{ $t('news.title') }}</h1>
                <span>{{ $t('news.subtitle') }}</span>
                <div v-for="(key,bloc) in $t('news.blocs')">
                    <a :href="`#${key}`"><h2 :id="key">{{ bloc.title }}</h2></a>
                    <p v-for="p in bloc.text" v-html="p"></p>
                    <hr />
                </div>
            </div>
        </section>
    </main>
</template>

