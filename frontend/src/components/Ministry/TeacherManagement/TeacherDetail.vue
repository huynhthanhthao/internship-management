<template>
    <div class="teacher-detail">
        <div
            class="information-detail position-relative border rounded-2 ms-2 py-4 row col-12 animate__fadeIn animate__animated"
        >
            <div
                class="col-5 d-flex justify-content-center"
                style="height: 180px; width: 200px"
            >
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2883/2883939.png"
                    alt=""
                    style="height: 100%; width: 100%"
                />
            </div>
            <div class="col-7 flex-grow-1">
                <div class="col-12 my-1">
                    <strong>Họ tên cán bộ: </strong> Huỳnh Thanh Thảo
                </div>
                <div class="col-12 my-1">
                    <strong>Email: </strong> thaoB1906758@student.ctu.edu.vn
                </div>
                <div class="col-12 my-1">
                    <strong>Điện thoại: </strong> 0939 105 554
                </div>
                <div class="col-12 my-1">
                    <strong>Quản lý lớp: </strong> DI1996A3
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "TeacherDetail",
};
</script>

<style></style>
