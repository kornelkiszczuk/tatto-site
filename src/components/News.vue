<script setup>



</script>

<template>
    <section class="news">
        <div class="news__slide">
            <img src="../assets/carosuel.png" alt="">
            <div>
                <h3>NOWOCZESNE TECHNOLOGIE I NARZĘDZIA
                    ORAZ RZEMIOSŁO STARE JAK ŚWIAT </h3>
                <p>NASZA AKADEMIA TO RÓWNIEŻ SZTUKA ALCHEMII</p>
            </div>
            <a href="">Sprawdz kurs manhattan</a>
        </div>
        <div class="news__pagination">
            <img src="../assets/slider-pause.svg" alt="">
        </div>
    </section>
</template>

<style lang="scss" scoped>
.news {
    margin-bottom: 14.5rem;

    &__slide {
        position: relative;
        z-index: -5;

        img {
            position: absolute;
            width: 100%;
        }

        div,
        a {
            position: absolute;
        }
    }

    &__pagination {
        // position: absolute;
        // width: 100%;
        // margin-inline: auto;

        img {
            width: 20px;
            height: 20px;
        }
    }
}

img {
    width: 100%;

}
</style>