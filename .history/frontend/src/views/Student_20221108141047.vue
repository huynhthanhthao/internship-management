<template>
    <div class="student w-100 h-100 row m-0">
        <Header class="p-0" />
        <router-view></router-view>
        <InforStudent></InforStudent>
    </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import InforStudent from "../components/Student/Infor/InforUser.vue";
export default {
    name: "StudentComponent",
    components: { Header, InforStudent },
};
</script>

<style></style>
