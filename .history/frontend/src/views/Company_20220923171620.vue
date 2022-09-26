<template>
    <div class="company">
        <Header rule="company" />
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
