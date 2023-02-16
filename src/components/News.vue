<script setup>



</script>

<template>
    <section class="news">
        <div class="news__carosuel">
            <div class="news__slide">
                <img src="../assets/carosuel.png" alt="">
            </div>
            <div class="news__pagination">
                <img src="../assets/slider-pause.svg" alt="">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.news {
    margin-bottom: 14.5rem;

    &__carosuel {
        position: relative;
    }

    &__pagination {
        position: absolute;
        width: 100%;
        margin-inline: auto;

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