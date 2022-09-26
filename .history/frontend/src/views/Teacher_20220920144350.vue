<template>
    <div class="teacher row m-0 p-0 position-relative">
        <TeacherUpdate/>
    </div>
</template>

<script>

import TeacherUpdate from '@/components/Teacher/TeacherUpdate.vue';
export default {
    name: "TeacherComponent",
    components: {TeacherUpdate }
};
</script>

<style>
    .teacher {
        width: 100%;
        height: 100%;
    }
</style>
