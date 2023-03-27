<script setup>

</script>

<template>
    <footer class="footer">
        <div class="footer__container">
            <a class="footer__aside-link" href="#">
                <p>Społeczność</p>
                <svg class="arrow" width="33" height="34" fill="currentColor" viewBox="0 0 33 34"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.15919 30.6114C0.885695 30.8849 0.732049 31.2559 0.732049 31.6426C0.732049 32.0294 0.885695 32.4003 1.15919 32.6738C1.43268 32.9473 1.80361 33.101 2.19038 33.101C2.57716 33.101 2.94809 32.9473 3.22158 32.6738L29.9882 5.90725L29.8125 26.8868C29.8053 27.0816 29.8373 27.2759 29.9065 27.4582C29.9758 27.6404 30.0809 27.807 30.2156 27.9479C30.3503 28.0888 30.5119 28.2013 30.6909 28.2788C30.8698 28.3562 31.0625 28.3969 31.2574 28.3985C31.4524 28.4002 31.6457 28.3627 31.8259 28.2884C32.0062 28.214 32.1697 28.1043 32.3068 27.9657C32.4439 27.827 32.5518 27.6623 32.6241 27.4812C32.6964 27.3002 32.7317 27.1064 32.7279 26.9115L32.9341 2.36901C32.9357 2.17552 32.8987 1.98365 32.8254 1.80459C32.7521 1.62553 32.6438 1.46284 32.507 1.32602C32.3702 1.1892 32.2075 1.08097 32.0284 1.00765C31.8494 0.934322 31.6575 0.897367 31.464 0.898931L6.92152 1.10518C6.72658 1.10133 6.53285 1.13661 6.35179 1.20894C6.17073 1.28126 6.00601 1.38916 5.86737 1.52625C5.72873 1.66334 5.61899 1.82684 5.54464 2.00708C5.47028 2.18732 5.43282 2.38063 5.43448 2.5756C5.43614 2.77057 5.47687 2.96322 5.55427 3.14217C5.63168 3.32113 5.74418 3.48274 5.88512 3.61745C6.02607 3.75217 6.1926 3.85726 6.37486 3.9265C6.55713 3.99574 6.75142 4.02773 6.94626 4.02057L27.9258 3.84486L1.15919 30.6114Z"
                        fill="#262523" />
                </svg>
            </a>
            <nav class="footer__navbar">
                <div class="footer__navbar-left">
                    <a href="#">KURSY</a>
                    <a href="#">O AKADEMII</a>
                    <a href="#">SPOŁECZNOŚĆ</a>
                    <a href="#">GALERIA</a>
                    <a href="#">BLOG</a>
                    <a href="#">KONTAKT</a>
                </div>
                <div class="footer__navbar-right">
                    <a href="#">FACEBOOK</a>
                    <a href="#">INSTAGRAM</a>
                    <a class="mobile-aside-link" href="#">SPOŁECZNOŚĆ</a>
                </div>
            </nav>
            <div class="footer__copyright">
                <p class="author">BY AD AWARDS</p>
                <a href="#" class="cookies">POLITYKA COOKIES</a>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    margin-bottom: 10rem;
    text-transform: uppercase;

    @media (max-width:1100px) {
        margin-bottom: 5rem;
    }

    &__container {
        position: relative;
    }

    &__aside-link {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        gap: .87rem;
        font-size: clamp(1.25rem, 1.1265rem + 0.7059vw, 2rem);
        text-transform: capitalize;

        @media (max-width:1100px) {
            display: none;
        }

        svg {
            width: 2.3rem;
        }
    }

    &__navbar {
        display: flex;
        gap: 13rem;
        margin-bottom: 5.6rem;

        @media (max-width:1100px) {
            margin-bottom: 3rem;
            justify-content: space-between;
            gap: unset;
        }

    }

    &__navbar-left,
    &__navbar-right {
        display: flex;
        flex-direction: column;

        a {
            font-size: clamp(0.875rem, 0.6509rem + 1.2805vw, 2.1875rem);
            line-height: 3rem;

            @media (max-width:576px) {
                line-height: 1.5rem;
            }
        }
    }

    &__navbar-right {

        @media (max-width:1100px) {
            text-align: right;
        }

        .mobile-aside-link {
            display: none;

            @media (max-width:1100px) {
                display: flex;

            }
        }

    }

    &__copyright {
        display: flex;
        align-items: center;
        gap: 20rem;

        @media (max-width:1100px) {
            gap: unset;
            justify-content: space-between;
        }

        .author,
        .cookies {
            font-size: clamp(1rem, 0.936rem + 0.3659vw, 1.375rem);
            font-weight: 500;
        }
    }
}
</style>