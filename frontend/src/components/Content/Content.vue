<template>
    <div class="content">
        <router-view></router-view>
        <Toast />
    </div>
</template>

<script>
import Toast from "../Toast/Toast.vue";
export default {
    name: "ContentComponent",
    data() {
        return {};
    },
    components: { Toast },
};
</script>

<style>
.content {
    min-height: 100vh;
    background-color: #fff;
}
</style>
