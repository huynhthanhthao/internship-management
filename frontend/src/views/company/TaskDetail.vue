<template>
    <div class="detail-task">
        <InforStudentTraining />
        <TasksList />
    </div>
</template>

<script>
import InforStudentTraining from "../../components/StudentTraining/InforStudentTraining.vue";
import TasksList from "../../components/StudentTraining/TasksList.vue";

export default {
    name: "TaskDetail",
    components: { InforStudentTraining, TasksList },
};
</script>

<style></style>
