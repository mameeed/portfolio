<template>
    <div class="md-loader">
        <div class="md-loader__wrapper">
            <div class="md-loader__block"></div>
            <div class="md-loader__block"></div>
            <div class="md-loader__block"></div>
            <div class="md-loader__block"></div>
            <div class="md-loader__block"></div>
        </div>
        <div class="md-loader__data">
            <!-- <CompHacktext text="mameed" /> -->
            <CompHacktext />
            <!-- <button @click="startLoading">Start Loading</button> -->
        </div>
    </div>
</template>

<script>
// import {mapActions} from "vuex";
// import CompInput from "@/components/compInput.vue";
import CompHacktext from "./compOdometer.vue";

export default {
    name: "component-loader",
    components: {
        CompHacktext,
    },
    data() {
        return {
            count: 0,
        };
    },

    // methods: {
    //     // ...mapActions(["openModal"]),
    // },
};
</script>
