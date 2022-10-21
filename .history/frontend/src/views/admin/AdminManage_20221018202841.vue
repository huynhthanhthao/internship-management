<template>
  <div class="admin-manage">
    <TitleStructure :title="`Tổng quan`" class="col-12"></TitleStructure>
    <DashBoard></DashBoard>
  </div>
</template>

<script>
import TitleStructure from '@/components/GlobalComponent/TitleStructure.vue';
import DashBoard from '@/components/Admin/DashBoard.vue';
export default {
    name: "AdminManage",
    components: { TitleStructure, DashBoard },
}
</script>

<style>

</style>