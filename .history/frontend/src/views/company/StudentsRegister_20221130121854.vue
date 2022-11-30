<template>
    <div>
        <div
            class="students-register row p-4 animate__fadeIn animate__animated"
        >
            <div class="col-12">
                <div class="d-flex">
                    <h2
                        class="header-list label m-0 p-2 pt-4 fw-bold col-6"
                        style="color: #555555"
                    >
                        Sinh viên đăng ký
                        <div class="line my-3"></div>
                    </h2>
                    <h2
                        class="header-list label m-0 p-2 pt-4 fw-bold col-6"
                        style="color: #555555"
                    >
                        Thông tin chi tiết
                        <div class="line my-3"></div>
                    </h2>
                </div>
            </div>
            <div
                class="accordion col-6"
                style="height: 500px; overflow-y: scroll"
            >
                <ItemStudent
                    v-for="(student, index) in studentList"
                    :key="index"
                    class="mb-2"
                    :student="student"
                    :index="index"
                />
            </div>
            <div class="col-6">
                <InformationDetail v-if="isShowDetail" />
                <Statistics v-else />
            </div>
        </div>
        <Modal id="ModalRefuse" message="Bạn có chắc muốn xóa ứng viên này?"
            ><button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
            >
                Đóng
            </button>

            <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                @click="
                    handleRefuse(student.id);
                    closeDetail();
                "
            >
                Xác nhận
            </button>
        </Modal>

        <Modal
            id="ModalAccept"
            message="Bạn có chắc muốn xác nhận ứng viên này?"
            ><button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
            >
                Đóng
            </button>
            <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                @click="handleConfirm(student.id)"
            >
                Xác nhận
            </button>
        </Modal>
    </div>
</template>

<script>
import axios from "axios";
import config from "@/config/index.js";
import ItemStudent from "../../components/Company/StudentsRegister/ItemStudent.vue";
import InformationDetail from "../../components/Company/StudentsRegister/InformationDetail.vue";
import Statistics from "../../components/Company/StudentsRegister/Statistics.vue";
import Modal from "@/components/Modal/Modal.vue";

import { mapActions, mapGetters } from "vuex";
export default {
    name: "StudentsRegister",
    components: { ItemStudent, InformationDetail, Statistics, Modal },
    computed: mapGetters({
        isShowDetail: "getShowDetail",
        studentList: "getStudentList",
        account: "getAccount",
        student: "getStudentDetail",
    }),
    methods: {
        ...mapActions(["setAccount"]),
        async handleRefuse(studentId) {
            try {
                const toast = await this.handleDeleteStudent(studentId);

                this.$store.dispatch("setToast", {
                    isSuccess: toast.status,
                    message: toast.message,
                });
            } catch (error) {
                console.log(error);
            }
        },
        async handleConfirm(studentId) {
            const token = localStorage.getItem("token");
            try {
                const res = await axios.post(
                    `${config.domain}/company/confirm/`,
                    { studentId, companyId: this.account.id },
                    {
                        headers: { Authorization: "Bearer " + token },
                    }
                );

                await this.handleRefuse(studentId);

                if (res.data.status) {
                    this.$store.dispatch("setToast", {
                        isSuccess: res.data.status,
                        message: res.data.message,
                    });
                }
            } catch (error) {
                console.log(error);
            }
        },
        async handleDeleteStudent(studentId) {
            const token = localStorage.getItem("token");
            try {
                const res = await axios.delete(
                    `${config.domain}/company/refuse-register/`,
                    {
                        headers: { Authorization: "Bearer " + token },

                        data: {
                            studentId,
                            companyId: this.account.id,
                        },
                    }
                );

                if (res.data.status) {
                    this.$store.commit("DELETE_STUDENT", this.student.id);
                }

                return { status: res.data.status, message: res.data.message };
            } catch (error) {
                console.log(error);
            }
        },
    },
    async created() {
        this.$store.commit("CLOSE_DETAIL");

        const token = localStorage.getItem("token");
        await this.setAccount();

        const res = await axios.get(
            `${config.domain}/company/get-students-register/`,
            {
                params: {
                    companyId: this.account.id,
                },
                headers: { Authorization: "Bearer " + token },
            }
        );
        this.$store.commit("SET_STUDENT_LIST", res.data.result);
    },
};
</script>

<style>
.line {
    border-bottom: 3px solid #1c57a5;
    width: 100px;
}
</style>
