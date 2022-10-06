<template>
    <div class="detail-task">
        <InforStudentTraining />
        <TasksList />
    </div>
</template>

<script>
import InforStudentTraining from "../../components/Company/StudentTraining/InforStudentTraining.vue";
import TasksList from "../../components/Company/StudentTraining/TasksList.vue";

export default {
    name: "TaskDetail",
    components: { InforStudentTraining, TasksList },
};
</script>

<style></style>
