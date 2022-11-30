<template>
    <div
        class="information-detail position-relative border ms-2 py-4 row animate__fadeIn animate__animated"
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
                :src="student.urlAvatar"
                alt=""
                style="height: 100%; width: 100%"
                class="rounded-circle"
            />
        </div>
        <div class="col-7" style="min-height: 200px">
            <div class="col-12 my-1">
                <strong>Họ và tên: </strong> {{ student.name }}
            </div>
            <div class="col-12 my-1">
                <strong>Email: </strong> {{ student.email }}
            </div>
            <div class="col-12 my-1">
                <strong>Điện thoại: </strong> {{ student.phoneNumber }}
            </div>
            <div class="col-12 my-1">
                <strong>GPA: </strong> {{ student.gpa }}
            </div>
            <div class="col-12 my-1">
                <strong>Công nghệ: </strong> {{ student.languages }}
            </div>
            <div class="col-12 my-1">
                <strong>Dự án: </strong> {{ student.projects }}
            </div>
        </div>
        <div class="col-12"><strong>Thư: </strong> {{ student.message }}</div>
        <div class="col-12 d-flex justify-content-center mt-3">
            <button
                type="button"
                class="btn btn-danger me-3"
                data-bs-toggle="modal"
                data-bs-target="#ModalRefuse"
            >
                <i class="bi bi-x-octagon-fill"></i> Từ chối
            </button>
            <button
                type="button"
                class="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#ModalAccept"
            >
                <i class="bi bi-check-circle-fill"></i> Chấp nhận
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
    name: "InformationDetail",

    methods: {
        ...mapMutations({
            closeDetail: "CLOSE_DETAIL",
        }),
    },
    computed: mapGetters({ student: "getStudentDetail" }),
};
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
