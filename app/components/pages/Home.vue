<template>
  <main>
    <section class="clearfix intro">
      <div class="container">
        <div class="col-sm-12 text-center">
          <h1 v-html="$t('home.title')"></h1>
          <h2 v-html="$t('home.intro.title')"></h2>
          <div class="col-md-6 col-md-push-6 release">
            <div class="alert alert-info">
            <!-- <div class="embed-responsive embed-responsive-16by9">
              <iframe v-if="$t('lang') === 'fr'"
                class="embed-responsive-item" allowfullscreen
                src="https://framatube.org/videos/embed/9db9f3f1-9b54-44ed-9e91-461d262d2205"
              ></iframe>
              <iframe v-else
                class="embed-responsive-item" allowfullscreen
                src="https://framatube.org/videos/embed/217eefeb-883d-45be-b7fc-a788ad8507d3"
              ></iframe>
            </div> -->
            <p>
              <img alt="PeerTube" :src="`${$root['/']}icons/favicon.png`"> <span v-html="$t('home.release.announce')"></span>
            </p>
            <p class="text-left" v-html="$t('home.release.title')"></p>
            <a class="frama_campaign" href="https://framasoft.org" v-html="$t('home.release.button')"></a>
            <a href="https://github.com/Chocobozzz/PeerTube#package-create-your-own-instance" v-html="$t('home.release.install')"></a>
            </div>
          </div>
          <div class="col-md-6 col-md-pull-6">
            <img :src="`${$root['/']}img/notebook.jpg`" class="img-responsive" alt="">
          </div>
          <p>
              <a href="#getting-started" v-html="$t('home.intro.getting-started')"></a>
              <a href="#how-it-works" v-html="$t('home.intro.how-it-works')"></a>
            </p>
        </div>
      </div>
    </section>

    <section class="clearfix why">
      <div class="container">
        <div class="col-sm-8">
          <h3 v-html="$t('home.why.power.title')"></h3>
          <p v-html="$t('home.why.power.desc')"></p>
        </div>
        <div class="col-sm-4 text-center">
          <i class="fa fa-globe fa-5x" aria-hidden="true"></i>
        </div>
        <div class="col-sm-8 col-sm-push-4">
          <h3 v-html="$t('home.why.content.title')"></h3>
          <p v-html="$t('home.why.content.desc')"></p>
        </div>
        <div class="col-sm-4 col-sm-pull-8 text-center">
          <i class="fa fa-comment fa-5x" aria-hidden="true"></i>
        </div>
        <div class="col-sm-8">
          <h3 v-html="$t('home.why.usersfirst.title')"></h3>
          <p v-html="$t('home.why.usersfirst.desc')"></p>
        </div>
        <div class="col-sm-4">
          <i class="fa fa-group fa-5x" aria-hidden="true"></i>
        </div>
        <div class="col-sm-8 col-sm-push-4">
          <h3 v-html="$t('home.why.broadcast.title')"></h3>
          <p v-html="$t('home.why.broadcast.desc')"></p>
        </div>
        <div class="col-sm-4 col-sm-pull-8 text-center">
          <i class="fa fa-fire fa-5x" aria-hidden="true"></i>
        </div>
      </div>
    </section>

    <section class="clearfix getting-started" id="getting-started">
      <div class="container">
        <div class="col-sm-12">
          <h2 v-html="$t('home.getting-started.title')"></h2>
          <h3 v-html="$t('home.getting-started.watch.title')"></h3>

          <div class="embed-responsive embed-responsive-16by9">
            <iframe v-if="$t('lang') === 'fr'"
              class="embed-responsive-item"
              src="https://framatube.org/videos/embed/0900bd2e-7306-4c39-b48b-2d0cd611742e"
              allowfullscreen
            ></iframe>
            <iframe v-else
              class="embed-responsive-item"
              src="https://framatube.org/videos/embed/9c9de5e8-0a1e-484a-b099-e80766180a6d"
              allowfullscreen
            ></iframe>
          </div>

          <p><a :href="$root.link.tube" v-html="$t('home.getting-started.watch.framatube')"></a></p>

          <h3 id="register" v-html="$t('home.getting-started.register.title')"></h3>
          <p v-html="$t('home.getting-started.register.list')"></p>

          <InstancesComponent></InstancesComponent>

          <div class="alert alert-info" v-html="$t('home.getting-started.register.email')"></div>

        </div>
      </div>
    </section>

    <section class="clearfix install">
      <div class="container">
        <div class="col-sm-12">
          <h2 v-html="$t('home.install.title')"></h2>
          <p v-html="$t('home.install.text[0]')"></p>
          <p v-html="$t('home.install.text[1]')"></p>
          <p>
            <a href="https://github.com/Chocobozzz/PeerTube/blob/develop/support/doc/production.md"
              target="_blank"
              v-html="$t('home.install.btn')"
            ></a>
          </p>
        </div>
      </div>
    </section>

    <section class="clearfix how-it-works" id="how-it-works">
      <div class="container">
        <div class="col-sm-5">
          <h2 v-html="$t('home.how-it-works.how.title')"></h2>
          <p v-html="$t('home.how-it-works.how.text[0]')"></p>
          <p v-html="$t('home.how-it-works.how.text[1]')"></p>
          <p v-html="$t('home.how-it-works.how.text[2]')"></p>
          <p>
            <router-link :to="'/' + $t('lang') + '/faq'"
              v-html="$t('home.how-it-works.how.btn')"
            ></router-link>
          </p>
        </div>
        <div class="col-sm-7 text-center">
          <img :src="`${$root['/']}img/pt-p2p.png`" alt="">
        </div>
        <div class="col-sm-12">
          <h3 v-html="$t('home.how-it-works.why.title')"></h3>
          <p v-html="$t('home.how-it-works.why.text[0]')"></p>
          <p v-html="$t('home.how-it-works.why.text[1]')"></p>
          <p>
            <a href="#getting-started"
              v-html="$t('home.how-it-works.why.btn')"
            ></a>
          </p>
        </div>
      </div>
    </section>

    <section class="clearfix footer">
      <p>
        <span v-html="$t('footer.text')"></span>
        <a href="https://joinmastodon.org" target="_blank">joinmastodon.org</a>.
        <span v-html="$t('footer.thanks')"></span>
      </p>
    </section>
  </main>
</template>

<script>
import InstancesComponent from '../partials/Instances.vue'

export default {
  components: {
    InstancesComponent
  }
}
</script>
