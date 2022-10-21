<template>
  <div class="admin-home">
    <TitleStructure :title="`Tổng quan`" class="col-12"></TitleStructure>
    <DashBoard></DashBoard>
  </div>
</template>

<script>
import HomePage from '../../components/GlobalComponent/HomePage.vue';
import TitleStructure from '@/components/GlobalComponent/TitleStructure.vue';
import DashBoard from '@/components/Admin/DashBoard.vue';
export default {
    name: "AdminHome",
    components: { HomePage, TitleStructure, DashBoard },
    data(){
        return{
            name: "Admin"
        }
    }
}
</script>

<style>

</style>