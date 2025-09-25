<template>
    <section class="md-rvws">
        <div class="md-rvws__content container">
            <div
                data-scroll
                data-scroll-sticky
                data-scroll-target=".md-rvws"
                data-scroll-offset="0px, 200px"
                class="md-rvws__titling">
                <CompTitle
                    class="md-rvws__title"
                    title="What they say"
                    :duration="30" />
                <p class="md-rvws__subtitle">Feedback from clients and colleagues who trusted my work. Feel free to leave your own review, I’d be happy</p>

                <CompButton
                    class="md-rvws__btn"
                    @click.native="$store.dispatch('openReviewModal')"
                    btnLabel="Leave yours" />
            </div>

            <div class="md-rvws__info">
                <div>
                    <p
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-offset="40%, 0%"
                        data-scroll-repeat="true"
                        class="md-rvws__info-text">
                        Collaboration means more than just delivering code — it’s about trust,
                    </p>
                    <p
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-offset="40%, 0%"
                        data-scroll-repeat="true"
                        class="md-rvws__info-text">
                        communication, and shared goals. I value every client’s voice and continuously
                    </p>
                    <p
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-offset="40%, 0%"
                        data-scroll-repeat="true"
                        class="md-rvws__info-text">
                        improve through feedback. Your words inspire my growth and future projects. I
                    </p>
                    <p
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-offset="40%, 0%"
                        data-scroll-repeat="true"
                        class="md-rvws__info-text">
                        believe great partnerships build lasting success.
                    </p>
                </div>

                <div class="md-rvws__info-list">
                    <div
                        v-for="(item, index) in data"
                        :key="'card' + index"
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-offset="40%, 0"
                        data-scroll-repeat="true"
                        :data-scroll-call="`card_${index}`"
                        @mouseenter="startTyping(index)"
                        @click="startTyping(index)"
                        class="md-rvwcard">
                        <img
                            data-scroll
                            :data-scroll-speed="1"
                            :src="item.image"
                            loading="lazy"
                            class="md-rvwcard__image"
                            :alt="'Image' + item.name" />

                        <div class="md-rvwcard__info">
                            <h3 class="md-rvwcard__name">{{ item.name }}</h3>
                            <p class="md-rvwcard__job">{{ item.job }}</p>

                            <p class="md-rvwcard__text">
                                {{ item.typedText }}
                            </p>
                        </div>
                    </div>
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
        return {
            data: [
                {
                    image: require("@/assets/images/testimonials/samandar-o.jpg"),
                    name: "Samandar O.",
                    job: "Senior Frontend at Realsoft LLC",
                    text: `"I had the pleasure of mentoring and later collaborating with Mukhammadumid. His growth as a frontend developer was inspiring, and his teamwork made complex tasks feel easy to handle."`,
                    typedText: "",
                    typingInterval: null,
                },
                {
                    image: require("@/assets/images/testimonials/sabina-o.jpg"),
                    name: "Sabina O.",
                    job: "UI/UX Designer at Ebee Agency",
                    text: `"As a designer, I value developers who respect design precision — and Mameed does exactly that. He turns Figma files into pixel-perfect, responsive, and smooth interfaces."`,
                    typedText: "",
                    typingInterval: null,
                },
                {
                    image: require("@/assets/images/testimonials/farrukh-a.jpg"),
                    name: "Farrukh A.",
                    job: "CEO and Co-Founder at Realsoft LLC",
                    text: `"Working with Mukhammadumid was a game-changer. His ability to transform complex ideas into functional, scalable, and beautiful frontends consistently impressed both our clients and our internal teams."`,
                    typedText: "",
                    typingInterval: null,
                },
                {
                    image: require("@/assets/images/testimonials/bekzod-s.jpg"),
                    name: "Bekzod S.",
                    job: "CTO at Realsoft LLC",
                    text: `"Mukhammadumid quickly became one of the most reliable engineers on our team. His technical expertise in Vue and attention to detail raised the overall quality of our projects."`,
                    typedText: "",
                    typingInterval: null,
                },
                {
                    image: require("@/assets/images/testimonials/johnny-k.jpg"),
                    name: "Johnny K.",
                    job: "Fullstack Engineer at Webase",
                    text: `"I enjoyed working alongside Mameed on demanding projects. His clean code, proactive mindset, and dedication to deadlines made him a key asset in our team."`,
                    typedText: "",
                    typingInterval: null,
                },
                {
                    image: require("@/assets/images/testimonials/zafar-u.jpg"),
                    name: "Zafar O.",
                    job: "Frontend Engineer at Webase",
                    text: `"Mameed is not just technically strong, but also collaborative. He shares knowledge freely, solves problems fast, and always looks for ways to optimize and improve workflows."`,
                    typedText: "",
                    typingInterval: null,
                },
            ],
        };
    },
    computed: {},
    mounted() {
        // let width = window.innerWidth;
        // alert(width);
    },
    methods: {
        startTyping(index) {
            const item = this.data[index];
            if (item.typedText) return;

            setTimeout(() => {
                if (item.typingInterval) clearInterval(item.typingInterval);
                item.typedText = "";
                let i = 0;

                item.typingInterval = setInterval(() => {
                    if (i <= item.text.length) {
                        this.$set(this.data[index], "typedText", item.text.slice(0, i));
                        i++;
                    } else {
                        clearInterval(item.typingInterval);
                        item.typingInterval = null;
                    }
                }, 10); // smaller = faster typing
            }, 1800);
        },
    },
};
</script>

<style lang="scss">
@import "./sectionReviews.scss";
</style>
