<template>
    <div class="accordion">
        <div class="accordion-item">
            <h2 class="accordion-header" :id="`flush-heading${index}`">
                <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#flush-collapse${index}`"
                    aria-expanded="false"
                    :aria-controls="`flush-collapse${index}`"
                >
                    <img
                        :src="student.urlAvatar"
                        alt=""
                        class="me-2 rounded-circle"
                        style="width: 30px; height: 30px"
                    />{{ student.name }}
                </button>
            </h2>
            <div
                :id="`flush-collapse${index}`"
                class="accordion-collapse collapse"
                :aria-labelledby="`flush-heading${index}`"
                data-bs-parent="#accordionFlushExample"
            >
                <div class="accordion-body row">
                    <div class="col-6">
                        <strong>Họ và tên: </strong> {{ student.name }}
                    </div>

                    <div class="col-6">
                        <strong>Điện thoại: </strong> {{ student.phoneNumber }}
                    </div>
                    <div class="col-12 mt-2">
                        <strong>Email: </strong> {{ student.email }}
                    </div>
                    <div class="col-12 d-flex justify-content-center mt-2">
                        <button
                            type="button"
                            class="btn btn-outline-secondary p-2"
                            style="font-size: 15px"
                            @click="handleTrainingDetail"
                        >
                            Xem chi tiết
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import config from "@/config/index.js";
import { mapGetters, mapMutations } from "vuex";

export default {
    name: "RegisterList",
    methods: {
        ...mapMutations({
            showDetail: "SHOW_DETAIL",
        }),
        async handleTrainingDetail() {
            const token = localStorage.getItem("token");
            this.showDetail();

            const res = await axios.get(
                `${config.domain}/company/get-infor-training`,
                {
                    params: {
                        studentId: this.student.id,
                    },
                    headers: { Authorization: "Bearer " + token },
                }
            );
            this.$store.commit("SET_STUDENT_TRAINING_DETAIL", {
                ...res.data.result,
                progress: this.progressCaculate(res.data.result.tasks),
            });
        },
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
    props: ["student", "index"],
    computed: mapGetters({ account: "getAccount" }),
};
</script>

<style></style>
