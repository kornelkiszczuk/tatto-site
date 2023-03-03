<script setup>
import MarqueeText from 'vue-marquee-text-component'
const { marqueeText } = defineProps(['marqueeText'])

</script>

<template>
    <marquee-text class="marquee" :duration="40">{{ marqueeText }}</marquee-text>
</template>

<style lang="scss" scoped>
.marquee {
    font-family: "MADEOuterSans", "Arial";
    font-size: clamp(2.5rem, -0.0735rem + 14.7059vw, 18.125rem);
    margin-bottom: 10rem;
}
</style>