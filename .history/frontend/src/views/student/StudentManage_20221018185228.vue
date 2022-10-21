<template>
   <div class="p-4 animate__animated animate__fadeIn">
    <div class="col-12 d-flex">
        <TitleStructure :title="`Danh sách tài khoản`" class="col-6"></TitleStructure>
        <TitleStructure :title="`Tổng quan`" class="col-6"></TitleStructure>
    </div>
    <div>
        <div class="infor row m-0 pt-3 pb-5 border-bottom justify-content-between">
            <ObjectInfor :infor="infor" />
            <div class="manage-internship col-6 d-flex justify-content-center align-items-center mb-4 mx-auto">
                <div class="col-3 me-5">
                    <router-link to="/student/manage/view-progress" class="router-link">
                        <button type="button" class="btn btn-primary btn-progress" @click="viewInforInternship($event)"> 
                            <i class="bi bi-eye fs-2 me-2"></i> 
                            <span>Xem tiến độ thực tập</span>
                        </button>
                    </router-link>
                </div>
                <div class="col-3 me-5">
                    <router-link to="/student/manage/view-assess-company" class="router-link">
                        <button type="button" class="btn btn-primary btn-company" @click="viewInforInternship($event)">
                            <i class="bi bi-eye fs-2 me-2"></i>
                            <span>Xem đánh giá của đơn vị</span>
                        </button>
                    </router-link>
                </div>
                <div class="col-3">
                    <router-link to="/student/manage/view-assess-teacher" class="router-link">
                        <button type="button" class="btn btn-primary btn-teacher" @click="viewInforInternship($event)">
                            <i class="bi bi-eye fs-2 me-2"></i>
                            <span>Xem đánh giá của giảng viên</span>
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
   </div>
</template>

<script>
import TitleStructure from "@/components/GlobalComponent/TitleStructure.vue"
import ObjectInfor from '@/components/GlobalComponent/ObjectInfor.vue';

export default {
    components: { ObjectInfor, TitleStructure },
    data(){
        return {
            infor: {
                "Đơn vị": "Tập đoàn viễn thông quân đội Viettel",
                "Email": "contacts@viettel.com.vn",
                "Điện thoại": "0939382723",
                "Địa chỉ": "Xuân Khánh, Ninh Kiều, Cần Thơ"
            }
        }
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
    methods:{
        clearDisabled(){
           const buttons = document.querySelectorAll(".manage-internship button");
           buttons.forEach((button) => {
            button.disabled = false;
           })
        },
        viewInforInternship(event){
            this.clearDisabled();
            event.currentTarget.disabled = true;
        },
    }
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