<template>
    <div
        class="csmodo"
        :class="{'md-animate': isAnimated}">
        <div class="csmodo__numbers">
            <div class="csmodo__num">
                <span class="csmodo__num-item">0</span>
                <span class="csmodo__num-item">1</span>
            </div>
            <div class="csmodo__num">
                <span
                    v-for="(item, index) in 10"
                    :key="'a' + index"
                    class="csmodo__num-item">
                    {{ index }}
                </span>
                <span class="csmodo__num-item">0</span>
            </div>
            <div class="csmodo__num">
                <span
                    v-for="(item, index) in 10"
                    :key="'b' + index"
                    class="csmodo__num-item">
                    {{ index }}
                </span>
                <span
                    v-for="(item, index) in 10"
                    :key="'c' + index"
                    class="csmodo__num-item">
                    {{ index }}
                </span>
                <span
                    v-for="(item, index) in 10"
                    :key="'d' + index"
                    class="csmodo__num-item">
                    {{ index }}
                </span>
                <span
                    v-for="(item, index) in 10"
                    :key="'e' + index"
                    class="csmodo__num-item">
                    {{ index }}
                </span>
                <span class="csmodo__num-item">0</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "comp-odometer",
    props: {
        isAnimated: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
