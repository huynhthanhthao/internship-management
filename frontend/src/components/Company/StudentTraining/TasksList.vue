<template>
    <div class="">
        <div class="task-list">
            <h4
                class="header-list m-0 p-2 pt-3 fw-bold col-6"
                style="color: #555555"
            >
                Danh sách công việc
                <div class="line my-3"></div>
            </h4>
        </div>
        <table class="table table-striped text-center">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên công việc</th>
                    <th scope="col">Thời gian</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Đánh giá</th>
                    <th scope="col">Tùy chọn</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Code component login</td>
                    <td>3 giờ</td>

                    <td>Đã hoàn thành</td>
                    <td v-if="assessed">
                        @mdod @mdod @mdod @mdod @mdod @mdod @mdod @mdod @mdod
                        @mdod @mdod @mdod @mdod @mdod @mdod @mdod @mdod @mdod
                    </td>
                    <td>
                        <button
                            type="button"
                            class="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#ModalAssessTask"
                        >
                            <i class="bi bi-pencil-fill"></i> Viết đánh giá
                        </button>
                    </td>
                    <td>
                        <button class="btn">
                            <i class="bi bi-archive-fill text-danger fs-5"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Code component login</td>
                    <td>3 giờ</td>

                    <td>Đã hoàn thành</td>
                    <td v-if="assessed">
                        @mdod @mdod @mdod @mdod @mdod @mdod @mdod @mdod @mdod
                        @mdod @mdod @mdod @mdod @mdod @mdod @mdod @mdod @mdod
                    </td>
                    <td>
                        <button
                            type="button"
                            class="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#ModalAssessTask"
                        >
                            <i class="bi bi-pencil-fill"></i> Viết đánh giá
                        </button>
                    </td>
                    <td>
                        <button class="btn">
                            <i class="bi bi-archive-fill text-danger fs-5"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="w-100 option d-flex justify-content-center">
            <button
                type="button"
                class="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#AddTaskModal"
            >
                <i class="bi bi-plus-circle-fill"></i> Thêm
            </button>
        </div>
        <AssessTaskForm />
        <AddTaskForm />
    </div>
</template>

<script>
import AssessTaskForm from "../StudentTraining/AssessTaskForm.vue";
import AddTaskForm from "../StudentTraining/AddTaskForm.vue";

export default {
    name: "TaskList",
    components: { AssessTaskForm, AddTaskForm },
};
</script>

<style></style>
