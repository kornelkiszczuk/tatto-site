<script setup>
import rose from '../assets/rose.svg'

const descriptions = [
    {
        id: 1,
        title: "TRYB INDYWIDUALNY",
        firstText: "W INQtattoo to podstawa. Mentor  jest zawsze przy szkolonym. Działają ręka w rękę. Tradycyjne rzemiosło nie znało innego sposobu przekazywania fachu",
        secondText: "Godziny wspólnej pracy to oficjalnie 9 - 16 każdego dnia kursu. Ale kiedy widzimy zaangażowanie i talent naszych kursantów zajęcia trwają do zamknięcia etapu prac - czasem to już wieczór. Staramy się aby czas szkolenia był możliwie intensywny i wartościowy."
    },
    {
        id: 2,
        title: "KURSY STACJONARNE",
        firstText: "Stacjonarnie - nie zdalnie. Tatuaż to sztuka, której jeszcze długo nie będzie można wykonać zdalnie. Wymaga spotkania wykonawcy i tatuowanego. W całości polega na wiedzy i umiejętnościach przekazywanych z ręki do ręki.",
        secondText: "Wiemy, że kurs stacjonarny to najlepszy sposób na naukę rzemiosł manualnych. Zorganizowaliśmy zaplecze noclegowe oraz obiady na czas szkolenia, tak by podstawowe potrzeby organizacyjne nie były już na głowie kursantów. Przyjedź, wejdź intensywnie w świat fachu tatuażysty - “wyspa mentalna” to skuteczny  sposób na skoncentrowanie się na jednym celu…"
    },
    {
        id: 3,
        title: "TATUOWANIE NA MODELACH",
        firstText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sodales eros, eu auctor odio. Mauris dui neque, ultrices quis turpis non, ultricies vestibulum elit. Curabitur quis tempor ante, sit amet facilisis tellus. ",
        secondText: "Etiam vestibulum rutrum arcu a ornare. In molestie porttitor mi quis aliquet. Vivamus id nibh id arcu aliquam semper molestie eget metus. Aliquam id lorem ultricies, rutrum sapien finibus, dapibus leo. Cras tincidunt nibh tortor, eu euismod quam sodales nec. "
    },
]

</script>

        
<template>
    <section class="descriptions">
        <div class="descriptions__aside">
            <p class="descriptions__title">CO ROBIMY <br /> WYJĄTKOWO?</p>
        </div>
        <div class="descriptions__container">
            <p class="descriptions__desc">Na rynku jest wiele szkół tatuażu i kursów doszkalających. Z radością i
                satysfakcją obserwujemy jak zawód tatuażysty się rozwija. A niekiedy jest nam smutno, ponieważ widzimy, że
                są szkolenia, które nie prowadzą tam, gdzie chcielibyśmy by adepci rzemiosła tatuażu docierali.
                Postanowiliśmy, że nasza akademia to będzie “coś na 100%”. Zbieramy tu wszystkie doświadczenia, obserwacje,
                wiedzę i dzielimy się nimi. Naszym celem jest dobre rzemiosło, wydobycie talentu i ostatecznie… droga do
                MISTRZOSTWA. Dlatego są wartości, na które zwracamy szczególną uwagę:
            </p>
            <div class="description">
                <img :src="rose" class="description__rose">
                <div v-for="description in descriptions" :id="description.id" class="description__item">
                    <h4 class="description__title">{{ description.title }}</h4>
                    <p class="description__first-text">{{ description.firstText }}</p>
                    <p class="description__second-text">{{ description.secondText }}</p>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
.descriptions {
    position: relative;
    display: flex;
    margin-bottom: 15rem;

    @media(max-width:1000px) {
        flex-direction: column;
    }

    &__aside {
        position: relative;
        width: clamp(5rem, 2.471rem + 14.4512vw, 19.8125rem);

        @media(max-width:1000px) {
            width: auto;
        }
    }

    &__title {
        font-family: "MADEOuterSans", sans-serif;
        position: absolute;
        top: 0px;
        left: 0px;
        transform: rotate(180deg);
        writing-mode: vertical-rl;
        text-align: right;
        font-size: clamp(2.1875rem, 1.622rem + 3.2317vw, 5.5rem);
        text-transform: uppercase;

        @media(max-width:1000px) {
            margin-bottom: 2rem;
            text-align: unset;
            position: static;
            transform: rotate(0deg);
            writing-mode: horizontal-tb;
        }

    }

    &__desc {
        font-size: clamp(1.5rem, 1.4146rem + 0.4878vw, 2rem);
        font-weight: $semibold-weight;
        line-height: 3.5rem;
    }

    &__container {
        width: calc(100% - clamp(5rem, 2.471rem + 14.4512vw, 19.8125rem));

        @media(max-width:1000px) {
            width: 100%;
        }
    }
}

.description {
    position: relative;

    &__item {
        display: flex;
        margin-top: 7.5rem;
        padding-top: 3rem;
        border-top: 2px solid $text-black ;

        @media(max-width:1400px) {
            flex-direction: column;
        }
    }

    &__title {
        font-size: clamp(1.9375rem, 1.7561rem + 1.0366vw, 3rem);
        flex: 2;

        @media(max-width:1400px) {
            margin-bottom: 3rem;
        }
    }


    &__first-text,
    &__second-text {
        flex: 1;
        margin-left: 2rem;
        font-size: clamp(1.5rem, 1.4146rem + 0.4878vw, 2rem);
        line-height: 3.5rem;
        text-align: left;

        @media(max-width:1400px) {
            margin-left: 0px;
            margin-bottom: 2rem;
            text-align: justify;
        }
    }

    &__rose {
        position: absolute;
        right: -6.7rem;
        top: -15rem;
        height: clamp(7.5rem, 3.9787rem + 20.122vw, 28.125rem);


        @media (max-width:1100px) {
            top: -10rem;
            right: -7.6rem;
        }

        @media (max-width:725px) {
            top: -6rem;
            right: -1.8rem;
        }
    }
}
</style>