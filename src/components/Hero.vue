<script setup>

</script>

<template>
    <section class="slogan space-100">
        <div class="slogan__text-container">
            <h1 class="slogan__title"><span>Tatuażysta</span><br />
                Czy to Twój pomysł na wyjątkową<br /> pracę? Jeśli tak, to wiesz, że <span>talent</span>,<br />
                energia
                i
                zasoby potrzebują<br /> przestrzeni do nauki i rozwoju.</h1>
            <div class="slogan__aside">
                <p class="aside-item">odkryj nasz pomysł na <span>tAKĄ PRZESTRZEŃ.</span></p>
                <p class="aside-item">WITAJ W AKADEMII TATUAŻU INQ TATOO SCHOOL</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.slogan {
    text-transform: uppercase;

    &__title {
        font-family: 'MADEOuterSans', sans-serif;
        color: $text-black;
        font-size: clamp(2.1875rem, 1.4939rem + 3.9634vw, 6.25rem);
        margin-bottom: 5rem;

        @media (max-width:576px) {
            margin-bottom: 2.5rem;
        }

        span {
            position: relative;

            &::after {
                position: absolute;
                top: 4px;
                bottom: 3px;
                z-index: -5;

            }

            &:nth-of-type(1)::after {
                right: -7px;
                width: 1000%;
                background-color: $primary-color;
            }

            &:nth-of-type(2)::after {
                left: -7px;
                width: 1000%;
                background-color: $secondary-color;
            }
        }
    }

    &__aside {
        .aside-item {
            font-size: clamp(0.875rem, 0.6509rem + 1.2805vw, 2.1875rem);
            line-height: 2.9rem;

            @media (max-width:576px) {
                line-height: 1.5rem;
            }

            span {
                position: relative;

                &::after {
                    position: absolute;
                    top: 0px;
                    bottom: 0px;
                    left: -3px;
                    right: -3px;
                    z-index: -5;
                    background-color: $primary-color;
                }
            }
        }

        .aside-item {
            font-family: 'GeneralSans';
        }

        .aside-item:nth-last-child(1) {
            font-weight: $semibold-weight;
        }
    }

}
</style>