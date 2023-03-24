<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import diamond from "../assets/diamond.svg"
import manhattan from "../assets/manhattan.svg"
import brooklyn from "../assets/brooklyn.svg"
import cross from "../assets/cross.svg"

const offers = [
    {
        id: 1,
        title: "Manhattan",
        desc: "Szkolenie od podstaw, mix technik",
        img: manhattan,
        prosList: ["tryb indywidualny", "kurs stacjonarny", "czas trwania 6 dni", "tatuowanie na modelu - 1 dzień", "zakwaterowanie w cenie", "obiady w cenie"],
        squareColor: "#C6C2E5"
    },
    {
        id: 2,
        title: "Manhattan+",
        desc: "Szkolenie od podstaw,mix technik z praktykami",
        img: manhattan,
        prosList: ["tryb indywidualny", "kurs stacjonarny", "czas trwania 12 dni", "tatuowanie na modelu - 6 dzień", "zakwaterowanie w cenie", "obiady w cenie"],
        squareColor: "#FDBE4F"
    },
    {
        id: 3,
        title: "BROOKLYN",
        desc: "Szkolenie od podstaw z zakresu tatuaży realistycznych",
        img: brooklyn,
        prosList: ["tryb indywidualny", "kurs stacjonarny", "czas trwania 6 dni", "tatuowanie na modelu - 1 dzień", "zakwaterowanie w cenie", "obiady w cenie"],
        squareColor: "#C6C2E5"
    },
    {
        id: 4,
        title: "BROOKLYN+",
        desc: "Szkolenie od podstaw z zakresu tatuaży realistycznych z praktykami",
        img: brooklyn,
        prosList: ["tryb indywidualny", "kurs stacjonarny", "czas trwania 12 dni", "tatuowanie na modelu - 6 dzień", "zakwaterowanie w cenie", "obiady w cenie"],
        squareColor: "#FDBE4F"
    },
    {
        id: 5,
        title: "Manhattan",
        desc: "Szkolenie od podstaw, mix technik",
        img: manhattan,
        prosList: ["tryb indywidualny", "kurs stacjonarny", "czas trwania 6 dni", "tatuowanie na modelu - 1 dzień", "zakwaterowanie w cenie", "obiady w cenie"],
        squareColor: "#C6C2E5"
    },

]

</script>
<template>
    <section class="offers">
        <div class="offers__diamond">
            <img :src="diamond" alt="zdjęcie diamentu">
        </div>
        <div class="offers__container">
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
                            <div :style="{ backgroundColor: offer.squareColor }" class="square"></div>
                            <p class="text">{{ pros }}</p>
                        </div>
                    </div>
                    <a href="#" class="offer__btn">
                        <p class="text">Poznaj cenę</p>
                        <img class="cross" :src="cross">
                    </a>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.offers {
    display: flex;
    margin-bottom: 16rem;
    padding-right: 0;


    &__diamond {
        img {
            margin-top: 12rem;
            width: clamp(5rem, 2.471rem + 14.4512vw, 19.8125rem);

            @media (max-width:576px) {
                margin-top: 8rem;
            }
        }
    }

    &__container {
        width: calc(100% - clamp(5rem, 2.471rem + 14.4512vw, 19.8125rem));
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
        }

        .cross {
            width: clamp(0.9375rem, 0.7228rem + 1.227vw, 2.1875rem);
        }
    }
}
</style>