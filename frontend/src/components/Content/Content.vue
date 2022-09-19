<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "ContentComponent",
    data() {
        return {};
    },
};
</script>

<style>
.content {
    height: 80vh;
    background-color: #fff;
}
</style>
