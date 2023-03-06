<script setup>
import Hero from './components/Hero.vue';
import Marquee from './components/Marquee.vue';
import Nav from './components/Nav.vue';
import News from './components/News.vue';
import Offers from './components/Offers.vue';


</script>

<template>
  <Nav />
  <main>
    <Hero />
    <News />
    <Marquee marqueeText="9 kursów - 9 dzielnic talentu" />
    <Offers />
  </main>
</template>

<style scoped></style>


