<template>
<div class="teacher-detail-student" v-if="getDetailStudent">
    <div class="information-detail position-relative border rounded-2 p-3 py-4 row col-12 animate__fadeIn animate__animated" >
        <button
            type="button"
            class="btn-close position-absolute"
            aria-label="Close"
            @click="closeDetail"
        >
        </button>
        <div
            class="col-5 d-flex justify-content-center"
            style="height: 180px; width: 200px">
            <img
                src="https://cdn-icons-png.flaticon.com/512/2302/2302834.png"
                alt=""
                style="height: 100%; width: 100%"
            />
        </div>
        <div class="col-7 flex-grow-1" style="min-height: 200px">
            <div class="col-12 my-1"><strong>MSSV: </strong> B1906570</div>
            <div class="col-12 my-1">
                <strong>Họ và tên: </strong> Huỳnh Thanh Thảo
            </div>
            <div class="col-12 my-1">
                <strong>Email: </strong> thaoB1906758@student.ctu.edu.vn
            </div>
            <div class="col-12 my-1">
                <strong>Đơn vị thực tập: </strong> Công ty TNHH MTV An Toàn
                Khu
            </div>
        </div>
        <div class="col-12 d-flex justify-content-around">
            <router-link to="/teacher/home/view-progress/id">
                <button type="button" class="btn btn-outline-secondary" >
                Xem tiến độ thực tập
                </button>
            </router-link >
            <router-link to="/teacher/home/view-assess/id">
                <button type="button" class="btn btn-outline-secondary">Xem đánh giá của đơn vị</button>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
    name: "TeacherDetailStudent",
    computed: {
        ...mapGetters(["getDetailStudent"]),
    },
    methods: {
      ...mapMutations({
        closeDetailStudent:"CLOSE_DETAIL_STUDENT", 
        showOverview: "SHOW_OVERVIEW"
      }),

      closeDetail(){
        const headerList = document.querySelectorAll(".header-list");
        headerList[1].innerText = "Tổng quan";
        this.closeDetailStudent();
        this.showOverview();
      }
    }
}
</script>

<style scoped>
.information-detail {
    min-height: 300px;
}

.btn-close {
    top: 10px;
    right: 10px;
}
</style>
