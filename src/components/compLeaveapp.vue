<template>
    <div
        class="md-lvp__wrapper"
        :class="[{'md-show': isVisible}, {'md-closing': isClosing}]">
        <div class="md-lvp">
            <div class="md-lvp__content">
                <h3 class="md-lvp__title">{{ modalTitle }}</h3>
                <p class="md-lvp__desc">{{ modalSubtitle }}</p>
                <span
                    class="md-lvp__close"
                    @click="closeModal"></span>
                <formRequest @closeModal="closeModal" />
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import formRequest from "./forms/formRequest.vue";

export default {
    name: "component-leaveapp",
    components: {
        formRequest,
    },
    data() {
        return {
            isClosing: false,
        };
    },
    computed: {
        ...mapGetters(["activeModal", "activeModalData"]),
        isVisible() {
            return Boolean(this.activeModalData && this.activeModalData.isOpen);
            // return true;
        },
        modalTitle() {
            return this.activeModalData ? this.activeModalData.title : "";
        },
        modalSubtitle() {
            return this.activeModalData ? this.activeModalData.subtitle : "";
        },
        modalType() {
            return this.activeModalData ? this.activeModalData.id : "";
        },
    },
    methods: {
        closeModal() {
            this.isClosing = true;

            setTimeout(() => {
                this.$store.dispatch("closeModal");
                this.isClosing = false;
            }, 1300);
        },
    },
};
</script>
