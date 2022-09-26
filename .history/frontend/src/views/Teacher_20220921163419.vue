<template>
    <div class="teacher w-100 h-100 row m-0 p-0">
        <Header/>
        <TeacherInfor/>
        <TeacherUpdate/>
    </div>
</template>

<script>

import TeacherUpdate from '@/components/Teacher/TeacherUpdate.vue';
import TeacherInfor from '@/components/Teacher/TeacherInfor.vue';
import Header from "../components/Header/Header.vue"
export default {
    name: "TeacherComponent",
    components: { TeacherUpdate, TeacherInfor , Header}
};
</script>

<style>
</style>
