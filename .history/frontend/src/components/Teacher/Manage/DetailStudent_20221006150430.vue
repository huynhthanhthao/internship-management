<template>
<div class="detail-student" v-if="getDetailStudent">
    <div class="detail__infor position-relative border rounded-2 p-3 row animate__fadeIn animate__animated m-0" >
        <button
            type="button"
            class="btn-close position-absolute"
            aria-label="Close"
            @click="closeDetail"
        >
        </button>
        <AvatarComponent :avatar="avatar" class="col-5"/>
        <div class="col-7 flex-grow-1">
            <div class="col-12 mb-3"><strong>MSSV: </strong> B1906570</div>
            <div class="col-12 mb-3">
                <strong>Họ và tên: </strong> Huỳnh Thanh Thảo
            </div>
            <div class="col-12 mb-3">
                <strong>Email: </strong> thaoB1906758@student.ctu.edu.vn
            </div>
            <div class="col-12 mb-3">
                <strong>Đơn vị thực tập: </strong> Công ty TNHH MTV An Toàn
                Khu
            </div>
        </div>
        <div class="row d-flex justify-content-around">
            <router-link to="/teacher/view/progress/id">
                <button type="button" class="btn btn-primary" >
                Xem thông tin thực tập
                </button>
            </router-link >
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import AvatarComponent from "@/components/GlobalComponent/AvatarComponent.vue";
export default {
    name: "DetailStudent",
    data(){
        return{
            avatar:{
                path: "https://cdn-icons-png.flaticon.com/512/2302/2302834.png",
                height: 150,
                width: 150
            }
        }
    },
    computed: {
        ...mapGetters(["getDetailStudent"]),
    },
    methods: {
        ...mapMutations({
            closeDetailStudent: "CLOSE_DETAIL_STUDENT",
        }),
        closeDetail() {
            const headerDetail = document.querySelector(".header-detail");
            headerDetail.innerText = "Tổng quan";
            this.closeDetailStudent();
        }
    },
    components: { AvatarComponent }
}
</script>

<style scoped>
.detail__infor {
    min-height: 300px;
}

.btn-close {
    top: 10px;
    right: 10px;
}
</style>
