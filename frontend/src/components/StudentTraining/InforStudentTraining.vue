<template>
    <div class="training-detail">
        <div class="training-detail-student">
            <div class="col-12 row p-3 align-items-center border rounded-2">
                <div
                    class="col-5 d-flex justify-content-center"
                    style="height: 200px; width: 200px"
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
                        <strong>Email: </strong>
                        thaoB1906758@student.ctu.edu.vn
                    </div>
                    <div class="col-12 my-1">
                        <strong>Vị trí thực tập: </strong>
                        Frontend Fresher
                    </div>
                    <div class="col-12 my-1">
                        <strong>Tiến độ: </strong>
                        <div class="progress w-100 my-3">
                            <div class="complete bg-success"></div>
                        </div>
                    </div>
                    <button
                        v-if="!assessedResult"
                        type="button"
                        class="btn btn-outline-warning"
                        data-bs-toggle="modal"
                        data-bs-target="#AssessResultModal"
                    >
                        <i class="bi bi-pencil-square"></i> Đánh giá kết quả
                        thực tập
                    </button>
                    <button
                        v-else
                        type="button"
                        class="btn btn-outline-secondary"
                    >
                        <i class="bi bi-eye-fill"></i> Xem đánh giá kết quả thực
                        tập
                    </button>
                </div>
            </div>
        </div>
        <AssessResult />
    </div>
</template>

<script>
import AssessResult from "../StudentTraining/AssessResult.vue";
export default {
    name: "InforStudentTraining",
    components: { AssessResult },
};
</script>

<style></style>
