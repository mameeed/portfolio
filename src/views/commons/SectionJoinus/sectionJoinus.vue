<template>
    <section class="vgcm-joinus">
        <div class="vgcm-joinus__content">
            <h1 class="vgcm-joinus__title">Станьте частью нашей команды</h1>
            <p class="vgcm-joinus__desc">Присоединяйтесь к нашей дружной команде! Заполните анкету ниже, и наш отдел рекрутинга мгновенно свяжется с вами для дальнейших инструкций</p>

            <div
                ref="scene"
                class="vgcm-joinus__body">
                <div
                    data-depth="0.1"
                    class="vgcm-joinus__form-wrapper">
                    <div class="vgcm-joinus__form">
                        <CompInput
                            class="vgcm-joinus__form-input"
                            placeholder="Ваше Ф.И.О"
                            type="text" />
                        <CompInput
                            class="vgcm-joinus__form-input"
                            placeholder="Ваш номер телефона"
                            type="text" />
                        <CompInput
                            class="vgcm-joinus__form-input"
                            placeholder="Ваш Резюме (CV)"
                            type="text" />
                        <CompInput
                            class="vgcm-joinus__form-input"
                            placeholder="Ваша  почта"
                            type="text" />
                        <CompTextarea
                            class="vgcm-joinus__form-textarea"
                            placeholder="Текст сообщения..."
                            type="email" />
                        <CompButton
                            class="vgcm-joinus__form-btn"
                            :vgbtnText="'Оставить заявку'"
                            :vgbtnUid="'aaa004'" />
                    </div>
                </div>

                <div
                    v-for="item in 11"
                    :key="item"
                    :data-depth="Math.random() * 1.6 + 0.6"
                    class="vgcm-prlx__elem">
                    <img
                        :src="require(`@/assets/images/joinus/elem-${item}.svg`)"
                        alt="vector" />
                </div>

                <div
                    v-for="item in 4"
                    :key="item"
                    :data-depth="Math.random() * 0.4 + 0.1"
                    class="vgcm-prlx__item">
                    <img
                        :src="require(`@/assets/images/joinus/parallax-${item}.svg`)"
                        alt="vector" />
                </div>

                <!-- <div
                    ref="scene"
                    id="scene">
                    <div data-depth="0.2">
                        <img src="https:picsum.photos/100" />
                    </div>
                    <div data-depth="1">
                        <img src="https:picsum.photos/100" />
                    </div>
                    <div data-depth="2">
                        <img src="https:picsum.photos/100" />
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script>
import Parallax from "parallax-js";
import CompInput from "@/components/compInput.vue";
import CompTextarea from "@/components/compTextarea.vue";

export default {
    name: "section-joinus",
    components: {
        CompInput,
        CompTextarea,
    },
    mounted() {
        const scene = this.$refs.scene;
        this.parallax = new Parallax(scene);
    },
    beforeDestroy() {
        this.parallax.destroy();
    },
};
</script>

<style lang="scss">
@import "./sectionJoinus.scss";
</style>
