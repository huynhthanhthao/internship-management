<template>
    <div class="teacher w-100 h-100 row m-0">
        <Header class="p-0" rule="teacher" />
        <TeacherInfor />
        <div class="teacher-home">
            <div class="students-register row p-4 animate__fadeIn animate__animated">
                <div class="col-12">
                    <div class="d-flex">
                        <div class="col-6">
                            <h2 class="header-list label m-0 p-2 pt-4 fw-bold" style="color: #555555">
                                Danh sách sinh viên
        
                            </h2>
                            <div class="line my-3"></div>
                        </div>
                        <div class="col-6">
                            <h2 class="header-list label m-0 p-2 pt-4 fw-bold" style="color: #555555">
                                Tổng quan
        
                            </h2>
                            <div class="line my-3"></div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <TeacherStudentList />
                </div>
                <div class="col-6">
                    <TeacherOverview />
                    <TeacherDetailStudent />
                </div>
            </div>
        </div>
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
    },
};
</script>

<style></style>
