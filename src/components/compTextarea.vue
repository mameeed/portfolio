<template>
    <div class="md-textarea__wrapper">
        <textarea
            class="md-textarea"
            :class="textareaClass"
            :value="modelValue"
            @input="updateValue"
            @blur="handleBlur"
            :placeholder="placeholder"
            :name="name"
            :rows="rows"></textarea>

        <p class="md-textarea__label">{{ placeholder }}</p>
    </div>
</template>

<script>
export default {
    name: "component-textarea",
    props: {
        value: {
            type: [String, Number],
            default: "",
        },
        textareaClass: {
            type: [String, Array, Object],
            default: "",
        },
        handleBlur: {
            type: Function,
            default: () => {},
        },
        placeholder: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "",
        },
        rows: {
            type: Number,
            default: 4,
        },
    },
    computed: {
        modelValue: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
        },
    },
    methods: {
        updateValue(event) {
            this.modelValue = event.target.value;
        },
        onBlur(event) {
            this.handleBlur(event);
        },
    },
};
</script>
