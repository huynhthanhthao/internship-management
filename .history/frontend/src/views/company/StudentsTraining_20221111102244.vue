<template>
    <div>
        <div
            class="students-register row p-4 animate__fadeIn animate__animated position-relative"
        >
            <div class="col-12">
                <div class="d-flex">
                    <h2
                        class="header-list label m-0 p-2 pt-4 fw-bold col-6"
                        style="color: #555555"
                    >
                        Danh sách sinh viên
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
                    v-for="(student, index) in studentTraining"
                    :key="index"
                    class="mb-2"
                    :student="student"
                    :index="index"
                />
            </div>
            <div class="col-6">
                <TrainingDetail v-if="isShowDetail" />
                <Statistics v-else />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import config from "@/config/index.js";
import ItemStudent from "../../components/Company/StudentTraining/ItemStudent.vue";
import TrainingDetail from "../../components/Company/StudentTraining/TrainingDetail.vue";
import Statistics from "../../components/Company/StudentTraining/Statistics.vue";
import { mapActions, mapGetters } from "vuex";
export default {
    name: "StudentsTraining",
    components: { TrainingDetail, Statistics, ItemStudent },

    computed: mapGetters({
        isShowDetail: "getShowDetail",
        studentTraining: "getStudentTraining",
        account: "getAccount",
    }),

    async created() {
        const token = localStorage.getItem("token");
        await this.setAccount();

        const res = await axios.get(
            `${config.domain}/company/get-students-training/`,
            {
                params: {
                    companyId: this.account.id,
                },
                headers: { Authorization: "Bearer " + token },
            }
        );
        this.$store.commit("SET_STUDENT_TRAINING", res.data.result);
    },
    methods: {
        ...mapActions(["setAccount"]),
    },
};
</script>

<style></style>
