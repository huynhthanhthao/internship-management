<template>
  <div class="admin-home">
    <TitleStructure :title="`Tổng quan`" class="col-12"></TitleStructure>
    <DashBoard></DashBoard>
  </div>
</template>

<script>
import TitleStructure from '@/components/GlobalComponent/TitleStructure.vue';
import DashBoard from '@/components/Admin/DashBoard.vue';
export default {
    name: "AdminHome",
    components: { TitleStructure, DashBoard },
}
</script>

<style>

</style>