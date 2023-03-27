<script setup>
import MarqueeText from 'vue-marquee-text-component'
const { marqueeText } = defineProps(['marqueeText'])

</script>

<template>
    <section class="marquee">
        <marquee-text class="marquee__text" :duration="40" :space="150">{{ marqueeText }}</marquee-text>
    </section>
</template>

<style lang="scss" scoped>
.marquee {
    &__text {
        font-family: "MADEOuterSans", "Arial";
        font-size: clamp(2.5rem, -0.0735rem + 14.7059vw, 18.125rem);
        margin-block: 10rem;

        @media (max-width:576px) {
            margin-block: 5rem;
        }
    }
}
</style>