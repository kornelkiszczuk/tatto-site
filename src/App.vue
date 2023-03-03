<script setup>
import Hero from './components/Hero.vue';
import Marquee from './components/Marquee.vue';
import Nav from './components/Nav.vue';
import News from './components/News.vue';


</script>

<template>
  <Nav />
  <main>
    <Hero />
    <News />
    <Marquee marqueeText=" 9 kursów - 9 dzielnic talentu" />
  </main>
</template>

<style scoped></style>


