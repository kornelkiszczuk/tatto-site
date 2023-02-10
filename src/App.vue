<script setup>
import fullpage from 'fullpage.js'
import { onMounted } from 'vue';
import Hero from './components/Hero.vue';
import Nav from './components/Nav.vue';
import News from './components/News.vue';
onMounted(() => {
  new fullpage('#fullpage', {
    scrollOverflow: false,
    scrollBar: true,
  })
})

</script>

<template>
  <Nav />
  <main id="fullpage">
    <Hero />
    <Hero />
    <Hero />
    <Hero />
    <News />
    <News />

  </main>
</template>

<style scoped>
@import 'fullpage.js/dist/fullpage.min.css';
</style>


