<template>
    <footer
        class="md-footer"
        :class="{'is-inview': bottom > 20}">
        <div class="md-footer__content container">
            <p class="md-footer__text">Here should’ve been a footer, copyright stuff and bunch of links, but since all needed we had above here is this thought:</p>
            <div class="md-footer__quote">
                <h2 class="md-footer__quote-text">
                    {{ text }}
                </h2>
                <p class="md-footer__quote-author">Master Oogway</p>
            </div>
            <div class="md-footer__copyright">
                <p class="md-footer__copyright-made">Coded with ❤️ and 💻 by Mameed</p>
                <p class="md-footer__copyright-update">Last updated 16.09.2025</p>
            </div>
        </div>
    </footer>
</template>

<script>
// import {mapActions} from "vuex";
// import CompInput from "@/components/compInput.vue";

export default {
    name: "component-footer",
    // computed: {
    //     // CompInput,

    //     test() {
    //         return this.bottom;
    //     },
    // },

    data() {
        return {
            text: "Yesterday is a history, Tomorrow is a mystery, but Today is a gift. That is why it is called the present.",
            bottom: 0,
        };
    },

    mounted() {
        this.$nextTick(() => {
            if (this.$root.$scroll) {
                this.setBottom(this.$root.$scroll);
            } else {
                this.$root.$once("scrollReady", (scroll) => {
                    this.setBottom(scroll);
                });
            }
        });
    },

    methods: {
        setBottom(scroll) {
            scroll.on("scroll", (args) => {
                const scrollY = args.scroll.y;
                const maxScroll = args.limit.y;

                if (scrollY >= maxScroll) {
                    this.bottom++; // set global variable
                    console.log(this.bottom);
                } else {
                    this.bottom = false;
                }
            });
        },
    },
};
</script>
