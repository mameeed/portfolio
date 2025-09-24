<template>
    <form
        class="md-lvp__form"
        @submit.prevent="handleSubmit"
        novalidate>
        <div class="md-lvpform-input">
            <CompInput
                id="userName"
                name="userName"
                v-model="form.userName"
                class="md-lvpform-input__input"
                placeholder="Your Name"
                autocomplete="on"
                type="text" />
            <p
                class="md-lvpform-input__error"
                :class="{'md-show': errors.userName}">
                {{ errors.userName }}
            </p>
        </div>

        <div class="md-lvpform-input">
            <CompInput
                id="userEmail"
                name="userEmail"
                v-model="form.userEmail"
                class="md-lvpform-input__input"
                placeholder="Your email"
                autocomplete="on"
                type="email" />
            <p
                class="md-lvpform-input__error"
                :class="{'md-show': errors.userEmail}">
                {{ errors.userEmail }}
            </p>
        </div>
        <div class="md-lvpform-input">
            <CompTextarea
                id="messageSummary"
                name="messageSummary"
                v-model="form.messageSummary"
                placeholder="Summary of your message (min 10 words)" />
            <p
                class="md-lvpform-input__error"
                :class="{'md-show': errors.messageSummary}">
                {{ errors.messageSummary }}
            </p>
            <p class="md-lvpform-input__hint">{{ messageWordCount }} / 10 words minimum</p>
        </div>

        <p
            class="md-lvp__form-error"
            :class="{'md-show': errors.general}">
            {{ errors.general }}
        </p>
        <p
            class="md-lvp__form-success"
            :class="{'md-show': submitSuccess}">
            Thank you! Your request has been successfully submitted. I will reach you back as soon as possible.
        </p>

        <CompButton
            class="md-lvp__form-btn"
            :btnLabel="isSubmitting ? 'Sending...' : 'Send request'"
            :btnLoading="isSubmitting" />
    </form>
</template>

<script>
import CompInput from "@/components/compInput.vue";
import CompTextarea from "@/components/compTextarea.vue";
import http from "@/services/http";

export default {
    name: "component-form",
    components: {
        CompInput,
        CompTextarea,
    },
    data() {
        return {
            form: {
                userName: "",
                userEmail: "",
                messageSummary: "",
            },
            errors: {
                userName: "",
                userEmail: "",
                messageSummary: "",
                general: "",
            },
            isSubmitting: false,
            submitSuccess: false,
        };
    },
    computed: {
        messageWordCount() {
            const words = this.form.messageSummary.trim().split(/\s+/);
            return words.filter(Boolean).length;
        },
    },
    methods: {
        resetErrors() {
            Object.assign(this.errors, {
                userName: "",
                userEmail: "",
                messageSummary: "",
                general: "",
            });
        },
        validateForm() {
            let isValid = true;

            if (!this.form.userName.trim()) {
                this.errors.userName = "Please enter your name.";
                isValid = false;
            }

            if (!this.form.userEmail.trim()) {
                this.errors.userEmail = "Please enter your email.";
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.userEmail.trim())) {
                this.errors.userEmail = "Please enter a valid email address.";
                isValid = false;
            }

            const wordCount = this.messageWordCount;
            if (!this.form.messageSummary.trim()) {
                this.errors.messageSummary = "Please provide a summary of your message.";
                isValid = false;
            } else if (wordCount < 10) {
                this.errors.messageSummary = "Message summary must be at least 10 words.";
                isValid = false;
            }

            return isValid;
        },
        async handleSubmit() {
            if (this.isSubmitting) return;

            this.submitSuccess = false;
            this.resetErrors();

            if (!this.validateForm()) return;

            this.isSubmitting = true;

            try {
                const trimmedValues = {
                    userName: this.form.userName.trim(),
                    userEmail: this.form.userEmail.trim(),
                    messageSummary: this.form.messageSummary.trim(),
                };

                const formData = new FormData();
                formData.append("userName", trimmedValues.userName);
                formData.append("userEmail", trimmedValues.userEmail);
                formData.append("messageSummary", trimmedValues.messageSummary);

                await http.post("/sendRequest", formData);

                this.submitSuccess = true;
                this.form.userName = "";
                this.form.userEmail = "";
                this.form.messageSummary = "";
            } catch (error) {
                this.errors.general = error.message || "Failed to send the request.";
            } finally {
                this.isSubmitting = false;

                setTimeout(() => {
                    this.$emit("closeModal");
                }, 2000);
            }
        },
    },
};
</script>
