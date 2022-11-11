<template>
    <div class="view p-4 animate__animated animate__fadeIn">
        <div class="infor">
            <div class="col-12 d-flex">
                <TitleStructure :title="`Thông tin cá nhân`" class="col-6 me-4"></TitleStructure>
                <TitleStructure :title="`Thông tin đơn vị thực tập`" class="col-6 title-detail"></TitleStructure>
            </div>
            <div class="row m-0 pt-3 pb-5 border-bottom justify-content-between">
                <InforStudent></InforStudent>
                <InforCompany></InforCompany>
            </div>
        </div>
        <InforInternship v-if="student.companyId!==null"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import InforInternship from '../../components/Teacher/ProgressAssess/InforInternship.vue';
import InforStudent from '../../components/GlobalComponent/InforStudent.vue';
import InforCompany from '../../components/GlobalComponent/InforCompany.vue';
import TitleStructure from "../../components/GlobalComponent/TitleStructure.vue";

export default {
    name: "TeacherView",
    components: { InforInternship, InforCompany, TitleStructure, InforStudent },
    computed:{
        ...mapGetters({student: "getStudentInfor"})
    },
    async created(){
        const studentId = this.$route.params.id;
        const rule = localStorage.getItem("rule").toLowerCase();
        const payload = {
            id: studentId,
            rule
        }
        // Dua thong tin sinh vien vao Store!
        await this.$store.dispatch("setStudentInfor", payload);

        // Dua thong tin don vi thuc tap vao Store!
        await this.$store.dispatch("setCompanyInfor", payload);

        // Dua thong tin tien do thuc tap vao Store!
        await this.$store.dispatch("setProgressInfor", payload);

        // Dua thong tin danh gia cua cong ty vao Store
        await this.$store.dispatch("setCompanyAssess", payload);
    },



}
</script>

<style scoped>
.table-progress {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>