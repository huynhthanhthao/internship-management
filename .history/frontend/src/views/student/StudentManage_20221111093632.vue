<template>
  <div >
    <div class="p-4 animate__animated animate__fadeIn" v-if="student.companyId !== null">
        <div class="col-12 d-flex">
            <TitleStructure :title="`Đơn vị thực tập`" class="col-6 me-4"></TitleStructure>
            <TitleStructure :title="`Quản lý thực tập`" class="col-6"></TitleStructure>
        </div>
        <div>
            <div class="infor row m-0 pt-3 pb-5 border-bottom justify-content-between">
                <InforCompany></InforCompany>
                <div class="manage-internship col-6 d-flex justify-content-center align-items-center mb-4 mx-auto">
                    <div class="col-3 me-5">
                        <router-link to="/student/manage/view-progress" class="router-link">
                            <button type="button" class="btn btn-primary btn-progress" @click="viewInforInternship($event)">
                                <i class="bi bi-calendar-week fs-2 me-2"></i>
                                <span>Xem tiến độ thực tập</span>
                            </button>
                        </router-link>
                    </div>
                    <div class="col-3 me-5">
                        <router-link to="/student/manage/view-assess-company" class="router-link">
                            <button type="button" class="btn btn-primary btn-company" @click="viewInforInternship($event)">
                                <i class="bi bi-clipboard-check fs-2 me-2"></i>
                                <span>Xem đánh giá của đơn vị</span>
                            </button>
                        </router-link>
                    </div>
                    <div class="col-3">
                        <router-link to="/student/manage/view-assess-teacher" class="router-link">
                            <button type="button" class="btn btn-primary btn-teacher" @click="viewInforInternship($event)">
                                <i class="bi bi-person-video3 fs-2 me-2"></i>
                                <span>Xem đánh giá của giảng viên</span>
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
    <div class=" mt-5 text-center no-info " v-else>
        <img class="mt-5" src="https://cdn-icons-png.flaticon.com/512/4076/4076389.png" alt="" style="width: 300px">
        <h3 class="text-warning mt-4">Sinh viên chưa tham gia thực tập</h3>
    </div>
  </div>
</template>

<script>
import TitleStructure from "@/components/GlobalComponent/TitleStructure.vue"
import InforCompany from "../../components/GlobalComponent/InforCompany.vue";
import { mapGetters } from 'vuex';
export default {
    components: {  TitleStructure, InforCompany },

    computed: {
        ...mapGetters({account: "getAccount", student:"getStudentInfor"})
    },

    methods: {
        clearDisabled() {
            const buttons = document.querySelectorAll(".manage-internship button");
            buttons.forEach((button) => {
                button.disabled = false;
            })
        },
        viewInforInternship(event) {
            this.clearDisabled();
            event.currentTarget.disabled = true;
        },
    },

    async created(){
        await this.$store.dispatch("setAccount");
        const rule = localStorage.getItem("rule").toLowerCase();
        const payload = {id: this.account.id, rule};

        // Dat cac thong tin thuc tap cua sinh vien vao Store de su dung.
        await this.$store.dispatch("setStudentInfor", payload);
        await this.$store.dispatch("setCompanyInfor", payload);
        await this.$store.dispatch("setProgressInfor", payload);
        await this.$store.dispatch("setCompanyAssess", payload);
        await this.$store.dispatch("setTeacherAssess", payload);
    },
    mounted(){
        const viewProgress = document.querySelector(".view-progress");
        const viewAssessCompany = document.querySelector(".view-assess-company");
        const viewAssessTeacher = document.querySelector(".view-assess-teacher");
        this.clearDisabled();
        if (viewProgress){
            const btnProgress = document.querySelector(".btn-progress");
            btnProgress.disabled = true;
        }
        if(viewAssessCompany) {
            const btnCompany = document.querySelector(".btn-company");
            btnCompany.disabled = true;
        }
        if(viewAssessTeacher) {
            const btnTeacher = document.querySelector(".btn-teacher");
            btnTeacher.disabled = true;
        }
    },
}
</script>

<style scoped>
    .router-link {
        cursor: default;
        text-decoration: none;
    }
    
    .btn{
        height: 90px;
        width: 180px;
        display: flex;
        align-items: center;
    }

</style>