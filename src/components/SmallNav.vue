<script setup>

const { firstLinkOne, firstLinkTwo, secondLinkOne, secondLinkTwo, email, tel } = defineProps(['firstLinkOne', 'firstLinkTwo', 'secondLinkOne', 'secondLinkTwo', 'email', 'tel'])

</script>
<template>
    <section class="small-nav space-150">
        <a class="small-nav__link" href="">{{ firstLinkOne }}<br>{{ firstLinkTwo }}</a>
        <a class="small-nav__link padding-left" href="">{{ secondLinkOne }}<br>{{ secondLinkTwo }}</a>
        <a class="small-nav__link" href="">{{ email }}<br>{{ tel }}</a>
    </section>
</template>


<style lang="scss" scoped>
.small-nav {
    position: relative;
    display: flex;
    gap: clamp(18.75rem, 4.1807rem + 46.6216vw, 61.875rem);

    @media (max-width: 1450px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;
        gap: 0px;
    }

    @media (max-width: 756px) {
        grid-template-columns: repeat(1, 1fr);
        place-items: unset;
    }


    &__link:nth-child(1) {
        position: absolute;
        top: 0;

        @media (max-width: 1450px) {
            position: static;
        }
    }


    &__link {
        text-transform: uppercase;
        font-size: clamp(1.0625rem, 1.0007rem + 0.3529vw, 1.4375rem);
        line-height: 1.9rem;

        @media (max-width: 1450px) {
            padding-left: 0px;
            line-height: 1.5rem;
            margin-bottom: 1rem;
        }
    }
}
</style>