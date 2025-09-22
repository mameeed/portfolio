<template>
    <section class="md-about">
        <div class="md-about__content container">
            <div
                data-scroll
                data-scroll-sticky
                data-scroll-target=".md-about"
                data-scroll-offset="0px, 200px"
                class="md-about__titling">
                <CompTitle
                    class="md-about__title"
                    title="Mameed is"
                    :duration="30" />
                <p class="md-about__subtitle">Frontend Engineer blending design, code, and usability.</p>
            </div>

            <div class="md-about__info">
                <div class="md-about__list">
                    <p
                        v-for="(item, index) in data"
                        :key="'a' + index"
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-offset="40%, 0%"
                        data-scroll-repeat="true">
                        {{ item }}
                    </p>
                    <br />
                    <p
                        v-for="(item, index) in data2"
                        :key="'b' + index"
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-offset="40%, 0%"
                        data-scroll-repeat="true">
                        {{ item }}
                    </p>
                    <div
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-offset="40%, 0%"
                        data-scroll-repeat="true"
                        class="md-about__list-images">
                        <img
                            src="@/assets/images/world-of-tanks.png"
                            alt="assassins creed logo" />
                        <img
                            src="@/assets/images/assassins-creed-logo.png"
                            alt="assassins creed logo" />
                        <img
                            src="@/assets/images/counter-strike-2.png"
                            alt="assassins creed logo" />
                        <img
                            src="@/assets/images/nfs-logo.png"
                            alt="assassins creed logo" />
                    </div>
                    <p
                        v-for="(item, index) in data3"
                        :key="'c' + index"
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-offset="40%, 0%"
                        data-scroll-repeat="true">
                        {{ item }}
                    </p>

                    <div
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-offset="40%, 0%"
                        data-scroll-repeat="true"
                        class="md-about__list-images">
                        <img
                            src="@/assets/images/coursera-logo.png"
                            alt="assassins creed logo" />
                        <img
                            src="@/assets/images/udemy-logo.png"
                            alt="assassins creed logo" />
                        <img
                            src="@/assets/images/westminster-logo.png"
                            alt="assassins creed logo" />
                        <img
                            src="@/assets/images/kirano-logo.png"
                            alt="assassins creed logo" />
                    </div>
                    <p
                        v-for="(item, index) in data4"
                        :key="'d' + index"
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-offset="40%, 0%"
                        data-scroll-repeat="true">
                        {{ item }}
                    </p>
                    <div
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-offset="40%, 0%"
                        data-scroll-repeat="true"
                        class="md-about__list-images">
                        <img
                            src="@/assets/images/realsoft-logo.png"
                            alt="assassins creed logo" />
                        <img
                            src="@/assets/images/stockholm-university.png"
                            alt="assassins creed logo" />
                    </div>
                    <p
                        v-for="(item, index) in data5"
                        :key="'e' + index"
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-offset="40%, 0%"
                        data-scroll-repeat="true">
                        {{ item }}
                    </p>
                </div>

                <div
                    v-for="(item, index) in stackPack"
                    :key="'stack' + index"
                    class="md-about__stack">
                    <h3
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-offset="40%, 0%"
                        data-scroll-repeat="true"
                        class="md-about__stack-title">
                        {{ item.name }}
                    </h3>

                    <div class="md-about__stack-list">
                        <div
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-offset="40%, 0%"
                            data-scroll-repeat="true"
                            v-for="stack in item.list"
                            :key="stack.label"
                            :data-label="stack.label"
                            class="md-about__stack-item">
                            <img
                                :src="stack.image"
                                :alt="`Logo ${stack.label}`" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "section-about",
    components: {},
    data() {
        return {
            data: ["Born in sunny Uzbekistan in 2000, I grew up surrounded by family warmth and", "a curiosity for computers. By the age of 8, I was already experimenting with", "Microsoft Paint; soon after, I was winning chess, football, horseback riding, and", "other schoolcompetitions. But my favorite subject quickly became", "computer science."],
            data2: ["I graduated school in 2015 and started college, where I struggled at first", "but finished among the top students. Around that time, my love for video", "games — especially the Assassin’s Creed series and Counter-Strike nights", "with friends — sparked an interest in how games and software were built."],
            data3: ["My first real steps into coding came in 2019, when I began online courses on", "Coursera and Udemy. That same year, I entered WIUT’s Information Technology", "faculty while balancing studies and part-time teaching in computer science for", "school students. In 2020, I landed my first internship at Kirano Agency, where", "I built projects with pure HTML, CSS, and JavaScript."],
            data4: ["In 2022, I joined Realsoft — one of Uzbekistan’s top IT companies — where I ", "leveled up my skills working on everything from small landing pages to", "large-scale dashboards with millions of daily users, including government", "-level projects.  Realsoft became an important chapter in my career, sharpening", "both my technical and collaborative skills."],
            data5: ["Today, I’m continuing my journey at Stockholm University, pursuing a ", "Master’s in Computer and Systems Sciences, and bringing with me the", "experience of blending creativity, code, and curiosity — eager to see what", "the future holds."],

            stack: [
                {
                    label: "netlify",
                    image: require(`@/assets/images/stack/netlify.svg`),
                    level: "prime",
                },
                {
                    label: "ai",
                    image: require(`@/assets/images/stack/ai.svg`),
                    level: "prime",
                },
                {
                    label: "analytics",
                    image: require(`@/assets/images/stack/analytics.svg`),
                    level: "prime",
                },
                {
                    label: "angular",
                    image: require(`@/assets/images/stack/angular.svg`),
                    level: "kapral",
                },
                {
                    label: "atlassian",
                    image: require(`@/assets/images/stack/atlassian.svg`),
                    level: "prime",
                },
                {
                    label: "auth0",
                    image: require(`@/assets/images/stack/auth0.svg`),
                    level: "prime",
                },
                {
                    label: "bootstrap4",
                    image: require(`@/assets/images/stack/bootstrap4.svg`),
                    level: "prime",
                },
                {
                    label: "bootstrap5",
                    image: require(`@/assets/images/stack/bootstrap5.svg`),
                    level: "prime",
                },
                {
                    label: "chrome",
                    image: require(`@/assets/images/stack/chrome.svg`),
                    level: "tool",
                },
                {
                    label: "css",
                    image: require(`@/assets/images/stack/css.svg`),
                    level: "prime",
                },
                {
                    label: "django",
                    image: require(`@/assets/images/stack/django.svg`),
                    level: "kapral",
                },
                {
                    label: "docker",
                    image: require(`@/assets/images/stack/docker.svg`),
                    level: "kapral",
                },
                {
                    label: "edge",
                    image: require(`@/assets/images/stack/edge.svg`),
                    level: "tool",
                },
                {
                    label: "element-ui",
                    image: require(`@/assets/images/stack/element-ui.svg`),
                    level: "prime",
                },
                {
                    label: "eslint",
                    image: require(`@/assets/images/stack/eslint.svg`),
                    level: "prime",
                },
                {
                    label: "figma",
                    image: require(`@/assets/images/stack/figma.svg`),
                    level: "tool",
                },
                {
                    label: "firefox",
                    image: require(`@/assets/images/stack/firefox.svg`),
                    level: "tool",
                },
                {
                    label: "git",
                    image: require(`@/assets/images/stack/git.svg`),
                    level: "prime",
                },
                {
                    label: "github",
                    image: require(`@/assets/images/stack/github.svg`),
                    level: "prime",
                },
                {
                    label: "gitlab",
                    image: require(`@/assets/images/stack/gitlab.svg`),
                    level: "prime",
                },
                {
                    label: "google-cloud",
                    image: require(`@/assets/images/stack/google-cloud.svg`),
                    level: "kapral",
                },
                {
                    label: "graphql",
                    image: require(`@/assets/images/stack/graphql.svg`),
                    level: "prime",
                },
                {
                    label: "gulp",
                    image: require(`@/assets/images/stack/gulp.svg`),
                    level: "prime",
                },
                {
                    label: "heroku",
                    image: require(`@/assets/images/stack/heroku.svg`),
                    level: "prime",
                },
                {
                    label: "html5",
                    image: require(`@/assets/images/stack/html5.svg`),
                    level: "prime",
                },
                {
                    label: "id",
                    image: require(`@/assets/images/stack/id.svg`),
                    level: "tool",
                },
                {
                    label: "ie",
                    image: require(`@/assets/images/stack/ie.svg`),
                    level: "tool",
                },
                {
                    label: "jira",
                    image: require(`@/assets/images/stack/jira.svg`),
                    level: "tool",
                },
                {
                    label: "jquery",
                    image: require(`@/assets/images/stack/jquery.svg`),
                    level: "prime",
                },
                {
                    label: "js",
                    image: require(`@/assets/images/stack/js.svg`),
                    level: "prime",
                },
                {
                    label: "json",
                    image: require(`@/assets/images/stack/json.svg`),
                    level: "prime",
                },
                {
                    label: "mongodb",
                    image: require(`@/assets/images/stack/mongodb.svg`),
                    level: "kapral",
                },
                {
                    label: "nextjs",
                    image: require(`@/assets/images/stack/nextjs.svg`),
                    level: "kapral",
                },
                {
                    label: "nodejs",
                    image: require(`@/assets/images/stack/nodejs.svg`),
                    level: "kapral",
                },
                {
                    label: "npm",
                    image: require(`@/assets/images/stack/npm.svg`),
                    level: "prime",
                },
                {
                    label: "nuxtjs",
                    image: require(`@/assets/images/stack/nuxtjs.svg`),
                    level: "prime",
                },
                {
                    label: "php",
                    image: require(`@/assets/images/stack/php.svg`),
                    level: "kapral",
                },
                {
                    label: "postfresql",
                    image: require(`@/assets/images/stack/postfresql.svg`),
                    level: "kapral",
                },
                {
                    label: "postman",
                    image: require(`@/assets/images/stack/postman.svg`),
                    level: "tool",
                },
                {
                    label: "prettier",
                    image: require(`@/assets/images/stack/prettier.svg`),
                    level: "tool",
                },
                {
                    label: "ps",
                    image: require(`@/assets/images/stack/ps.svg`),
                    level: "tool",
                },
                {
                    label: "pugjs",
                    image: require(`@/assets/images/stack/pugjs.svg`),
                    level: "kapral",
                },
                {
                    label: "python",
                    image: require(`@/assets/images/stack/python.svg`),
                    level: "kapral",
                },
                {
                    label: "reactjs",
                    image: require(`@/assets/images/stack/reactjs.svg`),
                    level: "kapral",
                },
                {
                    label: "redux",
                    image: require(`@/assets/images/stack/redux.svg`),
                    level: "kapral",
                },
                {
                    label: "sass",
                    image: require(`@/assets/images/stack/sass.svg`),
                    level: "prime",
                },
                {
                    label: "semantic-ui",
                    image: require(`@/assets/images/stack/semantic-ui.svg`),
                    level: "prime",
                },
                {
                    label: "tailwind",
                    image: require(`@/assets/images/stack/tailwind.svg`),
                    level: "prime",
                },
                {
                    label: "typescript",
                    image: require(`@/assets/images/stack/typescript.svg`),
                    level: "prime",
                },
                {
                    label: "vitejs",
                    image: require(`@/assets/images/stack/vitejs.svg`),
                    level: "prime",
                },
                {
                    label: "vs",
                    image: require(`@/assets/images/stack/vs.svg`),
                    level: "tool",
                },
                {
                    label: "vuejs",
                    image: require(`@/assets/images/stack/vuejs.svg`),
                    level: "prime",
                },
                {
                    label: "webpack",
                    image: require(`@/assets/images/stack/webpack.svg`),
                    level: "prime",
                },
                {
                    label: "wordpress",
                    image: require(`@/assets/images/stack/wordpress.svg`),
                    level: "kapral",
                },
                {
                    label: "xd",
                    image: require(`@/assets/images/stack/xd.svg`),
                    level: "tool",
                },
            ],
        };
    },
    computed: {
        stackPack() {
            let pack = [
                {
                    name: "My Professional stack",
                    list: [],
                },
                {
                    name: "Had an experience with",
                    list: [],
                },
                {
                    name: "Loved using",
                    list: [],
                },
            ];

            pack[0].list = this.stack.filter((item) => item.level === "prime");
            pack[1].list = this.stack.filter((item) => item.level === "kapral");
            pack[2].list = this.stack.filter((item) => item.level === "tool");

            return pack;
        },
    },
    mounted() {},
    methods: {},
};
</script>

<style lang="scss">
@import "./sectionAbout.scss";
</style>
