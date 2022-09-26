<template>
    <div class="student-list">
        <TeacherStudentItem :id="`1`"/>
        <TeacherStudentItem :id="`2`"/>
    </div>
</template>

<script>
import TeacherStudentItem from './TeacherStudentItem.vue';
export default {
    name: "TeacherListStudent",
    computed: {},
    components: { TeacherStudentItem }
}
</script>

<style>

</style>