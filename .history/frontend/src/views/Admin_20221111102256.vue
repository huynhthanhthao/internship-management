<template>
    <div class="admin">
        <Header />
        <router-view class="px-5 py-4"></router-view>
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
