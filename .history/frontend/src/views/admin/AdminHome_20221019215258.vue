<template>
  <div class="admin-home">
    <TitleStructure :title="`Tổng quan`" class="col-12"></TitleStructure>
    <DashBoard></DashBoard>
    <LineChartAccount></LineChartAccount>
  </div>
</template>

<script>
import TitleStructure from '@/components/GlobalComponent/TitleStructure.vue';
import DashBoard from '@/components/Admin/DashBoard/DashBoard.vue';
import LineChartAccount from '../../components/Admin/DashBoard/LineChartAccount.vue';
export default {
    name: "AdminHome",
    components: { TitleStructure, DashBoard, LineChartAccount },
}
</script>

<style>

</style>