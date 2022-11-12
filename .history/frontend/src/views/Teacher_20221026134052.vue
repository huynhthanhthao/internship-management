<template>
    <div class="teacher w-100 h-100 row m-0">
        <Header class="p-0" />
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "../components/Header/Header.vue";

export default {
    name: "TeacherComponent",
    components: { Header },
};
</script>

<style scoped></style>
