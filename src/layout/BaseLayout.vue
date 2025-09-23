<template>
    <div
        data-scroll-container
        class="md-app">
        <MainHeader data-scroll-section />
        <RouterView data-scroll-container />
        <MainFooter data-scroll-section />
        <SiteLoader v-if="isSiteLoading" />

        <!-- <CompLeaveapp /> -->
        <!-- <CompFollowform /> -->
        <!-- <PageLoader /> -->
    </div>
</template>

<script>
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

// import CompLeaveapp from "@/components/compLeaveapp.vue";
// import CompFollowform from "@/components/compFollowform.vue";
import MainHeader from "@/components/compHeader.vue";
import MainFooter from "@/components/compFooter.vue";
// import PageLoader from "@/components/compLoader.vue";
import SiteLoader from "@/components/compSiteloader.vue";

export default {
    name: "md-layout",
    components: {
        // CompLeaveapp,
        // CompFollowform,
        MainHeader,
        MainFooter,
        // PageLoader,
        SiteLoader,
    },
    data() {
        return {
            isSiteLoading: true,
            // isPageLoading: true,
            // isShown: true,
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new LocomotiveScroll({
                el: document.querySelector("[data-scroll-container]"),
                smooth: true,
                lerp: 0.09,
                smartphone: {
                    smooth: false,
                },
                tablet: {
                    smooth: true,
                },
            });

            this.$root.$scroll = this.scroll;
            this.$root.$emit("scrollReady", this.scroll);

            const resizeObserver = new ResizeObserver(() => {
                this.$root.$scroll?.update();
            });

            resizeObserver.observe(this.$el);
        });
    },
    beforeDestroy() {
        if (this.scroll) this.scroll.destroy();
    },
    created() {
        // this.$router.beforeEach((to, from, next) => {
        //     this.isPageLoading = true;
        //     this.isShown = true;
        //     setTimeout(() => {
        //         document.title = "Virgotravel | " + (to.meta.title || "Путешевствовать с нами легко");
        //         next();
        //     }, 300);
        // });
        // this.$router.afterEach(() => {
        //     setTimeout(() => {
        //         this.isShown = false;
        //         setTimeout(() => {
        //             this.isPageLoading = false;
        //             // 👇 Ensure locomotive-scroll updates after new route is rendered
        //             this.$nextTick(() => {
        //                 setTimeout(() => {
        //                     if (this.scroll) this.scroll.update();
        //                 }, 500);
        //             });
        //         }, 400);
        //     }, 300);
        // });
    },

    watch: {
        $route() {
            this.$nextTick(() => {
                if (this.$root.$scroll) {
                    this.$root.$scroll.scrollTo(0, {
                        duration: 0,
                        // disableLerp: true,
                    });
                }
            });
        },
    },
};
</script>
