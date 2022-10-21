<template>
  <div class="admin-manage">
    <div class="col-12 d-flex">
      <TitleStructure :title="`Danh sách tài khoản`" class="col-6"></TitleStructure>
      <TitleStructure :title="`Tổng quan`" class="col-6"></TitleStructure>
    </div>
  </div>
</template>

<script>
import TitleStructure from '@/components/GlobalComponent/TitleStructure.vue';
export default {
    name: "AdminManage",
    components: { TitleStructure },
    data(){
        return{
            title: {
                headerList: "Danh sách tài khoản",
                headerDetail: "Tổng quan"
            }
        }
    }
}
</script>

<style>

</style>