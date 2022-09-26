<template>
    <!-- Modal -->
    <div
        class="modal fade"
        id="ModalAssessTask"
        tabindex="-1"
        aria-labelledby="ModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fw-bold" id="ModalLabel">
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
                                ><strong>Tên công việc: </strong> Học ngôn ngữ
                                Python</label
                            >
                        </div>

                        <div class="mb-3">
                            <label for="AssessTask" class="form-label"
                                ><strong>Đánh giá:</strong>
                            </label>
                            <textarea
                                type="text"
                                class="form-control"
                                id="AssessTask"
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
                    <button type="button" class="btn btn-primary">
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AssessTaskForm",
};
</script>

<style></style>
