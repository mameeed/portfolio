<template>
    <section class="vghm-preview">
        <div class="vghm-preview__content container">
            <img
                class="vghm-preview__image"
                :src="require('@/assets/images/previews/' + backgroundImage + '.jpg')"
                alt="image" />

            <h1 class="vghm-preview__title">{{ title }}</h1>
            <p class="vghm-preview__desc">{{ subtitle }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: "section-preview",
    props: {
        backgroundImage: {
            type: String,
            default: "about",
        },
        title: {
            type: String,
            default: "Title of page",
        },
        subtitle: {
            type: String,
            default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, autem.",
        },
    },
};
</script>

<style lang="scss">
@import "./sectionPreview.scss";
</style>
