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
        <table class="table table-striped">
            <thead>
                <tr class="text-center">
                    <th scope="col">Tuần</th>
                    <th scope="col">Tên công việc</th>
                    <th scope="col ">Ngày hoàn thành</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Đánh giá</th>
                    <th scope="col">Tùy chọn</th>
                </tr>
            </thead>
            <tbody class="text-center">
                <tr v-for="(task, index) in taskList" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td class="col-3 text-start">{{ task.title }}</td>
                    <td class="text-center">
                        {{ new Date(task.time).toLocaleDateString("en-GB") }}
                    </td>

                    <td class="col-2">
                        {{ task.status ? "Đã hoàn thành" : "Chưa hoàn thành" }}
                    </td>
                    <td v-if="task.message" class="col-3 text-start">
                        {{ task.message }}
                    </td>
                    <td v-else class="col-3">
                        <div class="bg-warning rounded-2" style="width: 150px">
                            Chưa có đánh giá
                        </div>
                    </td>

                    <td class="">
                        <button
                            type="button"
                            class="btn text-warning"
                            data-bs-toggle="modal"
                            data-bs-target="#ModalAssessTask"
                            @click="setTaskCurrent(task)"
                        >
                            <i class="bi bi-pencil-square fs-5"></i>
                        </button>
                        <button class="btn" @click="deleteTask(task._id)">
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
                <i class="bi bi-plus-circle-fill"></i> Thêm công việc
            </button>
        </div>
        <AssessTaskForm />
        <AddTaskForm />
    </div>
</template>

<script>
import AssessTaskForm from "../StudentTraining/AssessTaskForm.vue";
import AddTaskForm from "../StudentTraining/AddTaskForm.vue";
import { mapGetters } from "vuex";

export default {
    name: "TaskList",
    components: { AssessTaskForm, AddTaskForm },
    async created() {
        try {
            const studentId = this.$route.params.studentId;

            await this.$store.dispatch("setTaskList", studentId);
        } catch (error) {
            console.log(error);
        }
    },
    computed: { ...mapGetters({ taskList: "getTaskList" }) },
    methods: {
        deleteTask(taskId) {
            this.$store.dispatch("deleteTask", taskId);
        },
        setTaskCurrent(task) {
            this.$store.commit("SET_TASK_CURRENT", task);
        },
    },
};
</script>

<style scoped>
.btn:hover {
    opacity: 0.8;
}
</style>
