<template>
    <CompHacktext
        ref="theTitle"
        data-scroll
        :data-scroll-call="`title_${title.replace(/\s/g, '').toLowerCase()}`"
        data-scroll-class="red"
        :data-scroll-repeat="repeat"
        data-scroll-offset="20%, 0"
        :label="title"
        :duration="50" />
</template>

<script>
import CompHacktext from "@/components/compHacktext.vue";

export default {
    name: "component-title",
    components: {
        CompHacktext,
    },
    props: {
        title: {
            type: String,
            default: "Title",
        },
        duration: {
            type: Number,
            default: 50,
        },
        repeat: {
            type: Boolean,
            default: true,
        },
    },
    mounted() {
        this.$root.$scroll.on("call", (func, dir) => {
            if (func === `title_${this.title.replace(/\s/g, "").toLowerCase()}` && dir === "enter") {
                this.$refs.theTitle.onCall(); // directly call child's method
                // this.onInView();
            }
        });
    },
};
</script>
