<template>
    <component
        :is="componentTag"
        v-bind="componentAttrs"
        :id="btnUid"
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
        <img
            class="mdbtn__loading"
            src="@/assets/icons/icon-loading.svg"
            alt="button icon" />
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
        getTarget(target) {
            return target ? "_blank" : "self";
        },
    },

    computed: {
        isExternal() {
            return this.btnLink?.startsWith("http");
        },
        componentTag() {
            if (!this.btnLink) {
                return "button";
            }

            return this.isExternal ? "a" : "router-link";
        },
        componentAttrs() {
            if (this.componentTag === "router-link") {
                return {to: this.btnLink};
            }

            if (this.componentTag === "a") {
                return {
                    href: this.btnLink,
                    target: this.getTarget(this.btnTarget),
                };
            }

            return {};
        },
    },
};
</script>
