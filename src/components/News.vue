<script setup>
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import arrow from '../assets/cross.svg'
import carouselImg from '../assets/carousel.png'

const carosuelItems = [
    {
        id: 1,
        img: carouselImg,
        title: "Nowoczesne technologie i narzędzia oraz rzemiosło stare jak świat",
        desc: "Nasza akademia to również sztuka alchemii",
        link: "www.google.pl",
        linkTitle: "Sprawdź kurs",
        linkTitleSpan: "MANHATTAN",
        linkDesc: "Szkolenie od podstaw, mix technik",
        linkPath: "https://www.google.pl"
    },
    {
        id: 2,
        img: carouselImg,
        title: "Nowoczesne technologie i narzędzia oraz rzemiosło stare jak świat",
        desc: "Nasza akademia to również sztuka alchemii",
        link: "www.google.pl",
        linkTitle: "Sprawdź kurs",
        linkTitleSpan: "MANHATTAN",
        linkDesc: "Szkolenie od podstaw, mix technik",
        linkPath: "https://www.google.pl"
    },
    {
        id: 3,
        img: carouselImg,
        title: "Nowoczesne technologie i narzędzia oraz rzemiosło stare jak świat",
        desc: "Nasza akademia to również sztuka alchemii",
        link: "www.google.pl",
        linkTitle: "Sprawdź kurs",
        linkTitleSpan: "MANHATTAN",
        linkDesc: "Szkolenie od podstaw, mix technik",
        linkPath: "https://www.google.pl"
    },
    {
        id: 4,
        img: carouselImg,
        title: "Nowoczesne technologie i narzędzia oraz rzemiosło stare jak świat",
        desc: "Nasza akademia to również sztuka alchemii",
        link: "www.google.pl",
        linkTitle: "Sprawdź kurs",
        linkTitleSpan: "MANHATTAN",
        linkDesc: "Szkolenie od podstaw, mix technik",
        linkPath: "https://www.google.pl"
    }
]


</script>

<template>
    <carousel class="news" :autoplay="7000" :wrap-around="true">
        <slide class="news__slide" v-for="slide in carosuelItems" :key="slide.id">
            <img class="news__img" :src="slide.img">
            <div class="news__title">
                <h6 class="title">{{ slide.title }}</h6>
                <p class="desc">{{ slide.desc }}</p>
            </div>
            <div class="news__link">
                <div class="text">
                    <p class="title">{{ slide.linkTitle }} <span>{{ slide.linkTitleSpan }}</span> </p>
                    <p class="desc">{{ slide.linkDesc }}</p>
                </div>
                <a target="_blank" :href="slide.linkPath"><img class="arrow" :src="arrow"></a>
            </div>
        </slide>
        <template #addons>
            <pagination />
        </template>
    </carousel>
</template>

<style lang="scss" scoped>
.news {
    margin-bottom: 10rem;
    color: $white;

    @media (max-width: 576px) {
        margin-bottom: 2rem;
    }

    &__slide {
        position: relative;
        text-transform: uppercase;
        text-align: left;

        &>div {
            position: absolute;
        }
    }

    &__img {
        width: 100%;
    }

    &__title {
        bottom: clamp(1.25rem, 0.6838rem + 3.2353vw, 4.6875rem);
        left: clamp(1.25rem, 0.6838rem + 3.2353vw, 4.6875rem);
        max-width: 109.7rem;

        .title {
            margin-bottom: 1.5rem;
            font-family: "MADEOuterSans";
            font-size: clamp(0.625rem, -0.5574rem + 3.7838vw, 4.125rem);
            letter-spacing: -2%;

            @media (max-width: 1000px) {
                margin-bottom: .5rem;
            }
        }

        .desc {
            font-size: clamp(0.625rem, 0.3676rem + 1.4706vw, 2.1875rem);
        }
    }

    &__link {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        bottom: clamp(1.25rem, 0.6838rem + 3.2353vw, 4.6875rem);
        right: clamp(1.25rem, 0.6838rem + 3.2353vw, 4.6875rem);

        @media (max-width: 1550px) {
            bottom: auto;
            top: clamp(1.25rem, 0.6838rem + 3.2353vw, 4.6875rem);
            gap: 1em;
        }

        @media (max-width: 1000px) {
            gap: .7rem;
        }

        .text {
            .title {
                font-size: clamp(0.625rem, 0.3676rem + 1.4706vw, 2.1875rem);

                span {
                    font-weight: $semibold-weight;
                }
            }

            .desc {
                font-size: clamp(0.5rem, 0.3559rem + 0.8235vw, 1.375rem);
            }
        }

        .arrow {
            width: clamp(2.625rem, 2.5941rem + 0.1765vw, 2.8125rem);
            height: clamp(1.5625rem, 1.3566rem + 1.1765vw, 2.8125rem);
        }
    }

    // .carousel__pagination-button::after {
    //     width: 15px !important;
    //     height: 15px !important;
    //     background-color: #EAEAEA !important;
    // }

    // .carousel__pagination-button:hover::after,
    // .carousel__pagination-button--active::after {
    //     background-color: #FDBE4F !important;
    // }
}
</style>