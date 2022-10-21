<template>
  <ViewListStructure :title="title"></ViewListStructure>
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