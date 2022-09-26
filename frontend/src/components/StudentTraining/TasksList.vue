<template>
    <div>
        <div class="task-list">
            <h4
                class="header-list m-0 p-2 pt-3 fw-bold col-6"
                style="color: #555555"
            >
                Danh sách công việc
                <div class="line my-3"></div>
            </h4>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên công việc</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Đánh giá</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Code component login</td>
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
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Code component login</td>
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
                </tr>
            </tbody>
        </table>
        <AssessTaskForm />
    </div>
</template>

<script>
import AssessTaskForm from "../../components/StudentTraining/AssessTaskForm.vue";

export default {
    name: "TaskList",
    components: { AssessTaskForm },
};
</script>

<style>
td:last-child {
    width: 35%;
}
</style>
