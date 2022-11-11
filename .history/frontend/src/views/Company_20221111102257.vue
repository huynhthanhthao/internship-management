<template>
    <div class="company">
        <Header />
        <router-view class="p-3"></router-view>
    </div>
</template>

<script>
import Header from "../components/Header/Header.vue";

export default {
    name: "CompanyComponent",
    components: { Header },
};
</script>

<style></style>
