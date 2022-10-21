<template>
    <div class="teacher w-100 h-100 row m-0">
        <Header class="p-0" rule="teacher" />
        <router-view></router-view>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from "../components/Header/Header.vue"


export default {
    name: "TeacherComponent",
    components: { Header },
    computed: {
        ...mapGetters({ teacherRoutes: "getTeacherRoutes" }),
    },
};
</script>

<style scoped></style>
