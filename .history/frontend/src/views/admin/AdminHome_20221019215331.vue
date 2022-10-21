<template>
  <div class="admin-home">
    <TitleStructure :title="`Tổng quan`" class="col-12"></TitleStructure>
    <DashBoard></DashBoard>
    <LineChartAccount></LineChartAccount>
  </div>
</template>

<script>

import DashBoard from '@/components/Admin/DashBoard/DashBoard.vue';
import LineChartAccount from '../../components/Admin/DashBoard/LineChartAccount.vue';
import TitleStructure from '@/components/GlobalComponent/TitleStructure.vue';
export default {
    name: "AdminHome",
    components: { DashBoard, LineChartAccount, TitleStructure },
}
</script>

<style>

</style>