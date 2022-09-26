<template>
    <div class="teacher row m-0 p-0">
        <TeacherInfor />
        TeacherMa
    </div>
</template>

<script>
import TeacherInfor from '@/components/Teacher/TeacherInfor.vue';
import TeacherManage from '@/components/Teacher/TeacherManage.vue';
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
