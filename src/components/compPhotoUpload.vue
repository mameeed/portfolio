<template>
    <div class="md-phinput">
        <h3 class="md-phinput__label">{{ inputLabel }}</h3>
        <div
            class="md-phinput__area"
            @drop="handleDrop"
            @dragover.prevent
            @click="handleClick">
            <img
                v-if="!uploaded"
                src="@/assets/icons/icon-addphoto.svg"
                class="md-phinput__area-icon"
                alt="add photo" />
            <span
                v-if="!uploaded"
                class="md-phinput__area-label">
                Choose or Drop
            </span>
            <img
                v-else
                class="md-phinput__area-image"
                :src="uploaded"
                alt="Uploaded Photo" />
            <input
                type="file"
                ref="fileInput"
                style="display: none"
                class="md-phinput__area-input"
                :name="name"
                :accept="accept"
                @change="handleFileChange" />
        </div>
    </div>
</template>

<script>
export default {
    name: "component-phinput",
    props: {
        inputLabel: {
            type: String,
            default: "Input label text",
        },
        accept: {
            type: String,
            default: "image/*",
        },
        name: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            uploaded: null,
        };
    },
    methods: {
        handleDrop(event) {
            event.preventDefault();
            const file = event.dataTransfer.files[0];
            const isValid = this.uploadPhoto(file);
            const normalizedFile = isValid ? file : null;
            this.$emit("modified", normalizedFile, isValid);
        },
        handleClick() {
            this.$refs.fileInput.click();
        },
        handleFileChange(event) {
            const file = event.target.files[0];
            const isValid = this.uploadPhoto(file);
            const normalizedFile = isValid ? file : null;
            this.$emit("modified", normalizedFile, isValid);
        },
        uploadPhoto(file) {
            if (file && file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onload = () => {
                    this.uploaded = reader.result;
                };
                reader.readAsDataURL(file);
                return true;
            }

            this.uploaded = null;
            if (this.$refs.fileInput) {
                this.$refs.fileInput.value = "";
            }

            return false;
        },
        setPhoto(file) {
            this.uploaded = file;
            if (!file && this.$refs.fileInput) {
                this.$refs.fileInput.value = "";
            }
        },
    },
};
</script>
