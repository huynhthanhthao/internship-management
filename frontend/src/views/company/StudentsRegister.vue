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

        <Modal id="ModalRefuse"
            ><button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
            >
                account
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
        </Modal>

        <Modal id="ModalAccept"
            ><button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
            >
                Close2
            </button>
            <button type="button" class="btn btn-primary">Save changes2</button>
        </Modal>
    </div>
</template>

<script>
import axios from "axios";
import config from "@/config/index.js";
import ItemStudent from "../../components/Company/StudentsRegister/ItemStudent.vue";
import InformationDetail from "../../components/Company/StudentsRegister/InformationDetail.vue";
import Statistics from "../../components/Company/StudentsRegister/Statistics.vue";
import Modal from "../../components/Modal/Modal.vue";

import { mapGetters } from "vuex";
export default {
    name: "StudentsRegister",
    components: { ItemStudent, InformationDetail, Statistics, Modal },
    computed: mapGetters({
        isShowDetail: "getShowDetail",
        studentList: "getStudentList",
        account: "getAccount",
    }),
    async created() {
        const token = localStorage.getItem("token");

        // set account store
        if (token) {
            const response = await axios.post(`${config.domain}/get-account`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });

            this.$store.commit("SET_ACCOUNT", response.data.result);
        }

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
