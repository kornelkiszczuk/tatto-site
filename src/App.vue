<script setup>
import SmallNav from './components/SmallNav.vue';
import Additional from './components/Additional.vue';
import Descriptions from './components/Descriptions.vue';
import Footer from './components/Footer.vue';
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
    <SmallNav firstLinkOne="uwielbiamy szkolić" firstLinkTwo="ludzi z pasją" secondLinkOne="zapytaj o kurs"
      secondLinkTwo="dla ciebie" email="kontakt.inq@gmail.com" tel="+48 601 150 899" />
    <Additional />
    <SmallNav firstLinkOne="uwielbiamy łączyć się" firstLinkTwo="z ludźmi z pasją" secondLinkOne="poznaj"
      secondLinkTwo="naszą aplikację" email='wowers.pl' tel="+48 601 150 899" />
    <Marquee marqueeText="Dołącz do wyjątkowej społeczności " />
  </main>
  <Footer />
</template>

<style scoped></style>


