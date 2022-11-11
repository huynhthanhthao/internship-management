<template>
    <div>
        <TeacherDetail />
        <StudentsList />
    </div>
</template>

<script>
import TeacherDetail from "../../components/Ministry/TeacherManagement/TeacherDetail.vue";
import StudentsList from "../../components/Ministry/StudentsManagement/StudentsList.vue";
export default {
    name: "StudentManagement",
    components: { TeacherDetail, StudentsList },
};
</script>

<style></style>
