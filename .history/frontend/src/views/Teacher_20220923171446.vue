<template>
    <div class="teacher w-100 h-100 row m-0">
        <Header class="p-0" rule="teacher" />
        <TeacherInfor />
        <router-view></router-view>
        <TeacherManage/>
        <router-view></router-view>
    </div>
</template>

<script>

import Header from "../components/Header/Header.vue"
import TeacherInfor from '@/components/Teacher/TeacherInfor.vue';
import TeacherManage from "./teacher/TeacherHome.vue";
import { mapGetters } from 'vuex';

export default {
    name: "TeacherComponent",
    components: { TeacherInfor, Header, TeacherManage },
    computed: {
        ...mapGetters({ teacherRoutes: "getTeacherRoutes" }),
    },
};
</script>

<style></style>
