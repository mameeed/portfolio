<template>
    <header
        class="md-header__wrapper"
        :class="{'md-scrolled': isScrolled}">
        <div class="md-header container">
            <div class="md-header__logo">
                <a
                    href="/"
                    class="md-header__logo-link">
                    <img
                        class="md-header__logo-image"
                        src="@/assets/icons/logo.svg"
                        alt="Portfolio Logo" />
                </a>
            </div>

            <nav class="md-header__links">
                <CompHacktext
                    @click.native="goTo(item.link)"
                    v-for="(item, index) in links"
                    :key="'link' + index"
                    :label="item.label"
                    class="md-header__link" />
            </nav>

            <div class="md-header__actions">
                <CompButton :btnLabel="'Get in touch'" />
            </div>
        </div>
        <div
            class="md-mobheader"
            :class="{'md-scrolled': isScrolled}">
            <img
                class="md-mobheader__logo"
                src="@/assets/icons/logo.svg"
                alt="Protfolio logo" />
        </div>
    </header>
</template>

<script>
// import {mapActions} from "vuex";
import CompHacktext from "@/components/compHacktext.vue";

export default {
    name: "component-header",
    components: {CompHacktext},
    data() {
        return {
            isScrolled: false,
            // isMobile: false,
            // isBoxOpened: false,
            links: [
                {
                    label: "About",
                    link: "#about",
                },
                {
                    label: "Experience",
                    link: "#experience",
                },
                {
                    label: "Work",
                    link: "#projects",
                },
                {
                    label: "Testimonials",
                    link: "#reviews",
                },
                {
                    label: "Contact",
                    link: "#contact",
                },
            ],
        };
    },
    mounted() {
        this.$nextTick(() => {
            if (this.$root.$scroll) {
                this.initScrollListener(this.$root.$scroll);
            } else {
                this.$root.$once("scrollReady", (scroll) => {
                    this.initScrollListener(scroll);
                });
            }
        });
    },
    methods: {
        initScrollListener(scroll) {
            scroll.on("scroll", (obj) => {
                const scrollY = obj.scroll.y;
                this.isScrolled = scrollY > 100;
            });
        },
        openMobile() {
            this.isMobile = !this.isMobile;
        },
        goTo(target) {
            console.log("target", target);

            this.$root.$scroll.scrollTo(target, {
                offset: 0, // adjust if you have fixed header
                duration: 2000,
            });
        },
    },
    // watch: {
    //     $route() {
    //         this.isMobile = false;
    //     },
    // },
};
</script>
