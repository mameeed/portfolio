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
                <CompButton
                    :btnLabel="'Get in touch'"
                    @click.native="openRequestModal" />
            </div>
        </div>
        <div
            class="md-mobheader"
            :class="[{'md-scrolled': isScrolled}, {'md-opened': isMobOpen}, {'md-closing': isMobClosing}]">
            <div class="md-mobheader__content">
                <div class="md-mobheader__actions">
                    <CompButton
                        :btnLabel="'Get in touch'"
                        @click.native="openRequestModal" />
                </div>

                <div class="md-mobheader__links">
                    <CompHacktext
                        @click.native="goTo(item.link)"
                        v-for="(item, index) in links"
                        :key="'link' + index"
                        :label="item.label"
                        class="md-header__link" />
                </div>
            </div>

            <img
                @click="toggleMobHeader"
                class="md-mobheader__logo"
                src="@/assets/icons/logo.svg"
                alt="Protfolio logo" />
        </div>
        <div
            :class="{'md-show': isContactVisible}"
            class="md-intcontacts">
            <div class="container">
                <div class="md-intcontacts__block">
                    <a
                        class="md-intcontacts__block-social"
                        href="https://github.com/mameeed"
                        target="_blank">
                        <img
                            src="@/assets/icons/icon-wh-github.svg"
                            alt="Icon github" />
                    </a>
                    <a
                        class="md-intcontacts__block-social"
                        href="https://wa.me/+46722881929"
                        target="_blank">
                        <img
                            src="@/assets/icons/icon-wh-whatsapp.svg"
                            alt="Icon whatsapp" />
                    </a>
                    <a
                        class="md-intcontacts__block-social"
                        href="https://www.linkedin.com/in/mameed"
                        target="_blank">
                        <img
                            src="@/assets/icons/icon-wh-linkedin.svg"
                            alt="Icon linkedin" />
                    </a>
                    <a
                        class="md-intcontacts__block-social"
                        href="https://www.instagram.com/_mukhammadumid"
                        target="_blank">
                        <img
                            src="@/assets/icons/icon-wh-instagram.svg"
                            alt="Icon instagram" />
                    </a>
                </div>
                <div class="md-intcontacts__block">
                    <a
                        class="md-intcontacts__block-mail"
                        href="mailto:mukhammadumid@gmail.com">
                        Send me mail
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import CompHacktext from "@/components/compHacktext.vue";

export default {
    name: "component-header",
    components: {CompHacktext},
    data() {
        return {
            isScrolled: false,
            isContactVisible: true,
            isMobOpen: false,
            isMobClosing: false,
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
        openRequestModal() {
            this.$store.dispatch("openRequestModal");
        },
        initScrollListener(scroll) {
            scroll.on("scroll", (obj) => {
                const scrollY = obj.scroll.y;
                this.isScrolled = scrollY > 100;
                this.isContactVisible = scrollY < 300;
            });
        },
        toggleMobHeader() {
            if (this.isMobClosing) return;
            if (this.isMobOpen) {
                this.isMobClosing = true;
                setTimeout(() => {
                    this.isMobOpen = false;
                    this.isMobClosing = false;
                }, 2500);
            } else {
                this.isMobOpen = true;
                this.$nextTick(() => {
                    document.addEventListener("click", this.handleOutsideClick);
                });
            }
        },
        handleOutsideClick(e) {
            const mobHeader = this.$el.querySelector(".md-mobheader");
            if (mobHeader && !mobHeader.contains(e.target)) {
                this.toggleMobHeader();
            }
        },
        goTo(target) {
            this.$root.$scroll.scrollTo(target, {
                offset: 0, // adjust if you have fixed header
                duration: 3000,
                lerp: 0.05,
            });
        },
    },
    beforeDestroy() {
        document.removeEventListener("click", this.handleOutsideClick);
    },
    // watch: {
    //     $route() {
    //         this.isMobile = false;
    //     },
    // },
};
</script>
