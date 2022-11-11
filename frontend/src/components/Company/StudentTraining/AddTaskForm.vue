<template>
    <div
        class="modal fade"
        id="AddTaskModal"
        tabindex="-1"
        aria-labelledby="ModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fw-bold fs-3" id="ModalLabel">
                        Thêm công việc
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="nameTask" class="form-label"
                                >Tên công việc</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                id="nameTask"
                                v-model="title"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="workTime" class="form-label"
                                >Thời gian hoàn thành</label
                            >

                            <input
                                type="date"
                                id="work-time"
                                name="work-time"
                                class="form-control"
                                v-model="time"
                            />
                            <div id="workTimelHelp" class="form-text">
                                Đây là thời gian trễ nhất mà sinh viên có thể
                                thực hiện công việc này.
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Đóng
                    </button>
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="handleAddTask"
                        data-bs-dismiss="modal"
                        :disabled="!time || !title"
                    >
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddTaskForm",
    data() {
        return { time: "", title: "" };
    },
    methods: {
        handleAddTask() {
            const studentId = this.$route.params.studentId;
            this.$store.dispatch(
                "addTask",

                { studentId, title: this.title, time: this.time }
            );
        },
    },
};
</script>

<style></style>
