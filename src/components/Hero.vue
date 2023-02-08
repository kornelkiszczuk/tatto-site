<script setup>

</script>

<template>
    <section class="slogan">
        <h1 class="slogan__title"><span>Tatuażysta</span><br />
Czy to Twój pomysł na wyjątkową<br /> pracę? Jeśli tak, to wiesz, że <span>talent</span>,<br /> energia i zasoby potrzebują<br /> przestrzeni do nauki i rozwoju.</h1>
        <div class="slogan__aside">
            <p>odkryj nasz pomysł na tAKĄ PRZESTRZEŃ.</p>
            <p>WITAJ W AKADEMII TATUAŻU INQ TATOO SCHOOL</p>
        </div>
    </section>
</template>


<style lang="scss" scoped>

.slogan {
    &__title {
        font-family: 'MADEOuterSans';
        margin-top: 20rem;
        color: $text-black;
        font-size: clamp(2.8125rem, 2.1723rem + 3.6585vw, 6.5625rem);
    
        @media (max-width: 1100px) {
            margin-top: 13rem;
        }

        span {
            position: relative;

            &::after {
                position: absolute;
                z-index: -5;
            }

            &:nth-of-type(1)::after {
                top: 4px;
                bottom: 3px;
                right: -7px;
                width: 1000%;
                background-color: $primary-color;
            }

      

            &:nth-of-type(2)::after {
                top: 4px;
                bottom: 3px;
                left: -7px;
                width: 1000%;
                background-color: $secondary-color;
            }
        }
    }

    // &__aside {}

}

</style>