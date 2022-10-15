<template>
    <div class="detail-company" v-if="getDetailCompany">
        <div
            class="detail__infor position-relative border rounded-2 p-3 py-4 row col-12 animate__fadeIn animate__animated">
            <button type="button" class="btn-close position-absolute" aria-label="Close" @click="closeDetailCompany">
            </button>
            <div class="col-5 d-flex justify-content-center" style="height: 180px; width: 200px">
                <img src=https://yte.viettel.vn/upload/1000337/20210118/Viettel-without_slogan-01_34bf1bf614.pngg" alt=""
                    style="height: 100%; width: 100%" />
            </div>
            <div class="col-7 flex-grow-1" style="min-height: 200px">
                <div class="col-12 my-1"><strong>Đơn vị: </strong>Tập đoàn viễn thông quân đội</div>
                <div class="col-12 my-1">
                    <strong>Email: </strong> contacts@viettel.com.vn
                </div>
                <div class="col-12 my-1">
                    <strong>Số điện thoại: </strong> 0939382723
                </div>
                <div class="col-12 my-1">
                    <strong>Địa chỉ: </strong>  Láng Hạ, Hà Nội
                </div>
                <div class="col-12 my-1">
                    <strong>Về đơn vị: </strong> Tập đoàn thực hiện các dịch vụ công nghệ thông tin, kỹ thuật phần mềm với nhiều năm kinh nghiệm. Các vị trí mà đơn vị cần tìm kiếm là: Kỹ sư phần mềm (Java, Javascript, Python, PhP); Kiểm thử viên, An toàn thông tin.
                </div>
            </div>
            <div class="col-12 d-flex justify-content-around pt-2">
                <button type="button" class="btn btn-outline-secondary">
                    Đăng ký
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
    name: "DetailCompany",
    computed: {
        ...mapGetters({getDetailCompany: "getDetailCompany"}),
    },
    methods: {
        ...mapMutations({
            closeDetailCompany: "CLOSE_DETAIL_COMPANY"
        }),
    }
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
