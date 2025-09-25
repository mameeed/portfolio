<template>
    <form
        class="md-lvp__form md-employee"
        @submit.prevent="handleSubmit"
        novalidate>
        <div class="md-lvpform-input">
            <CompInput
                id="companyName"
                name="companyName"
                v-model="form.companyName"
                class="md-lvpform-input__input"
                placeholder="Company name*"
                autocomplete="organization"
                type="text" />
            <p
                class="md-lvpform-input__error"
                :class="{'md-show': errors.companyName}">
                {{ errors.companyName }}
            </p>
        </div>

        <div class="md-lvpform-input">
            <CompInput
                id="companyWebsite"
                name="companyWebsite"
                v-model="form.companyWebsite"
                class="md-lvpform-input__input"
                placeholder="Company website"
                autocomplete="url"
                type="url" />
            <p
                class="md-lvpform-input__error"
                :class="{'md-show': errors.companyWebsite}">
                {{ errors.companyWebsite }}
            </p>
        </div>

        <div class="md-lvpform-input">
            <CompInput
                id="contactPerson"
                name="contactPerson"
                v-model="form.contactPerson"
                class="md-lvpform-input__input"
                placeholder="Contact person*"
                autocomplete="name"
                type="text" />
            <p
                class="md-lvpform-input__error"
                :class="{'md-show': errors.contactPerson}">
                {{ errors.contactPerson }}
            </p>
        </div>

        <div class="md-lvpform-input">
            <CompInput
                id="contactEmail"
                name="contactEmail"
                v-model="form.contactEmail"
                class="md-lvpform-input__input"
                placeholder="Contact email*"
                autocomplete="email"
                type="email" />
            <p
                class="md-lvpform-input__error"
                :class="{'md-show': errors.contactEmail}">
                {{ errors.contactEmail }}
            </p>
        </div>

        <div class="md-lvpform-input">
            <CompSelect
                class="md-lvpform-input__input"
                :select-label="'How did you hear about me?'"
                :select-options="referrerOptions"
                :select-selected="form.referrer"
                @selected="onReferrerSelected" />
            <p
                class="md-lvpform-input__error"
                :class="{'md-show': errors.referrer}">
                {{ errors.referrer }}
            </p>
        </div>

        <div class="md-lvpform-input">
            <CompInput
                id="officeAddress"
                name="officeAddress"
                v-model="form.officeAddress"
                class="md-lvpform-input__input"
                placeholder="Office address"
                autocomplete="street-address"
                type="text" />
        </div>

        <div class="md-lvpform-input">
            <CompTextarea
                id="message"
                name="message"
                v-model="form.message"
                placeholder="Tell me more about the opportunity..." />
            <p
                class="md-lvpform-input__error"
                :class="{'md-show': errors.message}">
                {{ errors.message }}
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
            Thank you! Your hire application has been received. I'll be in touch soon.
        </p>

        <CompButton
            class="md-lvp__form-btn"
            :btnLabel="isSubmitting ? 'Sending...' : 'Send hire application'"
            :btnLoading="isSubmitting" />
    </form>
</template>

<script>
import CompInput from "@/components/compInput.vue";
import CompTextarea from "@/components/compTextarea.vue";
import CompSelect from "@/components/compSelect.vue";
import http from "@/services/http";

export default {
    name: "component-form-hire",
    components: {
        CompInput,
        CompTextarea,
        CompSelect,
    },
    data() {
        return {
            form: {
                companyName: "",
                companyWebsite: "",
                contactPerson: "",
                contactEmail: "",
                officeAddress: "",
                referrer: null,
                message: "",
            },
            errors: {
                companyName: "",
                companyWebsite: "",
                contactPerson: "",
                contactEmail: "",
                referrer: "",
                message: "",
                general: "",
            },
            isSubmitting: false,
            submitSuccess: false,
        };
    },
    computed: {
        messageWordCount() {
            const words = this.form.message.trim().split(/\s+/);
            return words.filter(Boolean).length;
        },
        referrerOptions() {
            return [
                {id: "search", name: "Search engine"},
                {id: "social", name: "Social networks"},
                {id: "linkedin", name: "LinkedIn"},
                {id: "recommendation", name: "Personal recommendation"},
                {id: "other", name: "Other"},
            ];
        },
    },
    methods: {
        resetErrors() {
            Object.assign(this.errors, {
                companyName: "",
                companyWebsite: "",
                contactPerson: "",
                contactEmail: "",
                referrer: "",
                message: "",
                general: "",
            });
        },
        validateForm() {
            let isValid = true;

            if (!this.form.companyName.trim()) {
                this.errors.companyName = "Please enter the company name.";
                isValid = false;
            }

            if (this.form.companyWebsite.trim() && !/^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/\S*)?$/.test(this.form.companyWebsite.trim())) {
                this.errors.companyWebsite = "Please enter a valid URL.";
                isValid = false;
            }

            if (!this.form.contactPerson.trim()) {
                this.errors.contactPerson = "Please identify the contact person.";
                isValid = false;
            }

            if (!this.form.contactEmail.trim()) {
                this.errors.contactEmail = "Please enter a contact email.";
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.contactEmail.trim())) {
                this.errors.contactEmail = "Please enter a valid email address.";
                isValid = false;
            }

            if (!this.form.referrer) {
                this.errors.referrer = "Please tell me how you heard about me.";
                isValid = false;
            }

            const wordCount = this.messageWordCount;
            if (!this.form.message.trim()) {
                this.errors.message = "Please include a short message.";
                isValid = false;
            } else if (wordCount < 10) {
                this.errors.message = "Message must be at least 10 words.";
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
                    companyName: this.form.companyName.trim(),
                    companyWebsite: this.form.companyWebsite.trim(),
                    contactPerson: this.form.contactPerson.trim(),
                    contactEmail: this.form.contactEmail.trim(),
                    officeAddress: this.form.officeAddress.trim(),
                    referrer: this.form.referrer ? this.form.referrer.name : "",
                    message: this.form.message.trim(),
                };

                const formData = new FormData();
                Object.keys(trimmedValues).forEach((key) => {
                    if (trimmedValues[key]) {
                        formData.append(key, trimmedValues[key]);
                    }
                });

                await http.post("/sendHireapplication", formData);

                this.submitSuccess = true;
                this.form.companyName = "";
                this.form.companyWebsite = "";
                this.form.contactPerson = "";
                this.form.contactEmail = "";
                this.form.officeAddress = "";
                this.form.referrer = null;
                this.form.message = "";
            } catch (error) {
                this.errors.general = error.message || "Failed to send the hire application.";
            } finally {
                this.isSubmitting = false;

                setTimeout(() => {
                    this.$emit("closeModal");
                }, 2000);
            }
        },
        onReferrerSelected(option) {
            this.form.referrer = option;
        },
    },
};
</script>
