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
import TeacherHome from "./teacher/TeacherHome.vue";


export default {
    name: "TeacherComponent",
    components: { TeacherInfor, Header, TeacherHome },
    computed: {
        ...mapGetters({ teacherRoutes: "getTeacherRoutes" }),
        route1(){
            console.log(this.$route.params.id);
        }
    },
};
</script>

<style></style>
