<template>
    <div class="detail-company">
        <div
            class="detail__infor position-relative border rounded-2 p-3 py-4 row col-12 animate__fadeIn animate__animated">
            <button type="button" class="btn-close position-absolute" aria-label="Close" @click="closeDetail">
            </button>
            <div class="col-5 d-flex justify-content-center" style="height: 180px; width: 200px">
                <img src="https://cdn-icons-png.flaticon.com/512/2302/2302834.png" alt=""
                    style="height: 100%; width: 100%" />
            </div>
            <div class="col-7 flex-grow-1" style="min-height: 200px">
                <div class="col-12 my-1"><strong>Đơn vị: </strong>Tập đoàn viênx thông quân đội</div>
                <div class="col-12 my-1">
                    <strong>Email: </strong> contacts@viettel.com.vn
                </div>
                <div class="col-12 my-1">
                    <strong>Số điện thoại: </strong> 0939382723
                </div>
                <div class="col-12 my-1">
                    <strong>Địa chỉ </strong>  Láng Hạ, Hà Nội
                </div>
            </div>
            <div class="col-12 d-flex justify-content-around">
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
    name: "DetailStudent",
    computed: {
        ...mapGetters(["getDetailStudent"]),
    },
    methods: {
        ...mapMutations({
            closeDetailStudent: "CLOSE_DETAIL_STUDENT",
            showOverview: "SHOW_OVERVIEW_TEACHER"
        }),

        closeDetail() {
            const headerDetail = document.querySelector(".header-detail");
            headerDetail.innerText = "Tổng quan";
            this.closeDetailStudent();
            this.showOverview();
        }
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
