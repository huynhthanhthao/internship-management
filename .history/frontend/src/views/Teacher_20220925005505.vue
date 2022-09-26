<template>
    <div class="teacher w-100 h-100 row m-0">
        <Header class="p-0" rule="teacher" />
        <TeacherInfor />
        <TeacherHome/>
        <router-view></router-view>
    </div>
</template>

<script>

import Header from "../components/Header/Header.vue"
import TeacherInfor from '@/components/Teacher/TeacherInfor.vue';
import { mapGetters } from 'vuex';
import TeacherStudentList from '@/components/Teacher/TeacherStudentList.vue';
import TeacherDetailStudent from '@/components/Teacher/TeacherDetailStudent.vue';
import { mapMutations } from 'vuex';
import TeacherOverview from '@/components/Teacher/TeacherOverview.vue';
import TeacherHome from "./teacher/TeacherHome.vue";
export default {
    name: "TeacherComponent",
    components: { TeacherInfor, Header, TeacherStudentList, TeacherDetailStudent, TeacherOverview, TeacherHome },
    computed: {
        ...mapGetters({ teacherRoutes: "getTeacherRoutes" }),
    },
    methods: {
        ...mapMutations({ getUpdateTeacher: "getUpdateTeacher" })
    }
};
</script>

<style></style>
