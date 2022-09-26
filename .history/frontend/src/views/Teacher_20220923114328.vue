<template>
    <div class="teacher w-100 h-100 row m-0">
        <Header class="p-0" rule="teacher" />
        <TeacherInfor />
        <TeacherUpdate />
        <TeacherManage/>
    </div>
</template>

<script>

import Header from "../components/Header/Header.vue"
import TeacherInfor from '@/components/Teacher/TeacherInfor.vue';
import TeacherManage from "./teacher/TeacherManage.vue";
import { mapGetters } from 'vuex';
import TeacherUpdate from './teacher/TeacherUpdate.vue';
export default {
    name: "TeacherComponent",
    components: { TeacherInfor, Header, TeacherUpdate, TeacherManage },
    computed: {
        ...mapGetters({ teacherRoutes: "getTeacherRoutes" }),
    },
};
</script>

<style></style>
