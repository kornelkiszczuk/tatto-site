<script setup>
import hand from '../assets/hand.svg';
import tiger from '../assets/tiger.svg';
</script>

<template>
    <section class="additional ">
        <div class="additional__container padding-left">
            <img class="additional__hand" :src="hand">
            <img class="additional__tiger" :src="tiger">
            <div class="additional__header">
                <h2 class="title">ODKRYWAJ PROFESJĘ <br />
                    TATUAŻYSTY Z NAMI</h2>
                <p class="desc">Zapraszamy na artykuły i nagrania z wiedzą i doświadczeniem, których nie znajdziesz nigdzie
                    więcej. Lubimy jakość, “mięsko” wiadomości i dobrą atmosferę dzielenia się nimi. W naszej galerii do
                    odkrycia najlepsze prace i dobra energia, która towarzyszyła w ich realizacji.</p>
            </div>
            <div class="addictional__menu">
                <div class="additional__menu-item">
                    <h3>PIĘKNO</h3>
                </div>
                <div class="additional__menu-item">
                    <h3>PRECYZJA</h3>
                </div>
                <a href="#" class="additional__menu-item">
                    <h3>GALERIA</h3>
                    <p>Odkrywaj</p>
                </a>
                <div class="additional__menu-item">
                    <h3>RZEMIOSŁO, WARSZTAT</h3>
                </div>
                <a href="#" class="additional__menu-item">
                    <h3>BLOG</h3>
                    <p>Odkywaj</p>
                </a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.additional {
    position: relative;

    &__hand {
        width: clamp(9.375rem, -8.4821rem + 35.7143vw, 34.375rem);
        position: absolute;
        top: 15rem;
        left: 0;

        @media (max-width:1100px) {
            top: 5rem;
        }

        @media (max-width:1000px) {
            top: 18rem;
            width: 12rem;
        }

        @media (max-width:576px) {
            left: unset;
            right: 0;
            top: -5rem;
            transform: scaleX(-1);
        }
    }

    &__tiger {
        width: clamp(9.375rem, -8.4821rem + 35.7143vw, 34.375rem);
        position: absolute;
        right: 0;
        top: -10rem;

        @media (max-width:1000px) {
            top: 10rem;
        }

        @media (max-width:700px) {
            top: 20em;
        }
    }

    &__header {
        margin-bottom: 10rem;

        @media (max-width:576px) {
            margin-bottom: 5rem;
        }

        .title {
            margin-bottom: 3rem;
            font-family: "MADEOuterSans";
            font-size: clamp(1.875rem, 1.2779rem + 3.4118vw, 5.5rem);


        }

        .desc {
            width: 40%;
            margin-left: 30rem;
            font-size: clamp(1.25rem, 1.1265rem + 0.7059vw, 2rem);
            line-height: 35px;

            @media (max-width:1000px) {
                width: 100%;
                margin-left: 0;
            }

            @media (max-width:576px) {
                line-height: 2rem;
            }
        }
    }

    &__menu-item {
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 2rem;
        transition: .4s color;

        @media (max-width:576px) {
            gap: 1rem;
        }

        h3 {

            font-size: clamp(2.5rem, 1.529rem + 5.5488vw, 8.1875rem);
        }

        p {
            font-family: "MADEOuterSans";
            font-size: clamp(1.25rem, 1.1265rem + 0.7059vw, 2rem);
            font-weight: $thin-weight;
        }

    }

    a.additional__menu-item:nth-of-type(1):hover {
        color: $primary-color;
    }

    a.additional__menu-item:nth-last-of-type(1):hover {
        color: $secondary-color;
    }

}
</style>