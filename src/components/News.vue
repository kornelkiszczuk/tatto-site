<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import carouselImg from '../assets/carousel.svg'
import { ref, watch } from 'vue';


const isClicked = ref(false)
const swiperRef = ref(null)

const onSwiper = (swiper) => {
    swiperRef.value = swiper
}
watch(isClicked, (newValue) => {
    if (newValue) {
        swiperRef.value.autoplay.pause();
    } else {
        swiperRef.value.autoplay.resume();
    }
})



const carosuelItems = [
    {
        id: 1,
        img: carouselImg,
        imgAlt: "Mężczyzna w okularach na szarym tle",
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
        imgAlt: "Mężczyzna w okularach na szarym tle",
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
        imgAlt: "Mężczyzna w okularach na szarym tle",
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
        imgAlt: "Mężczyzna w okularach na szarym tle",
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
    <section class="news space-100">
        <swiper @swiper="onSwiper" :autoplay="{ delay: 4500, disableOnInteraction: false }" :loop="true" :pagination="{
            clickable: true, el: '.pagination__items'
        }" :modules="[Pagination, Autoplay]">
            <swiper-slide class="news__slide" v-for="slide in             carosuelItems" :key="slide.id">
                <img class="news__img" :src="slide.img" :alt="slide.imgAlt">
                <div class="news__title">
                    <h6 class="title">{{ slide.title }}</h6>
                    <p class="desc">{{ slide.desc }}</p>
                </div>
                <div class="news__link">
                    <div class="text">
                        <p class="title">{{ slide.linkTitle }} <span>{{ slide.linkTitleSpan }}</span> </p>
                        <p class="desc">{{ slide.linkDesc }}</p>
                    </div>
                    <a target="_blank" :href="slide.linkPath"><svg class="arrow" width="33" height="34" fill="currentColor"
                            viewBox="0 0 33 34" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.15919 30.6114C0.885695 30.8849 0.732049 31.2559 0.732049 31.6426C0.732049 32.0294 0.885695 32.4003 1.15919 32.6738C1.43268 32.9473 1.80361 33.101 2.19038 33.101C2.57716 33.101 2.94809 32.9473 3.22158 32.6738L29.9882 5.90725L29.8125 26.8868C29.8053 27.0816 29.8373 27.2759 29.9065 27.4582C29.9758 27.6404 30.0809 27.807 30.2156 27.9479C30.3503 28.0888 30.5119 28.2013 30.6909 28.2788C30.8698 28.3562 31.0625 28.3969 31.2574 28.3985C31.4524 28.4002 31.6457 28.3627 31.8259 28.2884C32.0062 28.214 32.1697 28.1043 32.3068 27.9657C32.4439 27.827 32.5518 27.6623 32.6241 27.4812C32.6964 27.3002 32.7317 27.1064 32.7279 26.9115L32.9341 2.36901C32.9357 2.17552 32.8987 1.98365 32.8254 1.80459C32.7521 1.62553 32.6438 1.46284 32.507 1.32602C32.3702 1.1892 32.2075 1.08097 32.0284 1.00765C31.8494 0.934322 31.6575 0.897367 31.464 0.898931L6.92152 1.10518C6.72658 1.10133 6.53285 1.13661 6.35179 1.20894C6.17073 1.28126 6.00601 1.38916 5.86737 1.52625C5.72873 1.66334 5.61899 1.82684 5.54464 2.00708C5.47028 2.18732 5.43282 2.38063 5.43448 2.5756C5.43614 2.77057 5.47687 2.96322 5.55427 3.14217C5.63168 3.32113 5.74418 3.48274 5.88512 3.61745C6.02607 3.75217 6.1926 3.85726 6.37486 3.9265C6.55713 3.99574 6.75142 4.02773 6.94626 4.02057L27.9258 3.84486L1.15919 30.6114Z"
                                fill="#fff" />
                        </svg></a>
                </div>
            </swiper-slide>
            <div class="pagination">
                <button class="pagination__btn" @click="isClicked = !isClicked">
                    <svg v-if="isClicked" viewBox="0 0 18 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 10.0002L0.500001 20.0002L0.500002 0.000167853L17.5 10.0002Z" fill="currentColor" />
                    </svg>
                    <svg v-else viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H8V20H0V0Z" fill="currentColor" />
                        <path d="M12 0H20V20H12V0Z" fill="currentColor" />
                    </svg>
                </button>
                <div class="pagination__items"></div>
            </div>
        </swiper>
    </section>
</template>

<style lang="scss" scoped>
.news {
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
            font-family: "MADEOuterSans", sans-serif;
            font-size: clamp(0.625rem, -0.5574rem + 3.7838vw, 4.125rem);
            line-height: 5rem;
            letter-spacing: -2%;

            @media (max-width: 1000px) {
                margin-bottom: .5rem;
                line-height: 1rem;
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
            line-height: 1.9rem;

            @media (max-width: 1000px) {
                line-height: 1rem;
            }

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
}

.pagination {
    height: 20px;
    display: flex;
    justify-content: center;
    margin-top: 2.5rem;
    gap: .4rem;

    &__btn {
        width: 15px;
        height: 15px;
        cursor: pointer;

        svg {
            background-color: $bgc-white;
            color: #EAEAEA;

            path {
                transition: color .2s;
            }
        }

        svg:hover path {
            color: $primary-color;
        }
    }

    &__items {
        width: fit-content;
    }
}
</style>