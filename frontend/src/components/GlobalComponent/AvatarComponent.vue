<template>
    <div class="rounded-circle ps-0 position-relative">
        <img
            class="avatar rounded-circle ps-0 position-relative border border-2 border-primary"
            :src="urlAvatar"
        />
    </div>
</template>

<script>
export default {
    name: "AvatarComponent",
    props: ["urlAvatar"],
};
</script>

<style scoped>
.avatar {
    height: 190px;
    width: 190px;
}
</style>
