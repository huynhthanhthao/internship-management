<template>
    <div class="training-detail">
        <div class="training-detail-student">
            <div class="col-12 row p-3 align-items-center border rounded-2">
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
                <div class="col-7 flex-grow-1" style="min-height: 200px">
                    <div class="col-12 my-1">
                        <strong>MSSV: </strong> {{ student.username }}
                    </div>
                    <div class="col-12 my-1">
                        <strong>Họ và tên: </strong> {{ student.name }}
                    </div>
                    <div class="col-12 my-1">
                        <strong>Email: </strong>
                        {{ student.email }}
                    </div>

                    <div class="col-12 my-1">
                        <strong>Tiến độ: </strong>

                        <div class="progress w-100 my-3">
                            <div
                                :class="
                                    progress
                                        ? ' bg-success text-light d-flex justify-content-center align-items-center'
                                        : ' d-flex justify-content-center align-items-center'
                                "
                                :style="`width: ${progress || 100}%`"
                            >
                                {{ `${progress ? progress.toFixed() : 0}%` }}
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        class="btn btn-outline-warning me-3"
                        data-bs-toggle="modal"
                        data-bs-target="#AssessResultModal"
                    >
                        <i class="bi bi-pencil-square"></i> Đánh giá kết quả
                        thực tập
                    </button>
                </div>
            </div>
        </div>
        <AssessResult />
    </div>
</template>

<script>
import axios from "axios";
import config from "@/config/index.js";
import { mapGetters } from "vuex";
import AssessResult from "../StudentTraining/AssessResult.vue";
export default {
    name: "InforStudentTraining",
    components: { AssessResult },

    computed: {
        ...mapGetters({
            student: "getStudentTrainingDetail",
            taskList: "getTaskList",
        }),
        progress() {
            let completed = 0;
            for (let i = 0; i < this.taskList.length; i++) {
                if (this.taskList[i].status) {
                    completed++;
                }
            }

            return (completed / this.taskList.length) * 100;
        },
    },
    async created() {
        try {
            const token = localStorage.getItem("token");
            const studentId = this.$route.params.studentId;
            const res = await axios.get(
                `${config.domain}/company/get-infor-training`,
                {
                    params: {
                        studentId,
                    },
                    headers: { Authorization: "Bearer " + token },
                }
            );
            this.$store.commit("SET_STUDENT_TRAINING_DETAIL", {
                ...res.data.result,
                progress: this.progressCaculate(res.data.result.tasks),
            });
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        progressCaculate(tasks) {
            let completed = 0;
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].status) {
                    completed++;
                }
            }

            return (completed / tasks.length) * 100;
        },
    },
};
</script>

<style></style>
