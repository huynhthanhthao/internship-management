<template>
    <div class="teacher row m-0 p-0 position-relative">
        <TeacherInfor/>
        <TeacherUpdate/>
    </div>
</template>

<script>
import TeacherInfor from '@/components/Teacher/TeacherInfor.vue';
import TeacherUpdate from '@/components/Teacher/TeacherUpdate.vue';
export default {
    name: "TeacherComponent",
    components: { TeacherInfor, TeacherUpdate }
};
</script>

<style>
    .teacher {
        width: 100%;
        height: 100%;
    }
</style>
