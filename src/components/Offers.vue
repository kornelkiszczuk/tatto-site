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
        prosList: ["tryb indywidualny", "kurs stacjonarny", "czas trwania 6 dni", "tatuowanie na modelu - 1 dzień", "zakwaterowanie w cenie", "obiady w cenie"]
    },
    {
        id: 2,
        title: "Manhattan+",
        desc: "Szkolenie od podstaw,mix technik z praktykami",
        img: manhattan,
        prosList: ["tryb indywidualny", "kurs stacjonarny", "czas trwania 12 dni", "tatuowanie na modelu - 6 dzień", "zakwaterowanie w cenie", "obiady w cenie"]
    },
    {
        id: 3,
        title: "BROOKLYN",
        desc: "Szkolenie od podstaw z zakresu tatuaży realistycznych",
        img: brooklyn,
        prosList: ["tryb indywidualny", "kurs stacjonarny", "czas trwania 6 dni", "tatuowanie na modelu - 1 dzień", "zakwaterowanie w cenie", "obiady w cenie"]
    },
    {
        id: 4,
        title: "BROOKLYN+",
        desc: "Szkolenie od podstaw z zakresu tatuaży realistycznych z praktykami",
        img: brooklyn,
        prosList: ["tryb indywidualny", "kurs stacjonarny", "czas trwania 12 dni", "tatuowanie na modelu - 6 dzień", "zakwaterowanie w cenie", "obiady w cenie"]
    },
    {
        id: 5,
        title: "Manhattan",
        desc: "Szkolenie od podstaw, mix technik",
        img: manhattan,
        prosList: ["tryb indywidualny", "kurs stacjonarny", "czas trwania 6 dni", "tatuowanie na modelu - 1 dzień", "zakwaterowanie w cenie", "obiady w cenie"]
    },

]

</script>
<template>
    <section class="offers">
        <div class="offers__diamond">
            <img :src="diamond" alt="zdjęcie diamentu">
        </div>
        <div class="offers__container">
            <div class="offers__header">
                <h2 class="title">Wybierz Kurs tatuażu<br />
                    dla siebie!</h2>
                <p class="desc">Rozgość się, zdobywaj wiedzę, projektuj, ćwicz. Łączymy teorię z praktyką, przybliżamy
                    trendy. Do <br /> dyspozycji masz warsztat, narzędzia, programy i materiały. Na każdym etapie jest przy
                    Tobie
                    Mentor.
                </p>
            </div>
            <swiper class="offers__content" :slidesPerView="'auto'" :spaceBetween="20">
                <swiper-slide v-for="offer in offers" class="offer">
                    <img class="offer__img" :src="offer.img">
                    <div class="offer__header">
                        <p class="title">{{ offer.title }}</p>
                        <p class="desc">{{ offer.desc }}</p>
                    </div>
                    <div class="offer__content"></div>
                    <div class="offer__btn"></div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.offers {
    display: flex;
    margin-bottom: 16rem;

    &__diamond {
        img {
            margin-top: 12rem;
            width: clamp(4.6875rem, 2.4743rem + 12.6471vw, 18.125rem);

            @media (max-width:576px) {
                margin-top: 8rem;
            }
        }
    }

    &__container {
        width: calc(100% - clamp(4.6875rem, 2.4743rem + 12.6471vw, 18.125rem));
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

    &__content {
        display: flex;
        gap: 2rem;
    }
}

.offer {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: clamp(25rem, 19.9353rem + 28.9412vw, 55.75rem);
    width: clamp(12.5rem, 8.3412rem + 23.7647vw, 37.75rem);
    border: 1px solid #262523;
    background: linear-gradient(to bottom, $bgc-white 50%, $text-black 50%);

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
        .title {
            margin-top: 2.8rem;
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