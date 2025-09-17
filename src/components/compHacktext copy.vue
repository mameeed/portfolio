<template>
    <div class="hack">
        <h1
            data-value="mukhammadumid"
            @mouseover="onhover">
            mukhammadumid
        </h1>
    </div>
</template>

<script>
export default {
    props: {},
    data() {
        return {
            // letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            letters: "&Ø@#$%^&*><+!XYZABCDEFGHIJKLMNOPQRSTUVWXYZ",
            interval: null,
        };
    },
    mounted() {},
    beforeDestroy() {},
    methods: {
        onhover(event) {
            let iteration = 0;

            clearInterval(this.interval);

            this.interval = setInterval(() => {
                event.target.innerText = event.target.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return event.target.dataset.value[index];
                        }

                        return this.letters[Math.floor(Math.random() * this.letters.length)];
                    })
                    .join("");

                if (iteration >= event.target.dataset.value.length) {
                    clearInterval(this.interval);
                }

                iteration += 1 / 3;
            }, 50);
        },
    },
};
</script>

<style scoped>
/* .scramble-text {
    font-size: 2rem;
    font-weight: bold;
    font-family: monospace;
    letter-spacing: 2px;
} */
</style>
