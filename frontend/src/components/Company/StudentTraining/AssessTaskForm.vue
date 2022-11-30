<template>
    <!-- Modal -->
    <div
        class="modal fade"
        id="ModalAssessTask"
        tabindex="-1"
        aria-labelledby="ModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fw-bold fs-3" id="ModalLabel">
                        Đánh giá công việc
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
                            <label class="form-label"
                                ><strong>Tên công việc: </strong>
                            </label>
                            <div>{{ task.title }}</div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label"
                                ><strong>Thời gian: </strong>
                            </label>
                            <div>
                                {{
                                    new Date(task.time).toLocaleDateString(
                                        "en-GB"
                                    )
                                }}
                            </div>
                        </div>
                        <div class="mb-3">
                            <strong>Trạng thái: </strong>
                            <div class="input-group mt-2">
                                <div class="check-group me-3">
                                    <input
                                        type="radio"
                                        id="finished"
                                        name="status_result"
                                        class="me-2"
                                        :value="true"
                                        v-model="task.status"
                                        :selected="task.status"
                                    />
                                    <label for="finished"> Hoàn thành</label>
                                </div>
                                <div class="check-group">
                                    <input
                                        type="radio"
                                        id="unfinished"
                                        name="status_result"
                                        class="me-2"
                                        :value="false"
                                        v-model="task.status"
                                    />
                                    <label for="unfinished">
                                        Chưa hoàn thành</label
                                    >
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="AssessTask" class="form-label"
                                ><strong>Đánh giá:</strong>
                            </label>
                            <textarea
                                type="text"
                                class="form-control"
                                id="AssessTask"
                                placeholder="Viết đánh giá..."
                                v-model="task.message"
                            ></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Hủy
                    </button>
                    <button
                        data-bs-dismiss="modal"
                        type="button"
                        class="btn btn-primary"
                        @click="handleAssessTask"
                        :disabled="!task.message"
                    >
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "AssessTaskForm",
    computed: {
        ...mapGetters({ task: "getTaskCurrent" }),
    },
    methods: {
        handleAssessTask() {
            this.$store.dispatch("assessTask", {
                taskId: this.task._id,
                status: this.task.status,
                message: this.task.message,
            });
        },
    },
};
</script>

<style></style>
