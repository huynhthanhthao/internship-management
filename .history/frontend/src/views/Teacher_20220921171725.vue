<template>
    <div class="teacher w-100 h-100 row m-0 p-0">
        <Header/>
        <TeacherInfor/>
        <TeacherUpdate/>
    </div>
</template>

<script>

import TeacherInfor from '@/components/Teacher/TeacherInfor.vue';
import Header from "../components/Header/Header.vue"
import { mapGetters } from 'vuex';
import TeacherUpdate from './teacher/TeacherUpdate.vue';
export default {
    name: "TeacherComponent",
    components: { TeacherInfor, Header, TeacherUpdate },
    computed: {
        ...mapGetters({teacherRoutes : "getTeacherRoutes"})
    }
};
</script>

<style>
</style>
