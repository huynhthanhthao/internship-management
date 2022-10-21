<template>
    <div class="view p-4 animate__animated animate__fadeIn">
        <div class="infor">
            <ViewListStructure :title="title"/>
            <div class="col-12 d-flex">
                <InforStudent />
                <InforCompany />
            </div>
        </div>
        <InforInternship/>
    </div>
</template>

<script>
import InforGeneral from '@/components/Teacher/ProgressAssess/InforGeneral.vue';
import InforInternship from '@/components/Teacher/ProgressAssess/InforInternship.vue';
import ViewListStructure from '@/components/GlobalComponent/ViewListStructure.vue';
export default {
    name: "TeacherView",
    data(){
        return {
            title: {
                headerTitle: "Thông tin sinh viên",
                headerDetail: "Thông tin đơn vị thực tập"
            }
        }
    },
    components: { InforGeneral, InforInternship, ViewListStructure },
}
</script>

<style scoped>
.table-progress {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>