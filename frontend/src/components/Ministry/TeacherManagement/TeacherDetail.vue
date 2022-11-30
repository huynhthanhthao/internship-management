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
                    :src="teacher.urlAvatar"
                    alt=""
                    style="height: 100%; width: 100%"
                    class="rounded-circle"
                />
            </div>
            <div class="col-7 flex-grow-1">
                <div class="col-12 my-1">
                    <strong>Họ tên giảng viên: </strong> {{ teacher.name }}
                </div>
                <div class="col-12 my-1">
                    <strong>Mã số giảng viên: </strong> {{ teacher.username }}
                </div>
                <div class="col-12 my-1">
                    <strong>Email: </strong> {{ teacher.email }}
                </div>
                <div class="col-12 my-1">
                    <strong>Điện thoại: </strong> {{ teacher.phoneNumber }}
                </div>
                <div class="col-12 my-1">
                    <strong>Quản lý lớp: </strong><br />
                    <span
                        v-for="(item, index) in teacher.classesManagement"
                        :key="index"
                        >{{ item.className }} - HK{{ item.semester }} -
                        {{ item.schoolYear }} <br
                    /></span>
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "TeacherDetail",
    computed: mapGetters({ teacher: "getTeacherDetail" }),
};
</script>

<style></style>
