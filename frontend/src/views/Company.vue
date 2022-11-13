<template>
    <div class="company">
        <Header />
        <router-view class="p-3"></router-view>
        <InforStudent></InforStudent>
    </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
import InforStudent from "../components/Student/Infor/InforUser.vue";

export default {
    name: "CompanyComponent",
    components: { Header, InforStudent },
};
</script>

<style></style>
