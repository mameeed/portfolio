<template>
    <h3
        ref="hacktext"
        :data-value="label"
        :style="{width: fixedWidth}"
        @mouseover="onhover"
        class="md-hacktext">
        {{ label }}
    </h3>
</template>

<script>
export default {
    name: "component-hacktext",
    props: {
        label: {
            type: String,
            require: true,
        },
        duration: {
            type: Number,
            default: null,
        },
    },
    data() {
        return {
            // letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            letters: "&Ø@#$%^&*><+!XYZABCDEFGHIJKLMNOPQRSTUVWXYZ",
            interval: null,
            fixedWidth: null,
        };
    },
    computed: {
        timeout() {
            if (this.duration) return this.duration;
            const length = this.label.length;
            if (length <= 4) {
                return 50;
            } else if (5 <= length && length <= 8) {
                return 30;
            } else {
                return 20;
            }
        },
    },
    mounted() {
        this.$nextTick(() => {
            const el = this.$refs.hacktext;
            this.fixedWidth = el.offsetWidth + 5 + "px";
        });
    },
    methods: {
        onhover(event) {
            const el = event ? event.target : this.$refs.hacktext;
            this.runAnimation(el);
        },

        onCall() {
            // just call the same logic without event
            this.runAnimation(this.$refs.hacktext);
        },

        runAnimation(el) {
            let iteration = 0;
            clearInterval(this.interval);

            this.interval = setInterval(() => {
                el.innerText = el.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return el.dataset.value[index];
                        }
                        return this.letters[Math.floor(Math.random() * this.letters.length)];
                    })
                    .join("");

                if (iteration >= el.dataset.value.length) {
                    clearInterval(this.interval);
                }

                iteration += 1 / 3;
            }, this.timeout);
        },
    },
};
</script>
