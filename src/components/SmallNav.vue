<script setup>

const { firstLinkOne, firstLinkTwo, secondLinkOne, secondLinkTwo, email, tel } = defineProps(['firstLinkOne', 'firstLinkTwo', 'secondLinkOne', 'secondLinkTwo', 'email', 'tel'])

</script>
<template>
    <section class="small-nav space-150">
        <a class="small-nav__link" href="">{{ firstLinkOne }}<br>{{ firstLinkTwo }}</a>
        <a class="small-nav__link padding-left" href="">{{ secondLinkOne }}<br>{{ secondLinkTwo }}</a>
        <div class="small-nav__contact">
            <a class="small-nav__contact-link" href="">{{ email }}</a>
            <a class="small-nav__contact-link" href="">{{ tel }}</a>
        </div>
    </section>
</template>


<style lang="scss" scoped>
.small-nav {
    position: relative;
    display: flex;
    gap: clamp(18.75rem, 11.5441rem + 41.1765vw, 62.5rem);

    @media (max-width: 1450px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0px;
        place-items: center;
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

    &__contact {
        display: flex;
        flex-direction: column;
    }


    &__link,
    &__contact-link {
        text-transform: uppercase;
        font-size: clamp(1.0625rem, 1.0007rem + 0.3529vw, 1.4375rem);
        line-height: 1.9rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @media (max-width: 1450px) {
            padding-left: 0px;
            line-height: 1rem;
            margin-bottom: 1rem;
        }
    }
}
</style>