<template>
    <div class="teacher w-100 h-100 row m-0">
        <Header class="p-0" rule="teacher" />
        <InforTeacher/>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from "../components/Header/Header.vue"
import InforTeacher from "@/components/Teacher/Infor/InforTeacher.vue";


export default {
    name: "TeacherComponent",
    components: { Header, InforTeacher },
    computed: {
        ...mapGetters({ teacherRoutes: "getTeacherRoutes" }),
    },
};
</script>

<style scoped></style>
