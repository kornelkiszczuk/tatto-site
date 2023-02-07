<script setup>

const navigation = [
    {
        id: 1,
        path: '/kursy',
        title: 'kursy'
    },
    {
        id: 2,
        path: '/akademia',
        title: 'o akademii'
    },
    {
        id: 3,
        path: '/społeczność',
        title: 'społeczość'
    },
    {
        id: 4,
        path: '/galeria',
        title: 'galeria'
    },
    {
        id: 5,
        path: '/blog',
        title: 'blog'
    },
    {
        id: 6,
        path: '/kontakt',
        title: 'kontakt'
    }
]

</script>


<template>
    <header>
        <nav class="navbar">
            <div class="navbar__logo">
                <a href="#"><img src="../assets/logo.svg" alt="logo"></a>
                <div class="navbar__navigation-container">
                    <div class="navbar__navigation">
                        <a v-for="link in navigation" :key="link.id" :href="link.path">{{ link.title }}</a>
                    </div>
                    <div class="navbar__contact">
                        <p>KONTAKT.INQ@GMAIL.COM</p>
                        <p>+48 601 150 899</p>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    .navbar {


        // &__logo {
        //     // mix-blend-mode: difference;
        // }
    }
}
</style>