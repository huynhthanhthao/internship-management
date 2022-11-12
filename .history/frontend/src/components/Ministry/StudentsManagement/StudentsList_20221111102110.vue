<template>
    <div>
        <div class="student-list d-flex animate__fadeIn animate__animated">
            <div class="header-list m-0 p-2 pt-3 col-6" style="color: #555555">
                <div class="d-flex align-items-center">
                    <h2 class="me-3 fw-bold">
                        Danh sách sinh viên đang quản lý
                    </h2>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4426/4426381.png"
                        alt="Lọc sinh viên"
                        data-bs-toggle="modal"
                        data-bs-target="#StudentFilter"
                        class="filter-icon"
                    />
                </div>

                <div class="line mt-3 mb-2"></div>
            </div>
        </div>

        <table class="table table-striped text-center">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Mã số</th>
                    <th scope="col">Họ và tên</th>
                    <th scope="col">Điện thoại</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>

            <tbody style="overflow-y: scroll">
                <tr v-for="(student, index) in studentList" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ student.username }}</td>
                    <td>{{ student.name }}</td>
                    <td>{{ student.phoneNumber }}</td>
                    <td>{{ student.email }}</td>
                </tr>
            </tbody>
        </table>
        <StudentFilter />
    </div>
</template>

<script>
import StudentFilter from "@/components/StudentFilter/StudentFilter.vue";
import axios from "axios";
import config from "@/config/index.js";
import { mapActions, mapGetters } from "vuex";
export default {
    name: "StudentsList",
    components: { StudentFilter },
    data() {
        return {
            studentList: [],
        };
    },
    computed: mapGetters({ teacher: "getTeacherDetail" }),
    methods: mapActions(["setTeacherDetail"]),
    async created() {
        // get teacherId query
        const teacherId = this.$route.params.teacherId;

        const token = localStorage.getItem("token");

        // set teacher detail
        this.setTeacherDetail(teacherId);

        const res = await axios.get(
            `${config.domain}/ministry/get-student-managed`,
            {
                params: {
                    teacherId,
                },
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );

        this.studentList = res.data.result;
    },
};
</script>

<style></style>
