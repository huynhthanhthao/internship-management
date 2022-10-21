<template>
    <div class="view p-4 animate__animated animate__fadeIn">
        <div class="infor">
            <ViewListStructure :title="title"/>
            <div class="col-12 d-flex">
                <InforStudent/>
                <InforCompany/>
            </div>
        </div>
        <InforInternship/>
    </div>
</template>

<script>

import InforInternship from '@/components/Teacher/ProgressAssess/InforInternship.vue';
import ViewListStructure from '@/components/GlobalComponent/ViewListStructure.vue';
import InforStudent from '@/components/Teacher/ProgressAssess/InforStudent.vue';
import InforCompany from '@/components/Teacher/ProgressAssess/InforCompany.vue';
export default {
    name: "TeacherView",
    data(){
        return {
            title: {
                headerList: "Thông tin sinh viên",
                headerDetail: "Thông tin đơn vị thực tập"
            }
        }
    },
    components: { InforInternship, ViewListStructure, InforStudent, InforCompany },
}
</script>

<style scoped>
.table-progress {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>