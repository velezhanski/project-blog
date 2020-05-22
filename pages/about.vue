<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero title="About Me" subtitle="A little back story" image="/uploads/about-hero.jpg"></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h3>General</h3>
          <p>
            So, there isn't really much to tell, but anyways. <br>
            I am Russian, living in Cyprus for the past 12 years,
            really like coding, love my dog and adore my wife. Got interested in coding when I was 13, and basically
            never stopped. Oh and yeah I am 18 right now.
          </p>

          <h3>Why did I make this?</h3>
          <p>
            Well, I really wanted a kind of a little corner for myself on the web, which is not just a website built by
            me, but also a platform where I can post some things, be it some stories or an interesting project I am
            working on. Let's see how it goes and where it takes me :P
          </p><br>
          <quote-card />
        </div>
      </template>

      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
  import QuoteCard from '~/components/cards/QuoteCard'
  export default {
    head() {
      return {
        title: `About | ${this.$siteConfig.siteName}`
      }
    },
    components: {
      QuoteCard
    }
  }
</script>