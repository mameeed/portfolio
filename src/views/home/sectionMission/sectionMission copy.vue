<template>
    <section class="vghs-mission">
        <div class="vghs-mission__content">
            <div class="scroll-section">
                <canvas
                    ref="canvas"
                    class="sticky-canvas"></canvas>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "section-mission",
    data() {
        return {
            frameCount: 255,
            images: [],
            img: new Image(),
            canvas: null,
            context: null,
        };
    },
    mounted() {
        this.canvas = this.$refs.canvas;
        this.context = this.canvas.getContext("2d");
        this.canvas.width = 1992;
        this.canvas.height = 1100;

        this.img.onload = () => {
            this.context.drawImage(this.img, 0, 0);
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
    },
    beforeDestroy() {
        if (this.scrollInstance) {
            this.scrollInstance.off("scroll", this.onScroll);
        }
    },
    methods: {
        currentFrame(index) {
            return `/webp-output/photo-${index}.webp`;
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
            const sectionTop = this.$el.offsetTop;
            const sectionHeight = this.$el.offsetHeight;
            const windowHeight = window.innerHeight;

            const scrollProgress = Math.min(1, Math.max(0, (scrollY - sectionTop) / (sectionHeight - windowHeight)));

            const frameIndex = Math.floor(scrollProgress * (this.frameCount - 1));
            window.requestAnimationFrame(() => this.updateImage(frameIndex + 1));
        },
        updateImage(index) {
            if (this.images[index]) {
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.context.drawImage(this.images[index], 0, 0);
            }
        },
    },
};
</script>

<style lang="scss">
@import "./sectionMission.scss";

.scroll-section {
    height: 5000px; /* adjust based on frame count and step size */
    position: relative;
}

.sticky-canvas {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
    display: block;
}
</style>
