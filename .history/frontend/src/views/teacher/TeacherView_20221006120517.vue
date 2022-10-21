<template>
    <div class="view p-4 animate__animated animate__fadeIn">
        <InforGeneral/>
        
    </div>
</template>

<script>
import InforGeneral from '@/components/Teacher/ProgressAssess/InforGeneral.vue';
export default {
    name: "TeacherView",
    components: { InforGeneral },
}
</script>

<style scoped>
.table-progress {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>