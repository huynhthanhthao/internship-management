<template>
    <div class="student-lists">
        <StudentItem :id="`1`"/>
        <StudentItem :id="`2`"/>
        <StudentItem :id="`3`"/>
        <StudentItem :id="`4`"/>
        <StudentItem :id="`5`"/>
    </div>
</template>

<script>
import StudentItem from './StudentItem.vue';
export default {
    name: "StudentList",
    components: { StudentItem }
}
</script>

<style scoped>

</style>