<template>
    <div>
        <TeacherDetail />
        <StudentsList />
    </div>
</template>

<script>
import TeacherDetail from "../../components/Admin/TeacherManagement/TeacherDetail.vue";
import StudentsList from "../../components/Admin/StudentsManagement/StudentsList.vue";
export default {
    name: "StudentManagement",
    components: { TeacherDetail, StudentsList },
};
</script>

<style></style>
