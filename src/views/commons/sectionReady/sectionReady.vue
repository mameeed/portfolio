<template>
    <section class="vgcm-ready">
        <div class="vgcm-ready__content container">
            <div class="vgcm-ready__info">
                <h1 class="vgcm-ready__info-title">Готовы отправиться в путешествие мечты?</h1>
                <p class="vgcm-ready__info-desc">Оставьте заявку — мы свяжемся с вами и поможем спланировать идеальное путешествие. Персональный подход, искренний интерес и забота — вот с чего начинается каждое наше путешествие.</p>
                <CompButton
                    :vgbtnText="'Получить консультацию'"
                    vgbtnUid="aaa003" />
            </div>

            <div class="vgcm-ready__interactive">
                <img
                    class="vgcm-ready__interactive-img"
                    src="https://picsum.photos/400"
                    alt="image" />
                <img
                    class="vgcm-ready__interactive-img"
                    src="https://picsum.photos/400"
                    alt="image" />
                <img
                    class="vgcm-ready__interactive-img"
                    src="https://picsum.photos/400"
                    alt="image" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "section-ready",
    components: {},
    data() {
        return {};
    },
    mounted() {},
    methods: {},
};
</script>

<style lang="scss">
@import "./sectionReady.scss";
</style>
