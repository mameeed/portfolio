<template>
    <div class="md-input__wrapper">
        <input
            class="md-input"
            :class="inputClass"
            :value="modelValue"
            @input="updateValue"
            @blur="handleBlur"
            :placeholder="placeholder"
            :type="type" />
        <p class="md-input__label">{{ placeholder }}</p>
    </div>
</template>

<script>
export default {
    name: "component-input",
    props: {
        value: {
            type: [String, Number],
            default: "",
        },
        inputClass: {
            type: [String, Array, Object],
            default: "",
        },
        handleBlur: {
            type: Function,
            default: () => {},
        },
        mask: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: "text",
        },
        name: {
            type: String,
            default: "",
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
