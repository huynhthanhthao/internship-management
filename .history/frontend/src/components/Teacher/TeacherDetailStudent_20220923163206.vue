<template>
  <div class="teacher-detail-student" v-if="getDetailStudent">
    <div
        class="information-detail position-relative border p-3 py-4 row col-12 animate__fadeIn animate__animated "
    >
        <button
            type="button"
            class="btn-close position-absolute"
            aria-label="Close"
            @click="closeDetail"
        ></button>
        <div
            class="col-5 d-flex justify-content-center"
            style="height: 180px; width: 200px"
        >
            <img
                src="https://cdn-icons-png.flaticon.com/512/2302/2302834.png"
                alt=""
                style="height: 100%; width: 100%"
            />
        </div>
        <div class="col-7 flex-grow-1" style="min-height: 200px">
            <div class="col-12 my-1">
                <strong>MSSV: </strong> B1906570
            </div>
            <div class="col-12 my-1">
                <strong>Họ và tên: </strong> Huỳnh Thanh Thảo
            </div>
            <div class="col-12 my-1">
                <strong>Email: </strong> thaoB1906758@student.ctu.edu.vn
            </div>
            <div class="col-12 my-1">
              <strong>Đơn vị thực tập: </strong> Công ty TNHH MTV An Toàn Khu 
            </div>
        </div>
        <div class="col-12">
            <strong>Thư: </strong> She wasn't in so I left a message on her
            answerphone. Can you give Jo a message for me? Tell her I've booked
            a tennis court for 6.30. When I got home, I found a mysterious
            message sellotaped to the front door. The president has sent a
            message of sympathy to the relatives of the dead soldiers. The
            message on the card said 'Be my Valentine'.
        </div>
        <div class="col-12 d-flex justify-content-center mt-3">
            <button
                type="button"
                class="btn btn-danger me-3"
                data-bs-toggle="modal"
                data-bs-target="#Modal"
            >
                <i class="bi bi-x-octagon-fill"></i> Từ chối
            </button>
            <button
                type="button"
                class="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#Modal"
            >
                <i class="bi bi-check-circle-fill"></i> Chấp nhận
            </button>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: "TeacherDetailStudent",
    computed: {
      ...mapGetters(["getDetailStudent"])
    },
    methods: {
      ...mapMutations({closeDetail:"CLOSE_DETAIL_STUDENT"})
    }
}
</script>

<style>
  .information-detail {
    min-height: 300px;
}

.btn-close {
    top: 10px;
    right: 10px;
}
</style>