<template>
    <section class="md-glry">
        <div class="md-glry__content container">
            <div
                data-scroll
                data-scroll-sticky
                data-scroll-target=".md-glry"
                data-scroll-offset="0px, 200px"
                class="md-glry__titling">
                <CompTitle
                    class="md-glry__title"
                    title="Highlights"
                    :duration="30" />
                <p class="md-glry__subtitle">Gallery that defines my craft and career journey.</p>
            </div>

            <div class="md-glry__grid">
                <div
                    v-for="n in 10"
                    :key="'card' + n"
                    data-scroll
                    data-scroll-offset="250px, 0"
                    class="md-glrycard">
                    <div class="md-glrycard__info">
                        <h3 class="md-glrycard__info-title">Project Title {{ n }}</h3>
                        <p class="md-glrycard__info-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, esse?</p>
                        <a
                            href="#!"
                            class="md-glrycard__info-link">
                            See details
                        </a>
                    </div>
                    <img
                        data-scroll
                        :data-scroll-speed="Math.random() * 0.9 + 0.1"
                        class="md-glrycard__image"
                        :src="`https://picsum.photos/400/${getRandomHeight()}?random=${n}`"
                        alt="Gallery image" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "section-gallery",
    components: {},
    data() {
        return {};
    },
    computed: {},
    mounted() {},
    methods: {
        getRandomHeight() {
            // Possible heights: 300, 400, ..., 900
            const min = 1,
                max = 4;
            const step = 100;
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            return random * step;
        },
    },
};
</script>

<style lang="scss">
@import "./sectionGallery.scss";
</style>
