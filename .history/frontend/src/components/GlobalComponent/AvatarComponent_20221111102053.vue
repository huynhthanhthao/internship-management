<template>
    <div
        class="avatar rounded-circle ps-0 position-relative border border-2 border-primary"
        :style="style"
    ></div>
</template>

<script>
export default {
    name: "AvatarComponent",
    data() {
        return {
            path: {
                type: String,
                default: "https://cdn-icons-png.flaticon.com/512/64/64572.png",
            },
            height: {
                type: Number,
                default: 100,
            },
            width: {
                type: Number,
                default: 100,
            },
        };
    },
    props: {
        avatar: {
            path: {
                type: String,
            },
            height: {
                type: Number,
            },
            width: {
                type: Number,
            },
        },
    },
    computed: {
        style() {
            return this.avatar
                ? {
                      "--path": `url("${this.avatar.path}")`,
                      "--width": this.avatar.width + "px",
                      "--height": this.avatar.height + "px",
                  }
                : {
                      "--path": `url("${this.path}")`,
                      "--width": this.width + "px",
                      "--height": this.height + "px",
                  };
        },
    },
};
</script>

<style scoped>
.avatar {
    background: var(--path) no-repeat center/ cover;
    height: var(--height);
    width: var(--width);
}
</style>
