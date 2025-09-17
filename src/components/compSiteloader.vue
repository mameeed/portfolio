<template>
    <!-- v-if="false" -->
    <div
        v-if="isLoaderRendered"
        class="md-introloader"
        :class="{'md-animate': isAnimationFinished}">
        <CompOdometer :isAnimated="isLoaded" />
    </div>
</template>

<script>
import CompOdometer from "./compOdometer.vue";

export default {
    name: "component-introloader",
    components: {
        CompOdometer,
    },
    data() {
        return {
            isLoaded: false,
            isAnimationFinished: false,
            isLoaderRendered: true,
        };
    },
    mounted() {
        window.addEventListener("load", this.onFullyLoaded);
    },
    beforeUnmount() {
        window.removeEventListener("load", this.onFullyLoaded);
    },
    methods: {
        onFullyLoaded() {
            setTimeout(() => {
                this.isLoaded = true;
                setTimeout(() => {
                    this.isAnimationFinished = true;
                    setTimeout(() => {
                        this.isLoaderRendered = false;
                    }, 1000);
                }, 4000);
            }, 300);
        },
    },
};
</script>
