<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import diamond from "../assets/diamond.svg"
import manhattan from "../assets/manhattan.svg"
import brooklyn from "../assets/brooklyn.svg"

const offers = [
    {
        id: 1,
        title: "Manhattan",
        desc: "Szkolenie od podstaw, mix technik",
        img: manhattan,
        prosList: ["tryb indywidualny", "kurs stacjonarny", "czas trwania 6 dni", "tatuowanie na modelu - 1 dzień", "zakwaterowanie w cenie", "obiady w cenie"],
        color: "#C6C2E5"
    },
    {
        id: 2,
        title: "Manhattan+",
        desc: "Szkolenie od podstaw,mix technik z praktykami",
        img: manhattan,
        prosList: ["tryb indywidualny", "kurs stacjonarny", "czas trwania 12 dni", "tatuowanie na modelu - 6 dzień", "zakwaterowanie w cenie", "obiady w cenie"],
        color: "#FDBE4F"
    },
    {
        id: 3,
        title: "BROOKLYN",
        desc: "Szkolenie od podstaw z zakresu tatuaży realistycznych",
        img: brooklyn,
        prosList: ["tryb indywidualny", "kurs stacjonarny", "czas trwania 6 dni", "tatuowanie na modelu - 1 dzień", "zakwaterowanie w cenie", "obiady w cenie"],
        color: "#C6C2E5"
    },
    {
        id: 4,
        title: "BROOKLYN+",
        desc: "Szkolenie od podstaw z zakresu tatuaży realistycznych z praktykami",
        img: brooklyn,
        prosList: ["tryb indywidualny", "kurs stacjonarny", "czas trwania 12 dni", "tatuowanie na modelu - 6 dzień", "zakwaterowanie w cenie", "obiady w cenie"],
        color: "#FDBE4F"
    },
    {
        id: 5,
        title: "Manhattan",
        desc: "Szkolenie od podstaw, mix technik",
        img: manhattan,
        prosList: ["tryb indywidualny", "kurs stacjonarny", "czas trwania 6 dni", "tatuowanie na modelu - 1 dzień", "zakwaterowanie w cenie", "obiady w cenie"],
        color: "#C6C2E5"
    },

]

</script>
<template>
    <section class="offers">
        <div class="offers__diamond">
            <img :src="diamond" alt="zdjęcie diamentu">
        </div>
        <div class="offers__container padding-left">
            <div class="offers__header padding-right">
                <h2 class="title">Wybierz Kurs tatuażu<br />
                    dla siebie!</h2>
                <p class="desc">Rozgość się, zdobywaj wiedzę, projektuj, ćwicz. Łączymy teorię z praktyką, przybliżamy
                    trendy. Do <br /> dyspozycji masz warsztat, narzędzia, programy i materiały. Na każdym etapie jest przy
                    Tobie
                    Mentor.
                </p>
            </div>
            <swiper class="offers__content padding-right" :slidesPerView="'auto'" :spaceBetween="20">
                <swiper-slide v-for="offer in offers" class="offer">
                    <img class="offer__img" :src="offer.img">
                    <div class="offer__header">
                        <p class="title">{{ offer.title }}</p>
                        <p class="desc">{{ offer.desc }}</p>
                    </div>
                    <div class="offer__pros">
                        <div v-for="pros in offer.prosList" class="offer__quality">
                            <div :style="{ backgroundColor: offer.color }" class="square"></div>
                            <p class="text">{{ pros }}</p>
                        </div>
                    </div>
                    <a href="#" class="offer__btn">
                        <p class="text">Poznaj cenę</p>
                        <svg class="arrow" width="33" height="34" fill="currentColor" viewBox="0 0 33 34"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.15919 30.6114C0.885695 30.8849 0.732049 31.2559 0.732049 31.6426C0.732049 32.0294 0.885695 32.4003 1.15919 32.6738C1.43268 32.9473 1.80361 33.101 2.19038 33.101C2.57716 33.101 2.94809 32.9473 3.22158 32.6738L29.9882 5.90725L29.8125 26.8868C29.8053 27.0816 29.8373 27.2759 29.9065 27.4582C29.9758 27.6404 30.0809 27.807 30.2156 27.9479C30.3503 28.0888 30.5119 28.2013 30.6909 28.2788C30.8698 28.3562 31.0625 28.3969 31.2574 28.3985C31.4524 28.4002 31.6457 28.3627 31.8259 28.2884C32.0062 28.214 32.1697 28.1043 32.3068 27.9657C32.4439 27.827 32.5518 27.6623 32.6241 27.4812C32.6964 27.3002 32.7317 27.1064 32.7279 26.9115L32.9341 2.36901C32.9357 2.17552 32.8987 1.98365 32.8254 1.80459C32.7521 1.62553 32.6438 1.46284 32.507 1.32602C32.3702 1.1892 32.2075 1.08097 32.0284 1.00765C31.8494 0.934322 31.6575 0.897367 31.464 0.898931L6.92152 1.10518C6.72658 1.10133 6.53285 1.13661 6.35179 1.20894C6.17073 1.28126 6.00601 1.38916 5.86737 1.52625C5.72873 1.66334 5.61899 1.82684 5.54464 2.00708C5.47028 2.18732 5.43282 2.38063 5.43448 2.5756C5.43614 2.77057 5.47687 2.96322 5.55427 3.14217C5.63168 3.32113 5.74418 3.48274 5.88512 3.61745C6.02607 3.75217 6.1926 3.85726 6.37486 3.9265C6.55713 3.99574 6.75142 4.02773 6.94626 4.02057L27.9258 3.84486L1.15919 30.6114Z"
                                fill="currentColor" />
                        </svg>
                    </a>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.offers {
    position: relative;
    display: flex;
    margin-bottom: 16rem;
    padding-right: 0;

    &__diamond {

        img {
            position: absolute;
            top: 12rem;
            width: clamp(5rem, 2.471rem + 14.4512vw, 19.8125rem);


            @media (max-width:1100px) {
                top: 0rem;
                left: unset;
                right: 0;
            }

            @media (max-width:726px) {
                top: 2rem;
                right: -3rem;

            }

            @media (max-width:576px) {
                right: 0rem;

            }
        }
    }

    &__container {
        width: 100%;
    }

    &__header {
        margin-bottom: 7.5rem;

        @media (max-width:576px) {
            margin-bottom: 3.5rem;
        }

        .title {
            margin-bottom: 25px;
            font-family: "MADEOuterSans", "Arial";
            text-transform: uppercase;
            font-size: clamp(1.875rem, 1.2779rem + 3.4118vw, 5.5rem);
        }

        .desc {
            font-size: clamp(1.25rem, 1.1265rem + 0.7059vw, 2rem);
            line-height: 3.5rem;

            @media (max-width:576px) {
                line-height: 2rem;
            }
        }
    }
}

.offer {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: clamp(25rem, 19.9353rem + 28.9412vw, 55.75rem);
    width: clamp(12.5rem, 8.3412rem + 23.7647vw, 37.75rem);
    border: 1px solid #262523;
    background: linear-gradient(to bottom, $bgc-white 50%, $text-black 50%);

    &:nth-child(even)>.offer__btn:hover:hover p,
    &:nth-child(even)>.offer__btn:hover svg {
        color: $primary-color;
    }

    &:nth-child(odd)>.offer__btn:hover:hover p,
    &:nth-child(odd)>.offer__btn:hover svg {
        color: $secondary-color;
    }

    &__img {
        position: absolute;
        top: 35%;
        width: 100%;

        @media (max-width:992px) {
            top: 37%;
        }

        @media (max-width:576px) {
            top: 38%;
        }
    }

    &__header {
        margin-top: 2.8rem;
        text-align: center;

        .title {
            margin-bottom: .5rem;
            font-size: clamp(1.125rem, 0.8902rem + 1.3415vw, 2.5rem);
            font-family: "MADEOuterSans", "Arial";
            font-weight: $thin-weight;
            letter-spacing: 3px;
            text-transform: uppercase;
        }

        .desc {
            padding-inline: 8rem;
            font-size: clamp(0.875rem, 0.779rem + 0.5488vw, 1.4375rem);
            line-height: 1.9rem;
            font-weight: $medium-weight;

            @media (max-width: 1000px) {
                padding-inline: 4rem;
            }

            @media (max-width:576px) {
                padding-inline: 2rem;
                line-height: 1rem;
            }
        }
    }

    &__pros {
        position: absolute;
        top: 55%;
        left: 13%;
        color: white;

    }

    &__quality {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;

        @media (max-width:1000px) {
            margin-bottom: .8rem;
        }

        @media (max-width:576px) {
            margin-bottom: .6rem;
        }

        .square {
            width: 10px;
            height: 10px;

            @media (max-width:576px) {
                width: 5px;
                height: 5px;
            }
        }

        .text {
            font-size: clamp(0.625rem, 0.4854rem + 0.7975vw, 1.4375rem);
        }
    }

    &__btn {
        margin-bottom: 2.5rem;
        display: flex;
        align-items: center;
        gap: .8rem;
        margin-inline: auto;
        display: flex;
        color: white;

        @media (max-width: 576px) {
            margin-bottom: 1.5rem;
        }

        .text {
            font-family: "MADEOuterSans", "sans-serif";
            font-weight: 300;
            font-size: clamp(0.9375rem, 0.755rem + 1.0429vw, 2rem);
            transition: color .4s;
        }

        .arrow {
            width: clamp(0.9375rem, 0.7228rem + 1.227vw, 2.1875rem);
            transition: color .4s;
        }
    }
}
</style>