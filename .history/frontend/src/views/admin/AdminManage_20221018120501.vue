<template>
  <div class="admin-manage">
    <ViewListStructure :title="title"></ViewListStructure>
    
  </div>
</template>

<script>
import ViewListStructure from '@/components/GlobalComponent/ViewListStructure.vue';
export default {
    name: "AdminManage",
    components: { ViewListStructure },
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