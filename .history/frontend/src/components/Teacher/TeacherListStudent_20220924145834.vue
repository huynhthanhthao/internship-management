<template>
    <div class="student-list">
        <TeacherStudentItem :id="TST1"/>
        <TeacherStudentItem :id="TST2"/>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import TeacherStudentItem from './TeacherStudentItem.vue';
export default {
    name: "TeacherListStudent",
    computed: {},
    methods: {
        ...mapMutations({
            showDetail: "SHOW_DETAIL_STUDENT",
            closeDetail: "CLOSE_DETAIL_STUDENT"
        }),
    },
    components: { TeacherStudentItem }
}
</script>

<style>

</style>