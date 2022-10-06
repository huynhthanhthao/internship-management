<template>
    <div class="detail-company" v-if="getDetailCompany">
        <div
            class="detail__infor row position-relative border rounded-2 p-3 mx-2 animate__fadeIn animate__animated">
            <button type="button" class="btn-close position-absolute" aria-label="Close" @click="closeDetail">
            </button>
            <AvatarComponent :avatar="avatar" class="col-5 pe-0"/>
            <div class="col-7 ms-3">
                <div class="col-12 mt-0 mb-3"><strong>Đơn vị: </strong>Tập đoàn viễn thông quân đội</div>
                <div class="col-12 my-3">
                    <strong>Email: </strong> contacts@viettel.com.vn
                </div>
                <div class="col-12 my-3">
                    <strong>Số điện thoại: </strong> 0939382723
                </div>
                <div class="col-12 my-3">
                    <strong>Địa chỉ: </strong>  Láng Hạ, Hà Nội
                </div>
            </div>
            <div class="col-12 my-1 p-0">
                <strong>Về đơn vị: </strong> Tập đoàn thực hiện các dịch vụ công nghệ thông tin, kỹ thuật phần mềm với nhiều năm kinh nghiệm. Các vị trí mà đơn vị cần tìm kiếm là: Kỹ sư phần mềm (Java, Javascript, Python, PhP); Kiểm thử viên, An toàn thông tin.
            </div>
            <div class="col-12 d-flex justify-content-around pt-2">
                <button v-if="!sendRegister" type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#sendRegister">
                    <i class="bi bi-vector-pen"></i> &nbsp; Đăng ký
                </button>
                <button v-else type="button" disabled>
                    Đã đăng ký
                </button>
            </div>
        </div>
    </div>
    
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import AvatarComponent from "@/components/GlobalComponent/AvatarComponent.vue";
export default {
    name: "DetailCompany",
    data(){
        return {
            avatar: {
                path: "https://i.pinimg.com/originals/d8/64/da/d864dae9f4a980a58011d76a0e0d0212.png",
                height: 150,
                width: 150,
            },
            sendRegister: false,
        }
    },
    computed: {
        ...mapGetters({ getDetailCompany: "getDetailCompany" }),
    },
    methods: {
        ...mapMutations({
            closeDetailCompany: "CLOSE_DETAIL_COMPANY"
        }),
        closeDetail() {
            const headerDetail = document.querySelector(".header-detail");
            headerDetail.innerText = "Tổng quan";
            this.closeDetailCompany();
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
