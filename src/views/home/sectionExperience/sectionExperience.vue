<template>
    <section class="md-exp">
        <div class="md-exp__content container">
            <div
                data-scroll
                data-scroll-sticky
                data-scroll-target=".md-exp"
                data-scroll-offset="0px, 200px"
                class="md-exp__titling">
                <CompTitle
                    class="md-exp__title"
                    title="Experience"
                    :duration="30" />
            </div>

            <div
                v-for="item in data"
                :key="item.id"
                :id="item.id"
                class="md-exp__info">
                <div
                    data-scroll
                    data-scroll-sticky
                    :data-scroll-target="`#${item.id}`"
                    data-scroll-offset="-200px, 300px"
                    class="md-exp__block-title">
                    <p class="md-expblock__title">{{ item.title }}</p>
                    <p class="md-expblock__subtitle">{{ item.subtitle }}</p>
                    <span class="md-expblock__dates">{{ item.years }}</span>
                </div>
                <div class="md-exp__block">
                    <div>
                        <p
                            v-for="(line, index) in item.desc"
                            :key="item.title + index"
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-offset="40%, 0%"
                            data-scroll-repeat="true"
                            class="md-expblock__desc">
                            {{ line }}
                        </p>
                    </div>

                    <div class="md-expblock__projects">
                        <div
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-offset="40%, 0%"
                            data-scroll-repeat="true"
                            v-for="project in item.projects"
                            :key="project.title"
                            class="md-expblock__project">
                            <div
                                v-if="project.image"
                                class="md-expblock__project-logo">
                                <img
                                    :src="project.image"
                                    :alt="'Logo' + project.title" />
                            </div>
                            <h3 class="md-expblock__project-title">{{ project.title }}</h3>
                            <p class="md-expblock__project-desc">{{ project.desc }}</p>
                            <a
                                v-if="project.link"
                                :href="project.link"
                                target="_blank"
                                class="md-expblock__project-link">
                                Visit site
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "section-exp",
    components: {},
    data() {
        return {
            data: [
                {
                    id: "rs",
                    title: "Realsoft LLC",
                    subtitle: "Uzbekistan's top 3 software developer company. Got much experience fulfilled compnay's requirements",
                    desc: ["Worked as a core frontend developer, delivering large-scale platforms. Built", " responsive UIs with Vue (2 & 3), Vuex/Pinia, SCSS, and Tailwind, integrated", " national e-services, and contributed to RealSoft’s low-code platform platon.uz. ", "Collaborated in Agile teams and mentored interns, receiving recognition ", "for company-wide contributions."],
                    years: "2022-2025",

                    projects: [
                        {
                            image: require("@/assets/images/projects/aviafly/logo.svg"),
                            title: "Aviafly",
                            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, magni? Lorem ipsum dolor sit amet.",
                            link: "https://mameeed.github.io/aviafly/",
                        },
                        {
                            image: require("@/assets/images/projects/uniquest/logo.svg"),
                            title: "UnqQuest",
                            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, magni? Lorem ipsum dolor sit amet.",
                            link: "https://mameeed.github.io/uniflow/",
                        },
                        {
                            image: require("@/assets/images/projects/hujjat/logo.svg"),
                            title: "Tropic-Tour",
                            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, magni? Lorem ipsum dolor sit amet.",
                            link: null,
                        },
                        {
                            image: require("@/assets/images/projects/online-mahalla/logo.svg"),
                            title: "Online-Mahalla",
                            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, magni? Lorem ipsum dolor sit amet.",
                            link: "https://online-mahalla.uz",
                        },
                        {
                            image: require("@/assets/images/projects/oilakredit/logo.svg"),
                            title: "Oilakredit",
                            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, magni? Lorem ipsum dolor sit amet.",
                            link: "https://oilakredit.uz",
                        },
                        {
                            image: require("@/assets/images/projects/hujjat/logo.svg"),
                            title: "Hujjat",
                            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, magni? Lorem ipsum dolor sit amet.",
                            link: "https://hujjat.uz",
                        },
                        {
                            image: require("@/assets/images/projects/platon/logo.svg"),
                            title: "Platon.uz",
                            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, magni? Lorem ipsum dolor sit amet.",
                            link: "https://platon.uz",
                        },
                        {
                            image: require("@/assets/images/projects/smoficce/logo.svg"),
                            title: "Smart Office",
                            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, magni? Lorem ipsum dolor sit amet.",
                            link: "https://smart-office.uz",
                        },
                        {
                            image: require("@/assets/images/projects/keeping/logo.svg"),
                            title: "Keeping",
                            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, magni? Lorem ipsum dolor sit amet.",
                            link: "https://keeping.uz",
                        },
                    ],
                },
                {
                    id: "lumos",
                    title: "Lumos Mind LLC",
                    subtitle: "Private government monitored school with a focus for a programming and English language",
                    desc: ["Was a Computer Science Teacher, taught grades 1–8 core computing: Scratch,", " HTML/CSS, JavaScript basics, and MS Office. Guided students in building simple", " games (Flappy Bird, Tic-Tac-Toe, Snake) and websites, while boosting digital", " literacy through practical Office training. Prepared lessons, graded assignments,", " and mentored projects, strengthening leadership and teaching skills, and ", "earning recognition from parents and administration."],
                    years: "2021-2022",

                    projects: [
                        {
                            title: "Multitask Knowledge",
                            desc: "Handled full education cycles — lesson planning, scheduling, preparing equipment, and marking assignments. Balanced multiple responsibilities effectively while ensuring smooth learning experiences.",
                            link: null,
                        },
                        {
                            title: "Student Engagement",
                            desc: "Encouraged curiosity through interactive projects like games and websites. Kept students motivated by blending theory with fun, practical coding tasks tailored to different age groups.",
                            link: null,
                        },
                        {
                            title: "Digital Literacy",
                            desc: "Delivered hands-on MS Office training with Word, Excel, and PowerPoint. Helped students improve essential skills for school projects, presentations, and daily computer use.",
                            link: null,
                        },
                        {
                            title: "Leadership & Mentoring",
                            desc: "Guided pupils through personal projects, provided constructive feedback, and nurtured teamwork. Built patience and communication skills while fostering confidence in young learners.",
                            link: null,
                        },
                        {
                            title: "Recognition & Impact",
                            desc: "Earned appreciation from parents and administration for teaching quality and mentoring. Left a positive mark on students’ growth and the school’s digital education approach.",
                            link: null,
                        },
                    ],
                },
                {
                    id: "kirano",
                    title: "Kirano Marketing agency",
                    subtitle: "Agency founded in 2017, specializing in promoting businesses online. Known for emphasizing brand individuality and delivering high-quality digital web sites",
                    desc: [
                        "Started as an intern and earned two promotions within a year to Frontend",
                        " Developer. Delivered 20+ responsive, cross-browser websites and landing pages,",
                        " boosting workflow efficiency and client delivery speed. Developed corporate sites",
                        " like regalstay.uz, bctdenim.com, and trustagro.uz (integrated with WordPress),",
                        " and built fast, mobile-friendly landing pages for local and international",
                        " businesses. Improved expertise in responsive layouts, bug fixing, cross-browser",
                        " testing, and collaboration using GitHub, Trello, Figma, and VS Code.",
                    ],
                    years: "2020-2021",

                    projects: [
                        {
                            image: require("@/assets/images/projects/regalstay/logo.svg"),
                            title: "RegalStay Hotel",
                            desc: "Built a responsive corporate website integrated with WordPress for easy product and booking management. Focused on modern design, fast performance, and seamless client content updates.",
                            link: "https://regalstay.uz",
                        },
                        {
                            image: require("@/assets/images/projects/bct/logo.svg"),
                            title: "BCT Denim",
                            desc: "Developed an e-commerce-ready site for a fashion brand, ensuring mobile-first design and cross-browser compatibility. Delivered a clean interface that improved brand visibility and user engagement.",
                            link: "https://bctdenim.com",
                        },
                        {
                            image: require("@/assets/images/projects/trustagro/logo.svg"),
                            title: "TrustAgro",
                            desc: "Created a corporate platform for an agricultural company with custom product catalogues and client pages. Ensured scalability and easy updates through a tailored WordPress integration.",
                            link: "https://trustagro.uz/",
                        },
                        {
                            image: require("@/assets/images/projects/kale/logo.svg"),
                            title: "Kale.uz",
                            desc: "Designed and implemented a modern landing page for a local business. Optimized responsiveness and load times, improving customer reach and conversion rates.",
                            link: "https://kale.uz/",
                        },
                        {
                            image: require("@/assets/images/projects/arccon/logo.svg"),
                            title: "Arccon.uz",
                            desc: "Delivered a corporate website highlighting services and portfolio for a construction company. Balanced sleek visuals with structured layouts to present projects professionally across devices.",
                            link: "https://arccon.com/",
                        },
                        {
                            image: require("@/assets/images/projects/mbci/logo.svg"),
                            title: "MBCAG.com",
                            desc: "Built a lightweight, mobile-friendly landing page for an international client. Enhanced user experience with smooth navigation and quick load performance to support global audience needs.",
                            link: "https://mbcag.com/",
                        },
                    ],
                },
            ],
        };
    },
    mounted() {},
    methods: {},
};
</script>

<style lang="scss">
@import "./sectionExperience.scss";
</style>
