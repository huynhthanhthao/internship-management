<template>
<div class="mange-general">
    <div class="infor-general border-bottom">
        <div class="infor-general__header col-12 d-flex">
            <div class="infor-general__title col-6 me-4">
                <h2 class="header-list label m-0 p-2 pt-2 fw-bold" style="color: #555555">
                    Thông tin sinh viên
                </h2>
                <div class="line my-3"></div>
            </div>
            <div class="infor-general__title col-6">
                <h2 class="header-list label m-0 p-2 pt-2 fw-bold" style="color: #555555">
                    Thông tin đơn vị thực tập
                </h2>
                <div class="line my-3"></div>
            </div>
        </div>
        <div class="col-12 d-flex">
            <InforStudent />
            <InforCompany />
        </div>
    </div>
</div>
</template>

<script>
import InforStudent from './InforStudent.vue';
import InforCompany from './InforCompany.vue';
export default {
    name: "InforGeneral",
    components:{InforCompany, InforStudent}
}
</script>

<style scoped>

</style>