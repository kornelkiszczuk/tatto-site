<script setup>
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
const { offer } = defineProps(["offer"])
</script>

<template>
    <Slide class="offer">
        <img class="offer__img" :src="offer.img" alt="">
        <div class="offer__header">
            <p class="title">{{ offer.title }}</p>
            <p class="desc">{{ offer.desc }}</p>
        </div>
        <div class="offer__content"></div>
        <div class="offer__btn"></div>
    </Slide>
</template>

<style lang="scss" scoped>
.offer {
    position: relative;
    width: 377px;
    height: 557px;
    border: 1px solid #262523;
    background: linear-gradient(to bottom, $bgc-white 50%, $text-black 50%);

    &__img {
        position: absolute;
        top: 35%;
        width: 100%;
    }

    &__header {
        .title {
            font-family: "MADEOuterSans", "Arial";
            letter-spacing: 10%;
            font-size: 25px;
            line-height: 32px;
        }

        .desc {
            font-weight: $medium-weight;
            font-size: 14px;
            line-height: 19px;
        }
    }
}
</style>