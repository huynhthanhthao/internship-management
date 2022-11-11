<template>
    <div class="teacher-manage p-4">
        <div class="col-12 d-flex">
            <TitleStructure 
                :title="`Danh sách sinh viên`" 
                class="col-6 me-4"
            >
                <StudentFilter/>
            </TitleStructure>
            <TitleStructure
                :title="`Tổng quan`"
                class="col-6 title-detail"
            >
            </TitleStructure>
        </div>
        <div class="teacher-manage__content row">
            <div class="teacher-student-list col-6">
                <div class="teacher-student-item">
                    <StudentItem v-for="(student, index) in currentList" :key="index" :index="`id${index}`" :student="student" class="me-3"> 
                    </StudentItem>
                </div>
            </div>
            <div class="view-detail col-6 flex-grow-1">
                <Overview />
                <DetailStudent></DetailStudent>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import config from "@/config";
import { mapGetters, mapActions } from "vuex";
import Overview from "@/components/Teacher/Manage/Overview.vue";
import DetailStudent from "@/components/Teacher/Manage/DetailStudent.vue";
import TitleStructure from "@/components/GlobalComponent/TitleStructure.vue";
import StudentFilter from "@/components/StudentFilter/StudentFilter.vue";
import StudentItem from "../../components/Teacher/Manage/StudentItem.vue"

export default {
    name: "TeacherManage",
    components: {
        Overview,
        DetailStudent,
        StudentFilter,
        TitleStructure,
        StudentItem
    },
    computed: {
        ...mapGetters({ account: "getAccount", currentList: "getCurrentList"}),
    }
    ,

    methods: mapActions(["setAccount"]),
    
    async created() {
        
        //Tao lai account khi refresh
        await this.setAccount();

        const token = localStorage.getItem("token");
        
        // Lay danh sach lop <classManagement> cua giang vien!
        const response = await axios.get(
            `${config.domain}/teacher/get-class-list`,
            {
                headers: { Authorization: "Bearer " + token },
                params: { teacherId: this.account.id},
            }
        );
        const classList = response.data.result;

        //Lay ten lop tu danh sach lop cua giang vien!
        const className = [];
        classList.forEach((classManagement) => {
            if (!className.includes(classManagement.className)) {
                className.push(classManagement.className)
            }
        });
        this.$store.commit("SET_CLASS_NAME", className);
        
        //Lay danh sach sinh vien tu ten lop cua giang vien
        const studentList = [];
        for (let i=0;i<className.length; ++i){
            const response = await axios.get(
                `${config.domain}/teacher/get-student-list`,
                {
                    headers: { Authorization: "Bearer " + token },
                    params: { className: className[i] },
                }
            );
            const tempt = response.data.result
            studentList.push(...tempt);
        }

        this.$store.commit("SET_STUDENT_LIST", studentList);
        this.$store.commit("SET_CURRENT_LIST", studentList);
    },
    mounted(){
        // Dong cac detail khi accordion khong mo.
        const accordion = document.querySelector(".accordion-collapse.show");
        if(!accordion){
            this.$store.commit("CLOSE_DETAIL_STUDENT");
        }
    }

};
</script>

<style scoped>
    .teacher-student-item {
        height: 420px;
        overflow-y: scroll;
    }
    .view-detail {
        width: 49%;
    }
</style>
