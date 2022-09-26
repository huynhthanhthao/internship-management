<template>
  <div class="teacher-detail-student" v-if="getDetailStudent">
    <div
        class="information-detail position-relative border p-3 py-4 row animate__fadeIn animate__animated"
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
        <div class="col-7" style="min-height: 200px">
            <div class="col-12 my-1">
                <strong>Họ và tên: </strong> Huynh Thanh Thao
            </div>
            <div class="col-12 my-1">
                <strong>Email: </strong> htthao@gmail.com
            </div>
            <div class="col-12 my-1">
                <strong>Điện thoại: </strong> 03939 100 100
            </div>
            <div class="col-12 my-1"><strong>GPA: </strong> 3.7</div>
            <div class="col-12 my-1">
                <strong>Ngôn ngữ: </strong> HTML, CSS, JavaScript
            </div>
            <div class="col-12 my-1">
                <strong>Dự án: </strong> Blog Website, Player Music,...
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
import { mapGetters } from 'vuex'
export default {
    name: "TeacherDetailStudent",
    computed: {
      ...mapGetters(["getDetailStudent"])
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