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
                <FormRequest
                    v-if="modalType === 'request'"
                    @closeModal="closeModal" />
                <FormReview
                    v-else-if="modalType === 'review'"
                    @closeModal="closeModal" />
                <FormEmployee
                    v-else-if="modalType === 'employee'"
                    @closeModal="closeModal" />
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import FormRequest from "./forms/formRequest.vue";
import FormReview from "./forms/formReview.vue";
import FormEmployee from "./forms/formEmployee.vue";

export default {
    name: "component-leaveapp",
    components: {
        FormRequest,
        FormReview,
        FormEmployee,
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
            }, 1600);
        },
    },
};
</script>
