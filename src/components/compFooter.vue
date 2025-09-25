<template>
    <footer class="md-footer">
        <div class="md-footer__content container">
            <p class="md-footer__text">Here should’ve been a footer, copyright stuff and bunch of links, but since all needed we had above here is this thought:</p>
            <div class="md-footer__quote">
                <h2 class="md-footer__quote-text">{{ randomQuote.text }}</h2>
                <p class="md-footer__quote-author">{{ randomQuote.author }}</p>
                <!-- <CompButton
                    class="md-footer__btn"
                    type="button"
                    @click.native="recite"
                    :btnLabel="'Requote'" /> -->
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
            quotes: [
                {
                    text: "Yesterday is history, tomorrow is a mystery, but today is a gift — that is why it is called the present.",
                    author: "Master Oogway",
                },
                {
                    text: "If something can be solved with money, it’s not a problem — it’s just a payment.",
                    author: "Mameed",
                },
                {
                    text: "Don’t climb a mountain for the world to see you; climb it so you can see the world.",
                    author: "Internet",
                },
                {
                    text: "When the jackal falls silent, even the lion listens.",
                    author: "Western proverb",
                },
                {
                    text: "A hen on land cannot understand why an eagle needs the sky.",
                    author: "Mameed",
                },
                {
                    text: "The lotus rises from the mud, yet it is never stained.",
                    author: "Indian wisdom",
                },
                {
                    text: "It is better to be a warrior in a garden than a gardener in a war.",
                    author: "Japanese proverb",
                },
                {
                    text: "I once loved a flower so deeply that instead of picking it, I let it bloom freely.",
                    author: "Osho",
                },
                {
                    text: "If a goodbye hurts, it only means the time together was real and well spent.",
                    author: "Some bro",
                },
                {
                    text: "Imperfect action is better than perfect inaction",
                    author: "Unknown",
                },
                {
                    text: "It is normal to be sad after making the right decision",
                    author: "Unknown",
                },
                {
                    text: "Old keys do not open new doors",
                    author: "Unknown",
                },
                // {
                //     text: "aaaaa",
                //     author: "bbbb",
                // },
            ],
        };
    },
    computed: {
        randomQuote() {
            return this.quotes[Math.floor(Math.random() * this.quotes.length)];
        },
    },
};
</script>
