<template>
    <main>
        <vue-headful
                :title="$t('meta.title') + ' - ' + $t('hof.title')"
        />
        <section class="row faq">
            <div class="container">
                <h1>{{ $t('news.title') }}</h1>
                <span>{{ $t('news.subtitle') }}</span>
                <div v-for="bloc in $t('news.blocs')">
                    <a :href="`#${bloc.id}`"><h2 :id="bloc.id">{{ bloc.title }}</h2></a>
                    <p v-for="p in bloc.text" v-html="p"></p>
                </div>
            </div>
        </section>
    </main>
</template>

