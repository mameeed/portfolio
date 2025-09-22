<template>
    <section
        ref="mdInterctv"
        class="md-interctv">
        <div class="md-interctv__content">
            <div class="md-interctv__scroller">
                <div class="md-interctv__holder">
                    <div
                        ref="scene"
                        data-scroll
                        data-scroll-speed="2"
                        class="md-interctv__desc">
                        <p
                            data-depth="0.05"
                            class="md-interctv__desc-text">
                            I am a Frontend Engineer. With a designer’s eye and a developer’s keyboard, I bridge the gap between pretty and practical for more than 4 years. Yes, I fix the buttons you keep clicking too many times.
                        </p>
                    </div>
                    <img
                        v-show="!isVisible"
                        data-scroll
                        data-scroll-sticky
                        data-scroll-target=".md-interctv"
                        class="md-interctv__holder-image"
                        src="@/assets/images/holder.png"
                        alt="Tree png" />

                    <div
                        ref="scene2"
                        data-scroll
                        data-scroll-speed="8"
                        class="md-interctv__title">
                        <p
                            data-depth="0.1"
                            class="md-interctv__title-text">
                            Mameed
                        </p>
                    </div>
                </div>
                <canvas
                    ref="canvas"
                    data-scroll
                    data-scroll-sticky
                    data-scroll-target=".md-interctv"
                    class="md-interctv__canvas"></canvas>

                <div class="md-interctv__block md-block-1">
                    <div class="container">
                        <div class="md-block__content">
                            <div class="md-block__count">
                                <img
                                    data-scroll
                                    data-scroll-speed="10"
                                    class="md-block__count-image"
                                    src="@/assets/images/intro-about.jpg"
                                    alt="Abstract person" />
                                <span
                                    data-scroll
                                    data-scroll-speed="6"
                                    class="md-block__count-num">
                                    01
                                </span>
                            </div>
                            <div class="md-block__info">
                                <h2
                                    data-scroll
                                    data-scroll-speed="0.5"
                                    class="md-block__info-title">
                                    Who am I
                                </h2>
                                <p
                                    data-scroll
                                    data-scroll-speed="2"
                                    class="md-block__info-desc">
                                    Hi, I’m Mukhammadumid (Mameed). For over 4 years I’ve been building web experiences that are both beautiful and practical — and yes, I’m the one who makes sure those buttons you keep clicking actually work. I’m based in Stockholm, Sweden, holding a Bachelor’s degree in Computer Science, ongoing Master’s and still growing like a tree.
                                </p>
                                <CompButton
                                    data-scroll
                                    data-scroll-speed="0.5"
                                    btnLabel="Book meeting" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="md-interctv__block md-block-2">
                    <div class="container">
                        <div class="md-block__content">
                            <div class="md-block__count">
                                <img
                                    data-scroll
                                    data-scroll-speed="10"
                                    class="md-block__count-image"
                                    src="@/assets/images/intro-letswork.jpg"
                                    alt="Work office building" />
                                <span
                                    data-scroll
                                    data-scroll-speed="6"
                                    class="md-block__count-num">
                                    02
                                </span>
                            </div>
                            <div class="md-block__info">
                                <h2
                                    data-scroll
                                    data-scroll-speed="0.5"
                                    class="md-block__info-title">
                                    Let’s work
                                </h2>
                                <p
                                    data-scroll
                                    data-scroll-speed="2"
                                    class="md-block__info-desc">
                                    I help businesses stand out in the digital world. Beyond coding, I bring creativity, collaboration, and problem-solving that drive real growth. My diverse skill set allows me to adapt quickly, deliver results, and contribute as a team-focused professional who does not just code but crafts an art.
                                </p>
                                <div class="md-block__info-actions">
                                    <a
                                        :href="`${baseUrl}media/cv-mameed.pdf`"
                                        download>
                                        <CompButton
                                            data-scroll
                                            data-scroll-speed="0.5"
                                            btnLabel="Download CV" />
                                    </a>
                                    <CompButton
                                        data-scroll
                                        data-scroll-speed="0.5"
                                        btnLabel="Hire me" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="md-interctv__block md-block-3">
                    <div class="container">
                        <div class="md-block__content">
                            <div class="md-block__count">
                                <img
                                    data-scroll
                                    data-scroll-speed="10"
                                    class="md-block__count-image"
                                    src="@/assets/images/intro-amigos.jpg"
                                    alt="Amigos image" />
                                <span
                                    data-scroll
                                    data-scroll-speed="6"
                                    class="md-block__count-num">
                                    03
                                </span>
                            </div>
                            <div class="md-block__info">
                                <h2
                                    data-scroll
                                    data-scroll-speed="0.5"
                                    class="md-block__info-title">
                                    Amigos?
                                </h2>
                                <p
                                    data-scroll
                                    data-scroll-speed="2"
                                    class="md-block__info-desc">
                                    No job offer? No problem. When I’m not coding, I’m snowboarding, playing tennis (I can rally, but don’t ask me to serve), or watching movies. Let’s hang out online — always happy to make new friends.
                                </p>
                                <CompButton
                                    data-scroll
                                    data-scroll-speed="0.5"
                                    btnLabel="Contact" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Parallax from "parallax-js";

export default {
    name: "section-mission",
    data() {
        return {
            frameCount: 193,
            images: [],
            img: new Image(),
            canvas: null,
            context: null,
            scrollY: null,
            isVisible: false,
        };
    },
    computed: {
        baseUrl() {
            return process.env.BASE_URL;
        },
    },
    mounted() {
        this.parallax = new Parallax(this.$refs.scene);
        this.parallax2 = new Parallax(this.$refs.scene2);

        this.canvas = this.$refs.canvas;
        this.context = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.img.onload = () => {
            this.updateImage(0);
        };

        this.preloadImages();
        this.img.src = this.currentFrame(1);

        // Wait for locomotive scroll to be ready
        if (this.$root.$scroll) {
            this.initScrollListener(this.$root.$scroll);
        } else {
            this.$root.$once("scrollReady", (scroll) => {
                this.initScrollListener(scroll);
            });
        }

        // window.addEventListener("resize", () => {
        //     this.canvas.width = window.innerWidth;
        //     this.canvas.height = window.innerHeight;
        //     this.$root.$scroll.update();
        // });
    },
    beforeDestroy() {
        if (this.scrollInstance) {
            this.scrollInstance.off("scroll", this.onScroll);
        }

        this.parallax.destroy();
        this.parallax2.destroy();
    },
    methods: {
        currentFrame(index) {
            return `${this.baseUrl}webp-output/photo-${index}.webp`;
        },
        mapInverse(inputValue) {
            const inputMin = 6000;
            const inputMax = 6500;
            const outputMin = 180;
            const outputMax = 480;

            const clamped = Math.min(Math.max(inputValue, inputMin), inputMax);
            const t = (clamped - inputMin) / (inputMax - inputMin);
            return outputMin + (outputMax - outputMin) * t;
        },
        preloadImages() {
            for (let i = 1; i <= this.frameCount; i++) {
                const img = new Image();
                img.src = this.currentFrame(i);
                this.images.push(img);
            }
        },
        initScrollListener(scroll) {
            this.scrollInstance = scroll;
            scroll.on("scroll", this.onScroll);
        },
        onScroll(obj) {
            const scrollY = obj.scroll.y;
            const sectionTop = 600;
            const sectionHeight = this.$refs.mdInterctv.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollProgress = Math.min(1, Math.max(0, (scrollY - sectionTop) / (sectionHeight - windowHeight)));
            this.isVisible = obj.scroll.y > 600 ? true : false;

            const frameIndex = Math.floor(scrollProgress * (this.frameCount - 1));
            window.requestAnimationFrame(() => this.updateImage(frameIndex + 1));
        },
        updateImage(index) {
            const img = this.images[index];
            if (!img) return;

            const canvas = this.canvas;
            const ctx = this.context;

            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const imgWidth = img.width;
            const imgHeight = img.height;

            // ratios
            const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);

            // scaled size
            const scaledWidth = imgWidth * scale;
            const scaledHeight = imgHeight * scale;

            // offsets to center
            const x = (canvasWidth - scaledWidth) / 2;
            const y = (canvasHeight - scaledHeight) / 2;

            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
        },
    },
};
</script>

<style lang="scss">
@import "./sectionMission.scss";
</style>
