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
                    :aria-controls="`flush - collapse${index}`"
                >
                    <img
                        :src="teacher.urlAvatar"
                        alt=""
                        class="me-2 rounded-circle"
                        style="width: 35px; height: 35px"
                    />{{ teacher.name }}
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
                        <strong>Họ và tên: </strong> {{ teacher.name }}
                    </div>
                    <div class="col-6">
                        <strong>Email: </strong> {{ teacher.email }}
                    </div>
                    <div class="col-6">
                        <strong>Điện thoại: </strong> {{ teacher.phoneNumber }}
                    </div>
                    <div class="col-12 d-flex justify-content-center mt-2">
                        <button
                            type="button"
                            class="btn btn-outline-secondary p-2"
                            style="font-size: 15px"
                            @click="handleViewDetail"
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
import { mapMutations } from "vuex";

export default {
    name: "TeacherItem",
    methods: {
        ...mapMutations({
            showDetail: "SHOW_DETAIL",
        }),
        handleViewDetail() {
            this.showDetail();
            this.$store.commit("SET_TEACHER_DETAIL", this.teacher);
        },
    },
    props: ["teacher", "index"],
};
</script>

<style></style>
