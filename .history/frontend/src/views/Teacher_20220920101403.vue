<template>
    <div class="teacher row m-0 p-0 position-relative">
        <TeacherInfor/>
        <h1>Ok</h1>
    </div>
</template>

<script>
import TeacherInfor from '@/components/Teacher/TeacherInfor.vue';
export default {
    name: "TeacherComponent",
    components: { TeacherInfor }
};
</script>

<style>
    .teacher {
        width: 100%;
        height: 100%;
    }
</style>
