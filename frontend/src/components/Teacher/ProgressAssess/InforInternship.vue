<template>
<div class="infor-internship">
    <div class="infor__header py-5 border-bottom">
        <div class="infor__title m-0 d-flex flex-column align-items-center">
            <h2 class="label fw-bold" style="color: #555555">
                Quản lý thực tập
            </h2>
            <div class="line my-3"></div>
        </div>
        <div class="infor__switch row mt-4 justify-content-center">
            <div class="col-2 me-2">
                <router-link :to="'/teacher/view/progress/'+id" class="router-link">
                    <button type="button" class="btn btn-primary btn-progress" @click="viewInforInternship($event)">
                        <i class="bi bi-calendar-week fs-4 me-2"></i>
                        <span>Xem tiến độ thực tập</span>
                    </button>
                </router-link>
            </div>
            <div class="col-2 me-2">
                <router-link :to="'/teacher/view/company-assess/'+id" class="router-link">
                    <button type="button" class="btn btn-primary btn-company" @click="viewInforInternship($event)">
                        <i class="bi bi-clipboard-check fs-4 me-2"></i>
                        <span>Xem đánh giá của đơn vị</span>
                    </button>
                </router-link>
            </div>
            <div class="col-2">
                <router-link :to="'/teacher/view/assess-student/'+id" class="router-link">
                    <button type="button" class="btn btn-warning text-white btn-teacher" @click="viewInforInternship($event)">
                        <i class="bi bi-pencil-square fs-4 me-2"></i>
                        <span>Đánh giá kết quả thực tập</span>
                    </button>
                </router-link>
            </div>
        </div>
    </div>
    <div class="infor__content">
        <router-view></router-view> 
    </div>
</div>
</template>

<script>
export default {
    name: "InforInternShip",
    data(){
        return {
            id: ""
        }
    },
    methods: {
        clearDisabled() {
            const buttons = document.querySelectorAll(".infor-internship button");
            buttons.forEach((button) => {
                button.disabled = false;
            })
        },
        viewInforInternship(event) {
            this.clearDisabled();
            event.currentTarget.disabled = true;
        },
    },
    created() {
        this.id = this.$route.params.id;
    },
    mounted() {
        const viewProgress = document.querySelector(".view-progress");
        const viewAssessCompany = document.querySelector(".view-assess-company");
        const AssessTeacher = document.querySelector(".assess-teacher");
        this.clearDisabled();
        if (viewProgress) {
            const btnProgress = document.querySelector(".btn-progress");
            btnProgress.disabled = true;
        }
        if (viewAssessCompany) {
            const btnCompany = document.querySelector(".btn-company");
            btnCompany.disabled = true;
        }
        if (AssessTeacher) {
            const btnTeacher = document.querySelector(".btn-teacher");
            btnTeacher.disabled = true;
        }
    }
}
</script>
<style scoped>
    .btn {
        height: 80px;
        width: 180px;
        display: flex;
        align-items: center;
    }

    .router-link {
            cursor: default;
            text-decoration: none;
    }
</style>