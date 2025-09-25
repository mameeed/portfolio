<template>
    <section class="md-contact">
        <div class="md-contact__content container">
            <div
                data-scroll
                data-scroll-sticky
                data-scroll-target=".md-contact"
                data-scroll-offset="0px, 200px"
                class="md-contact__titling">
                <CompTitle
                    class="md-contact__title"
                    title="Get in touch"
                    :duration="30" />
                <p class="md-contact__subtitle">Feel free to contact me any time</p>
            </div>

            <div class="md-contact__info">
                <div class="md-contact__socials">
                    <a
                        v-for="item in data"
                        :key="item.title"
                        :href="item.link"
                        target="_blank"
                        class="md-ctcard">
                        <div class="md-ctcard__image">
                            <img
                                class="md-ctcard__image-file"
                                :src="item.icon"
                                :alt="`icon ${item.title}`" />
                        </div>

                        <div class="md-ctcard__details">
                            <h3 class="md-ctcard__details-title">{{ item.title }}</h3>
                            <p class="md-ctcard__details-desc">{{ item.desc }}</p>
                        </div>
                    </a>
                </div>

                <h3 class="md-contact__separator">or</h3>

                <div class="md-contact__form">
                    <h3 class="md-contact__form-title">Let’s Connect</h3>
                    <p class="md-contact__form-subtitle">Leave your request here I will contact you back as soon as I get the appropriate LTE internet connection</p>

                    <form
                        class="md-contact__form-block"
                        @submit.prevent="handleSubmit"
                        novalidate>
                        <div class="md-contact__form-field">
                            <CompInput
                                id="contactUserName"
                                name="userName"
                                v-model="form.userName"
                                class="md-contact__form-input"
                                :inputClass="{'md-error': errors.userName}"
                                placeholder="Your Name"
                                autocomplete="name"
                                type="text" />
                            <p
                                class="md-contact__form-error"
                                v-if="errors.userName">
                                {{ errors.userName }}
                            </p>
                        </div>

                        <div class="md-contact__form-field">
                            <CompInput
                                id="contactUserEmail"
                                name="userEmail"
                                v-model="form.userEmail"
                                class="md-contact__form-input"
                                :inputClass="{'md-error': errors.userEmail}"
                                placeholder="Your email"
                                autocomplete="email"
                                type="email" />
                            <p
                                class="md-contact__form-error"
                                v-if="errors.userEmail">
                                {{ errors.userEmail }}
                            </p>
                        </div>

                        <div class="md-contact__form-field">
                            <CompTextarea
                                id="contactMessageSummary"
                                name="messageSummary"
                                v-model="form.messageSummary"
                                class="md-contact__form-input"
                                :textareaClass="{'md-error': errors.messageSummary}"
                                placeholder="Summary of your message..." />
                            <p
                                class="md-contact__form-error"
                                v-if="errors.messageSummary">
                                {{ errors.messageSummary }}
                            </p>
                            <p class="md-contact__form-hint">{{ messageWordCount }} / 10 words minimum</p>
                        </div>

                        <p
                            class="md-contact__form-error md-contact__form-error--general"
                            v-if="errors.general">
                            {{ errors.general }}
                        </p>
                        <p
                            class="md-contact__form-success"
                            v-if="submitSuccess">
                            Thank you! Your request has been successfully submitted.
                        </p>

                        <CompButton
                            class="md-contact__form-btn"
                            :btnLabel="isSubmitting ? 'Sending...' : 'Send request'"
                            :btnLoading="isSubmitting" />
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CompInput from "@/components/compInput.vue";
import CompTextarea from "@/components/compTextarea.vue";
import http from "@/services/http";

export default {
    name: "section-contact",
    components: {
        CompInput,
        CompTextarea,
    },
    data() {
        return {
            data: [
                {
                    icon: require("@/assets/icons/icon-phone.svg"),
                    title: "Cellular",
                    desc: "+4672-288-19-29",
                    link: "tel:+4672-288-19-29",
                },
                {
                    icon: require("@/assets/icons/icon-whatsapp.svg"),
                    title: "Whatsapp",
                    desc: "+4672-288-19-29",
                    link: "wa.me/+46722881929",
                },
                {
                    icon: require("@/assets/icons/icon-gmail.svg"),
                    title: "Gmail",
                    desc: "mukhammadumid@gmail.com",
                    link: "mailto:mukhammadumid@gmail.com",
                },
                {
                    icon: require("@/assets/icons/icon-linkedin.svg"),
                    title: "LinkedIn",
                    desc: "mameed",
                    link: "www.linkedin.com/in/mameed",
                },
                {
                    icon: require("@/assets/icons/icon-github.svg"),
                    title: "Github",
                    desc: "mameed",
                    link: "https://github.com/mameeed/",
                },
                {
                    icon: require("@/assets/icons/icon-gitlab.svg"),
                    title: "Gitlab",
                    desc: "mameed",
                    link: "https://gitlab.com/umkamatov",
                },
                // {
                //     icon: require("@/assets/icons/icon-telegram.svg"),
                //     title: "Telegram",
                //     desc: "@mameedy",
                //     link: "https://t.me/+46722881929",
                // },
                // {
                //     icon: require("@/assets/icons/icon-instagram.svg"),
                //     title: "Instagram",
                //     desc: "@_mukhammadumid",
                //     link: "https://www.instagram.com/_mukhammadumid",
                // },
            ],
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
        resetForm() {
            this.form.userName = "";
            this.form.userEmail = "";
            this.form.messageSummary = "";
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
                this.resetForm();

                setTimeout(() => {
                    this.submitSuccess = false;
                }, 4000);
            } catch (error) {
                this.errors.general = error.message || "Failed to send the request.";
            } finally {
                this.isSubmitting = false;
            }
        },
    },
};
</script>

<style lang="scss">
@import "./sectionContact.scss";
</style>
