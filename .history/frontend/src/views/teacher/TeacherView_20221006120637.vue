<template>
    <div class="view p-4 animate__animated animate__fadeIn">
        <InforGeneral/>
        <ManageInternship/>
    </div>
</template>

<script>
import InforGeneral from '@/components/Teacher/ProgressAssess/InforGeneral.vue';
import ManageInternship from '@/components/Teacher/ProgressAssess/ManageInternship.vue';
export default {
    name: "TeacherView",
    components: { InforGeneral, ManageInternship },
}
</script>

<style scoped>
.table-progress {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>