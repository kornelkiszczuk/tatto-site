<script setup>
import { onMounted, ref } from 'vue';

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


const scrollPosition = ref(null)
const mobile = ref(false)
const mobileNav = ref(false)

const toogleMobileNav = () => {
    mobileNav.value = !mobileNav.value
}

const changeBetweenDevices = () => {
    scrollPosition.value = window.innerWidth;
    if (scrollPosition.value <= 1100) {
        mobile.value = true;
        return;
    }
    mobile.value = false;
    mobileNav.value = false;
    return;
}

onMounted(() => changeBetweenDevices());
window.onresize = changeBetweenDevices;

</script>


<template>
    <header class="desktop-header">
        <nav class="navbar">
            <div class="navbar__logo">
                <a href="#"><img src="../assets/logo.svg" alt="logo"></a>
            </div>
            <div v-show="!mobile" class="navbar__info-container">
                <div class="navbar__navigation flex-col">
                    <a class="nav-link" v-for="link in navigation" :key="link.id" :href="link.path">{{ link.title }}
                    </a>
                </div>
                <div class="navbar__contact flex-col">
                    <a class="contact-item" href="mailto:KONTAKT.INQ@GMAIL.COM">KONTAKT.INQ@GMAIL.COM</a>
                    <a class="contact-item" href="tel:601-150-899">+48 601 150 899</a>
                </div>
            </div>
            <div @click="toogleMobileNav" v-show="mobile" class="navbar__burger">
                <i v-if="!mobileNav" class="fa-solid fa-bars"></i>
                <i v-else class="fa-sharp fa-solid fa-xmark"></i>
            </div>

        </nav>
    </header>
    <header class="mobile-header">
        <nav class="navbar-mobile">
            <Transition name="mobile-nav">
                <div v-show="mobileNav" class="navbar-mobile__dropdown-nav flex-col">
                    <div class="mobile-nav flex-col">
                        <a class="nav-link" v-for="link in navigation" :key="link.id" :href="link.path">{{ link.title }}
                        </a>
                    </div>
                    <div class="mobile-contact flex-col">
                        <a href="mailto:KONTAKT.INQ@GMAIL.COM">KONTAKT.INQ@GMAIL.COM</a>
                        <a href="tel:601-150-899">+48 601 150 899</a>
                    </div>
                </div>
            </Transition>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.desktop-header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 150;
    mix-blend-mode: difference;

    .navbar {
        display: flex;
        justify-content: space-between;
        padding-block: 5.8rem 1rem;

        @media (max-width:1100px) {
            padding-block-start: 3rem;
        }

        &__logo {

            img {

                width: 191px;
                height: 59px;
            }
        }

        &__info-container {
            display: flex;
            gap: 2.8rem;
        }

        &__contact .contact-item,
        &__navigation .nav-link {
            line-height: 1.9rem;
            font-size: 1.4rem;
            mix-blend-mode: difference;
            color: $text-black;
            filter: invert(1);
        }

        &__navigation {
            .nav-link {
                text-transform: uppercase;
                font-weight: $medium-weight;

            }
        }

        &__burger {
            align-self: center;
            font-size: 2.3rem;
            z-index: 20;
            cursor: pointer;
            color: white;
            mix-blend-mode: difference;

        }
    }
}

.mobile-header {
    .navbar-mobile {
        &__dropdown-nav {
            justify-content: center;
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: $black;
            z-index: 100;

            .mobile-nav {
                align-items: center;
                justify-content: center;
                gap: 1rem;

                @media (max-width: 1000px) and (orientation: landscape) {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    place-items: center;
                }

                .nav-link {
                    padding: 1rem 2rem;
                    color: white;
                    text-transform: uppercase;
                    font-weight: 700;
                    font-size: clamp(2.5rem, 2.2083rem + 1.6667vw, 3.25rem);


                    @media (max-width: 1000px) and (orientation: landscape) {
                        font-size: 2.5rem;
                    }

                    @media (max-height: 300px) and (orientation: landscape) {
                        font-size: 1.5rem;
                    }
                }
            }

            .mobile-contact {
                position: fixed;
                bottom: 0;
                left: 0;
                font-size: clamp(1.125rem, 0.9756rem + 0.8537vw, 1.5625rem);
                padding: 0 6rem 6rem;

                @media (max-width: 1000px) and (orientation: landscape) {
                    padding: 0 6rem 2.5rem;
                }

                a {
                    color: $white;
                }
            }
        }

        // transitions 
        .mobile-nav-enter-active,
        .mobile-nav-leave-active {
            transition: opacity .4s;
        }

        .mobile-nav-enter-from {
            opacity: 0;
        }

        .mobile-nav-leave-to {
            opacity: 0;
        }
    }
}
</style>