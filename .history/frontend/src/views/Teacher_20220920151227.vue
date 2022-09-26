<template>
    <div class="teacher row m-0 p-0 position-relative">
        <TeacherInfor/>
        <TeacherUpdate/>
    </div>
</template>

<script>

import TeacherUpdate from '@/components/Teacher/TeacherUpdate.vue';
import TeacherInfor from '@/components/Teacher/TeacherInfor.vue';
export default {
    name: "TeacherComponent",
    components: { TeacherUpdate, TeacherInfor }
};
</script>

<style>
    .teacher {
        width: 100%;
        height: 100%;
    }
</style>
