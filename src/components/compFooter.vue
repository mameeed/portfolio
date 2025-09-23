<template>
    <footer class="md-footer">
        <div class="md-footer__content container">
            <p class="md-footer__text">Here should’ve been a footer, copyright stuff and bunch of links, but since all needed we had above here is this thought:</p>
            <div class="md-footer__quote">
                <h2 class="md-footer__quote-text">{{ text }}</h2>
                <p class="md-footer__quote-author">Master Oogway</p>
            </div>
            <div class="md-footer__copyright">
                <p class="md-footer__copyright-made">Coded with ❤️ and 💻 by Mameed</p>
                <p class="md-footer__copyright-update">Last updated 16.09.2025</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "component-footer",

    data() {
        return {
            text: "Yesterday is a history, Tomorrow is a mystery, but Today is a gift. That is why it is called the present.",
        };
    },

    mounted() {},
};
</script>
