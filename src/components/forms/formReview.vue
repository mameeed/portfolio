<template>
    <form
        class="md-lvp__form md-review"
        @submit.prevent="handleSubmit"
        novalidate>
        <div class="md-lvpform-input md-lvpform-input--photo">
            <CompPhotoUpload
                :key="photoUploadKey"
                input-label="Upload a photo*"
                name="photo"
                @modified="onPhotoSelected" />
            <p
                class="md-lvpform-input__error"
                :class="{'md-show': errors.photo}">
                {{ errors.photo }}
            </p>
        </div>

        <div class="md-lvpform-input">
            <CompInput
                id="reviewUserName"
                name="userName"
                v-model="form.userName"
                class="md-lvpform-input__input"
                placeholder="Your name*"
                autocomplete="name"
                type="text" />
            <p
                class="md-lvpform-input__error"
                :class="{'md-show': errors.userName}">
                {{ errors.userName }}
            </p>
        </div>

        <div class="md-lvpform-input">
            <CompInput
                id="reviewUserEmail"
                name="userEmail"
                v-model="form.userEmail"
                class="md-lvpform-input__input"
                placeholder="Your email*"
                autocomplete="email"
                type="email" />
            <p
                class="md-lvpform-input__error"
                :class="{'md-show': errors.userEmail}">
                {{ errors.userEmail }}
            </p>
        </div>

        <div class="md-lvpform-input">
            <CompInput
                id="reviewUserPosition"
                name="userPosition"
                v-model="form.userPosition"
                class="md-lvpform-input__input"
                placeholder="Your position*"
                autocomplete="organization-title"
                type="text" />
            <p
                class="md-lvpform-input__error"
                :class="{'md-show': errors.userPosition}">
                {{ errors.userPosition }}
            </p>
        </div>

        <div class="md-lvpform-input">
            <CompTextarea
                id="reviewUserMessage"
                name="userMessage"
                v-model="form.userMessage"
                placeholder="Share your review..." />
            <p
                class="md-lvpform-input__error"
                :class="{'md-show': errors.userMessage}">
                {{ errors.userMessage }}
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
            Thank you! Your review has been sent. I appreciate your feedback.
        </p>

        <CompButton
            class="md-lvp__form-btn"
            :btnLabel="isSubmitting ? 'Sending...' : 'Submit review'"
            :btnLoading="isSubmitting" />
    </form>
</template>

<script>
import CompInput from "@/components/compInput.vue";
import CompTextarea from "@/components/compTextarea.vue";
import CompPhotoUpload from "@/components/compPhotoUpload.vue";
import http from "@/services/http";

export default {
    name: "component-form-review",
    components: {
        CompInput,
        CompTextarea,
        CompPhotoUpload,
    },
    data() {
        return {
            form: {
                userName: "",
                userEmail: "",
                userPosition: "",
                userMessage: "",
            },
            photoFile: null,
            photoUploadKey: 0,
            errors: {
                photo: "",
                userName: "",
                userEmail: "",
                userPosition: "",
                userMessage: "",
                general: "",
            },
            isSubmitting: false,
            submitSuccess: false,
        };
    },
    computed: {
        messageWordCount() {
            const words = this.form.userMessage.trim().split(/\s+/);
            return words.filter(Boolean).length;
        },
    },
    methods: {
        resetErrors() {
            Object.assign(this.errors, {
                photo: "",
                userName: "",
                userEmail: "",
                userPosition: "",
                userMessage: "",
                general: "",
            });
        },
        validateForm() {
            let isValid = true;

            if (!this.photoFile) {
                this.errors.photo = "Please upload a photo.";
                isValid = false;
            }

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

            if (!this.form.userPosition.trim()) {
                this.errors.userPosition = "Please let me know your position.";
                isValid = false;
            }

            const wordCount = this.messageWordCount;
            if (!this.form.userMessage.trim()) {
                this.errors.userMessage = "Please share your review.";
                isValid = false;
            } else if (wordCount < 10) {
                this.errors.userMessage = "Your review must be at least 10 words.";
                isValid = false;
            }

            return isValid;
        },
        onPhotoSelected(file, isValid) {
            this.photoFile = file || null;

            if (file) {
                this.errors.photo = "";
            } else if (isValid === false) {
                this.errors.photo = "Please upload an image file (PNG, JPG, JPEG).";
            }
        },
        resetForm() {
            this.form.userName = "";
            this.form.userEmail = "";
            this.form.userPosition = "";
            this.form.userMessage = "";
            this.photoFile = null;
            this.photoUploadKey += 1;
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
                    userPosition: this.form.userPosition.trim(),
                    userMessage: this.form.userMessage.trim(),
                };

                const formData = new FormData();
                formData.append("photo", this.photoFile);
                Object.keys(trimmedValues).forEach((key) => {
                    formData.append(key, trimmedValues[key]);
                });

                await http.post("/sendReview", formData);

                this.submitSuccess = true;
                this.resetForm();
            } catch (error) {
                this.errors.general = error.message || "Failed to send the review.";
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
