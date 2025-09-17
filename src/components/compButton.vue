<template>
    <component
        :is="btnLink ? 'router-link' : 'button'"
        :to="btnLink"
        :id="btnUid"
        :target="getTarget(btnTarget)"
        class="mdbtn"
        :class="{'md-loading': btnLoading}">
        <img
            v-if="btnLeftIcon"
            class="mdbtn__icon mdleft"
            :src="require(`@/assets/icons/${btnLeftIcon}.svg`)"
            alt="button icon" />
        <p class="mdbtn__text">{{ btnLabel }}</p>
        <img
            v-if="btnRightIcon"
            class="mdbtn__icon mdright"
            :src="require(`@/assets/icons/${btnRightIcon}.svg`)"
            alt="button icon" />
        <!-- <img
            class="btn__loading"
            src="@/assets/icons/icon-loading.svg"
            alt="button icon" /> -->
    </component>
</template>

<script>
export default {
    name: "component-button",
    props: {
        btnUid: {
            type: String,
            required: false,
        },
        btnLabel: {
            type: String,
            required: true,
        },
        btnLink: {
            type: String,
            default: null,
        },
        btnLeftIcon: {
            type: String,
        },
        btnRightIcon: {
            type: String,
        },
        btnTarget: {
            type: Boolean,
            default: false,
        },
        btnLoading: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        // handleClick() {
        //     // Handle the click event when vgbtnLink is not provided
        //     if (!this.vgbtnLink) {
        //         // Perform custom action or emit an event
        //     }
        // },
        getTarget(target) {
            return target ? "_blank" : "self";
        },
    },
};
</script>
