<script setup>
import Additional from './components/Additional.vue';
import Descriptions from './components/Descriptions.vue';
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
    <Descriptions />
    <Additional />
    <Marquee marqueeText="Dołącz do wyjątkowej społeczności " />
  </main>
</template>

<style scoped></style>


