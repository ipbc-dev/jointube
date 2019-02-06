<template>
  <main>
    <vue-headful
      :title="$t('meta.title') + ' - ' + $t('faq.title')"
    />
    <section class="row faq">
      <div class="container">
        <h2 class="text-center" v-html="$t('faq.title')"></h2>
        <p><i class="text-center" v-html="$t('faq.clic')"></i></p>
        <h3 v-html="$t('faq.section.prez')"></h3>
        <div id="accordion-presentation" class="panel-group">
          <div class="panel panel-default"
            v-for="(question, key, index) in $t('faq.prez')">
            <div class="panel-heading" role="button" @click="toggleAccordion('prez', index)">
              <h3 class="panel-title" v-html="$t('faq.prez.' + key + '.title')"></h3>
            </div>
            <collapse v-model="prez[index]">
              <div class="panel-body" v-if="key === 'pros'">
                <p v-html="$t('faq.prez.pros.text[0]')"></p>
                <ol>
                  <li v-html="$t('faq.prez.pros.list[0]')"></li>
                  <li v-html="$t('faq.prez.pros.list[1]')"></li>
                  <li v-html="$t('faq.prez.pros.list[2]')"></li>
                </ol>
                <p v-html="$t('faq.prez.pros.text[1]')"></p>
              </div>
              <div class="panel-body" v-if="key === 'libre'">
                <p v-html="$t('faq.prez.libre.text[0]')"></p>
                <p v-html="$t('faq.prez.libre.text[1]')"></p>
                <ul>
                  <li v-html="$t('faq.prez.libre.list[0]')"></li>
                  <li v-html="$t('faq.prez.libre.list[1]')"></li>
                  <li v-html="$t('faq.prez.libre.list[2]')"></li>
                </ul>
              </div>
              <div class="panel-body" v-else>
                <p
                  v-for="(p, index) in $t('faq.prez.' + key + '.text')"
                  v-html="$t('faq.prez.' + key + '.text[' + index + ']')"
                ></p>
              </div>
            </collapse>
          </div>
        </div>

        <h3 v-html="$t('faq.section.content')"></h3>
        <div id="accordion-creation" class="panel-group">
          <div class="panel panel-default"
            v-for="(question, key, index) in $t('faq.content')">
            <div class="panel-heading" role="button" @click="toggleAccordion('content', index)">
              <h3 class="panel-title" v-html="$t('faq.content.' + key + '.title')"></h3>
            </div>
            <collapse v-model="content[index]">
              <div class="panel-body">
                <p
                  v-for="(p, index) in $t('faq.content.' + key + '.text')"
                  v-html="$t('faq.content.' + key + '.text[' + index + ']')"
                ></p>
              </div>
            </collapse>
          </div>
        </div>

        <p><a :href="$t('link.forumPT')" class="button" v-html="$t('faq.forum')"></a></p>

        <h3 v-html="$t('faq.section.tech')"></h3>
        <div  id="accordion-tech" class="panel-group">
          <div class="panel panel-default"
            v-for="(question, key, index) in $t('faq.tech')">
            <div class="panel-heading" role="button" @click="toggleAccordion('tech', index)">
              <h3 class="panel-title" v-html="$t('faq.tech.' + key + '.title')"></h3>
            </div>
            <collapse v-model="tech[index]">
              <div class="panel-body">
                <p
                  v-for="(p, index) in $t('faq.tech.' + key + '.text')"
                  v-html="$t('faq.tech.' + key + '.text[' + index + ']')"
                ></p>
              </div>
            </collapse>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { Collapse } from 'uiv';

export default {
  components: {
    Collapse,
  },
  data() {
    return {
      prez: [...Array(9).keys()].map(i => (i < 1)),
      content: [...Array(5).keys()].map(i => false),
      tech: [...Array(4).keys()].map(i => false),
    }
  },
  methods: {
    toggleAccordion (section, index) {
      if (this[section][index]) {
        this.$set(this[section], index, false)
      } else {
        this[section] = this[section].map((v, i) => i === index)
      }
    }
  }
}
</script>

