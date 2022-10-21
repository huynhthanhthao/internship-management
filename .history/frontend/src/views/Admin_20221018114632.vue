<template>
    <div class="admin">
        <Header rule="admin" />
        <router-view class="p-3"></router-view>
    </div>
</template>

<script>
import Header from "../components/Header/Header.vue";

export default {
    name: "AdminHome",
    components: { Header },
};
</script>

<style></style>
