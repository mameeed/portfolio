<template>
    <div class="md-select__holder">
        <div
            class="md-select"
            :class="{opened: isOpened}">
            <div
                class="md-select__toggler"
                @click="isOpened = !isOpened">
                <div class="md-select__toggler-body">
                    <p
                        v-if="selectSelected"
                        class="md-select__toggler-content">
                        {{ selectSelected.name }}
                    </p>
                    <p
                        class="md-select__toggler-label"
                        :class="{filled: selectSelected}">
                        {{ selectLabel }}
                    </p>
                </div>
                <button class="md-select__toggler-btn"></button>
            </div>
            <div
                ref="scrollBody"
                class="md-select__body">
                <div class="md-select__list">
                    <div
                        class="md-select__list-item"
                        v-for="(item, index) in selectOptions"
                        :key="index + 'key'"
                        @click="setActive(item)">
                        <p>{{ item.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "component-select",
    props: {
        selectLabel: {
            type: String,
            default: "Select label goes here",
        },
        selectOptions: {
            type: Array,
            default: () => [
                {
                    id: "optionid1",
                    name: "Tashkent",
                },
                {
                    id: "optionid2",
                    name: "Bukhara",
                },
                {
                    id: "optionid3",
                    name: "Samarkand",
                },
                {
                    id: "optionid4",
                    name: "Navoi",
                },
                {
                    id: "optionid5",
                    name: "Gulistan",
                },
                {
                    id: "optionid6",
                    name: "Andijan",
                },
            ],
        },
        selectSelected: {
            type: Object,
            default: null,
        },
    },

    data() {
        return {
            isOpened: false,
        };
    },

    mounted() {
        this.closeOnOutsideClick();
    },

    beforeDestroy() {
        this.removeOutsideClickListener();
    },

    beforeUnmount() {
        this.removeOutsideClickListener();
    },
    methods: {
        closeOnOutsideClick() {
            if (!this._handleOutsideClick) {
                this._handleOutsideClick = (event) => {
                    const isOutside = this.$el && !this.$el.contains(event.target);
                    if (isOutside) this.isOpened = false;
                };
            }

            document.addEventListener("click", this._handleOutsideClick);
        },

        removeOutsideClickListener() {
            if (this._handleOutsideClick) {
                document.removeEventListener("click", this._handleOutsideClick);
            }
        },

        setActive(item) {
            this.$emit("selected", item);
            this.isOpened = false;
        },
    },
};
</script>
