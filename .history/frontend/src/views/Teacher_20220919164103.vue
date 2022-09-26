<template>
    <div class="teacher row">
        <TeacherInfor />
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
        width: 100%
        height: 100%
    }
</style>
