<template>
    <div class="training-detail">
        <div class="training-detail-student">
            <div
                class="information-detail position-relative border rounded-2 p-3 py-4 row col-12 animate__fadeIn animate__animated"
            >
                <button
                    type="button"
                    class="btn-close position-absolute"
                    aria-label="Close"
                    @click="closeDetail"
                ></button>
                <div
                    class="col-5 d-flex justify-content-center"
                    style="min-height: 180px; width: 200px"
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
                        <strong>Vị trí thực tập: </strong>
                        Frontend Fresher
                    </div>
                    <div class="col-12 my-1">
                        <strong>Tiến độ: </strong>
                        <div class="progress w-100 mt-2">
                            <div class="complete bg-success"></div>
                        </div>
                    </div>
                </div>
                <div class="col-12 d-flex justify-content-around">
                    <router-link
                        to="/company/detail-task"
                        class="btn btn-outline-secondary d-flex align-items-center"
                    >
                        Quản lý công việc
                    </router-link>
                </div>
            </div>
            <div class="col-12"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TrainingDetail",
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

.complete {
    width: 20%;
}
</style>
