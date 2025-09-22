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
                    <p class="md-contact__form-subtitle">Leave your request here I will approach you as soon as I will get the LTE internet connection</p>

                    <div class="md-contact__form-block">
                        <CompInput
                            :name="'user_name'"
                            :placeholder="'Your Name'"
                            :type="'text'" />
                        <CompInput
                            :name="'user_email'"
                            :placeholder="'Your email'"
                            :type="'email'" />
                        <CompTextarea
                            :name="'user_message'"
                            :placeholder="'Summary of your message'"
                            :type="'email'" />

                        <CompButton
                            class="md-contact__form-btn"
                            :btnLabel="'Send'" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CompInput from "@/components/compInput.vue";
import CompTextarea from "@/components/compTextarea.vue";

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
        };
    },
    computed: {},
    mounted() {},
    methods: {},
};
</script>

<style lang="scss">
@import "./sectionContact.scss";
</style>
